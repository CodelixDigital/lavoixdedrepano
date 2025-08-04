import Link from 'next/link';
import { ArrowRight, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-red-50 to-blue-50 section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Donnons de l'<span className="text-red-600">espoir</span> aux enfants drépanocytaires
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                En République Démocratique du Congo, nous accompagnons les enfants atteints de drépanocytose 
                et leurs familles pour un avenir plus lumineux et plus serein.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/don" className="btn-primary flex items-center justify-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>Faire un don</span>
              </Link>
              <Link href="/nos-actions" className="btn-outline flex items-center justify-center space-x-2">
                <span>Découvrir nos actions</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">500+</div>
                <div className="text-sm text-gray-600">Enfants accompagnés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15</div>
                <div className="text-sm text-gray-600">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">Bénévoles actifs</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6999202/pexels-photo-6999202.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Enfants souriants en Afrique"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <Heart className="h-8 w-8 text-red-600" />
                <div>
                  <div className="font-semibold text-gray-900">Notre mission</div>
                  <div className="text-sm text-gray-600">Espoir et soutien</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}