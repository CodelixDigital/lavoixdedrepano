import Link from 'next/link';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import ArticleContent from './ArticleContent';

const allNews = [
  {
    id: 1,
    title: {
      fr: 'Ouverture du nouveau centre de soins à Kinshasa',
      en: 'Opening of new care center in Kinshasa',
    },
    excerpt: {
      fr: 'Un nouveau centre spécialisé dans la prise en charge de la drépanocytose vient d\'ouvrir ses portes dans la capitale congolaise.',
      en: 'A new center specialized in sickle cell disease care has just opened its doors in the Congolese capital.',
    },
    content: {
      fr: 'Le nouveau centre de soins spécialisé de Kinshasa marque une étape importante dans notre mission d\'accompagner les enfants drépanocytaires. Ce centre offre des consultations spécialisées, des examens hématologiques et une prise en charge complète des crises douloureuses.',
      en: 'The new specialized care center in Kinshasa marks an important step in our mission to support children with sickle cell disease. This center offers specialized consultations, hematological examinations and complete management of painful crises.',
    },
    date: '15 Janvier 2025',
    category: {
      fr: 'Infrastructure',
      en: 'Infrastructure',
    },
    image: '/docteur_et_medecine.jpg',
    featured: true,
  },
  {
    id: 2,
    title: {
      fr: 'Campagne de sensibilisation dans les écoles',
      en: 'Awareness campaign in schools',
    },
    excerpt: {
      fr: 'Notre équipe sensibilise les écoliers et enseignants sur la drépanocytose dans 20 écoles de Kinshasa.',
      en: 'Our team raises awareness among schoolchildren and teachers about sickle cell disease in 20 schools in Kinshasa.',
    },
    content: {
      fr: 'La campagne de sensibilisation menée dans les écoles de Kinshasa a permis de toucher plus de 5000 élèves et 200 enseignants. Cette initiative vise à combattre la stigmatisation et à informer les jeunes sur cette maladie génétique.',
      en: 'The awareness campaign carried out in Kinshasa schools reached more than 5,000 students and 200 teachers. This initiative aims to combat stigmatization and inform young people about this genetic disease.',
    },
    date: '10 Janvier 2025',
    category: {
      fr: 'Sensibilisation',
      en: 'Awareness',
    },
    image: '/campagne-sensibilisation-ecoles.jpeg',
    featured: false,
  },
  {
    id: 3,
    title: {
      fr: 'Formation des professionnels de santé',
      en: 'Training of health professionals',
    },
    excerpt: {
      fr: 'Workshop de formation continue pour améliorer la prise en charge des patients drépanocytaires.',
      en: 'Continuing education workshop to improve the care of sickle cell patients.',
    },
    content: {
      fr: 'Le workshop de formation des professionnels de santé a réuni 50 médecins et infirmiers de Kinshasa. Cette formation a permis d\'améliorer les compétences en matière de diagnostic et de prise en charge de la drépanocytose.',
      en: 'The health professionals training workshop brought together 50 doctors and nurses from Kinshasa. This training has improved skills in diagnosis and management of sickle cell disease.',
    },
    date: '8 Janvier 2025',
    category: {
      fr: 'Formation',
      en: 'Training',
    },
    image: '/docteur_et_medecine.jpg',
    featured: false,
  },
  {
    id: 4,
    title: {
      fr: 'Partenariat avec l\'Université de Kinshasa',
      en: 'Partnership with University of Kinshasa',
    },
    excerpt: {
      fr: 'Signature d\'un partenariat pour la recherche sur la drépanocytose et la formation médicale.',
      en: 'Signing of a partnership for research on sickle cell disease and medical training.',
    },
    content: {
      fr: 'Le partenariat avec l\'Université de Kinshasa ouvre de nouvelles perspectives pour la recherche sur la drépanocytose. Ce partenariat permettra de développer des programmes de formation et des projets de recherche innovants.',
      en: 'The partnership with the University of Kinshasa opens new perspectives for research on sickle cell disease. This partnership will allow the development of training programs and innovative research projects.',
    },
    date: '5 Janvier 2025',
    category: {
      fr: 'Partenariat',
      en: 'Partnership',
    },
    image: '/docteur_et_medecine.jpg',
    featured: false,
  },
  {
    id: 5,
    title: {
      fr: 'Distribution de kits d\'urgence',
      en: 'Distribution of emergency kits',
    },
    excerpt: {
      fr: 'Distribution de 200 kits d\'urgence aux familles les plus vulnérables de Lubumbashi.',
      en: 'Distribution of 200 emergency kits to the most vulnerable families in Lubumbashi.',
    },
    content: {
      fr: 'La distribution des kits d\'urgence à Lubumbashi a permis d\'aider 200 familles en situation de précarité. Ces kits contiennent des médicaments essentiels, des suppléments nutritionnels et des informations sur la gestion de la maladie.',
      en: 'The distribution of emergency kits in Lubumbashi helped 200 families in precarious situations. These kits contain essential medicines, nutritional supplements and information on disease management.',
    },
    date: '3 Janvier 2025',
    category: {
      fr: 'Aide d\'urgence',
      en: 'Emergency Aid',
    },
    image: '/aide_sociales.jpg',
    featured: false,
  },
  {
    id: 6,
    title: {
      fr: 'Journée mondiale de la drépanocytose',
      en: 'World Sickle Cell Day',
    },
    excerpt: {
      fr: 'Retour sur notre participation à la Journée mondiale de la drépanocytose le 19 juin dernier.',
      en: 'Review of our participation in World Sickle Cell Day on June 19.',
    },
    content: {
      fr: 'La Journée mondiale de la drépanocytose a été l\'occasion de sensibiliser le public et de mobiliser les acteurs de la santé. Notre organisation a organisé des conférences, des dépistages gratuits et des activités de sensibilisation.',
      en: 'World Sickle Cell Day was an opportunity to raise public awareness and mobilize health stakeholders. Our organization organized conferences, free screenings and awareness activities.',
    },
    date: '20 Décembre 2024',
    category: {
      fr: 'Événement',
      en: 'Event',
    },
    image: '/journee_de_la_sensibilisation.jpg',
    featured: false,
  },
  {
    id: 7,
    title: {
      fr: 'Vernissage du livre : Le combat d\'une vie',
      en: 'Book launch: The fight of a lifetime',
    },
    excerpt: {
      fr: 'Lancement officiel du livre témoignage sur le combat contre la drépanocytose.',
      en: 'Official launch of the testimonial book on the fight against sickle cell disease.',
    },
    content: {
      fr: 'Le vernissage du livre "Le combat d\'une vie" a été un moment émotionnel et inspirant. Ce livre, écrit par des parents d\'enfants drépanocytaires, raconte les défis quotidiens, les espoirs et les victoires dans le combat contre cette maladie. L\'événement a réuni plus de 200 personnes et a permis de sensibiliser le public sur les réalités vécues par les familles touchées.',
      en: 'The book launch "The fight of a lifetime" was an emotional and inspiring moment. This book, written by parents of children with sickle cell disease, tells the daily challenges, hopes and victories in the fight against this disease. The event brought together more than 200 people and helped raise public awareness of the realities experienced by affected families.',
    },
    date: '18 Décembre 2024',
    category: {
      fr: 'Événement',
      en: 'Event',
    },
    image: '/vernissage_du_livre.jpeg',
    featured: false,
  },
];

// Generate static params for all news articles
export function generateStaticParams() {
  return allNews.map((article) => ({
    id: article.id.toString(),
  }));
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = allNews.find(news => news.id === parseInt(params.id));

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <Link href="/actualites" className="btn-primary">
            Retour aux actualités
          </Link>
        </div>
      </div>
    );
  }

  return <ArticleContent article={article} />;
} 