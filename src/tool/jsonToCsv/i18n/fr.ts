import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonToCsvUI } from '../ui';

const slug = 'convertisseur-json-excel-csv';
const title = 'Convertisseur JSON vers Excel et CSV en Ligne - 100% Local et Sécurisé';
const description =
  'Transformez des fichiers JSON complexes en feuilles de calcul Excel ou CSV instantanément. Avec aplatissement automatique des objets et confidentialité locale totale.';

const faqData = [
  {
    question: 'Est-il sûr de téléverser mes données JSON ici ?',
    answer:
      'Cet outil est 100% sûr et local. Le traitement de votre JSON se fait exclusivement dans la mémoire de votre navigateur (côté client). Vos données ne sont jamais envoyées à un serveur ni stockées dans le cloud.',
  },
  {
    question: "Comment l'outil gère-t-il les objets imbriqués ?",
    answer:
      "Nous utilisons une technique d'aplatissement récursif (Flattening). Si vous avez un objet dans un autre, le convertisseur crée des colonnes avec des noms composés (ex : 'utilisateur.id', 'utilisateur.nom'), rendant toute la hiérarchie lisible dans Excel.",
  },
  {
    question: "Y a-t-il une limite de taille pour le fichier JSON ?",
    answer:
      'La limite dépend de la RAM de votre appareil, mais les fichiers jusqu\'à 10 Mo sont traités sans problème. Pour les fichiers très volumineux, nous recommandons de fragmenter les données.',
  },
  {
    question: 'Puis-je importer un fichier depuis mon ordinateur ?',
    answer:
      "Oui, l'outil supporte le glisser-déposer (Drag and Drop). Faites simplement glisser votre fichier .json sur la zone pointillée et le contenu se chargera automatiquement.",
  },
  {
    question: 'Le fichier téléchargé est-il compatible avec Excel ?',
    answer:
      "Oui. Nous générons un fichier CSV avec un BOM (Byte Order Mark) UTF-8, garantissant qu'Excel, Google Sheets ou Numbers affiche correctement les caractères spéciaux sans paramétrage manuel.",
  },
];

const howToData = [
  {
    name: 'Chargement des données',
    text: 'Collez votre code JSON dans la zone de texte ou faites glisser un fichier .json directement depuis votre ordinateur.',
  },
  {
    name: 'Aplatissement automatique',
    text: "Cochez l'option 'Aplatir les objets' si votre JSON a des structures imbriquées et que vous souhaitez les voir comme des colonnes individuelles.",
  },
  {
    name: 'Validation visuelle',
    text: 'Consultez le tableau de prévisualisation qui apparaît. Il affiche les premières lignes pour confirmer que la conversion est correcte.',
  },
  {
    name: 'Téléchargement final',
    text: "Cliquez sur 'Télécharger Excel (CSV)' pour obtenir le fichier prêt à l'emploi ou utilisez 'Copier CSV' pour le coller directement dans une feuille de calcul ouverte.",
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

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
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

export const content: ToolLocaleContent<JsonToCsvUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: "Standards d'échange de données",
  bibliography: [
    {
      name: 'ECMA-404: The JSON Data Interchange Format',
      url: 'https://ecma-international.org/wp-content/uploads/ECMA-404_2nd_edition_december_2017.pdf',
    },
    {
      name: 'RFC 4180: Common Format and MIME Type for CSV',
      url: 'https://datatracker.ietf.org/doc/html/rfc4180',
    },
    {
      name: 'W3C: CSV on the Web (Standardization for Tabular Data)',
      url: 'https://www.w3.org/TR/tabular-data-model/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guide : Conversion JSON vers Excel et CSV — Optimisation des données',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Dans l'écosystème numérique moderne, le format JSON (JavaScript Object Notation) s'est imposé comme le standard de facto pour l'échange de données entre serveurs et applications web. Cependant, sa structure hiérarchique présente souvent des barrières pour l'analyse métier, la comptabilité ou la gestion administrative traditionnelle. C'est là que notre <strong>Convertisseur JSON vers Excel</strong> devient un outil indispensable.",
    },
    {
      type: 'title',
      text: "Comment fonctionne l'aplatissement JSON ?",
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'un des plus grands défis lors du passage de JSON à un tableau est la multidimensionnalité. Un convertisseur basique ignorerait simplement les champs imbriqués ou les afficherait comme "[object Object]", ce qui est inutile pour l\'utilisateur final.',
    },
    {
      type: 'tip',
      title: 'Aplatissement récursif',
      html: '<p>Notre outil utilise un algorithme d\'<strong>aplatissement récursif</strong>. Une structure comme "utilisateur.adresse.rue" est automatiquement convertie en une colonne individuelle portant ce nom, préservant toutes les informations originales quelle que soit la profondeur.</p>',
    },
    {
      type: 'title',
      text: 'Avantages de notre convertisseur en ligne',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Gratuit et instantané',
          html: '<p>Sans inscription ni téléchargement. Tout le traitement se fait dans votre navigateur, garantissant une confidentialité totale car vos données ne quittent jamais votre appareil.</p>',
        },
        {
          type: 'card',
          title: 'Compatibilité Excel',
          html: '<p>Nous générons des fichiers CSV avec BOM (Byte Order Mark), garantissant qu\'Excel reconnaît correctement les caractères spéciaux comme les accents.</p>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Correspondance des types de données JSON',
      level: 4,
    },
    {
      type: 'table',
      headers: ['Type JSON', 'Représentation Excel/CSV', 'Remarque'],
      rows: [
        ['String', 'Texte brut', 'Les guillemets doubles sont automatiquement échappés.'],
        ['Number', 'Numérique', 'Conserve la précision décimale originale.'],
        ['Boolean', 'TRUE / FALSE', 'Converti en majuscules pour un meilleur filtrage.'],
        ['Null', 'Cellule vide', 'Représentation standard pour les données manquantes.'],
        ['Objet imbriqué', 'Colonne séparée', "Aplati via la notation pointée."],
      ],
    },
    {
      type: 'title',
      text: 'Confidentialité et sécurité de vos données',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Contrairement aux autres convertisseurs en ligne qui téléversent vos fichiers JSON vers des serveurs externes, notre utilitaire est <strong>100% côté client</strong>. Le traitement se fait localement dans votre navigateur. Vos données confidentielles ne traversent jamais le réseau vers un serveur tiers.",
    },
    {
      type: 'tip',
      title: 'Note finale',
      html: '<p>Que vous ayez besoin d\'auditer un log technique, préparer un rapport de ventes depuis une API ou simplement explorer un fichier .json, ce convertisseur est votre meilleur allié. Rapide, sécurisé et professionnel.</p>',
    },
  ],
  ui: {
    statusWaiting: 'En attente de JSON valide',
    statusValid: 'JSON valide',
    statusInvalid: 'JSON invalide',
    labelFlatten: 'Aplatir les objets',
    zoneLabel: 'Collez votre JSON ici ou déposez un fichier',
    placeholderJson: '[{"id": 1, "nom": "Jean", "détails": {"âge": 30}}]',
    btnCopyCsv: 'Copier CSV',
    btnDownloadCsv: 'Télécharger Excel (CSV)',
    copyFeedback: 'Copié !',
  },
};
