import Link from 'next/link';
import { Smartphone, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Smartphone className="h-8 w-8" />
              <span className="text-xl font-bold">PhoneShop</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Tu tienda de confianza para encontrar los mejores smartphones al mejor precio.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/productos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Todos los productos
                </Link>
              </li>
              <li>
                <Link href="/productos?category=alta" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gama Alta
                </Link>
              </li>
              <li>
                <Link href="/productos?category=media" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gama Media
                </Link>
              </li>
              <li>
                <Link href="/productos?category=baja" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gama Baja
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold">Atención al cliente</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Envíos y devoluciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+34 900 123 456</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@phoneshop.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PhoneShop. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
