'use client';

import Link from 'next/link';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Article {
  id: number;
  title: {
    fr: string;
    en: string;
  };
  excerpt: {
    fr: string;
    en: string;
  };
  content: {
    fr: string;
    en: string;
  };
  date: string;
  category: {
    fr: string;
    en: string;
  };
  image: string;
  featured: boolean;
}

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-blue-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/actualites" 
              className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>{t('news.backToNews')}</span>
            </Link>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  {article.category[language as keyof typeof article.category]}
                </span>
                <div className="flex items-center space-x-2 text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <time>{article.date}</time>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                {article.title[language as keyof typeof article.title]}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {article.excerpt[language as keyof typeof article.excerpt]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-8">
              <img
                src={article.image}
                alt={article.title[language as keyof typeof article.title]}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed">
                {article.content[language as keyof typeof article.content]}
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link 
                href="/actualites" 
                className="btn-outline"
              >
                {t('news.backToNews')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 