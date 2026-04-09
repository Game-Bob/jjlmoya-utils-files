import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EmojiSpaceCleanerUI } from '../ui';

const slug = 'nettoyeur-emojis-espaces';
const title = 'Suppresseur d\'Emojis et Espaces Doubles en Ligne Gratuit';
const description =
  'Nettoyez vos textes instantanément : supprimez les emojis WhatsApp, normalisez les espaces multiples et effacez les caractères invisibles pour un rendu professionnel et soigné.';

const faqData = [
  {
    question: 'Comment supprimer les emojis d\'un texte en ligne en masse ?',
    answer:
      'Collez simplement votre contenu dans l\'outil et assurez-vous que l\'option "Supprimer les Emojis" est activée. Le système détectera automatiquement toutes les icônes pictographiques et les symboles WhatsApp ou réseaux sociaux pour les supprimer instantanément, ne vous laissant que le texte pur.',
  },
  {
    question: 'Pourquoi des espaces doubles apparaissent-ils dans mes textes et comment les supprimer ?',
    answer:
      'Les espaces doubles apparaissent souvent lors de la copie de textes depuis des sites web, des PDF, ou par erreur en appuyant deux fois sur la barre d\'espace. Notre outil de normalisation des espaces scanne le texte et remplace toute séquence de deux espaces consécutifs ou plus par un seul, améliorant l\'esthétique et la lisibilité de vos documents.',
  },
  {
    question: 'Que sont les caractères invisibles et pourquoi est-il important de les nettoyer ?',
    answer:
      'Les caractères invisibles sont des codes Unicode (comme les espaces de largeur nulle ou les caractères de contrôle) qui ne sont pas visibles à l\'œil nu mais sont présents dans le texte. Ils peuvent provoquer des erreurs dans les bases de données, casser la mise en page de pages web ou des échecs dans les validations de formulaires. Les nettoyer garantit un texte "propre" et compatible.',
  },
  {
    question: 'Est-il sûr de traiter mes textes confidentiels sur ce site ?',
    answer:
      'Absolument. Notre outil fonctionne entièrement côté client (Client-Side). Cela signifie que votre texte ne quitte jamais votre navigateur et n\'est envoyé à aucun serveur externe. Le traitement s\'effectue dans votre propre mémoire RAM, garantissant une confidentialité absolue pour vos données.',
  },
  {
    question: 'Puis-je l\'utiliser pour nettoyer des textes d\'applications comme WhatsApp ou Telegram ?',
    answer:
      'Oui, c\'est idéal pour cela. En copiant des messages de ces applications, ils apportent souvent avec eux des emojis et des formats invisibles. En collant le message ici et en utilisant les options de nettoyage, vous obtiendrez une version prête pour un rapport professionnel, un e-mail ou un document Word officiel.',
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

export const content: ToolLocaleContent<EmojiSpaceCleanerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Sources et Références',
  bibliography: [
    {
      name: 'Standard Unicode : Emojis et Symboles Pictographiques',
      url: 'https://unicode.org/emoji/charts/full-emoji-list.html',
    },
    {
      name: 'MDN : Expressions Régulières en JavaScript (RegExp)',
      url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Regular_expressions',
    },
    {
      name: 'W3C : Gestion des espaces blancs sur le web',
      url: 'https://www.w3.org/TR/CSS2/text.html#white-space-prop',
    },
  ],
  howTo: [],
  schemas: [faqSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Pourquoi supprimer les emojis et nettoyer les espaces est vital pour vos textes professionnels',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'À l\'ère de la communication numérique instantanée, la façon dont nous présentons l\'information est aussi importante que le message lui-même. Un texte saturé d\'éléments visuels distrayants comme les emojis, ou présentant des défauts techniques comme les doubles et triples espaces, projette une image peu professionnelle et négligée. Notre <strong>nettoyeur de texte en ligne</strong> a été développé pour aider les rédacteurs, copywriters, développeurs et administrateurs à purifier leurs contenus instantanément.',
    },
    {
      type: 'paragraph',
      html: 'En <strong>supprimant les emojis d\'un texte en ligne</strong>, vous n\'éliminez pas seulement des dessins ; vous normalisez l\'encodage de votre document. De nombreux systèmes de gestion de contenu (CMS), bases de données anciennes ou traitements de texte comme Microsoft Word peuvent se comporter de manière erratique face à certains symboles Unicode. Nettoyer le texte garantit une compatibilité totale et une lisibilité optimale sur tout appareil ou plateforme.',
    },
    {
      type: 'title',
      text: 'Comment supprimer les espaces doubles et normaliser votre contenu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'une des erreurs les plus courantes lors de l\'écriture est d\'appuyer accidentellement deux fois sur la barre d\'espace. Bien que cela puisse sembler un détail mineur, <strong>supprimer les doubles espaces</strong> améliore radicalement l\'esthétique de vos paragraphes. Dans le design web moderne, la typographie dépend d\'un espacement uniforme pour maintenir le rythme de lecture.',
    },
    {
      type: 'tip',
      title: 'Confidentialité maximale : Traitement 100% dans votre navigateur',
      html: '<p>Contrairement à d\'autres convertisseurs qui envoient vos données à des serveurs distants, notre utilitaire fonctionne entièrement du <strong>côté client (Client-Side)</strong>. Le texte que vous collez ne quitte jamais votre ordinateur. Tout le processus de suppression des emojis et de nettoyage des espaces se déroule dans votre propre mémoire RAM, garantissant que vos informations confidentielles ou professionnelles restent totalement privées.</p>',
    },
    {
      type: 'title',
      text: 'Comment supprimer les emojis WhatsApp et Telegram en masse',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Notre outil utilise des expressions régulières (RegExp) de dernière génération qui couvrent tout le spectre de la spécification Unicode. Cela inclut des smileys classiques aux nouveaux symboles pictographiques, variations de teint de peau et emojis combinés. En un seul clic, vous obtiendrez un texte totalement "désémojifié" prêt à être collé dans un document officiel.',
    },
    {
      type: 'title',
      text: 'L\'importance de nettoyer les caractères invisibles et les déchets numériques',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Compatibilité universelle :</strong> Texte prêt pour WordPress, SQL, Excel et Word sans caractères cachés qui cassent le code.',
        '<strong>Gain de temps :</strong> Traite des milliers de mots en moins d\'une seconde, éliminant le besoin de correction manuelle.',
        '<strong>Optimisation SEO :</strong> Google préfère les contenus avec une structure de texte propre et des caractères normalisés de haute qualité.',
      ],
    },
    {
      type: 'tip',
      title: 'La différence entre minifier et nettoyer un texte',
      html: '<p>Alors qu\'un minificateur cherche à réduire la taille du fichier en supprimant tout ce qui est inutile pour l\'ordinateur, notre <strong>nettoyeur de texte pour humains</strong> priorise la lisibilité. Nous ne fusionnons pas tous les mots, mais respectons la structure grammaticale tout en éliminant les déchets visuels. C\'est l\'outil intermédiaire parfait entre le texte brut et le contenu éditorial final.</p>',
    },
  ],
  ui: {
    labelToggleEmojis: 'Supprimer les Emojis',
    labelToggleSpaces: 'Espaces Doubles',
    labelInput: 'Texte d\'entrée',
    labelOutput: 'Texte propre',
    placeholderInput: 'Collez ici le texte avec des emojis ou des espaces en trop...',
    placeholderOutput: 'Le texte propre apparaîtra ici...',
    btnCopy: 'Copier',
    btnClear: 'Effacer',
    toastCopied: 'Copié !',
    statEmojis: 'emojis supprimés',
    statSpaces: 'espaces en trop supprimés',
    statNone: 'Aucun changement détecté',
  },
};
