'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X, Smartphone, Sun, Moon } from 'lucide-react';
import { useCartStore } from '@/lib/store/useCartStore';
import { products } from '@/lib/data/products';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { openCart, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const searchResults = searchQuery.length > 1
    ? products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  return (
    <header className="fixed top-4 left-4 right-4 z-50 rounded-full border bg-background/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Smartphone className="h-8 w-8" />
            <span className="text-xl font-bold">PhoneShop</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Inicio
            </Link>
            <Link href="/productos" className="text-sm font-medium transition-colors hover:text-primary">
              Productos
            </Link>
            <Link href="/productos?category=alta" className="text-sm font-medium transition-colors hover:text-primary">
              Gama Alta
            </Link>
            <Link href="/productos?category=media" className="text-sm font-medium transition-colors hover:text-primary">
              Gama Media
            </Link>
          </nav>

            {/* Search & Cart */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="hidden lg:block relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar móviles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-10 w-64 rounded-md border bg-background pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-md shadow-lg overflow-hidden z-50">
                  {searchResults.map((product) => (
                    <Link
                      key={product.id}
                      href={`/producto/${product.id}`}
                      className="flex items-center gap-3 p-3 hover:bg-muted transition-colors"
                      onClick={() => setSearchQuery('')}
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="h-10 w-10 object-cover rounded"
                      />
                      <div>
                        <p className="text-sm font-medium">{product.name}</p>
                        <p className="text-xs text-muted-foreground">{product.brand}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Search Toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden p-2"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-md hover:bg-muted transition-colors"
                aria-label="Cambiar tema"
              >
                {theme === 'dark' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>
            )}

            {/* Cart */}
            <button
              onClick={openCart}
              className="relative p-2"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="lg:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar móviles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 w-full rounded-md border bg-background pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/productos"
                className="text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </Link>
              <Link
                href="/productos?category=alta"
                className="text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Gama Alta
              </Link>
              <Link
                href="/productos?category=media"
                className="text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Gama Media
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
