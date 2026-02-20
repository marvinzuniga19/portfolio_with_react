'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '@/lib/data/products';
import { ProductGrid } from '@/components/product/ProductGrid';
import { ProductFilters } from '@/components/product/ProductFilters';
import { SlidersHorizontal, Grid, List } from 'lucide-react';

function ProductsContent() {
  const searchParams = useSearchParams();
  
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1500]);
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name' | 'name-desc'>('name');
  const [showFilters, setShowFilters] = useState(false);

  const maxPrice = useMemo(() => Math.max(...products.map(p => p.price)), []);

  useEffect(() => {
    const brand = searchParams.get('brand');
    const category = searchParams.get('category');
    const onSale = searchParams.get('onSale');

    if (brand) {
      setSelectedBrands([brand]);
    }
    if (category) {
      setSelectedCategory(category);
    }
    if (onSale === 'true') {
      setPriceRange([0, maxPrice]);
    }
  }, [searchParams, maxPrice]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedBrands.length > 0) {
      filtered = filtered.filter(p => selectedBrands.includes(p.brand));
    }

    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    filtered = filtered.filter(
      p => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return filtered;
  }, [selectedBrands, selectedCategory, priceRange, sortBy]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Catálogo de productos</h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} productos encontrados
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden inline-flex items-center gap-2 px-4 py-2 rounded-md border"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filtros
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="h-10 rounded-md border px-3 text-sm"
          >
            <option value="name">Nombre A-Z</option>
            <option value="name-desc">Nombre Z-A</option>
            <option value="price-asc">Precio: menor a mayor</option>
            <option value="price-desc">Precio: mayor a menor</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside
          className={`md:w-64 flex-shrink-0 ${
            showFilters ? 'block' : 'hidden md:block'
          }`}
        >
          <div className="sticky top-24 bg-background p-4 rounded-lg border">
            <ProductFilters
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              maxPrice={maxPrice}
            />
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
