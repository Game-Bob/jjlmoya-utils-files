import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FormatStripperUI } from '../ui';

const slug = 'nettoyeur-format';
const title = 'Nettoyeur de Format de Texte';
const description =
  "Supprimez le formatage parasite de n'importe quel texte copié : espaces doubles, sauts de ligne intempestifs et caractères invisibles. Convertissez en majuscules ou minuscules en un clic.";

const faqData = [
  {
    question: 'Quels types de formatage cet outil supprime-t-il ?',
    answer:
      "Il supprime les espaces doubles, les tabulations, les sauts de ligne redondants et normalise la ponctuation pour qu'il n'y ait pas d'espaces avant les virgules ou les points. Le résultat est un texte brut propre, prêt à être collé dans n'importe quel document.",
  },
  {
    question: 'Puis-je normaliser les majuscules et minuscules ?',
    answer:
      "Oui. Les boutons MAJ et min convertissent tout le texte dans la casse souhaitée. C'est utile pour normaliser des titres, des listes de noms ou corriger des textes saisis accidentellement avec la touche Verr Maj activée.",
  },
  {
    question: 'Le texte est-il envoyé à un serveur ?',
    answer:
      "Non. Tout le traitement s'effectue localement dans votre navigateur. Votre contenu ne quitte jamais votre appareil.",
  },
  {
    question: 'Comment fonctionne le nettoyage automatique au collage ?',
    answer:
      "Lorsque vous collez du texte avec Ctrl+V, l'outil intercepte l'événement et applique le nettoyage avant d'insérer le texte dans l'éditeur. Le texte est propre dès le premier instant, sans aucune étape supplémentaire.",
  },
];

const howToData = [
  {
    name: 'Collez le texte',
    text: "Collez le contenu que vous souhaitez nettoyer dans la zone de texte. Le nettoyage est appliqué automatiquement au collage.",
  },
  {
    name: 'Appliquez les transformations optionnelles',
    text: "Si vous devez changer la casse, utilisez les boutons MAJ ou min dans la barre d'outils.",
  },
  {
    name: 'Copiez le résultat',
    text: "Cliquez sur le bouton Copier pour envoyer le texte propre dans votre presse-papiers.",
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<FormatStripperUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie',
  bibliography: [
    {
      name: 'ClipboardEvent.clipboardData — MDN Web Docs',
      url: 'https://developer.mozilla.org/fr/docs/Web/API/ClipboardEvent/clipboardData',
    },
    {
      name: 'String.prototype.replace() — MDN Web Docs',
      url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Le Problème du Texte avec Formatage Parasite',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Lorsque vous copiez du texte depuis un site web, un PDF ou un e-mail et que vous le collez dans Word, Google Docs ou n'importe quel éditeur, vous emportez avec lui un <strong>formatage invisible</strong> : gras, couleurs, polices, tabulations, espaces insécables et sauts de ligne intempestifs. Le résultat est un texte sale qu'il faut nettoyer manuellement caractère par caractère.",
    },
    {
      type: 'paragraph',
      html: "Ce nettoyeur intercepte le texte au moment du collage et applique automatiquement toutes les normalisations nécessaires : il <strong>réduit les espaces multiples</strong>, supprime les espaces avant les signes de ponctuation et produit un texte brut propre prêt à l'emploi.",
    },
    {
      type: 'stats',
      items: [
        { value: '100%', label: 'Privé et Local', icon: 'mdi:shield-check' },
        { value: '0s', label: 'Nettoyage Instantané', icon: 'mdi:lightning-bolt' },
        { value: 'Ctrl+V', label: 'Prêt à Coller', icon: 'mdi:content-paste' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Quand Utiliser un Nettoyeur de Format',
      level: 3,
    },
    {
      type: 'summary',
      title: "Cas d'utilisation fréquents",
      items: [
        "Copier du texte de sites web ou de PDF pour le coller dans des éditeurs ou des e-mails.",
        "Normaliser des documents rédigés par plusieurs auteurs avec des formats inconsistants.",
        "Préparer du contenu pour des systèmes n'acceptant pas le format enrichi (CMS, API).",
        "Convertir du texte en majuscules ou minuscules pour des listes ou des titres.",
        "Supprimer les tabulations et espaces superflus des exports de tableurs.",
      ],
    },
  ],
  ui: {
    labelChars: 'caractères',
    labelWords: 'mots',
    btnUppercase: 'MAJ',
    btnLowercase: 'min',
    btnCopy: 'Copier',
    placeholder: 'Collez votre texte ici pour le nettoyer...',
    toastCopied: 'Copié',
    toastCleaned: 'Texte nettoyé automatiquement',
  },
};
