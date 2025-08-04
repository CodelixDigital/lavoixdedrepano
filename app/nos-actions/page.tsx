'use client';

import { Stethoscope, GraduationCap, Users, Heart, Home, Utensils } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ActionsPage() {
  const { t, language } = useLanguage();
  
  const actions = [
    {
      icon: Stethoscope,
      title: {
        fr: 'Soins médicaux spécialisés',
        en: 'Specialized medical care',
      },
      description: {
        fr: 'Consultations, examens, médicaments et hospitalisations pour la prise en charge complète des crises drépanocytaires.',
        en: 'Consultations, examinations, medications and hospitalizations for complete management of sickle cell crises.',
      },
      image: '/docteur_et_medecine.jpg',
      details: [
        {
          fr: 'Consultations pédiatriques spécialisées',
          en: 'Specialized pediatric consultations',
        },
        {
          fr: 'Suivi hématologique régulier',
          en: 'Regular hematological monitoring',
        },
        {
          fr: 'Gestion des crises douloureuses',
          en: 'Management of painful crises',
        },
        {
          fr: 'Prévention des complications',
          en: 'Prevention of complications',
        },
      ],
    },
    {
      icon: GraduationCap,
      title: {
        fr: 'Soutien scolaire',
        en: 'Educational support',
      },
      description: {
        fr: 'Accompagnement éducatif adapté pour permettre aux enfants de poursuivre leur scolarité malgré les absences liées à la maladie.',
        en: 'Adapted educational support to allow children to continue their schooling despite absences related to the disease.',
      },
      image: '/campagne-sensibilisation-ecoles.jpeg',
      details: [
        {
          fr: 'Cours de rattrapage personnalisés',
          en: 'Personalized catch-up courses',
        },
        {
          fr: 'Matériel scolaire adapté',
          en: 'Adapted school materials',
        },
        {
          fr: 'Sensibilisation des enseignants',
          en: 'Teacher awareness',
        },
        {
          fr: 'Bourses d\'études pour les familles démunies',
          en: 'Scholarships for needy families',
        },
      ],
    },
    {
      icon: Users,
      title: {
        fr: 'Formation des familles',
        en: 'Family training',
      },
      description: {
        fr: 'Ateliers et formations pour aider les parents à mieux comprendre la maladie et à accompagner leurs enfants au quotidien.',
        en: 'Workshops and training to help parents better understand the disease and support their children on a daily basis.',
      },
      image: '/formation_des_familles.jpeg',
      details: [
        {
          fr: 'Ateliers sur la gestion de la maladie',
          en: 'Workshops on disease management',
        },
        {
          fr: 'Formation aux premiers secours',
          en: 'First aid training',
        },
        {
          fr: 'Groupes de parole entre parents',
          en: 'Parent support groups',
        },
        {
          fr: 'Support nutritionnel et diététique',
          en: 'Nutritional and dietary support',
        },
      ],
    },
    {
      icon: Heart,
      title: {
        fr: 'Soutien psychologique',
        en: 'Psychological support',
      },
      description: {
        fr: 'Accompagnement émotionnel et psychologique pour les enfants et leurs familles face aux défis de la drépanocytose.',
        en: 'Emotional and psychological support for children and their families facing the challenges of sickle cell disease.',
      },
      image: '/soutiens_psychologique.jpeg',
      details: [
        {
          fr: 'Consultations psychologiques individuelles',
          en: 'Individual psychological consultations',
        },
        {
          fr: 'Thérapie de groupe pour enfants',
          en: 'Group therapy for children',
        },
        {
          fr: 'Soutien aux fratries',
          en: 'Support for siblings',
        },
        {
          fr: 'Accompagnement au deuil',
          en: 'Grief support',
        },
      ],
    },
    {
      icon: Home,
      title: {
        fr: 'Aide sociale',
        en: 'Social assistance',
      },
      description: {
        fr: 'Support concret aux familles en situation de précarité pour assurer les besoins essentiels des enfants malades.',
        en: 'Concrete support for families in precarious situations to ensure the essential needs of sick children.',
      },
      image: '/aide_sociales.jpg',
      details: [
        {
          fr: 'Aide financière d\'urgence',
          en: 'Emergency financial assistance',
        },
        {
          fr: 'Support pour le transport médical',
          en: 'Support for medical transport',
        },
        {
          fr: 'Assistance pour l\'accès au logement',
          en: 'Assistance for housing access',
        },
        {
          fr: 'Aide aux démarches administratives',
          en: 'Help with administrative procedures',
        },
      ],
    },
    {
      icon: Utensils,
      title: {
        fr: 'Programme nutritionnel',
        en: 'Nutritional program',
      },
      description: {
        fr: 'Éducation et soutien nutritionnel adapté aux besoins spécifiques des enfants drépanocytaires.',
        en: 'Nutritional education and support adapted to the specific needs of children with sickle cell disease.',
      },
      image: '/programme_nutritionnel.jpeg',
      details: [
        {
          fr: 'Consultations diététiques spécialisées',
          en: 'Specialized dietary consultations',
        },
        {
          fr: 'Kits alimentaires enrichis',
          en: 'Enriched food kits',
        },
        {
          fr: 'Ateliers de cuisine thérapeutique',
          en: 'Therapeutic cooking workshops',
        },
        {
          fr: 'Formation à l\'hygiène alimentaire',
          en: 'Food hygiene training',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-blue-50">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t('actions.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('actions.subtitle')}
          </p>
        </div>
      </section>

      {/* Actions Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {actions.map((action, index) => {
              const Icon = action.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden card-hover">
                  <div className="aspect-video">
                    <img
                      src={action.image}
                      alt={action.title[language as keyof typeof action.title]}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
                        <Icon className="h-6 w-6 text-red-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {action.title[language as keyof typeof action.title]}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {action.description[language as keyof typeof action.description]}
                    </p>
                    
                    <ul className="space-y-3">
                      {action.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{detail[language as keyof typeof detail]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-red-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-8">{t('actions.impact.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-red-100">{t('actions.impact.children')}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">200+</div>
              <div className="text-red-100">{t('actions.impact.families')}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">1,500+</div>
              <div className="text-red-100">{t('actions.impact.consultations')}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-red-100">{t('actions.impact.schools')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}