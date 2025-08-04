'use client';

import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const news = [
  {
    id: 1,
    title: {
      fr: 'Ouverture du nouveau centre de soins à Kinshasa',
      en: 'Opening of new care center in Kinshasa',
    },
    excerpt: {
      fr: 'Un nouveau centre spécialisé dans la prise en charge de la drépanocytose vient d\'ouvrir ses portes dans la capitale.',
      en: 'A new center specialized in sickle cell disease care has just opened its doors in the capital.',
    },
    date: '15 Janvier 2025',
    image: '/docteur_et_medecine.jpg',
  },
  {
    id: 2,
    title: {
      fr: 'Campagne de sensibilisation dans les écoles',
      en: 'Awareness campaign in schools',
    },
    excerpt: {
      fr: 'Notre équipe sensibilise les écoliers et enseignants sur la drépanocytose dans 20 écoles de Kinshasa.',
      en: 'Our team raises awareness among schoolchildren and teachers about sickle cell disease in 20 schools in Kinshasa.',
    },
    date: '10 Janvier 2025',
    image: '/campagne-sensibilisation-ecoles.jpeg',
  },
  {
    id: 3,
    title: {
      fr: 'Formation des professionnels de santé',
      en: 'Training of health professionals',
    },
    excerpt: {
      fr: 'Workshop de formation continue pour améliorer la prise en charge des patients drépanocytaires.',
      en: 'Continuing education workshop to improve the care of sickle cell patients.',
    },
    date: '8 Janvier 2025',
    image: '/docteur_et_medecine.jpg',
  },
];

export default function NewsSection() {
  const { t, language } = useLanguage();
  
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {t('news.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('news.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <article key={article.id} className="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
              <div className="aspect-video">
                <img
                  src={article.image}
                  alt={article.title[language]}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <time>{article.date}</time>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                  {article.title[language]}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {article.excerpt[language]}
                </p>
                <Link 
                  href={`/actualites/${article.id}`}
                  className="inline-flex items-center space-x-2 text-red-600 font-medium hover:text-red-700 transition-colors"
                >
                  <span>{t('news.readMore')}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/actualites" className="btn-outline">
            {t('news.title')}
          </Link>
        </div>
      </div>
    </section>
  );
}