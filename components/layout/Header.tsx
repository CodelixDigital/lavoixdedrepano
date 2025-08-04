'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Heart } from 'lucide-react';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/a-propos' },
  { name: 'Nos actions', href: '/nos-actions' },
  { name: 'La drépanocytose', href: '/drepanocytose' },
  { name: 'Témoignages', href: '/temoignages' },
  { name: 'Actualités', href: '/actualites' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container-max flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3">
          <Heart className="h-8 w-8 text-red-600" />
          <Link href="/" className="text-xl font-bold text-gray-900">
            La Voix des Drépano
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Donation Button */}
        <div className="hidden lg:flex">
          <Link href="/don" className="btn-primary">
            Faire un don
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            type="button"
            className="text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-gray-700 hover:text-red-600 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/don"
              className="block btn-primary text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Faire un don
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}