'use client';

import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-red-600" />
              <span className="text-lg font-semibold">La Voix des Drépano</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/19mL6KmMMn/" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              </a>
              <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link href="/a-propos" className="text-gray-300 hover:text-white text-sm transition-colors">{t('nav.about')}</Link></li>
              <li><Link href="/nos-actions" className="text-gray-300 hover:text-white text-sm transition-colors">{t('nav.actions')}</Link></li>
              <li><Link href="/drepanocytose" className="text-gray-300 hover:text-white text-sm transition-colors">{t('nav.sickleCell')}</Link></li>
              <li><Link href="/temoignages" className="text-gray-300 hover:text-white text-sm transition-colors">{t('nav.testimonials')}</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.support')}</h3>
            <ul className="space-y-2">
              <li><Link href="/don" className="text-gray-300 hover:text-white text-sm transition-colors">{t('nav.donate')}</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">Devenir bénévole</Link></li>
              <li><Link href="/actualites" className="text-gray-300 hover:text-white text-sm transition-colors">{t('nav.news')}</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">Partenariats</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-600" />
                <span className="text-gray-300 text-sm">contact@voixdesdrepano.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-600" />
                <span className="text-gray-300 text-sm">+243 810 602 540</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-red-600" />
                <span className="text-gray-300 text-sm">Kinshasa, RDC</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}