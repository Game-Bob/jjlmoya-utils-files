import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CharacterCounterUI } from '../ui';

const slug = 'compteur-caracteres';
const title = 'Compteur de Caractères et de Mots';
const description =
  "Comptez les caractères, mots, lignes et paragraphes en temps réel. Estimez le temps de lecture et d'élocution. Idéal pour le SEO, les réseaux sociaux et l'écriture professionnelle.";

const faqData = [
  {
    question: "Pourquoi le nombre de caractères est-il important pour le SEO ?",
    answer:
      "Les moteurs de recherche ont des limites recommandées : 60 caractères pour les titres et 155 à 160 pour les méta-descriptions. Les dépasser entraîne une coupure du contenu dans les résultats de recherche.",
  },
  {
    question: "Le compteur inclut-il les espaces ?",
    answer:
      "Oui, le compteur principal inclut tous les caractères espaces compris. La ligne de détail affiche également le compte sans espaces pour les cas où cette métrique est nécessaire.",
  },
  {
    question: "Comment le temps de lecture est-il calculé ?",
    answer:
      "Le temps de lecture est basé sur une moyenne de 200 mots par minute. Le temps d'élocution utilise 130 mots par minute, plus adapté aux scripts et aux présentations orales.",
  },
  {
    question: "Puis-je analyser des fichiers texte ?",
    answer:
      "Oui. Vous pouvez téléverser des fichiers .txt, .md, .json, .csv, .js, .ts, .html ou .css via le bouton de chargement, ou les glisser-déposer directement dans la zone de texte.",
  },
];

const howToData = [
  {
    name: "Saisissez le texte",
    text: "Tapez directement, collez avec Ctrl+V ou faites glisser un fichier dans la zone de texte.",
  },
  {
    name: "Consultez les statistiques principales",
    text: "Le compte de caractères, mots, lignes et paragraphes se met à jour en temps réel.",
  },
  {
    name: "Examinez les détails",
    text: "La ligne inférieure affiche les caractères sans espaces, la taille en octets et les temps estimés.",
  },
  {
    name: "Copiez ou effacez",
    text: "Utilisez les boutons de la barre d'outils pour copier le texte dans le presse-papiers ou tout effacer.",
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

export const content: ToolLocaleContent<CharacterCounterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie',
  bibliography: [
    {
      name: 'Intl.NumberFormat — MDN Web Docs',
      url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat',
    },
    {
      name: 'API FileReader — MDN Web Docs',
      url: 'https://developer.mozilla.org/fr/docs/Web/API/FileReader',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: "Comptage de Texte pour le SEO, les Réseaux Sociaux et l'Écriture Professionnelle",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Chaque plateforme a ses propres limites de texte. Twitter/X autorise 280 caractères, un titre SEO ne doit pas dépasser 60 et une méta-description optimale avoisine les 155–160. Sans compteur précis, il est facile de dépasser ou de rester en dessous. Cet outil met à jour tous les comptes <strong>en temps réel</strong>, caractère par caractère.",
    },
    {
      type: 'stats',
      items: [
        { value: '60', label: 'Caractères titre SEO', icon: 'mdi:magnify' },
        { value: '155', label: 'Caractères méta desc.', icon: 'mdi:text-box' },
        { value: '200', label: 'Mots/min lecture', icon: 'mdi:book-open-variant' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Métriques Fournies par le Compteur',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Ce que mesure cet outil',
      items: [
        "Caractères totaux (avec et sans espaces) pour les limites des plateformes.",
        "Mots : compte réel séparé par espaces et sauts de ligne.",
        "Lignes et paragraphes : utile pour structurer articles et scripts.",
        "Temps de lecture estimé à 200 mots par minute.",
        "Temps d'élocution estimé à 130 mots par minute.",
        "Taille en octets : utile pour les API avec limites de charge utile.",
      ],
    },
  ],
  ui: {
    labelChars: 'Caractères',
    labelWords: 'Mots',
    labelLines: 'Lignes',
    labelParagraphs: 'Paragraphes',
    labelNoSpaces: 'Sans Espaces',
    labelBytes: 'Octets',
    labelReading: 'T. Lecture',
    labelSpeaking: 'T. Élocution',
    labelUpload: 'Charger Fichier',
    btnCopyTitle: 'Copier le texte',
    btnClearTitle: 'Tout effacer',
    placeholder: 'Tapez, collez quelque chose ici ou faites glisser un fichier...',
    unitSec: 's',
    unitMin: 'min',
    numberLocale: 'fr-FR',
  },
};
