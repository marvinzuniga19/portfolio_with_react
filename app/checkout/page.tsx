'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, Check, Lock } from 'lucide-react';
import { useCartStore } from '@/lib/store/useCartStore';
import { formatPrice } from '@/lib/utils';

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const total = getTotalPrice();
  const shipping = total > 50 ? 0 : 4.99;
  const totalWithShipping = total + shipping;

  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    apellidos: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    provincia: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setOrderComplete(true);
    clearCart();
    setIsProcessing(false);
  };

  if (items.length === 0 && !orderComplete) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl font-bold mb-2">Tu carrito está vacío</h1>
          <p className="text-muted-foreground mb-8">
            Añade productos antes de proceder al checkout
          </p>
          <Link
            href="/productos"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Ver productos
          </Link>
        </div>
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center max-w-md mx-auto">
          <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
            <Check className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-2">¡Pedido realizado!</h1>
          <p className="text-muted-foreground mb-8">
            Gracias por tu compra. Recibirás un email de confirmación en breve.
          </p>
          <div className="space-y-4 w-full">
            <p className="text-sm text-muted-foreground">
              Número de pedido: #ORD-{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
            <Link
              href="/productos"
              className="inline-flex items-center justify-center gap-2 w-full rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Seguir comprando
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/carrito"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ChevronLeft className="h-4 w-4" />
        Volver al carrito
      </Link>

      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Información de contacto</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-10 rounded-md border px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full h-10 rounded-md border px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Juan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Apellidos</label>
                  <input
                    type="text"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    required
                    className="w-full h-10 rounded-md border px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                    placeholder="García"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full h-10 rounded-md border px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>
            </div>

            {/* Shipping */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Dirección de envío</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Dirección</label>
                  <input
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    required
                    className="w-full h-10 rounded-md border px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Calle Mayor 123"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Ciudad</label>
                  <input
                    type="text"
                    name="ciudad"
                    value={formData.ciudad}
                    onChange={handleChange}
                    required
                    className="w-full h-10 rounded-md border px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Madrid"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Provincia</label>
                  <input
                    type="text"
                    name="provincia"
                    value={formData.provincia}
                    onChange={handleChange}
                    required
                    className="w-full h-10 rounded-md border px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Madrid"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Código Postal</label>
                  <input
                    type="text"
                    name="codigoPostal"
                    value={formData.codigoPostal}
                    onChange={handleChange}
                    required
                    className="w-full h-10 rounded-md border px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                    placeholder="28001"
                  />
                </div>
              </div>
            </div>

            {/* Payment Notice */}
            <div className="rounded-lg border bg-muted/50 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Pasarela de pago</span>
              </div>
              <p className="text-sm text-muted-foreground">
                La integración de la pasarela de pago se añadirá en una próxima actualización.
                Por favor, completa el formulario para simular el pedido.
              </p>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <>
                  <div className="h-5 w-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  Procesando...
                </>
              ) : (
                `Pagar ${formatPrice(totalWithShipping)}`
              )}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-lg border bg-card p-6 space-y-4">
            <h2 className="text-xl font-bold">Resumen del pedido</h2>

            <div className="space-y-3 max-h-64 overflow-y-auto">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-3">
                  <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-muted">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.product.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Cantidad: {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-medium">
                    {formatPrice(item.product.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t pt-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Envío</span>
                <span>{shipping === 0 ? 'Gratis' : formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t">
                <span>Total</span>
                <span>{formatPrice(totalWithShipping)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
