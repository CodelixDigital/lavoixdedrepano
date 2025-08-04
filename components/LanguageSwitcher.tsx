'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <button
        onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
        className="px-3 py-1 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors border border-gray-300 rounded-md hover:border-red-500"
      >
        {language === 'fr' ? 'EN' : 'FR'}
      </button>
    </div>
  );
} 