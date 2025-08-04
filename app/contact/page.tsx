'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with EmailJS or form handling service
    alert(t('contact.formSuccess'));
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
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
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
                  {t('contact.form.title')}
                </h2>
                <p className="text-gray-600">
                  {t('contact.form.subtitle')}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.name')} *
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
                      {t('contact.form.email')} *
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
                    {t('contact.form.subject')} *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  >
                    <option value="">{t('contact.form.subjectPlaceholder')}</option>
                    <option value="aide">{t('contact.form.subjects.help')}</option>
                    <option value="benevolat">{t('contact.form.subjects.volunteer')}</option>
                    <option value="partenariat">{t('contact.form.subjects.partnership')}</option>
                    <option value="don">{t('contact.form.subjects.donation')}</option>
                    <option value="information">{t('contact.form.subjects.information')}</option>
                    <option value="autre">{t('contact.form.subjects.other')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>{t('contact.form.sendButton')}</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {t('contact.info.title')}
                </h2>
                <p className="text-gray-600">
                  {t('contact.info.subtitle')}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <Mail className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('contact.info.email')}</h3>
                    <p className="text-gray-600">contact@voixdesdrepano.org</p>
                    <p className="text-gray-600">urgence@voixdesdrepano.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <Phone className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('contact.info.phone')}</h3>
                    <p className="text-gray-600">+243 810 602 540</p>
                    <p className="text-gray-500 text-sm">{t('contact.info.phoneHours')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <MessageSquare className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <p className="text-gray-600">+243 810 602 540</p>
                    <p className="text-gray-500 text-sm">{t('contact.info.whatsappHours')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <MapPin className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('contact.info.address')}</h3>
                    <p className="text-gray-600">
                      {t('contact.info.addressDetails')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="font-semibold text-red-900 mb-3">{t('contact.emergency.title')}</h3>
                <p className="text-red-700 text-sm leading-relaxed">
                  {t('contact.emergency.description')}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('contact.map.title')}</h2>
            <p className="text-gray-600">{t('contact.map.subtitle')}</p>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto" />
                <p className="text-gray-500">{t('contact.map.placeholder')}</p>
                <p className="text-sm text-gray-400">{t('contact.map.address')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-8">{t('contact.hours.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{t('contact.hours.office.title')}</h3>
              <p className="text-blue-100">{t('contact.hours.office.weekdays')}</p>
              <p className="text-blue-100">{t('contact.hours.office.saturday')}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{t('contact.hours.care.title')}</h3>
              <p className="text-blue-100">{t('contact.hours.care.weekdays')}</p>
              <p className="text-blue-100">{t('contact.hours.care.sunday')}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{t('contact.hours.emergency.title')}</h3>
              <p className="text-blue-100">{t('contact.hours.emergency.whatsapp')}</p>
              <p className="text-blue-100">{t('contact.hours.emergency.line')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}