'use client';

import { Heart, Users, Stethoscope, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function MissionSection() {
  const { t } = useLanguage();
  
  const missions = [
    {
      icon: Stethoscope,
      title: t('actions.medical.title'),
      description: t('actions.medical.description'),
    },
    {
      icon: GraduationCap,
      title: t('actions.education.title'),
      description: t('actions.education.description'),
    },
    {
      icon: Users,
      title: t('actions.family.title'),
      description: t('actions.family.description'),
    },
    {
      icon: Heart,
      title: t('actions.psychological.title'),
      description: t('actions.psychological.description'),
    },
  ];
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {t('common.mission')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl card-hover text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 group-hover:bg-red-200 transition-colors">
                  <Icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {mission.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {mission.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}