import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashVerifierUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'verifier-hash-fichier';
const title = 'Vérificateur de Hash en Ligne — SHA 256, MD5 et SHA 1';
const description =
  'Calculez et vérifiez l\'intégrité de vos fichiers en comparant leur signature numérique SHA256, MD5 ou SHA1. Assurez-vous que vos téléchargements n\'ont pas été altérés.';

const faqData = [
  {
    question: 'Comment vérifier si un fichier a été modifié ?',
    answer:
      'Le moyen le plus sûr est de comparer son Hash. Un Hash est une empreinte numérique unique. Si ne serait-ce qu\'un bit du fichier change, le Hash sera complètement différent. En comparant le Hash obtenu avec celui fourni par l\'auteur, vous pouvez garantir son intégrité.'},
  {
    question: 'Quel est le meilleur algorithme : MD5 ou SHA-256 ?',
    answer:
      'MD5 est très rapide mais est considéré comme moins sûr contre les attaques intentionnelles. SHA-256 est la norme de sécurité actuelle et est beaucoup plus difficile à "falsifier". Pour la plupart des vérifications d\'intégrité de fichiers, SHA-256 est l\'option recommandée.'},
  {
    question: 'Pourquoi le Hash change-t-il si je renomme le fichier ?',
    answer:
      'En fait, renommer un fichier ne change PAS son Hash. Le Hash est calculé en fonction du contenu interne (les octets) du fichier, et non de son nom ou de sa date de création. Si le Hash change, c\'est que les données internes ont été modifiées.'},
  {
    question: 'Mon fichier est-il téléchargé sur le serveur pour calculer le Hash ?',
    answer:
      'Non. Notre outil utilise l\'API Web Crypto, ce qui signifie que tout le calcul est effectué localement dans votre navigateur. Votre fichier ne quitte jamais votre ordinateur, ce qui garantit une confidentialité à 100 % et est beaucoup plus rapide puisqu\'aucun téléchargement n\'est nécessaire.'},
];

const howToData = [
  {
    name: 'Sélectionnez votre fichier',
    text: 'Faites glisser ou sélectionnez le fichier que vous souhaitez vérifier dans l\'outil.'},
  {
    name: 'Choisissez l\'algorithme',
    text: 'Sélectionnez SHA-256, MD5 ou SHA-1 en fonction de la signature que vous avez.'},
  {
    name: 'Comparez les résultats',
    text: 'Collez le Hash attendu et le système vous dira instantanément s\'ils correspondent (Succès) ou s\'ils sont différents (Erreur).'},
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }}))};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text}))};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr'};

export const content: ToolLocaleContent<HashVerifierUI> = {
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
      text: 'Qu\'est-ce qu\'un Hash de fichier et pourquoi est-il vital pour votre sécurité ?',
      level: 2},
    {
      type: 'paragraph',
      html: 'Un Hash est une <strong>empreinte numérique</strong> unique à chaque fichier. C\'est une chaîne alphanumérique générée par un algorithme mathématique (comme SHA-256). Sa principale caractéristique est qu\'il est à "sens unique" : vous pouvez obtenir le Hash à partir d\'un fichier, mais vous ne pouvez pas reconstruire le fichier à partir de son Hash.'},
    {
      type: 'paragraph',
      html: 'L\'utilisation d\'un <strong>vérificateur de hash en ligne</strong> est essentielle lors du téléchargement de logiciels, d\'images ISO ou de documents sensibles. Les auteurs publient généralement le MD5 ou SHA256 de leurs fichiers pour que vous puissiez vérifier que ce que vous avez téléchargé est exactement ce qu\'ils ont mis en ligne, sans corruption ni injections malveillantes.'},
    {
      type: 'title',
      text: 'SHA-256 vs MD5 : Lequel utiliser ?',
      level: 3},
    {
      type: 'paragraph',
      html: 'L\'algorithme <strong>MD5</strong> a été très populaire pendant des années en raison de sa rapidité, mais il est aujourd\'hui considéré comme non sécurisé cryptographiquement car il est susceptible de subir des « collisions ». Cependant, il est toujours utilisé pour des vérifications d\'intégrité simples (téléchargements corrompus).'},
    {
      type: 'paragraph',
      html: 'Si vous recherchez une sécurité maximale, le <strong>SHA-256</strong> (faisant partie de la famille SHA-2) est la norme recommandée par les agences de sécurité du monde entier. Il est virtuellement impossible que deux fichiers différents produisent le même Hash SHA-256.'},
    {
      type: 'title',
      text: 'Confidentialité Totale : Calcul 100 % dans votre navigateur',
      level: 3},
    {
      type: 'tip',
      title: 'Aucun téléchargement requis',
      html: '<p>Notre outil utilise la puissance de votre ordinateur pour traiter le fichier. En utilisant la <strong>Web Crypto API</strong>, nous n\'avons pas besoin de "télécharger" le fichier sur un serveur. Cela signifie que vous pouvez vérifier des fichiers de plusieurs gigaoctets en quelques secondes, sans consommer votre bande passante internet et en vous assurant que le contenu de vos fichiers ne quitte jamais votre appareil.</p>'},
  ],
  ui: {
    labelTitle: "Vérificateur de Hash Local",
    labelSubtitle: "Déposez n'importe quel fichier pour générer instantanément sa signature <strong class=\"hv-accent\">SHA-256</strong>.",
    btnSelect: "Sélectionner un fichier",
    labelPrivacy: "Les fichiers ne quittent jamais votre appareil.",
    labelCalculating: "Calcul de la signature...",
    labelSuccess: "Calcul réussi",
    btnAnother: "Vérifier un autre",
    labelHash: "Hash SHA-256",
    btnCopyTitle: "Copier le hash",
    labelCompare: "Comparer avec l'original",
    placeholderCompare: "Collez le hash attendu ici...",
    labelCompareNote: "* La comparaison ignore la casse et les espaces.",
    statusVerified: "VÉRIFIÉ",
    statusCorrupt: "CORROMPU / ERREUR"}};
