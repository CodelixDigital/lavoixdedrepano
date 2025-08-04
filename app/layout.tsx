import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'La Voix des Drépano - Accompagner les enfants drépanocytaires en RDC',
  description: 'Organisation humanitaire dédiée à l\'accompagnement et au soutien des enfants atteints de drépanocytose en République Démocratique du Congo.',
  keywords: 'drépanocytose, RDC, enfants, humanitaire, santé, Congo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}