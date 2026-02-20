'use client';

import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/store/useCartStore';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getTotalPrice } = useCartStore();
  const total = getTotalPrice();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md bg-background shadow-lg transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-lg font-semibold">Carrito de compra</h2>
            <button
              onClick={closeCart}
              className="rounded-md p-2 hover:bg-muted"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
                <p className="text-lg font-medium">Tu carrito está vacío</p>
                <p className="text-sm text-muted-foreground mt-1">
                  ¡Añade algunos productos!
                </p>
                <Link
                  href="/productos"
                  onClick={closeCart}
                  className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Ver productos
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 rounded-lg border p-3"
                  >
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <Link
                          href={`/producto/${item.product.id}`}
                          onClick={closeCart}
                          className="text-sm font-medium hover:underline"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-xs text-muted-foreground">
                          {item.product.brand}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="h-7 w-7 rounded-md border flex items-center justify-center hover:bg-muted"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="h-7 w-7 rounded-md border flex items-center justify-center hover:bg-muted"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">
                            {formatPrice(item.product.price * item.quantity)}
                          </p>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-xs text-destructive hover:underline"
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Total</span>
                <span className="text-xl font-bold">{formatPrice(total)}</span>
              </div>
              <Link
                href="/carrito"
                onClick={closeCart}
                className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Ver carrito
              </Link>
              <Link
                href="/checkout"
                onClick={closeCart}
                className="inline-flex h-10 w-full items-center justify-center rounded-md border bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-muted hover:text-accent-foreground"
              >
                Proceder al checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
