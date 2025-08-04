import { Heart, Users, Stethoscope, GraduationCap } from 'lucide-react';

const missions = [
  {
    icon: Stethoscope,
    title: 'Soins médicaux',
    description: 'Accès aux traitements et suivi médical spécialisé pour les enfants drépanocytaires.',
  },
  {
    icon: GraduationCap,
    title: 'Soutien scolaire',
    description: 'Accompagnement éducatif pour permettre aux enfants de poursuivre leur scolarité.',
  },
  {
    icon: Users,
    title: 'Soutien familial',
    description: 'Aide et formation aux familles pour mieux comprendre et gérer la maladie.',
  },
  {
    icon: Heart,
    title: 'Soutien psychologique',
    description: 'Accompagnement émotionnel et social pour les enfants et leurs proches.',
  },
];

export default function MissionSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Notre mission humanitaire
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous œuvrons chaque jour pour améliorer la qualité de vie des enfants drépanocytaires 
            et de leurs familles à travers des actions concrètes et durables.
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