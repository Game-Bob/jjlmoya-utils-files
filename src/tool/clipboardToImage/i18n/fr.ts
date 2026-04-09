import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClipboardToImageUI } from '../ui';

const slug = 'presse-papiers-vers-image';
const title = 'Presse-papiers vers Image';
const description =
  "Convertissez le contenu de votre presse-papiers en fichier image téléchargeable instantanément. Processus 100% privé et local : vos captures ne quittent jamais votre navigateur.";

const faqData = [
  {
    question: "Est-il sûr de coller mes captures ici ?",
    answer:
      "Oui, totalement. Tout le processus se déroule dans votre propre navigateur. Les données du presse-papiers ne sont jamais envoyées à un serveur, garantissant une confidentialité totale.",
  },
  {
    question: "Quels types d'images puis-je coller ?",
    answer:
      "Vous pouvez coller toute image copiée dans le presse-papiers : captures d'écran, images de pages web, photos copiées depuis d'autres applications, etc.",
  },
  {
    question: "Pourquoi le bouton coller ne fonctionne-t-il pas ?",
    answer:
      "Le bouton coller nécessite que le navigateur ait la permission d'accéder au presse-papiers. Si le navigateur vous le demande, accordez-la. Sinon, utilisez directement le raccourci Ctrl+V (Windows) ou Cmd+V (Mac).",
  },
  {
    question: "Quel nom aura le fichier téléchargé ?",
    answer:
      "Le fichier est téléchargé avec un nom basé sur la date et l'heure exactes du collage, par exemple : clipboard-2024-06-15-14-32-07.png. Cela facilite l'organisation chronologique de vos captures.",
  },
];

const howToData = [
  {
    name: "Copiez une image",
    text: "Prenez une capture d'écran ou copiez une image depuis une autre application ou page web.",
  },
  {
    name: "Collez dans l'outil",
    text: "Appuyez sur Ctrl+V n'importe où sur la page, ou cliquez sur la zone de collage.",
  },
  {
    name: "Vérifiez l'aperçu",
    text: "L'image apparaît instantanément. Ses dimensions sont affichées dans le coin supérieur droit.",
  },
  {
    name: "Téléchargez le fichier",
    text: "Cliquez sur le bouton de téléchargement pour enregistrer l'image au format PNG sur votre ordinateur.",
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

export const content: ToolLocaleContent<ClipboardToImageUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie',
  bibliography: [
    {
      name: 'API Clipboard — MDN Web Docs',
      url: 'https://developer.mozilla.org/fr/docs/Web/API/Clipboard_API',
    },
    {
      name: 'ClipboardEvent — MDN Web Docs',
      url: 'https://developer.mozilla.org/fr/docs/Web/API/ClipboardEvent',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: "Comment Enregistrer une Capture d'Écran sans Logiciel",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Lorsque vous faites une capture d'écran avec <strong>Windows + Shift + S</strong> ou <strong>Cmd + Shift + 4</strong> sur Mac, l'image atterrit dans le presse-papiers mais n'est pas sauvegardée automatiquement. Cet outil résout exactement ce problème : collez, prévisualisez et téléchargez en quelques secondes, <strong>sans installation et sans envoyer de données à un serveur</strong>.",
    },
    {
      type: 'stats',
      items: [
        { value: '100%', label: 'Privé et Local', icon: 'mdi:shield-check' },
        { value: '0 Mo', label: 'Sans Installation', icon: 'mdi:download-off' },
        { value: 'PNG', label: 'Format de Sortie', icon: 'mdi:image' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: "Pourquoi Utiliser Cet Outil",
      level: 3,
    },
    {
      type: 'summary',
      title: 'Avantages du Convertisseur de Presse-papiers',
      items: [
        "Confidentialité totale : les images ne quittent jamais votre navigateur.",
        "Rapidité extrême : Ctrl+V et téléchargement en un seul clic.",
        "Sans installation : fonctionne directement dans le navigateur.",
        "Noms de fichiers automatiques avec date et heure pour une meilleure organisation.",
        "Compatible avec les captures d'écran, images web et toute image copiée.",
      ],
    },
  ],
  ui: {
    labelCtrlV: "Appuyez sur Ctrl + V n'importe où",
    labelClickPaste: 'ou cliquez ici pour coller',
    btnClear: 'Effacer',
    btnDownload: 'Télécharger',
    privacyMsg: "Tout le processus est 100% local. Vos images ne quittent jamais votre navigateur.",
  },
};
