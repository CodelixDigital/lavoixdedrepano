import { Stethoscope, GraduationCap, Users, Heart, Home, Utensils } from 'lucide-react';

const actions = [
  {
    icon: Stethoscope,
    title: 'Soins médicaux spécialisés',
    description: 'Consultations, examens, médicaments et hospitalisations pour la prise en charge complète des crises drépanocytaires.',
    image: 'https://images.pexels.com/photos/6749831/pexels-photo-6749831.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: [
      'Consultations pédiatriques spécialisées',
      'Suivi hématologique régulier',
      'Gestion des crises douloureuses',
      'Prévention des complications',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Soutien scolaire',
    description: 'Accompagnement éducatif adapté pour permettre aux enfants de poursuivre leur scolarité malgré les absences liées à la maladie.',
    image: 'https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: [
      'Cours de rattrapage personnalisés',
      'Matériel scolaire adapté',
      'Sensibilisation des enseignants',
      'Bourses d\'études pour les familles démunies',
    ],
  },
  {
    icon: Users,
    title: 'Formation des familles',
    description: 'Ateliers et formations pour aider les parents à mieux comprendre la maladie et à accompagner leurs enfants au quotidien.',
    image: 'https://images.pexels.com/photos/6999303/pexels-photo-6999303.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: [
      'Ateliers sur la gestion de la maladie',
      'Formation aux premiers secours',
      'Groupes de parole entre parents',
      'Support nutritionnel et diététique',
    ],
  },
  {
    icon: Heart,
    title: 'Soutien psychologique',
    description: 'Accompagnement émotionnel et psychologique pour les enfants et leurs familles face aux défis de la drépanocytose.',
    image: 'https://images.pexels.com/photos/7551462/pexels-photo-7551462.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: [
      'Consultations psychologiques individuelles',
      'Thérapie de groupe pour enfants',
      'Soutien aux fratries',
      'Accompagnement au deuil',
    ],
  },
  {
    icon: Home,
    title: 'Aide sociale',
    description: 'Support concret aux familles en situation de précarité pour assurer les besoins essentiels des enfants malades.',
    image: 'https://images.pexels.com/photos/6999202/pexels-photo-6999202.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: [
      'Aide financière d\'urgence',
      'Support pour le transport médical',
      'Assistance pour l\'accès au logement',
      'Aide aux démarches administratives',
    ],
  },
  {
    icon: Utensils,
    title: 'Programme nutritionnel',
    description: 'Éducation et soutien nutritionnel adapté aux besoins spécifiques des enfants drépanocytaires.',
    image: 'https://images.pexels.com/photos/6999090/pexels-photo-6999090.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: [
      'Consultations diététiques spécialisées',
      'Kits alimentaires enrichis',
      'Ateliers de cuisine thérapeutique',
      'Formation à l\'hygiène alimentaire',
    ],
  },
];

export default function ActionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-blue-50">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Nos actions concrètes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez comment nous accompagnons au quotidien les enfants drépanocytaires 
            et leurs familles à travers des programmes adaptés et des interventions ciblées.
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
                      alt={action.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        <Icon className="h-6 w-6 text-red-600" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {action.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {action.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Nos interventions :</h4>
                      <ul className="space-y-2">
                        {action.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
          <h2 className="text-3xl font-bold mb-8">Notre impact en chiffres</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-red-100">Enfants accompagnés</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">200+</div>
              <div className="text-red-100">Familles formées</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">1,500+</div>
              <div className="text-red-100">Consultations médicales</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-red-100">Écoles sensibilisées</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}