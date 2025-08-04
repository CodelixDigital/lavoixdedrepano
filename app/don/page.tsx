'use client';

import { useState } from 'react';
import { Heart, CreditCard, Smartphone, Check } from 'lucide-react';

const donationAmounts = [25, 50, 100, 250, 500, 1000];

const donationTypes = [
  {
    title: 'Don ponctuel',
    description: 'Un don unique pour soutenir immédiatement nos actions',
    icon: Heart,
  },
  {
    title: 'Don mensuel',
    description: 'Un soutien régulier qui nous permet de planifier nos interventions',
    icon: Heart,
  },
];

export default function DonationPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('ponctuel');
  const [paymentMethod, setPaymentMethod] = useState('stripe');

  const handleDonation = () => {
    // TODO: Integrate with Stripe or Flutterwave
    alert('Intégration de paiement à venir. Merci pour votre intention de don !');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-blue-50">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Faire un don
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Votre générosité peut transformer la vie d'un enfant drépanocytaire. 
            Chaque contribution, quelle que soit sa taille, fait une différence réelle.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="space-y-8">
              {/* Donation Type */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Type de don</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {donationTypes.map((type, index) => {
                    const Icon = type.icon;
                    return (
                      <div
                        key={index}
                        className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                          donationType === (index === 0 ? 'ponctuel' : 'mensuel')
                            ? 'border-red-500 bg-red-50'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                        onClick={() => setDonationType(index === 0 ? 'ponctuel' : 'mensuel')}
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <Icon className={`h-6 w-6 ${
                            donationType === (index === 0 ? 'ponctuel' : 'mensuel')
                              ? 'text-red-600'
                              : 'text-gray-400'
                          }`} />
                          <h3 className="font-semibold text-gray-900">{type.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm">{type.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Amount Selection */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Montant</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`p-4 rounded-lg border-2 font-semibold transition-all ${
                        selectedAmount === amount
                          ? 'border-red-500 bg-red-50 text-red-600'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="mt-4">
                  <input
                    type="number"
                    placeholder="Autre montant"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Méthode de paiement</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                      paymentMethod === 'stripe'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                    onClick={() => setPaymentMethod('stripe')}
                  >
                    <div className="flex items-center space-x-3">
                      <CreditCard className={`h-6 w-6 ${
                        paymentMethod === 'stripe' ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                      <h3 className="font-semibold text-gray-900">Carte bancaire</h3>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">Paiement sécurisé via Stripe</p>
                  </div>
                  
                  <div
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                      paymentMethod === 'flutterwave'
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                    onClick={() => setPaymentMethod('flutterwave')}
                  >
                    <div className="flex items-center space-x-3">
                      <Smartphone className={`h-6 w-6 ${
                        paymentMethod === 'flutterwave' ? 'text-green-600' : 'text-gray-400'
                      }`} />
                      <h3 className="font-semibold text-gray-900">Mobile Money</h3>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">Paiement via Flutterwave</p>
                  </div>
                </div>
              </div>

              {/* Donation Impact */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Impact de votre don</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-blue-800">$25 : Une consultation médicale pour un enfant</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-blue-800">$50 : Médicaments pour un mois</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-blue-800">$100 : Kit scolaire pour une année</span>
                  </div>
                </div>
              </div>

              {/* Donation Button */}
              <button
                onClick={handleDonation}
                className="w-full btn-primary text-xl py-4"
              >
                Faire un don de ${selectedAmount || customAmount || '...'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="section-padding bg-gray-50">
        <div className="container-max max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Sécurité et transparence</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Tous nos paiements sont sécurisés et nous publions régulièrement des rapports 
            financiers transparents sur l'utilisation des dons reçus.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-green-100 p-3 rounded-full">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <span className="font-medium text-gray-900">Paiements sécurisés</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-blue-100 p-3 rounded-full">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <span className="font-medium text-gray-900">Impact direct</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-yellow-100 p-3 rounded-full">
                <CreditCard className="h-6 w-6 text-yellow-600" />
              </div>
              <span className="font-medium text-gray-900">Transparence totale</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}