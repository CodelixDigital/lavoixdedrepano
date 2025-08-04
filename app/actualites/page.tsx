import Link from 'next/link';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const allNews = [
  {
    id: 1,
    title: 'Ouverture du nouveau centre de soins à Kinshasa',
    excerpt: 'Un nouveau centre spécialisé dans la prise en charge de la drépanocytose vient d\'ouvrir ses portes dans la capitale congolaise.',
    content: 'Le nouveau centre de soins spécialisé de Kinshasa marque une étape importante...',
    date: '15 Janvier 2025',
    category: 'Infrastructure',
    image: 'https://images.pexels.com/photos/6749831/pexels-photo-6749831.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    id: 2,
    title: 'Campagne de sensibilisation dans les écoles',
    excerpt: 'Notre équipe sensibilise les écoliers et enseignants sur la drépanocytose dans 20 écoles de Kinshasa.',
    content: 'La campagne de sensibilisation menée dans les écoles de Kinshasa...',
    date: '10 Janvier 2025',
    category: 'Sensibilisation',
    image: 'https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    id: 3,
    title: 'Formation des professionnels de santé',
    excerpt: 'Workshop de formation continue pour améliorer la prise en charge des patients drépanocytaires.',
    content: 'Le workshop de formation des professionnels de santé...',
    date: '8 Janvier 2025',
    category: 'Formation',
    image: 'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    id: 4,
    title: 'Partenariat avec l\'Université de Kinshasa',
    excerpt: 'Signature d\'un partenariat pour la recherche sur la drépanocytose et la formation médicale.',
    content: 'Le partenariat avec l\'Université de Kinshasa...',
    date: '5 Janvier 2025',
    category: 'Partenariat',
    image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    id: 5,
    title: 'Distribution de kits d\'urgence',
    excerpt: 'Distribution de 200 kits d\'urgence aux familles les plus vulnérables de Lubumbashi.',
    content: 'La distribution des kits d\'urgence à Lubumbashi...',
    date: '3 Janvier 2025',
    category: 'Aide d\'urgence',
    image: 'https://images.pexels.com/photos/6999202/pexels-photo-6999202.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    id: 6,
    title: 'Journée mondiale de la drépanocytose',
    excerpt: 'Retour sur notre participation à la Journée mondiale de la drépanocytose le 19 juin dernier.',
    content: 'La Journée mondiale de la drépanocytose...',
    date: '20 Décembre 2024',
    category: 'Événement',
    image: 'https://images.pexels.com/photos/6999303/pexels-photo-6999303.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
];

const categories = ['Toutes', 'Infrastructure', 'Sensibilisation', 'Formation', 'Partenariat', 'Aide d\'urgence', 'Événement'];

export default function NewsPage() {
  const featuredNews = allNews.find(news => news.featured);
  const regularNews = allNews.filter(news => !news.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-blue-50">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Actualités
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Suivez nos dernières actions, événements et nouvelles pour rester informé 
            de notre impact auprès des enfants drépanocytaires.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-max">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredNews && (
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="bg-gray-50 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-square">
                  <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      À la une
                    </span>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <time>{featuredNews.date}</time>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                    {featuredNews.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {featuredNews.excerpt}
                  </p>
                  
                  <Link 
                    href={`/actualites/${featuredNews.id}`}
                    className="inline-flex items-center space-x-2 text-red-600 font-medium hover:text-red-700 transition-colors"
                  >
                    <span>Lire l'article complet</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Regular News Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Toutes nos actualités
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((article) => (
              <article key={article.id} className="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
                <div className="aspect-video">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Tag className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-blue-600 font-medium">{article.category}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <time>{article.date}</time>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <Link 
                    href={`/actualites/${article.id}`}
                    className="inline-flex items-center space-x-2 text-red-600 font-medium hover:text-red-700 transition-colors"
                  >
                    <span>Lire la suite</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-6">Restez informé</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités 
            et ne rien manquer de nos actions sur le terrain.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="btn-primary">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}