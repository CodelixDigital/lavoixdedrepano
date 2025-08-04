import { AlertCircle, Heart, Users, TrendingUp, Stethoscope } from 'lucide-react';

const symptoms = [
  'Douleurs intenses (crises vaso-occlusives)',
  'Anémie chronique et fatigue',
  'Infections respiratoires fréquentes',
  'Retard de croissance',
  'Problèmes oculaires',
  'Complications cardiaques',
];

const treatments = [
  {
    title: 'Hydroxyurée',
    description: 'Médicament qui réduit la fréquence des crises douloureuses',
  },
  {
    title: 'Transfusions sanguines',
    description: 'Pour traiter l\'anémie sévère et prévenir certaines complications',
  },
  {
    title: 'Antibiotiques prophylactiques',
    description: 'Prévention des infections chez les jeunes enfants',
  },
  {
    title: 'Acide folique',
    description: 'Supplément pour soutenir la production de globules rouges',
  },
];

export default function DrepanocytosePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-blue-50">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Comprendre la drépanocytose
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une maladie génétique qui touche principalement les populations d'origine africaine. 
            Informez-vous pour mieux comprendre et agir.
          </p>
        </div>
      </section>

      {/* What is Sickle Cell Disease */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Qu'est-ce que la drépanocytose ?
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  La drépanocytose est une maladie génétique héréditaire qui affecte l'hémoglobine, 
                  la protéine des globules rouges qui transporte l'oxygène dans le corps.
                </p>
                <p>
                  Les globules rouges normaux sont souples et ronds, ce qui leur permet de circuler 
                  facilement dans les vaisseaux sanguins. Chez les personnes atteintes de drépanocytose, 
                  les globules rouges deviennent rigides et prennent une forme de croissant ou de faucille.
                </p>
                <p>
                  Cette déformation entraîne des blocages dans la circulation sanguine, causant des 
                  douleurs intenses et des complications graves qui peuvent affecter tous les organes.
                </p>
              </div>
            </div>
            <div className="aspect-square">
              <img
                src="https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Recherche médicale"
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
            <h2 className="text-3xl font-bold mb-6">La drépanocytose en RDC</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              La République Démocratique du Congo est l'un des pays les plus touchés au monde par la drépanocytose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <TrendingUp className="h-12 w-12 text-red-200 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">2%</div>
              <div className="text-red-100">Population touchée</div>
              <div className="text-sm text-red-200 mt-2">Soit plus de 2 millions de personnes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Users className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">25%</div>
              <div className="text-red-100">Porteurs du trait</div>
              <div className="text-sm text-red-200 mt-2">De la population congolaise</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <AlertCircle className="h-12 w-12 text-yellow-200 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">300K</div>
              <div className="text-red-100">Nouveaux cas/an</div>
              <div className="text-sm text-red-200 mt-2">Naissances avec drépanocytose</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Heart className="h-12 w-12 text-green-200 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">80%</div>
              <div className="text-red-100">Mortalité évitable</div>
              <div className="text-sm text-red-200 mt-2">Avec une prise en charge adaptée</div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Symptômes et manifestations
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                La drépanocytose se manifeste par différents symptômes qui peuvent varier 
                en intensité d'une personne à l'autre.
              </p>
              <div className="space-y-4">
                {symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-yellow-600" />
                  <h3 className="text-lg font-semibold text-yellow-800">Important à retenir</h3>
                </div>
                <p className="text-yellow-700 leading-relaxed">
                  Les symptômes peuvent apparaître dès l'âge de 6 mois. Un diagnostic précoce 
                  et une prise en charge adaptée peuvent considérablement améliorer la qualité 
                  de vie et l'espérance de vie des enfants atteints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Traitements disponibles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bien qu'il n'existe pas de cure universelle, plusieurs traitements peuvent 
              aider à gérer la maladie et améliorer la qualité de vie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl card-hover">
                <div className="flex items-center space-x-4 mb-4">
                  <Stethoscope className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {treatment.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {treatment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-8">Prévention et dépistage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Conseil génétique</h3>
              <p className="text-blue-100">
                Information et accompagnement des couples sur les risques de transmission.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Stethoscope className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Dépistage néonatal</h3>
              <p className="text-blue-100">
                Test de dépistage dès la naissance pour un diagnostic précoce.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Sensibilisation</h3>
              <p className="text-blue-100">
                Éducation communautaire pour réduire la stigmatisation et améliorer la prise en charge.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}