import Link from 'next/link';
import { Heart, Users } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="section-padding bg-blue-600 text-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Rejoignez notre cause
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Chaque geste compte. Votre soutien peut transformer la vie d'un enfant 
              drépanocytaire et de sa famille. Ensemble, construisons un avenir meilleur.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center space-y-4">
              <Heart className="h-12 w-12 text-red-300 mx-auto" />
              <h3 className="text-xl font-semibold">Faire un don</h3>
              <p className="text-blue-100 text-sm">Soutenez financièrement nos actions</p>
              <Link href="/don" className="btn-primary w-full block">
                Donner maintenant
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center space-y-4">
              <Users className="h-12 w-12 text-green-300 mx-auto" />
              <h3 className="text-xl font-semibold">Devenir bénévole</h3>
              <p className="text-blue-100 text-sm">Participez à nos missions sur le terrain</p>
              <Link href="/contact" className="btn-outline w-full block">
                Nous rejoindre
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}