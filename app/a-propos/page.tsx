'use client';

import { Heart, Users, Target, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t, language } = useLanguage();
  
  const values = [
    {
      icon: Heart,
      title: t('about.values.compassion.title'),
      description: t('about.values.compassion.description'),
    },
    {
      icon: Users,
      title: t('about.values.solidarity.title'),
      description: t('about.values.solidarity.description'),
    },
    {
      icon: Target,
      title: t('about.values.commitment.title'),
      description: t('about.values.commitment.description'),
    },
    {
      icon: Award,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description'),
    },
  ];

  const team = [
    {
      name: 'Madame Keyt Ngwanza',
      role: {
        fr: 'Fondatrice',
        en: 'Founder',
      },
      image: '/team/presidente_keyt_ngwanza.jpeg',
      bio: {
        fr: 'Fondatrice de La Voix des Drépano, dédiée à l\'amélioration de la vie des enfants drépanocytaires.',
        en: 'Founder of La Voix des Drépano, dedicated to improving the lives of children with sickle cell disease.',
      },
    },
    {
      name: 'Noel Mulobo',
      role: {
        fr: 'Coordinateur terrain',
        en: 'Field Coordinator',
      },
      image: '/team/coordinateur_noel_mulobo.jpeg',
      bio: {
        fr: 'Responsable des programmes communautaires et de sensibilisation sur le terrain.',
        en: 'Responsible for community programs and field awareness.',
      },
    },
    {
      name: 'À venir',
      role: {
        fr: 'Psychologue',
        en: 'Psychologist',
      },
      image: 'https://images.pexels.com/photos/7551462/pexels-photo-7551462.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: {
        fr: 'Spécialisée dans l\'accompagnement psychologique des enfants malades et leurs familles.',
        en: 'Specialized in psychological support for sick children and their families.',
      },
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-blue-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                {t('about.title')}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('about.subtitle')}
              </p>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-white flex items-center justify-center p-8">
              <img
                src="/logo.jpg"
                alt="La Voix des Drépano - Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.story.title')}</h2>
            </div>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                {t('about.story.p1')}
              </p>
              
              <p>
                {t('about.story.p2')}
              </p>
              
              <p>
                {t('about.story.p3')}
              </p>
              
              <p>
                {t('about.story.p4')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.values.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl card-hover text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                    <Icon className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.team.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden card-hover">
                <div className="aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-medium">
                    {member.role[language]}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}