'use client';

import Link from 'next/link';
import { ArrowRight, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative bg-gradient-to-br from-red-50 to-blue-50 section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/don" className="btn-primary flex items-center justify-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>{t('hero.donateButton')}</span>
              </Link>
              <Link href="/nos-actions" className="btn-outline flex items-center justify-center space-x-2">
                <span>{t('hero.discoverButton')}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">500+</div>
                <div className="text-sm text-gray-600">{t('hero.stats.children')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15</div>
                <div className="text-sm text-gray-600">{t('hero.stats.experience')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">{t('hero.stats.volunteers')}</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/WhatsApp Image 2025-08-02 at 09.19.58.jpeg"
                alt="Famille souriante - La Voix de Drépanocytose"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <Heart className="h-8 w-8 text-red-600" />
                <div>
                  <div className="font-semibold text-gray-900">{t('common.mission')}</div>
                  <div className="text-sm text-gray-600">{t('common.missionDesc')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}