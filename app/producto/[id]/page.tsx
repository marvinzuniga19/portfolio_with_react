'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft, Minus, Plus, ShoppingCart, Heart, Share2, Check, Truck, Shield, RotateCcw } from 'lucide-react';
import { products, Product } from '@/lib/data/products';
import { useCartStore } from '@/lib/store/useCartStore';
import { formatPrice } from '@/lib/utils';
import { ProductCard } from '@/components/product/ProductCard';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
  const { addItem } = useCartStore();

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.brand === product.brand && p.id !== product.id)
    .slice(0, 4);

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-primary transition-colors">
          Inicio
        </Link>
        <ChevronLeft className="h-4 w-4 rotate-90" />
        <Link href="/productos" className="hover:text-primary transition-colors">
          Productos
        </Link>
        <ChevronLeft className="h-4 w-4 rotate-90" />
        <Link
          href={`/productos?brand=${product.brand}`}
          className="hover:text-primary transition-colors"
        >
          {product.brand}
        </Link>
        <ChevronLeft className="h-4 w-4 rotate-90" />
        <span className="text-foreground">{product.name}</span>
      </nav>

      {/* Product Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square rounded-lg overflow-hidden bg-muted">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 transition-colors ${
                  selectedImage === index ? 'border-primary' : 'border-transparent'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
            <h1 className="text-3xl font-bold">{product.name}</h1>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold">{formatPrice(product.price)}</span>
            {hasDiscount && (
              <>
                <span className="text-xl text-muted-foreground line-through">
                  {formatPrice(product.originalPrice!)}
                </span>
                <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
                  -{discountPercent}%
                </span>
              </>
            )}
          </div>

          {/* Stock */}
          <p className={`font-medium ${
            product.stock > 10 ? 'text-green-600' : product.stock > 0 ? 'text-yellow-600' : 'text-red-600'
          }`}>
            {product.stock > 10
              ? 'En stock'
              : product.stock > 0
              ? `Solo quedan ${product.stock} unidades`
              : 'Agotado'}
          </p>

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div>
              <p className="font-medium mb-2">Color: {selectedColor}</p>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-md border text-sm transition-colors ${
                      selectedColor === color
                        ? 'border-primary bg-primary/10'
                        : 'border-input hover:border-primary/50'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div>
            <p className="font-medium mb-2">Cantidad</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-muted transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="p-3 hover:bg-muted transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <span className="text-sm text-muted-foreground">
                Stock disponible: {product.stock}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="h-5 w-5" />
              Añadir al carrito
            </button>
            <button className="p-4 rounded-md border hover:bg-muted transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-4 rounded-md border hover:bg-muted transition-colors">
              <Share2 className="h-5 w-5" />
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t">
            <div className="flex flex-col items-center text-center gap-2">
              <Truck className="h-6 w-6 text-primary" />
              <p className="text-sm">Envío gratis</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <p className="text-sm">2 años garantía</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <RotateCcw className="h-6 w-6 text-primary" />
              <p className="text-sm">30 días devolución</p>
            </div>
          </div>

          {/* Description */}
          {product.description && (
            <div className="pt-6 border-t">
              <p className="text-muted-foreground">{product.description}</p>
            </div>
          )}
        </div>
      </div>

      {/* Specifications */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Especificaciones técnicas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Características principales</h3>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Pantalla</span>
                <span className="font-medium">{product.specs.screen}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Procesador</span>
                <span className="font-medium">{product.specs.processor}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">RAM</span>
                <span className="font-medium">{product.specs.ram}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Almacenamiento</span>
                <span className="font-medium">{product.specs.storage}</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Cámara y batería</h3>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Cámara</span>
                <span className="font-medium">{product.specs.camera}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Batería</span>
                <span className="font-medium">{product.specs.battery}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Sistema operativo</span>
                <span className="font-medium">{product.specs.os}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Categoría</span>
                <span className="font-medium capitalize">{product.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Productos relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
