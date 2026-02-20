import Link from 'next/link';
import { ArrowRight, Star, Shield, Truck, RefreshCcw } from 'lucide-react';
import { products, brands } from '@/lib/data/products';
import { ProductCard } from '@/components/product/ProductCard';

export default function HomePage() {
  const featuredProducts = products.slice(0, 6);
  const offers = products.filter(p => p.originalPrice).slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Encuentra tu{' '}
                <span className="text-primary">móvil perfecto</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Los mejores smartphones de las marcas líderes, al mejor precio.
                Envío gratuito y garantía de 2 años en todos nuestros productos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/productos"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Ver catálogo
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/productos?category=alta"
                  className="inline-flex items-center justify-center rounded-md border bg-background px-8 py-3 text-lg font-medium shadow-sm transition-colors hover:bg-muted hover:text-accent-foreground"
                >
                  Gama Alta
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto">
                  <img
                    src="https://placehold.co/600x600/1a1a1a/white?text=Smartphone+Hero"
                    alt="Smartphone"
                    className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-xl font-semibold mb-8">Marcas disponibles</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {brands.map((brand) => (
              <Link
                key={brand}
                href={`/productos?brand=${brand}`}
                className="text-2xl font-bold text-muted-foreground hover:text-primary transition-colors"
              >
                {brand}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Productos destacados</h2>
            <Link
              href="/productos"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              Ver todos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      {offers.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Ofertas especiales</h2>
              <Link
                href="/productos?onSale=true"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                Ver todas las ofertas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {offers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Envío gratuito</h3>
              <p className="text-muted-foreground">
                Envío gratis en todos los pedidos superiores a 50€
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Garantía de 2 años</h3>
              <p className="text-muted-foreground">
                Todos nuestros productos incluyen garantía oficial
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <RefreshCcw className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">30 días para devolver</h3>
              <p className="text-muted-foreground">
                Política de devolución sin complicaciones
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">No te pierdas nuestras ofertas</h2>
          <p className="mb-6 opacity-90">
            Suscríbete a nuestro newsletter y recibe las mejores ofertas en tu email
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 h-12 rounded-md px-4 text-foreground bg-background"
            />
            <button
              type="submit"
              className="h-12 px-6 rounded-md bg-background text-foreground font-medium hover:bg-background/90 transition-colors"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
