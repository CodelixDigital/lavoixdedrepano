import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Mama Célestine',
    role: 'Mère de Joseph, 12 ans',
    image: 'https://images.pexels.com/photos/8090033/pexels-photo-8090033.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Avant de connaître La Voix des Drépano, je me sentais seule face à la maladie de mon fils. Grâce à eux, Joseph va mieux, il retourne à l\'école et moi j\'ai appris à gérer ses crises. Ils nous ont redonné espoir.',
    impact: 'Joseph a pu reprendre sa scolarité et n\'a plus eu de crise majeure depuis 8 mois.',
  },
  {
    name: 'Dr. Augustin Mwanza',
    role: 'Pédiatre, Hôpital de Kinshasa',
    image: 'https://images.pexels.com/photos/6749831/pexels-photo-6749831.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'La collaboration avec La Voix des Drépano a transformé notre approche de prise en charge. Leurs programmes de formation nous ont permis d\'améliorer significativement nos protocoles de soins.',
    impact: 'Réduction de 40% des hospitalisations d\'urgence grâce aux programmes de prévention.',
  },
  {
    name: 'Grâce Mukala',
    role: 'Ancienne bénéficiaire, aujourd\'hui bénévole',
    image: 'https://images.pexels.com/photos/7551462/pexels-photo-7551462.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'J\'ai grandi avec la drépanocytose et La Voix des Drépano m\'a accompagnée de mes 8 ans jusqu\'à aujourd\'hui. Maintenant, c\'est à mon tour d\'aider d\'autres enfants et familles.',
    impact: 'Diplômée universitaire, Grâce aide maintenant 15 familles par mois.',
  },
  {
    name: 'Papa Fortunat',
    role: 'Père de jumelles drépanocytaires',
    image: 'https://images.pexels.com/photos/8090033/pexels-photo-8090033.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Mes filles Esther et Ruth vont à l\'école normalement grâce au soutien de l\'organisation. Le suivi médical régulier et l\'aide scolaire ont changé notre vie de famille.',
    impact: 'Les jumelles sont désormais parmi les meilleures élèves de leur classe.',
  },
  {
    name: 'Sarah Nkomo',
    role: 'Institutrice, École Primaire Bondeko',
    image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Les formations de La Voix des Drépano nous ont appris à mieux comprendre et accompagner les élèves drépanocytaires. Nous savons maintenant comment adapter notre enseignement.',
    impact: 'Amélioration de 60% du taux de présence des élèves drépanocytaires.',
  },
  {
    name: 'Michel Kahindo',
    role: 'Adolescent drépanocytaire, 16 ans',
    image: 'https://images.pexels.com/photos/8090033/pexels-photo-8090033.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Grâce au soutien psychologique et aux groupes de parole, j\'ai appris à vivre avec ma maladie sans honte. Je rêve maintenant de devenir médecin pour aider d\'autres enfants comme moi.',
    impact: 'Michel prépare son baccalauréat et aspire à des études de médecine.',
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-blue-50">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Témoignages
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les histoires inspirantes des familles, enfants et professionnels 
            que nous accompagnons dans leur parcours face à la drépanocytose.
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
                    <p className="text-gray-600">{testimonial.role}</p>
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
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium text-green-800">Impact concret :</span>
                  </div>
                  <p className="text-green-700 text-sm">{testimonial.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-6">Votre histoire peut inspirer</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Si vous avez été touché par nos actions ou si vous souhaitez partager votre expérience 
            avec la drépanocytose, contactez-nous.
          </p>
          <button className="btn-primary">
            Partager mon témoignage
          </button>
        </div>
      </section>
    </div>
  );
}