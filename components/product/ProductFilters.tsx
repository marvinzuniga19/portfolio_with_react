'use client';

import { useState, useEffect } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { brands, categories } from '@/lib/data/products';
import { cn } from '@/lib/utils';

interface ProductFiltersProps {
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  maxPrice: number;
}

export function ProductFilters({
  selectedBrands,
  setSelectedBrands,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  maxPrice,
}: ProductFiltersProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    marca: true,
    categoria: true,
    precio: true,
  });
  const [localPriceRange, setLocalPriceRange] = useState(priceRange);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPriceRange(localPriceRange);
    }, 300);
    return () => clearTimeout(timer);
  }, [localPriceRange, setPriceRange]);

  const toggleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const toggleCategory = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedCategory(null);
    setPriceRange([0, maxPrice]);
    setLocalPriceRange([0, maxPrice]);
  };

  const hasActiveFilters = selectedBrands.length > 0 || selectedCategory || priceRange[0] > 0 || priceRange[1] < maxPrice;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Filtros</h2>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Limpiar filtros
          </button>
        )}
      </div>

      {/* Brand Filter */}
      <div className="space-y-3">
        <button
          onClick={() => toggleSection('marca')}
          className="flex w-full items-center justify-between font-medium"
        >
          Marca
          {expandedSections.marca ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        {expandedSections.marca && (
          <div className="space-y-2">
            {brands.map((brand) => (
              <label
                key={brand}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                  className="rounded border-gray-300"
                />
                <span className="text-sm">{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Category Filter */}
      <div className="space-y-3">
        <button
          onClick={() => toggleSection('categoria')}
          className="flex w-full items-center justify-between font-medium"
        >
          Categoría
          {expandedSections.categoria ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        {expandedSections.categoria && (
          <div className="space-y-2">
            {categories.map((cat) => (
              <label
                key={cat.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedCategory === cat.value}
                  onChange={() => toggleCategory(cat.value)}
                  className="rounded border-gray-300"
                />
                <span className="text-sm">{cat.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="space-y-3">
        <button
          onClick={() => toggleSection('precio')}
          className="flex w-full items-center justify-between font-medium"
        >
          Precio
          {expandedSections.precio ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        {expandedSections.precio && (
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-xs text-muted-foreground">Mín</label>
                <input
                  type="number"
                  value={localPriceRange[0]}
                  onChange={(e) =>
                    setLocalPriceRange([Number(e.target.value), localPriceRange[1]])
                  }
                  className="w-full rounded-md border p-2 text-sm"
                  min={0}
                  max={localPriceRange[1]}
                />
              </div>
              <div className="flex-1">
                <label className="text-xs text-muted-foreground">Máx</label>
                <input
                  type="number"
                  value={localPriceRange[1]}
                  onChange={(e) =>
                    setLocalPriceRange([localPriceRange[0], Number(e.target.value)])
                  }
                  className="w-full rounded-md border p-2 text-sm"
                  min={localPriceRange[0]}
                  max={maxPrice}
                />
              </div>
            </div>
            <input
              type="range"
              min={0}
              max={maxPrice}
              value={localPriceRange[1]}
              onChange={(e) =>
                setLocalPriceRange([localPriceRange[0], Number(e.target.value)])
              }
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0€</span>
              <span>{maxPrice}€</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
