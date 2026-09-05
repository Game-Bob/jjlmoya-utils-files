import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FileSizeConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'convertisseur-taille-fichier';
const title = 'Convertisseur et Visualiseur de Taille de Fichier: Binaire et Décimal';
const description =
  'Convertissez instantanément entre les unités de taille de fichier. Calculez les temps de téléchargement et visualisez l\'occupation du stockage sur vos appareils. Traitement 100 % local.';

const faqData = [
  {
    question: 'Quelle est la différence entre le décimal (ko) et le binaire (Kio) ?',
    answer:
      'Le système décimal utilise des puissances de 1000 (ko, Mo, Go), tandis que le binaire utilise des puissances de 1024 (Kio, Mio, Gio). C\'est pourquoi un disque de \" 1 Go \" semble plus petit sur votre ordinateur: les fabricants utilisent le décimal, mais les systèmes d\'exploitation utilisent le binaire.',
  },
  {
    question: 'Mes données sont-elles en sécurité avec cet outil ?',
    answer:
      'Absolument. Tous les calculs s\'effectuent entièrement dans votre navigateur via JavaScript. Aucune donnée n\'est envoyée à nos serveurs. Vos fichiers et vos valeurs ne quittent jamais votre ordinateur.',
  },
  {
    question: 'Puis-je télécharger des fichiers pour voir leur taille ?',
    answer:
      'Oui ! Vous pouvez glisser-déposer un fichier directement dans la zone de saisie, et l\'outil lira automatiquement sa taille. Le fichier lui-même n\'est jamais téléchargé ; seule sa taille est utilisée localement.',
  },
  {
    question: 'Pourquoi mon disque externe de 1 To affiche-t-il moins d\'espace sur mon ordinateur ?',
    answer:
      'Les disques externes sont commercialisés en utilisant le système décimal (1 To = 1 000 000 000 000 octets), mais votre système d\'exploitation les affiche en binaire (1 Tio = 1 099 511 627 776 octets). Cet outil vous aide à comprendre les deux perspectives.',
  },
  {
    question: 'Quelle est la précision du calcul du temps de téléchargement ?',
    answer:
      'Le calcul est basé sur des vitesses de réseau idéales. Les vitesses réelles varient en fonction de la congestion du réseau, de la distance et du matériel. Utilisez-les comme des estimations approximatives, pas comme des garanties.',
  },
];

const howToData = [
  {
    name: 'Saisissez une taille de fichier',
    text: 'Tapez un nombre dans le champ de saisie (par exemple, \" 500 \" ou \" 1,5 \") et sélectionnez l\'unité (ko, Mo, Go, etc.).',
  },
  {
    name: 'Choisissez votre standard',
    text: 'Basculez entre Décimal (standard commercial) et Binaire (standard informatique) pour voir comment la valeur change.',
  },
  {
    name: 'Visualisez les conversions instantanées',
    text: 'Toutes les unités, des octets aux pétaoctets, apparaissent instantanément. Cliquez sur n\'importe quel bloc pour copier sa valeur dans votre presse-papiers.',
  },
  {
    name: 'Visualisez le contexte',
    text: 'Sous les conversions, voyez combien de temps prennent les téléchargements sur différents réseaux et l\'espace que le fichier occupe sur différents appareils.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<FileSizeConverterUI> = {
  slug,
  title,
  description,
  bibliography,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Pourquoi convertir les tailles de fichiers ? Comprendre Décimal vs Binaire',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lorsque vous achetez un disque de <strong>\" 1 To \"</strong>, les fabricants le mesurent en décimal (1 000 Go). Mais votre système d\'exploitation l\'affiche en binaire (1 024 Gio = environ 931 Go). Cette différence déroute souvent les utilisateurs. Un <strong>convertisseur de taille de fichier</strong> comble cet écart en vous montrant exactement ce que vos fichiers signifient dans n\'importe quelle unité.',
    },
    {
      type: 'title',
      text: 'Contexte réel: Téléchargements et Stockage',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Savoir qu\'un fichier fait \" 50 Mo \" ne signifie rien sans contexte. Combien de temps pour le télécharger en 4G ? Quel espace sur un iPhone ? Notre outil répond instantanément avec des calculs en direct pour les réseaux et appareils réels.',
    },
    {
      type: 'title',
      text: 'Le coût caché: Les mathématiques du stockage',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Un disque externe de \" 1 To \" fait en réalité <strong>environ 931 Gio</strong> (l\'astuce du fabricant)',
        'Un film 4K (environ 100 Go) prend <strong>4 secondes</strong> sur la fibre mais <strong>13 minutes</strong> en 4G',
        'Un iPhone de \" 256 Go \" stocke moins car l\'OS utilise de l\'espace et le calcul binaire accentue la différence',
      ],
    },
    {
      type: 'title',
      text: 'Une précision technique digne de confiance',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Toutes les conversions suivent les <strong>normes NIST</strong>: le décimal (SI) utilise 1000 comme base, le binaire (IEC) utilise 1024. Les calculs s\'effectuent <strong>100 % localement</strong> - aucun téléchargement, aucun serveur, confidentialité totale.',
    },
  ],
  ui: {
    inputPlaceholder: 'Entrez un nombre (ex: 1,5 ou 500)',
    selectUnit: 'Unité',
    standardLabel: 'Standard :',
    decimalOption: 'Décimal',
    binaryOption: 'Binaire',
    conversionTitle: 'Conversions',
    networkSpeedsTitle: 'Temps de Téléchargement',
    deviceStorageTitle: 'Impact sur le Stockage de l\'Appareil',
    copyFeedback: 'Copié !',
    dragDropText: 'Déposez un fichier ici pour lire sa taille',
  },
};
