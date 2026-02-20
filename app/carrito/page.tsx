'use client';

import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/lib/store/useCartStore';
import { formatPrice } from '@/lib/utils';

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore();
  const total = getTotalPrice();
  const shipping = total > 50 ? 0 : 4.99;
  const totalWithShipping = total + shipping;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <ShoppingBag className="h-24 w-24 text-muted-foreground mb-6" />
          <h1 className="text-2xl font-bold mb-2">Tu carrito está vacío</h1>
          <p className="text-muted-foreground mb-8">
            ¡Añade algunos productos para empezar a comprar!
          </p>
          <Link
            href="/productos"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Ver productos
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Carrito de compra</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex gap-4 p-4 rounded-lg border bg-card"
            >
              {/* Image */}
              <Link href={`/producto/${item.product.id}`}>
                <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden bg-muted">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>

              {/* Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <Link
                    href={`/producto/${item.product.id}`}
                    className="fontunderline"
                  >
-medium hover:                    {item.product.name}
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    {item.product.brand} - {item.product.specs.storage}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  {/* Quantity */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="h-8 w-8 rounded-md border flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-10 text-center">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="h-8 w-8 rounded-md border flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <p className="font-bold">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                    {item.product.originalPrice && (
                      <p className="text-xs text-muted-foreground line-through">
                        {formatPrice(item.product.originalPrice * item.quantity)}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeItem(item.product.id)}
                className="self-start p-2 text-muted-foreground hover:text-destructive transition-colors"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}

          <button
            onClick={clearCart}
            className="text-sm text-muted-foreground hover:text-destructive transition-colors"
          >
            Vaciar carrito
          </button>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-lg border bg-card p-6 space-y-4">
            <h2 className="text-xl font-bold">Resumen del pedido</h2>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Envío</span>
                <span>{shipping === 0 ? 'Gratis' : formatPrice(shipping)}</span>
              </div>
              {total < 50 && (
                <p className="text-xs text-muted-foreground">
                  Añade {formatPrice(50 - total)} más para envío gratis
                </p>
              )}
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{formatPrice(totalWithShipping)}</span>
                </div>
              </div>
            </div>

            <Link
              href="/checkout"
              className="inline-flex items-center justify-center gap-2 w-full rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Proceder al checkout
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/productos"
              className="block text-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Continuar comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
