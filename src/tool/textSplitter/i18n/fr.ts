import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextSplitterUI } from '../ui';

const slug = 'diviseur-de-texte';
const title = 'Diviseur de Texte en Ligne: Séparer par Paragraphes, Phrases ou Longueur';
const description =
  'Divisez automatiquement de longs textes en parties plus petites. Choisissez entre séparer par nombre de mots, de caractères, de paragraphes ou de phrases.';

const faqData = [
  {
    question: 'Comment diviser un texte pour ChatGPT ou une IA ?',
    answer:
      'De nombreuses IA ont des limites de caractères par message. Avec notre outil, vous pouvez diviser votre long prompt en parties plus petites (par exemple, tous les 2000 caractères) pour les envoyer séquentiellement sans perdre d\'informations.'
  },
  {
    question: 'Est-il sûr de coller des textes privés dans le diviseur ?',
    answer:
      'Totalement sûr. La logique de division s\'exécute à 100 % dans votre navigateur à l\'aide de JavaScript. Aucun texte n\'est envoyé à nos serveurs, garantissant que vos données restent privées sur votre appareil.'
  },
  {
    question: 'Y a-t-il une limite à la taille du texte que je peux diviser ?',
    answer:
      'Nous n\'imposons pas de limite stricte, car le traitement se fait localement. Vous pouvez diviser plusieurs mégaoctets de texte en quelques secondes, bien que les performances dépendent de la mémoire de votre ordinateur.'
  },
  {
    question: 'Ajoute-t-il une numérotation aux parties ?',
    answer:
      'Actuellement, l\'outil renvoie les blocs séparés. Vous pouvez les copier un par un. De nombreux utilisateurs trouvent cela utile pour garder un contrôle manuel sur la manière dont ils envoient chaque segment vers d\'autres applications.'
  },
];

const howToData = [
  {
    name: 'Collez votre texte',
    text: 'Insérez le long texte que vous souhaitez diviser dans la zone de saisie principale.'
  },
  {
    name: 'Configurez la division',
    text: 'Choisissez la méthode (caractères, mots, phrases ou paragraphes) et définissez la valeur maximale pour chaque partie.'
  },
  {
    name: 'Copiez les parties',
    text: 'L\'outil vous montrera les blocs générés. Copiez celui dont vous avez besoin et utilisez-le où vous le souhaitez.'
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

export const content: ToolLocaleContent<TextSplitterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Pourquoi avez-vous besoin d\'un diviseur de texte en ligne ?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Travailler avec des textes très longs peut être un défi à l\'ère numérique. Que vous soyez un programmeur devant diviser du code en modules, un écrivain adaptant du contenu pour les réseaux sociaux ou un utilisateur interagissant avec des <strong>modèles de langage étendus (LLM)</strong> comme ChatGPT, un <strong>diviseur de texte</strong> est un outil essentiel.'
    },
    {
      type: 'title',
      text: 'Méthodes de Division Intelligentes',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Par Caractères :</strong> Précis pour respecter strictement les limites techniques.',
        '<strong>Par Mots :</strong> Idéal pour les articles et les blogs où une longueur spécifique est recherchée pour le SEO ou la lisibilité.',
        '<strong>Par Phrases :</strong> Garantit que les idées ne sont pas coupées en deux, en conservant le contexte de chaque bloc.',
        '<strong>Par Paragraphes :</strong> La meilleure option pour garder la structure logique d\'un document complexe.',
      ]
    },
    {
      type: 'title',
      text: 'Confidentialité et Rapidité: Traitement Local',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Notre <strong>diviseur de texte en ligne</strong> ne "télécharge" pas votre contenu sur un serveur. Tout est traité instantanément dans votre navigateur. Cela signifie que vous pouvez travailler avec des documents sensibles, des contrats ou des e-mails privés avec la certitude absolue que personne d\'autre ne peut les voir.'
    },
  ],
  ui: {
    labelInput: 'Texte à séparer',
    labelOutput: 'Résultat (un élément par ligne)',
    placeholderInput: 'Collez ici votre liste séparée par des virgules, espaces ou tout autre délimiteur...',
    placeholderOutput: 'La liste apparaîtra ici...',
    labelDelimiter: 'Délimiteur',
    optComma: 'Virgule (,)',
    optSemicolon: 'Point-virgule (;)',
    optSpace: 'Espace',
    optCustom: 'Personnalisé',
    labelCustom: 'Délimiteur personnalisé',
    placeholderCustom: 'Saisir le délimiteur...',
    optTrim: 'Supprimer les espaces',
    optUnique: 'Supprimer les doublons',
    optClean: 'Supprimer les vides',
    optNumbered: 'Numéroter les lignes',
    statLines: 'Lignes résultantes',
    statChars: 'Caractères',
    btnCopy: 'Copier la liste',
    btnClear: 'Effacer',
    toastCopied: 'Copié dans le presse-papiers !'
  }
};
