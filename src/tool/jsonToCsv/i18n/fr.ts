import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonToCsvUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'convertisseur-json-en-csv';
const title = 'Convertisseur JSON en CSV en Ligne Gratuit: Exporter vers Excel';
const description =
  'Transformez vos fichiers JSON en tableaux CSV rapidement et facilement. Idéal pour les analystes de données qui ont besoin d\'ouvrir des fichiers JSON dans Excel ou Google Sheets.';

const faqData = [
  {
    question: 'Comment convertir du JSON en CSV pour Excel ?',
    answer:
      'Il vous suffit de coller votre code JSON ou de télécharger votre fichier dans notre outil. Le système traite automatiquement la structure des données et génère un fichier CSV que vous pouvez télécharger et ouvrir directement dans Microsoft Excel ou Google Sheets.'
  },
  {
    question: 'Est-il sûr de convertir mes données sur ce site ?',
    answer:
      'Oui, 100 % sûr. La conversion est effectuée entièrement dans votre navigateur à l\'aide de JavaScript. Aucune donnée n\'est envoyée à nos serveurs, ce qui garantit que vos informations restent privées et protégées.'
  },
  {
    question: 'Que se passe-t-il si mon JSON est imbriqué ?',
    answer:
      'Notre convertisseur de base est optimisé pour les tableaux d\'objets. Si vous avez une imbrication très profonde, l\'outil tentera d\'aplatir le premier niveau de propriétés pour assurer un tableau lisible pour Excel.'
  },
  {
    question: 'Puis-je copier le CSV directement au lieu de le télécharger ?',
    answer:
      'Bien sûr. En plus du bouton "Télécharger le CSV", vous avez une option "Copier le résultat" pour coller le contenu directement dans n\'importe quel éditeur de texte ou tableur.'
  },
];

const howToData = [
  {
    name: 'Collez votre JSON',
    text: 'Insérez le code JSON ou téléchargez le fichier .json dans la zone de saisie.'
  },
  {
    name: 'Traitez les données',
    text: 'L\'outil identifie automatiquement les champs et la structure pour les organiser en lignes et colonnes.'
  },
  {
    name: 'Téléchargez ou copiez',
    text: 'Cliquez sur "Télécharger le CSV" pour enregistrer le fichier ou sur "Copier le résultat" pour l\'utiliser immédiatement.'
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text
  }))
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr'
};

export const content: ToolLocaleContent<JsonToCsvUI> = {
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
      text: 'Pourquoi convertir du JSON en CSV pour votre analyse de données ?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Le JSON est le format standard pour les API modernes, mais il n\'est pas le plus facile à analyser humainement. Un <strong>convertisseur JSON en CSV</strong> vous permet de transformer des structures complexes en lignes et colonnes, facilitant la manipulation dans des outils puissants comme <strong>Microsoft Excel</strong>, Numbers ou Google Sheets.'
    },
    {
      type: 'title',
      text: 'Confidentialité Totale: Convertissez sans télécharger de fichiers',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'La plupart des convertisseurs en ligne téléchargent vos données sur un serveur. Notre outil est différent: la <strong>conversion est 100 % locale</strong>. En utilisant JavaScript dans votre navigateur, les données ne quittent jamais votre ordinateur. C\'est vital si vous travaillez avec des informations sensibles, des listes de clients ou des rapports internes à l\'entreprise.'
    },
    {
      type: 'title',
      text: 'Conseils Techniques pour une conversion parfaite',
      level: 3
    },
    {
      type: 'list',
      items: [
        'Assurez-vous que votre JSON est un <strong>tableau d\'objets</strong> (par exemple, [{}, {}]).',
        'Vérifiez que tous les objets ont des propriétés similaires pour garder les colonnes CSV cohérentes.',
        'Si vous avez des caractères spéciaux, notre CSV est exporté en <strong>UTF-8</strong> pour éviter les problèmes dans Excel.',
      ]
    },
  ],
  ui: {
    statusWaiting: 'En attente de JSON valide',
    statusValid: 'JSON valide',
    statusInvalid: 'JSON invalide',
    labelFlatten: 'Aplatir les objets',
    zoneLabel: 'Collez votre JSON ici ou déposez un fichier',
    placeholderJson: '[{"id": 1, "name": "John", "details": {"age": 30}}]',
    btnCopyCsv: 'Copier le CSV',
    btnDownloadCsv: 'Télécharger Excel (CSV)',
    copyFeedback: 'Copié !'
  }
};
