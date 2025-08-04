import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

const news = [
  {
    id: 1,
    title: 'Ouverture du nouveau centre de soins à Kinshasa',
    excerpt: 'Un nouveau centre spécialisé dans la prise en charge de la drépanocytose vient d\'ouvrir ses portes dans la capitale.',
    date: '15 Janvier 2025',
    image: 'https://images.pexels.com/photos/6749831/pexels-photo-6749831.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    title: 'Campagne de sensibilisation dans les écoles',
    excerpt: 'Notre équipe sensibilise les écoliers et enseignants sur la drépanocytose dans 20 écoles de Kinshasa.',
    date: '10 Janvier 2025',
    image: 'https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    title: 'Formation des professionnels de santé',
    excerpt: 'Workshop de formation continue pour améliorer la prise en charge des patients drépanocytaires.',
    date: '8 Janvier 2025',
    image: 'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function NewsSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Dernières actualités
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Suivez nos dernières actions et événements pour rester informé de notre impact sur le terrain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <article key={article.id} className="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
              <div className="aspect-video">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <time>{article.date}</time>
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

        <div className="text-center mt-12">
          <Link href="/actualites" className="btn-outline">
            Voir toutes les actualités
          </Link>
        </div>
      </div>
    </section>
  );
}