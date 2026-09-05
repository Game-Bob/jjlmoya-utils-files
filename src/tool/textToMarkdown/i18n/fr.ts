import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextToMarkdownUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'convertisseur-texte-en-markdown';
const title = 'Convertisseur de Texte en Markdown en Ligne: Formater des Documents';
const description =
  'Transformez rapidement du texte brut en code Markdown. Convertissez paragraphes, titres et listes dans un format compatible avec GitHub, Reddit et les éditeurs MD.';

const faqData = [
  {
    question: 'Qu\'est-ce que le Markdown et à quoi sert-il ?',
    answer:
      'Le Markdown est un langage de balisage léger utilisé pour formater du texte à l\'aide d\'une syntaxe de texte brut. Il est largement utilisé sur des plateformes comme GitHub, Reddit, Slack et dans les générateurs de sites statiques car il est facile à lire et à écrire.'
  },
  {
    question: 'Mon texte est-il en sécurité pendant la conversion ?',
    answer:
      'Oui, 100 % sûr. La conversion est effectuée entièrement dans votre navigateur à l\'aide de JavaScript. Aucune information n\'est envoyée à nos serveurs, garantissant que vos documents restent privés.'
  },
  {
    question: 'Comment sont convertis les titres et les listes ?',
    answer:
      'Notre outil identifie la structure de base du texte. S\'il détecte des lignes isolées avant des paragraphes, il peut les traiter comme des titres. Les lignes commençant par des tirets ou des chiffres sont formatées comme des listes Markdown standard.'
  },
  {
    question: 'Puis-je utiliser cet outil pour des tableaux ou du code complexes ?',
    answer:
      'Cet outil est conçu pour le formatage de texte de base (paragraphes, listes, gras, italique). Pour des structures très complexes comme des tableaux à plusieurs colonnes, un ajustement manuel dans le Markdown généré peut être nécessaire.'
  },
];

const howToData = [
  {
    name: 'Collez votre texte',
    text: 'Insérez le texte brut que vous souhaitez formater dans le champ source.'
  },
  {
    name: 'Conversion automatique',
    text: 'L\'outil traite le texte et applique la syntaxe Markdown aux différents éléments identifiés.'
  },
  {
    name: 'Copiez ou téléchargez',
    text: 'Cliquez sur "Copier le résultat" ou "Télécharger .md" pour obtenir votre fichier formaté.'
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

export const content: ToolLocaleContent<TextToMarkdownUI> = {
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
      text: 'Pourquoi convertir votre texte en Markdown ?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Si vous êtes développeur, blogueur ou rédacteur technique, vous utilisez probablement le <strong>Markdown</strong> quotidiennement. Convertir votre <strong>texte brut en Markdown</strong> vous permet de conserver une structure propre qui s\'exporte facilement en HTML, PDF ou directement vers des plateformes comme WordPress et des générateurs de sites statiques.'
    },
    {
      type: 'title',
      text: 'Confidentialité Totale: Conversion 100 % Locale',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'La plupart des convertisseurs en ligne traitent votre texte sur leurs serveurs. Notre <strong>convertisseur de texte en Markdown</strong> s\'exécute entièrement dans votre navigateur. Vos données ne quittent jamais votre ordinateur, ce qui le rend idéal pour la rédaction de documents internes, de notes de réunion ou d\'idées personnelles.'
    },
    {
      type: 'title',
      text: 'Fonctionnalités Phares',
      level: 3
    },
    {
      type: 'list',
      items: [
        'Identification automatique des <strong>en-têtes et titres</strong>.',
        'Conversion des <strong>listes à puces et numérotées</strong>.',
        'Prise en charge du formatage de base comme le <strong>gras et l\'italique</strong>.',
        'Exportation immédiate en <strong>fichier .md</strong>.',
      ]
    },
  ],
  ui: {
    labelInput: 'Texte Brut',
    labelOutput: 'Markdown Formaté',
    placeholderInput: 'Collez votre texte ici...',
    placeholderOutput: 'Le code Markdown généré apparaîtra ici...',
    btnConvert: 'Convertir en Markdown',
    btnDownload: 'Télécharger .md',
    btnCopy: 'Copier le résultat',
    btnClear: 'Tout effacer',
    toastCopied: 'Code Markdown copié !',
    toastDownloaded: 'Téléchargement du fichier .md...',
    labelHint: 'Collez le contenu et vérifiez le Markdown converti directement dans votre navigateur.',
  }
};
