'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '@/lib/data/products';
import { useCartStore } from '@/lib/store/useCartStore';
import { formatPrice, cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  return (
    <div className="group relative rounded-lg border bg-card transition-shadow hover:shadow-lg">
      {/* Discount Badge */}
      {hasDiscount && (
        <div className="absolute left-2 top-2 z-10 rounded-full bg-destructive px-2 py-1 text-xs font-medium text-destructive-foreground">
          -{discountPercent}%
        </div>
      )}

      {/* Image */}
      <Link href={`/producto/${product.id}`}>
        <div className="aspect-square overflow-hidden rounded-t-lg bg-muted">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <p className="text-xs text-muted-foreground">{product.brand}</p>
          <Link href={`/producto/${product.id}`}>
            <h3 className="font-medium line-clamp-2 hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">{formatPrice(product.price)}</span>
          {hasDiscount && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice!)}
            </span>
          )}
        </div>

        {/* Quick Specs */}
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          <span className="rounded-full bg-muted px-2 py-1">{product.specs.ram}</span>
          <span className="rounded-full bg-muted px-2 py-1">{product.specs.storage}</span>
        </div>

        {/* Stock */}
        <p className={cn(
          "text-xs",
          product.stock > 10 ? "text-green-600" : product.stock > 0 ? "text-yellow-600" : "text-red-600"
        )}>
          {product.stock > 10 ? "En stock" : product.stock > 0 ? `Solo quedan ${product.stock}` : "Agotado"}
        </p>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <button
            onClick={() => addItem(product)}
            disabled={product.stock === 0}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingCart className="h-4 w-4" />
            Añadir
          </button>
          <Link
            href={`/producto/${product.id}`}
            className="inline-flex items-center justify-center rounded-md border bg-background px-3 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted hover:text-accent-foreground"
          >
            <Eye className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
