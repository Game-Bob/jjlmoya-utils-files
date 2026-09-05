import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FormatStripperUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'supprimer-formatage-texte';
const title = 'Supprimer le Formatage de Texte en Ligne Gratuit: Nettoyeur de Styles';
const description =
  'Éliminez le gras, l\'italique, les liens et les couleurs de n\'importe quel texte. Convertissez HTML ou Word en texte brut (txt) instantanément avec notre nettoyeur de styles professionnel.';

const faqData = [
  {
    question: 'Comment supprimer le gras et l\'italique d\'un texte ?',
    answer:
      'Il suffit de coller votre texte dans notre outil. Le système détecte automatiquement les styles et les supprime, ne laissant que les caractères en texte brut, sans aucun enrichissement ni décoration.'
  },
  {
    question: 'Est-ce compatible avec les textes de Microsoft Word ou Google Docs ?',
    answer:
      'Oui, c\'est spécialement conçu pour cela. Lors de la copie depuis Word ou Docs, beaucoup de code "poubelle" est transporté. Notre nettoyeur supprime tous ces styles cachés, vous permettant de coller un texte propre dans d\'autres applications.'
  },
  {
    question: 'Puis-je convertir de l\'HTML en texte brut ?',
    answer:
      'Exactement. Si vous collez un extrait HTML, notre outil supprimera toutes les balises (comme <div>, <a>, <strong>) et ne renverra que le contenu textuel lisible, prêt à être utilisé n\'importe où.'
  },
  {
    question: 'Est-il sûr de coller des informations confidentielles ?',
    answer:
      'Tout à fait sûr. Tout le traitement est effectué à 100 % dans votre navigateur. Aucune donnée n\'est envoyée à nos serveurs, garantissant que votre texte reste privé et protégé à tout moment.'
  },
];

const howToData = [
  {
    name: 'Copiez votre texte',
    text: 'Copiez le texte formaté depuis Word, un site web ou un e-mail.'
  },
  {
    name: 'Collez dans le nettoyeur',
    text: 'Insérez le contenu dans la zone de saisie. La suppression des styles est automatique.'
  },
  {
    name: 'Copiez le résultat',
    text: 'Votre texte est maintenant simple et propre. Copiez-le et utilisez-le où vous le souhaitez sans problèmes de format.'
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

export const content: ToolLocaleContent<FormatStripperUI> = {
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
      text: 'Que signifie "supprimer le formatage" et pourquoi en avez-vous besoin ?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Supprimer le formatage est le processus de <strong>transformation du texte enrichi en texte brut</strong> (Plain Text). Lorsque nous copions des informations d\'un site web, d\'un eBook ou d\'un document Word, ce texte transporte des "bagages cachés": types de polices, tailles, couleurs, liens et styles CSS. Notre outil sert de filtre qui élimine tous ces déchets numériques.'
    },
    {
      type: 'title',
      text: 'Avantages de l\'utilisation d\'un nettoyeur de texte',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Compatibilité Universelle :</strong> Le texte brut fonctionne dans n\'importe quel programme, des anciens e-mails aux CMS modernes comme WordPress.',
        '<strong>Code Propre :</strong> Idéal pour les développeurs qui ont besoin de coller du texte dans leur code sans transporter de balises HTML ou de styles RTF.',
        '<strong>SEO et Lisibilité :</strong> En supprimant les formats irréguliers, vous vous assurez que votre contenu maintient la cohérence visuelle de votre site.',
        '<strong>Confidentialité Totale :</strong> Le processus est local. Votre texte ne quitte jamais votre navigateur.',
      ]
    },
    {
      type: 'title',
      text: 'Suppression du formatage vs Copier-Coller simple',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Bien souvent, un simple <code>Ctrl + V</code> transporte des formats indésirables qui brisent le design de votre document de destination. L\'utilisation d\'un <strong>suppresseur de format</strong> en ligne vous garantit de ne garder que l\'essence du message, vous permettant d\'appliquer vos propres styles de zéro sans interférence technique.'
    },
  ],
  ui: {
    labelInput: 'Texte source (avec formatage)',
    labelOutput: 'Texte brut (propre)',
    placeholderInput: 'Collez ici le texte de Word, Web ou PDF...',
    placeholderOutput: 'Le texte propre apparaîtra ici...',
    btnCopy: 'Copier le résultat',
    btnClear: 'Tout effacer',
    toastCopied: 'Texte propre copié !'
  }
};
