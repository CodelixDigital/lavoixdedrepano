'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with EmailJS or form handling service
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-blue-50">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question, 
            demande d'aide ou pour rejoindre notre mission.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-600">
                  Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Choisissez un sujet</option>
                    <option value="aide">Demande d'aide</option>
                    <option value="benevolat">Devenir bénévole</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="don">Question sur les dons</option>
                    <option value="information">Demande d'information</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Décrivez votre demande ou question..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Envoyer le message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Informations de contact
                </h2>
                <p className="text-gray-600">
                  Plusieurs moyens pour nous joindre selon vos préférences.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <Mail className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">contact@voixdesdrepano.org</p>
                    <p className="text-gray-600">urgence@voixdesdrepano.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <Phone className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                    <p className="text-gray-600">+243 xxx xxx xxx</p>
                    <p className="text-gray-500 text-sm">Lundi - Vendredi : 8h - 17h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <MessageSquare className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <p className="text-gray-600">+243 xxx xxx xxx</p>
                    <p className="text-gray-500 text-sm">Disponible 24h/24 pour les urgences</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <MapPin className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      Avenue de la Paix, Commune de Gombe<br />
                      Kinshasa, République Démocratique du Congo
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="font-semibold text-red-900 mb-3">Contact d'urgence</h3>
                <p className="text-red-700 text-sm leading-relaxed">
                  En cas de crise drépanocytaire urgente, contactez immédiatement notre ligne 
                  WhatsApp disponible 24h/24 ou rendez-vous à l'hôpital le plus proche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nous trouver</h2>
            <p className="text-gray-600">Notre bureau principal à Kinshasa</p>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto" />
                <p className="text-gray-500">Carte interactive à intégrer</p>
                <p className="text-sm text-gray-400">Avenue de la Paix, Gombe, Kinshasa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-8">Horaires d'ouverture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Bureau administratif</h3>
              <p className="text-blue-100">Lundi - Vendredi : 8h - 17h</p>
              <p className="text-blue-100">Samedi : 8h - 12h</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Centre de soins</h3>
              <p className="text-blue-100">Lundi - Samedi : 7h - 19h</p>
              <p className="text-blue-100">Dimanche : Urgences uniquement</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Urgences</h3>
              <p className="text-blue-100">WhatsApp : 24h/24, 7j/7</p>
              <p className="text-blue-100">Ligne dédiée aux crises</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}