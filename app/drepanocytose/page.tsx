'use client';

import { AlertCircle, Heart, Users, TrendingUp, Stethoscope } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function DrepanocytosePage() {
  const { t, language } = useLanguage();
  
  const symptoms = [
    {
      fr: 'Douleurs intenses (crises vaso-occlusives)',
      en: 'Intense pain (vaso-occlusive crises)',
    },
    {
      fr: 'Anémie chronique et fatigue',
      en: 'Chronic anemia and fatigue',
    },
    {
      fr: 'Infections respiratoires fréquentes',
      en: 'Frequent respiratory infections',
    },
    {
      fr: 'Retard de croissance',
      en: 'Growth delay',
    },
    {
      fr: 'Problèmes oculaires',
      en: 'Eye problems',
    },
    {
      fr: 'Complications cardiaques',
      en: 'Cardiac complications',
    },
  ];

  const treatments = [
    {
      title: {
        fr: 'Hydroxyurée',
        en: 'Hydroxyurea',
      },
      description: {
        fr: 'Médicament qui réduit la fréquence des crises douloureuses',
        en: 'Medication that reduces the frequency of painful crises',
      },
    },
    {
      title: {
        fr: 'Transfusions sanguines',
        en: 'Blood transfusions',
      },
      description: {
        fr: 'Pour traiter l\'anémie sévère et prévenir certaines complications',
        en: 'To treat severe anemia and prevent certain complications',
      },
    },
    {
      title: {
        fr: 'Antibiotiques prophylactiques',
        en: 'Prophylactic antibiotics',
      },
      description: {
        fr: 'Prévention des infections chez les jeunes enfants',
        en: 'Prevention of infections in young children',
      },
    },
    {
      title: {
        fr: 'Acide folique',
        en: 'Folic acid',
      },
      description: {
        fr: 'Supplément pour soutenir la production de globules rouges',
        en: 'Supplement to support red blood cell production',
      },
    },
  ];

  const drcStats = [
    {
      number: '2%',
      label: {
        fr: 'Population touchée',
        en: 'Affected population',
      },
      description: {
        fr: 'Plus de 2 millions de personnes',
        en: 'More than 2 million people',
      },
    },
    {
      number: '300,000',
      label: {
        fr: 'Naissances par an',
        en: 'Births per year',
      },
      description: {
        fr: 'Nouveaux cas de drépanocytose',
        en: 'New sickle cell cases',
      },
    },
    {
      number: '80%',
      label: {
        fr: 'Mortalité infantile',
        en: 'Infant mortality',
      },
      description: {
        fr: 'Sans prise en charge adaptée',
        en: 'Without appropriate care',
      },
    },
    {
      number: '25%',
      label: {
        fr: 'Porteurs du trait',
        en: 'Trait carriers',
      },
      description: {
        fr: 'De la population congolaise',
        en: 'Of the Congolese population',
      },
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-blue-50">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t('sickleCell.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('sickleCell.subtitle')}
          </p>
        </div>
      </section>

      {/* What is Sickle Cell Disease */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                {t('sickleCell.whatIs.title')}
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  {t('sickleCell.whatIs.p1')}
                </p>
                <p>
                  {t('sickleCell.whatIs.p2')}
                </p>
                <p>
                  {t('sickleCell.whatIs.p3')}
                </p>
              </div>
            </div>
            <div className="aspect-square">
              <img
                src="/docteur_et_medecine.jpg"
                alt="Docteur et médecine - Drépanocytose"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics in DRC */}
      <section className="section-padding bg-red-600 text-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">{t('sickleCell.drc.title')}</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              {t('sickleCell.drc.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {drcStats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                <TrendingUp className="h-12 w-12 text-red-200 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-red-100">{stat.label[language as keyof typeof stat.label]}</div>
                <div className="text-sm text-red-200 mt-2">{stat.description[language as keyof typeof stat.description]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('sickleCell.symptoms.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('sickleCell.symptoms.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {symptoms.map((symptom, index) => (
              <div key={index} className="bg-white p-6 rounded-xl card-hover">
                <AlertCircle className="h-8 w-8 text-red-600 mb-4" />
                <p className="text-gray-700 font-medium">
                  {symptom[language as keyof typeof symptom]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('sickleCell.treatments.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('sickleCell.treatments.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl card-hover">
                <Stethoscope className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {treatment.title[language as keyof typeof treatment.title]}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {treatment.description[language as keyof typeof treatment.description]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-6">{t('sickleCell.callToAction.title')}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('sickleCell.callToAction.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              {t('nav.donate')}
            </button>
            <button className="btn-outline">
              {t('sickleCell.callToAction.volunteer')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}