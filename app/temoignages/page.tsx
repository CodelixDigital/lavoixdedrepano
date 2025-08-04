'use client';

import { Quote, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TestimonialsPage() {
  const { t, language } = useLanguage();
  
  const testimonials = [
    {
      name: 'Mama Célestine',
      role: {
        fr: 'Mère de Joseph, 12 ans',
        en: 'Mother of Joseph, 12 years old',
      },
      image: 'https://images.pexels.com/photos/8090033/pexels-photo-8090033.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: {
        fr: 'Avant de connaître La Voix des Drépano, je me sentais seule face à la maladie de mon fils. Grâce à eux, Joseph va mieux, il retourne à l\'école et moi j\'ai appris à gérer ses crises. Ils nous ont redonné espoir.',
        en: 'Before knowing La Voix des Drépano, I felt alone facing my son\'s illness. Thanks to them, Joseph is doing better, he goes back to school and I have learned to manage his crises. They have given us hope again.',
      },
      impact: {
        fr: 'Joseph a pu reprendre sa scolarité et n\'a plus eu de crise majeure depuis 8 mois.',
        en: 'Joseph was able to resume his schooling and has not had a major crisis for 8 months.',
      },
    },
    {
      name: 'Dr. Augustin Mwanza',
      role: {
        fr: 'Pédiatre, Hôpital de Kinshasa',
        en: 'Pediatrician, Kinshasa Hospital',
      },
      image: 'https://images.pexels.com/photos/6749831/pexels-photo-6749831.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: {
        fr: 'La collaboration avec La Voix des Drépano a transformé notre approche de prise en charge. Leurs programmes de formation nous ont permis d\'améliorer significativement nos protocoles de soins.',
        en: 'Collaboration with La Voix des Drépano has transformed our care approach. Their training programs have allowed us to significantly improve our care protocols.',
      },
      impact: {
        fr: 'Réduction de 40% des hospitalisations d\'urgence grâce aux programmes de prévention.',
        en: '40% reduction in emergency hospitalizations thanks to prevention programs.',
      },
    },
    {
      name: 'Grâce Mukala',
      role: {
        fr: 'Ancienne bénéficiaire, aujourd\'hui bénévole',
        en: 'Former beneficiary, now volunteer',
      },
      image: 'https://images.pexels.com/photos/7551462/pexels-photo-7551462.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: {
        fr: 'J\'ai grandi avec la drépanocytose et La Voix des Drépano m\'a accompagnée de mes 8 ans jusqu\'à aujourd\'hui. Maintenant, c\'est à mon tour d\'aider d\'autres enfants et familles.',
        en: 'I grew up with sickle cell disease and La Voix des Drépano has accompanied me from my 8 years until today. Now it\'s my turn to help other children and families.',
      },
      impact: {
        fr: 'Diplômée universitaire, Grâce aide maintenant 15 familles par mois.',
        en: 'University graduate, Grâce now helps 15 families per month.',
      },
    },
    {
      name: 'Papa Fortunat',
      role: {
        fr: 'Père de jumelles drépanocytaires',
        en: 'Father of twin girls with sickle cell disease',
      },
      image: 'https://images.pexels.com/photos/8090033/pexels-photo-8090033.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: {
        fr: 'Mes filles Esther et Ruth vont à l\'école normalement grâce au soutien de l\'organisation. Le suivi médical régulier et l\'aide scolaire ont changé notre vie de famille.',
        en: 'My daughters Esther and Ruth go to school normally thanks to the organization\'s support. Regular medical follow-up and school assistance have changed our family life.',
      },
      impact: {
        fr: 'Les jumelles sont désormais parmi les meilleures élèves de leur classe.',
        en: 'The twins are now among the best students in their class.',
      },
    },
    {
      name: 'Sarah Nkomo',
      role: {
        fr: 'Institutrice, École Primaire Bondeko',
        en: 'Teacher, Bondeko Primary School',
      },
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: {
        fr: 'Les formations de La Voix des Drépano nous ont appris à mieux comprendre et accompagner les élèves drépanocytaires. Nous savons maintenant comment adapter notre enseignement.',
        en: 'La Voix des Drépano\'s training has taught us to better understand and support students with sickle cell disease. We now know how to adapt our teaching.',
      },
      impact: {
        fr: 'Amélioration de 60% du taux de présence des élèves drépanocytaires.',
        en: '60% improvement in attendance rate of students with sickle cell disease.',
      },
    },
    {
      name: 'Michel Kahindo',
      role: {
        fr: 'Adolescent drépanocytaire, 16 ans',
        en: 'Adolescent with sickle cell disease, 16 years old',
      },
      image: 'https://images.pexels.com/photos/8090033/pexels-photo-8090033.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: {
        fr: 'Grâce au soutien psychologique et aux groupes de parole, j\'ai appris à vivre avec ma maladie sans honte. Je rêve maintenant de devenir médecin pour aider d\'autres enfants comme moi.',
        en: 'Thanks to psychological support and support groups, I have learned to live with my illness without shame. I now dream of becoming a doctor to help other children like me.',
      },
      impact: {
        fr: 'Michel prépare son baccalauréat et aspire à des études de médecine.',
        en: 'Michel is preparing for his baccalaureate and aspires to medical studies.',
      },
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-blue-50">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t('testimonials.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 card-hover">
                <div className="flex items-start space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">{testimonial.role[language as keyof typeof testimonial.role]}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="h-8 w-8 text-red-300 absolute -top-2 -left-2" />
                  <blockquote className="text-gray-700 leading-relaxed italic pl-6">
                    "{testimonial.quote[language as keyof typeof testimonial.quote]}"
                  </blockquote>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium text-green-800">{t('testimonials.impactLabel')}</span>
                  </div>
                  <p className="text-green-700 text-sm">{testimonial.impact[language as keyof typeof testimonial.impact]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-6">{t('testimonials.callToAction.title')}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('testimonials.callToAction.subtitle')}
          </p>
          <button className="btn-primary">
            {t('testimonials.callToAction.button')}
          </button>
        </div>
      </section>
    </div>
  );
}