import { Heart, Users, Target, Award } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'Nous agissons avec empathie et bienveillance envers chaque enfant et famille que nous accompagnons.',
  },
  {
    icon: Users,
    title: 'Solidarité',
    description: 'Nous croyons en la force du collectif pour surmonter les défis de la drépanocytose.',
  },
  {
    icon: Target,
    title: 'Engagement',
    description: 'Nous nous engageons durablement auprès des communautés pour un impact réel et mesurable.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Nous visons l\'excellence dans nos services et notre accompagnement médico-social.',
  },
];

const team = [
  {
    name: 'Dr. Marie Kabongo',
    role: 'Directrice médicale',
    image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Spécialiste en hématologie pédiatrique avec 20 ans d\'expérience.',
  },
  {
    name: 'Jean-Pierre Mukendi',
    role: 'Coordinateur terrain',
    image: 'https://images.pexels.com/photos/8090033/pexels-photo-8090033.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Responsable des programmes communautaires et de sensibilisation.',
  },
  {
    name: 'Sarah Mbuyi',
    role: 'Psychologue',
    image: 'https://images.pexels.com/photos/7551462/pexels-photo-7551462.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Spécialisée dans l\'accompagnement psychologique des enfants malades.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-blue-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                À propos de La Voix des Drépano
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Depuis 2010, nous sommes une organisation humanitaire dédiée à l'amélioration 
                de la qualité de vie des enfants atteints de drépanocytose en République Démocratique du Congo.
              </p>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/6999303/pexels-photo-6999303.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Équipe médicale avec des enfants"
                className="w-full h-full object-cover"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre histoire</h2>
            </div>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                La Voix des Drépano est née de la volonté de Dr. Marie Kabongo et d'un groupe de parents 
                d'enfants drépanocytaires de créer un réseau de soutien et d'accompagnement adapté aux 
                réalités congolaises.
              </p>
              
              <p>
                Confrontés au manque d'information, aux difficultés d'accès aux soins spécialisés et 
                à la stigmatisation sociale, nous avons décidé d'agir pour que chaque enfant atteint 
                de drépanocytose puisse grandir dans la dignité et l'espoir.
              </p>
              
              <p>
                Aujourd'hui, notre organisation compte plus de 50 bénévoles actifs et a accompagné 
                plus de 500 enfants et leurs familles à travers tout le territoire congolais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nos valeurs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre action quotidienne au service des enfants drépanocytaires.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre équipe</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des professionnels dévoués qui mettent leur expertise au service des enfants drépanocytaires.
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
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
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