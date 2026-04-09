import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextToMarkdownUI } from '../ui';

const slug = 'texte-en-markdown';
const title = 'Convertisseur HTML vers Markdown';
const description =
  "Convertissez du HTML ou du texte enrichi en Markdown propre instantanément, entièrement dans votre navigateur. Collez du contenu depuis n'importe quel site ou document et obtenez un Markdown prêt à l'emploi sans rien envoyer sur un serveur.";

const faqData = [
  {
    question: "Qu'est-ce que cet outil convertit exactement ?",
    answer:
      "Il convertit du HTML en syntaxe Markdown. Les éléments supportés comprennent les titres (h1–h6), les paragraphes, le gras, l'italique, les liens, les images, les listes ordonnées et non ordonnées, les citations, les blocs de code et les séparateurs horizontaux.",
  },
  {
    question: "Puis-je coller du contenu directement depuis une page web ?",
    answer:
      "Oui. Lorsque vous collez (Ctrl+V) du texte copié depuis un navigateur, l'outil intercepte automatiquement le HTML du presse-papiers et le convertit en Markdown. Vous n'avez pas besoin de copier le code source de la page.",
  },
  {
    question: "Est-il sûr de l'utiliser avec du contenu privé ?",
    answer:
      "Totalement. La conversion se produit 100% dans votre navigateur via l'API DOM native. Aucune donnée ne quitte votre appareil.",
  },
  {
    question: "Quand la conversion HTML vers Markdown est-elle utile ?",
    answer:
      "Elle est utile pour migrer du contenu vers des outils comme Obsidian, Notion, les README GitHub, Jekyll ou tout système basé sur Markdown. Aussi pratique pour nettoyer la mise en forme de documents ou d'e-mails.",
  },
];

const howToData = [
  {
    name: "Collez ou saisissez le HTML",
    text: "Collez du HTML dans le panneau gauche. Si vous collez du texte copié d'un site web, le HTML est automatiquement extrait du presse-papiers.",
  },
  {
    name: "Obtenez le Markdown",
    text: "Le panneau droit affiche le Markdown converti en temps réel pendant que vous tapez ou collez.",
  },
  {
    name: "Copiez le résultat",
    text: 'Utilisez le bouton "Copier Markdown" pour copier le résultat dans le presse-papiers en un clic.',
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
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<TextToMarkdownUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Spécifications et Références',
  bibliography: [
    {
      name: 'CommonMark Spec — la spécification Markdown de référence',
      url: 'https://spec.commonmark.org/',
    },
    {
      name: 'GitHub Flavored Markdown Spec',
      url: 'https://github.github.com/gfm/',
    },
    {
      name: 'MDN Web Docs : API DOMParser',
      url: 'https://developer.mozilla.org/fr/docs/Web/API/DOMParser',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Pourquoi Convertir du HTML en Markdown',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "<strong>Markdown</strong> est le format texte léger le plus utilisé dans la documentation technique, les wikis, les blogs et les dépôts. Convertir du HTML en Markdown vous permet de réutiliser du contenu web dans des outils comme Obsidian, GitHub, Jekyll ou Notion sans perdre la structure d'origine.",
    },
    {
      type: 'stats',
      items: [
        { value: '100%', label: 'Privé et Local', icon: 'mdi:incognito' },
        { value: '0ms', label: 'Latence réseau', icon: 'mdi:lightning-bolt' },
        { value: '∞', label: 'Sans limite de taille', icon: 'mdi:infinity' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: "Cas d'Usage Courants",
      level: 3,
    },
    {
      type: 'summary',
      title: "Situations où cette conversion est précieuse",
      items: [
        "Migrer des articles d'un CMS ou blog vers un dépôt Markdown.",
        "Nettoyer la mise en forme de contenus Word, Google Docs ou e-mails.",
        "Préparer du contenu pour des README GitHub ou de la documentation technique.",
        "Exporter des pages Notion ou Confluence vers des fichiers Markdown locaux.",
        "Convertir des e-mails HTML en notes brutes pour Obsidian ou Logseq.",
      ],
    },
  ],
  ui: {
    labelInput: 'Entrée HTML',
    labelOutput: 'Sortie Markdown',
    placeholderInput: "Collez du HTML ici, ou collez du texte copié depuis n'importe quel site...",
    placeholderOutput: 'Le Markdown apparaîtra ici...',
    btnClear: 'Effacer',
    btnCopy: 'Copier Markdown',
    toastCopied: 'Copié !',
    labelHint: '* En collant du texte depuis un site web (Ctrl+V), le HTML est automatiquement extrait du presse-papiers.',
  },
};
