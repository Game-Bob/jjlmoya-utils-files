import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashVerifierUI } from '../ui';

const slug = 'verificateur-hash';
const title = 'Vérificateur de Hash SHA-256';
const description =
  "Vérifiez l'intégrité de vos fichiers en calculant leur signature SHA-256 à 100% localement et en toute sécurité. Comparez les checksums d'ISO, installateurs et téléchargements sans rien envoyer sur un serveur.";

const faqData = [
  {
    question: "Qu'est-ce qu'un hash SHA-256 ?",
    answer:
      "C'est une empreinte numérique unique pour un fichier. Quelle que soit sa taille, le hash produit toujours exactement 64 caractères hexadécimaux. Si un seul bit du fichier est modifié, le hash change complètement, ce qui en fait le mécanisme de vérification d'intégrité le plus fiable.",
  },
  {
    question: "Est-il sûr d'utiliser cet outil avec des fichiers privés ?",
    answer:
      "Totalement. L'outil utilise l'API Web Crypto de votre navigateur pour calculer le hash localement par blocs (streaming). Le fichier ne quitte jamais votre appareil.",
  },
  {
    question: "À quoi sert la vérification du hash d'un téléchargement ?",
    answer:
      "À s'assurer que le fichier n'a pas été modifié par un attaquant ou corrompu pendant le téléchargement. Les distributions Linux, les logiciels de sécurité et de nombreux programmes publient leur hash officiel pour que vous puissiez le comparer.",
  },
  {
    question: "Peut-il traiter des fichiers très volumineux ?",
    answer:
      "Oui. L'outil traite le fichier par blocs de 2 Mo (streaming) pour que vous puissiez vérifier des ISO ou des installateurs de plusieurs gigaoctets sans bloquer le navigateur ni épuiser la RAM.",
  },
];

const howToData = [
  {
    name: "Sélectionnez le fichier",
    text: "Faites glisser le fichier à vérifier dans la zone de dépôt ou recherchez-le avec l'explorateur de fichiers.",
  },
  {
    name: "Attendez le calcul",
    text: "La barre de progression indique l'avancement. Les fichiers volumineux peuvent prendre quelques secondes.",
  },
  {
    name: "Copiez ou notez le hash",
    text: "Le hash SHA-256 calculé s'affiche à l'écran. Copiez-le avec le bouton à droite.",
  },
  {
    name: "Comparez avec le hash officiel",
    text: "Collez le hash publié par l'auteur du logiciel. Vert = intègre. Rouge = corrompu ou altéré.",
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
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<HashVerifierUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Normes et Références',
  bibliography: [
    {
      name: 'NIST FIPS 180-4: Secure Hash Standard (SHS)',
      url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final',
    },
    {
      name: 'RFC 6234 : US Secure Hash Algorithms (SHA and SHA-based HMAC and HKDF)',
      url: 'https://datatracker.ietf.org/doc/html/rfc6234',
    },
    {
      name: "SHAttered : première collision réelle sur SHA-1",
      url: 'https://shattered.io/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: "Qu'est-ce qu'un Hash et Pourquoi le Vérifier",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Un hash cryptographique est comme une empreinte digitale pour un fichier. <strong>SHA-256</strong> produit toujours exactement 64 caractères hexadécimaux, que le fichier pèse 1 Ko ou 50 Go. Si quelqu'un modifie ne serait-ce qu'un seul bit, le hash résultant est complètement différent. C'est le mécanisme de vérification d'intégrité le plus fiable qui soit.",
    },
    {
      type: 'stats',
      items: [
        { value: '256', label: 'Bits de sécurité', icon: 'mdi:shield-lock' },
        { value: '64', label: 'Caractères hex', icon: 'mdi:pound' },
        { value: '100%', label: 'Privé et Local', icon: 'mdi:incognito' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: "Cas d'Usage : Quand Vérifier le Hash",
      level: 3,
    },
    {
      type: 'summary',
      title: "Situations où la vérification est essentielle",
      items: [
        "Téléchargements de distributions Linux (Ubuntu, Debian, Fedora publient leurs checksums SHA-256).",
        "Logiciels de sécurité, VPN et gestionnaires de mots de passe qui publient des hashes officiels.",
        "Sauvegardes critiques : vérifiez que le fichier de sauvegarde n'a pas été corrompu.",
        "Fichiers envoyés sur des réseaux non fiables où l'intégrité peut être compromise.",
        "Audits logiciels : confirmez qu'un exécutable n'a pas été modifié depuis sa publication.",
      ],
    },
  ],
  ui: {
    labelTitle: 'Vérificateur de Hash Local',
    labelSubtitle: 'Déposez n\'importe quel fichier pour générer sa signature <strong class="hv-accent">SHA-256</strong> instantanément.',
    btnSelect: 'Sélectionner un Fichier',
    labelPrivacy: 'Les fichiers ne quittent jamais votre appareil.',
    labelCalculating: 'Calcul de la Signature...',
    labelSuccess: 'Calcul Réussi',
    btnAnother: 'Vérifier un autre',
    labelHash: 'Hash SHA-256',
    btnCopyTitle: 'Copier le hash',
    labelCompare: 'Comparer avec l\'Original',
    placeholderCompare: 'Collez ici le hash attendu...',
    labelCompareNote: '* La comparaison ignore la casse et les espaces blancs.',
    statusVerified: 'VÉRIFIÉ',
    statusCorrupt: 'CORROMPU / ERREUR',
  },
};
