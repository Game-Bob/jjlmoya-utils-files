import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextSplitterUI } from '../ui';

const slug = 'separateur-de-texte';
const title = 'Séparateur de Texte en Ligne | Convertisseur de Listes en Lignes';
const description =
  'Divisez des listes séparées par des virgules, espaces ou délimiteurs personnalisés en lignes individuelles instantanément. Outil gratuit pour nettoyer et organiser des données en ligne.';

const faqData = [
  {
    question: 'Comment séparer une liste par virgules en ligne ?',
    answer:
      'Collez votre liste dans la zone de texte, sélectionnez l\'option "Virgule (,)" comme délimiteur et vous obtiendrez automatiquement un élément par ligne dans la zone de résultats.',
  },
  {
    question: 'Qu\'est-ce qu\'un convertisseur de virgules en sauts de ligne ?',
    answer:
      'C\'est un outil numérique qui transforme des chaînes de texte séparées par des signes de ponctuation en listes verticales organisées, facilitant le traitement des données dans des tableurs ou des bases de données.',
  },
  {
    question: 'Puis-je séparer du texte par d\'autres caractères ?',
    answer:
      'Oui, l\'utilitaire permet d\'utiliser des points-virgules, des espaces ou tout autre caractère personnalisé que vous définissez manuellement.',
  },
  {
    question: 'Est-il sûr de traiter des listes d\'e-mails ?',
    answer:
      'Absolument. Étant un outil côté client, tout le traitement se fait localement dans votre navigateur. Vos données et informations privées ne sont jamais envoyées à un serveur externe.',
  },
  {
    question: 'L\'outil permet-il de supprimer les éléments en double ?',
    answer:
      'Oui, il dispose d\'une option spécifique pour nettoyer la liste finale de tout élément répété, garantissant que chaque ligne est unique.',
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

export const content: ToolLocaleContent<TextSplitterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Sources et Références',
  bibliography: [
    {
      name: 'MDN : String.prototype.split()',
      url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split',
    },
    {
      name: 'Guide des formats CSV et délimiteurs courants',
      url: 'https://fr.wikipedia.org/wiki/Comma-separated_values',
    },
    {
      name: 'Gestion des listes et doublons en JavaScript',
      url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Set',
    },
  ],
  howTo: [],
  schemas: [faqSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Séparateur de Texte : Comment Diviser Rapidement des Listes et des Virgules en Lignes',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Vous êtes-vous déjà retrouvé avec une liste interminable d\'e-mails, de noms ou de codes produits séparés par des virgules, nécessitant de mettre chacun sur une ligne différente ? Appuyer manuellement sur "Entrée" des centaines de fois est fastidieux, sujet aux erreurs et, franchement, une perte de temps. Notre outil de <strong>séparateur de texte en ligne</strong> a été conçu précisément pour résoudre ce problème en quelques millisecondes.',
    },
    {
      type: 'title',
      text: 'Pourquoi utiliser un séparateur de listes en ligne ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dans le monde du marketing digital, de la programmation et de la gestion des données, il est courant de recevoir des informations dans des formats "sales". Vous pouvez exporter une liste d\'une base de données et obtenir quelque chose comme <code>item1, item2, item3</code>. Pour l\'importer dans un tableur comme Excel ou Google Sheets, ou pour le traiter dans un script, vous avez souvent besoin que chaque élément occupe sa propre ligne.',
    },
    {
      type: 'title',
      text: 'Avantages de l\'automatisation du nettoyage de texte',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Suppression des doublons :</strong> Si votre liste originale contient des éléments répétés, vous pouvez les marquer pour qu\'ils n\'apparaissent qu\'une seule fois dans le résultat final. Idéal pour nettoyer des bases de données d\'e-mails.',
        '<strong>Recadrage des espaces (Trim) :</strong> Supprime automatiquement les espaces blancs qui restent souvent avant ou après le délimiteur, laissant un résultat propre et professionnel.',
        '<strong>Numérotation automatique :</strong> Transforme une liste simple en liste numérotée prête à copier dans un document Word ou un e-mail.',
        '<strong>Filtrage des lignes vides :</strong> Évite les espaces vides gênants qui apparaissent lorsqu\'il y a des délimiteurs consécutifs (ex : <code>item1,,item2</code>).',
      ],
    },
    {
      type: 'title',
      text: 'Confidentialité et Sécurité : Vos données sont en sécurité',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Contrairement à d\'autres sites qui envoient le texte à un serveur pour le traiter, notre architecture est 100% <strong>côté client</strong>. Cela signifie que le traitement se produit dans votre mémoire RAM. Rien n\'est stocké dans des bases de données externes, ce qui en fait l\'outil idéal pour gérer des informations sensibles comme les e-mails de clients ou les listes confidentielles.',
    },
    {
      type: 'tip',
      title: 'Note finale',
      html: '<p>Si vous cherchez un <strong>séparateur de texte gratuit</strong>, rapide et sécurisé, vous êtes au bon endroit. Optimisez votre flux de travail et laissez le navigateur faire le travail fastidieux à votre place.</p>',
    },
  ],
  ui: {
    labelInput: 'Texte à Séparer',
    labelOutput: 'Résultat (un élément par ligne)',
    placeholderInput: 'Collez ici votre liste séparée par des virgules, espaces ou tout délimiteur...',
    placeholderOutput: 'La liste apparaîtra ici...',
    labelDelimiter: 'Délimiteur',
    optComma: 'Virgule (,)',
    optSemicolon: 'Point-virgule (;)',
    optSpace: 'Espace',
    optCustom: 'Personnalisé',
    labelCustom: 'Délimiteur personnalisé',
    placeholderCustom: 'Saisissez le délimiteur...',
    optTrim: 'Recadrer les espaces',
    optUnique: 'Supprimer les doublons',
    optClean: 'Supprimer les vides',
    optNumbered: 'Numéroter les lignes',
    statLines: 'Lignes résultantes',
    statChars: 'Caractères',
    btnCopy: 'Copier la Liste',
    btnClear: 'Effacer',
    toastCopied: 'Copié dans le presse-papiers !',
  },
};
