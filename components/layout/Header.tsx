'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Header() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/a-propos' },
    { name: t('nav.actions'), href: '/nos-actions' },
    { name: t('nav.sickleCell'), href: '/drepanocytose' },
    { name: t('nav.testimonials'), href: '/temoignages' },
    { name: t('nav.news'), href: '/actualites' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container-max flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3">
          <img src="/logo.jpg" alt="La Voix des Drépano" className="h-8 w-8 object-cover rounded" />
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

        {/* Donation Button and Language Switcher */}
        <div className="hidden lg:flex items-center space-x-4">
          <LanguageSwitcher />
          <Link href="/don" className="btn-primary">
            {t('nav.donate')}
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
            <div className="flex items-center justify-center space-x-4 mt-4">
              <LanguageSwitcher />
              <Link
                href="/don"
                className="btn-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.donate')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}