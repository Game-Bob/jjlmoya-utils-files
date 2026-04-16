import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClipboardToImageUI } from '../ui';

const slug = 'presse-papiers-vers-png';
const title = 'Presse papiers vers PNG : Télécharger Captures d\'écran';
const description =
  'Outil en ligne pour convertir le contenu du presse-papiers (captures, images) en un fichier PNG téléchargeable instantanément. Processus 100 % privé et rapide.';

const faqData = [
  {
    question: 'Est-il sûr de coller mes captures d\'écran ici ?',
    answer:
      'Oui, c\'est tout à fait sûr. Cet outil fonctionne à 100 % localement dans votre navigateur. Les données de votre presse-papiers ne sont jamais envoyées à aucun serveur, garantissant votre totale confidentialité.',
  },
  {
    question: 'Quels types de contenu puis-je convertir ?',
    answer:
      'Vous pouvez coller des images copiées (captures d\'écran, photos), du texte qui sera converti en fichier .txt, ou même des éléments HTML. L\'utilisation la plus courante est de sauvegarder des captures d\'écran rapides sous forme de fichiers PNG.',
  },
  {
    question: 'Pourquoi le bouton coller ne fonctionne-t-il pas ?',
    answer:
      'En raison des restrictions de sécurité des navigateurs, le bouton "Coller" nécessite parfois des autorisations explicites. S\'il ne fonctionne pas, vous pouvez toujours utiliser le raccourci clavier standard : Ctrl+V (Windows) ou Cmd+V (Mac).',
  },
  {
    question: 'Cela fonctionne-t-il sur les appareils mobiles ?',
    answer:
      'Oui, vous pouvez utiliser la fonction coller de votre mobile pour visualiser le contenu, bien que l\'expérience soit optimisée pour la gestion rapide des captures d\'écran sur ordinateur.',
  },
];

const howToData = [
  {
    name: 'Copier le contenu',
    text: 'Prenez une capture d\'écran ou copiez une image/un texte depuis n\'importe quelle application.',
  },
  {
    name: 'Coller dans la zone',
    text: 'Cliquez sur la zone de collage ou utilisez le raccourci Ctrl+V / Cmd+V pour charger le contenu.',
  },
  {
    name: 'Prévisualiser',
    text: 'Vérifiez que le contenu est correct dans la zone de prévisualisation qui apparaîtra instantanément.',
  },
  {
    name: 'Télécharger le fichier',
    text: 'Appuyez sur le bouton de téléchargement pour enregistrer le contenu sous forme de fichier réel sur votre ordinateur.',
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
  faqTitle: 'Foire Aux Questions',
  faq: faqData,
  bibliographyTitle: '',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Comment enregistrer une image du presse-papiers sous forme de fichier',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cet outil en ligne gratuit vous permet de <strong>convertir instantanément le contenu de votre presse-papiers en un fichier image</strong> (PNG). C\'est la solution parfaite lorsque vous avez pris une capture d\'écran (Windows + Maj + S) ou copié une image d\'un site web et que vous avez besoin de l\'enregistrer sur votre ordinateur sans ouvrir d\'éditeurs lourds comme Photoshop ou Paint.',
    },
    {
      type: 'title',
      text: 'Pourquoi utiliser ce convertisseur de presse-papiers ?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Rapidité :</strong> Appuyez simplement sur <code>Ctrl + V</code> et téléchargez. Aucune étape intermédiaire.',
        '<strong>Confidentialité :</strong> Tout le processus est effectué dans votre navigateur. Vos images <strong>ne sont jamais téléchargées sur un serveur</strong>.',
        '<strong>Qualité originale :</strong> Nous récupérons les données brutes du presse-papiers, garantissant que l\'image téléchargée conserve la meilleure qualité possible.',
        '<strong>Organisation automatique :</strong> Les fichiers sont téléchargés avec un nom basé sur la date et l\'heure exactes, facilitant l\'organisation de vos captures.',
      ],
    },
    {
      type: 'title',
      text: 'Questions fréquentes',
      level: 2,
    },
    {
      type: 'title',
      text: 'Cela fonctionne-t-il avec les captures d\'écran ?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Oui, c\'est idéal pour sauvegarder rapidement des captures d\'écran réalisées avec l\'outil de capture de Windows ou Mac.',
    },
    {
      type: 'title',
      text: 'Quels formats sont supportés ?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Actuellement, l\'outil détecte et convertit automatiquement toute image présente dans le presse-papiers au format PNG pour garantir compatibilité et transparence.',
    },
  ],
  ui: {
    labelCtrlV: 'Appuyez sur Ctrl + V n\'importe où',
    labelClickPaste: 'ou cliquez ici pour coller',
    btnClear: 'Effacer',
    btnDownload: 'Télécharger',
    privacyMsg: 'Tout le processus est 100 % local. Vos images ne quittent jamais votre navigateur.',
  },
};
