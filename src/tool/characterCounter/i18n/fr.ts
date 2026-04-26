import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CharacterCounterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'compteur-de-caracteres';
const title = 'Compteur de Caractères et de Mots en Ligne: Outil de Calcul';
const description =
  'Compteur de caractères, mots, phrases et paragraphes en ligne. Calcule les temps de lecture et de parole. Outil gratuit parfait pour le SEO et les réseaux sociaux.';

const faqData = [
  {
    question: 'Pourquoi le comptage des caractères est-il important pour le SEO ?',
    answer:
      'Les moteurs de recherche ont des limites recommandées pour les titres (60 caractères) et les méta-descriptions (155-160 caractères). Dépasser ces limites peut entraîner la troncation de votre contenu dans les résultats de recherche.'
  },
  {
    question: 'Le compteur de caractères inclut-il les espaces ?',
    answer:
      'Oui, par défaut nous comptons toutes les frappes, y compris les espaces. Cependant, notre outil détaille le décompte avec et sans espaces pour une plus grande précision selon vos besoins.'
  },
  {
    question: 'Comment est calculé le temps de lecture ?',
    answer:
      'Le temps de lecture est basé sur une vitesse moyenne de 200 à 250 mots par minute. Le temps de parole est calculé sur environ 130-150 mots par minute, idéal pour les scripts et les présentations.'
  },
  {
    question: 'Est-il sûr d\'analyser des textes longs ici ?',
    answer:
      'Absolument. L\'analyse est effectuée localement dans votre navigateur. Vous pouvez traiter des articles entiers ou des documents volumineux sans que le texte ne soit envoyé à nos serveurs.'
  },
];

const howToData = [
  {
    name: 'Saisir le texte',
    text: 'Écrivez directement ou collez le texte que vous souhaitez analyser dans la zone principale.'
  },
  {
    name: 'Consulter les statistiques',
    text: 'Observez le décompte des mots, caractères, phrases et paragraphes mis à jour en temps réel.'
  },
  {
    name: 'Analyser les temps',
    text: 'Vérifiez les indicateurs de temps de lecture et de parole estimés pour votre contenu.'
  },
  {
    name: 'Optimiser la longueur',
    text: 'Ajustez votre texte en fonction des limites recommandées pour les réseaux sociaux ou le SEO (titres, descriptions).'
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

export const content: ToolLocaleContent<CharacterCounterUI> = {
  slug,
  title,
  description,
  bibliography,
  faq: faqData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'L\'importance de la précision dans le texte numérique',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Dans le monde numérique, l\'"économie des mots" est fondamentale. Nous n\'écrivons plus seulement pour être lus par des humains, mais pour être traités par des algorithmes. Google coupe vos titres à 60 caractères. Twitter (désormais X) vous limite à 280. Un e-mail de vente efficace doit être lu en moins de 30 secondes.'
    },
    {
      type: 'paragraph',
      html: 'Cet <strong>outil de comptage de caractères et de mots</strong> est conçu non seulement pour vous donner un chiffre, mais pour vous aider à optimiser votre communication. En calculant des mesures telles que le <em>temps de lecture</em> ou la <em>densité des mots</em>, vous passez de l\'"écriture de texte" à la "conception de contenu".'
    },
    {
      type: 'title',
      text: 'Optimisation SEO',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Les limites des moteurs de recherche sont strictes. Si vous les dépassez, votre message est coupé par des points de suspension (...) et votre CTR (taux de clic) chute brutalement.'
    },
    {
      type: 'table',
      headers: ['Élément', 'Limite recommandée'],
      rows: [
        ['Méta titre', '50: 60 caractères'],
        ['Méta description', '150: 160 caractères'],
        ['Google Ads (Titres)', '30 caractères'],
      ]
    },
    {
      type: 'title',
      text: 'Réseaux Sociaux',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Chaque plateforme a son propre langage et sa longueur idéale. Même si la limite est plus élevée, le "point idéal" d\'engagement est généralement plus bas.'
    },
    {
      type: 'table',
      headers: ['Plateforme', 'Limite'],
      rows: [
        ['Twitter (X)', '280 car. (Idéal : 70-100)'],
        ['Instagram Bio', '150 caractères'],
        ['LinkedIn Post', '3000 car. (Idéal : ~1200)'],
      ]
    },
    {
      type: 'title',
      text: 'Questions Fréquentes sur le Comptage',
      level: 2
    },
    {
      type: 'title',
      text: 'Les espaces comptent-ils comme des caractères ?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Oui, et c\'est une erreur courante de les oublier. Pour un ordinateur, un espace est un octet d\'information au même titre qu\'une lettre "A". Sur des plateformes comme Twitter ou les bases de données SMS, les espaces consomment votre limite. Notre outil vous donne les deux données : "avec espaces" et "sans espaces" (utile pour les traducteurs ou les maquettistes).'
    },
    {
      type: 'title',
      text: 'Comment est calculé le Temps de Lecture ?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Nous utilisons la norme moyenne de lecture pour les adultes : <strong>200-250 mots par minute</strong> (lecture silencieuse). Pour le temps de parole (élocution), nous calculons environ <strong>130-150 mots par minute</strong>, ce qui correspond au rythme d\'une conversation naturelle ou d\'un narrateur de livre audio mesuré.'
    },
    {
      type: 'title',
      text: 'Confidentialité : Où va mon texte ?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Nulle part. Tout le traitement est effectué dans votre navigateur via <strong>JavaScript côté client</strong>. Vous pouvez vous déconnecter d\'Internet et l\'outil continuera de fonctionner. Aucune donnée n\'est envoyée à nos serveurs.'
    },
  ],
  ui: {
    labelChars: 'Caractères',
    labelWords: 'Mots',
    labelLines: 'Lignes',
    labelParagraphs: 'Paragraphes',
    labelNoSpaces: 'Sans espaces',
    labelBytes: 'Octets',
    labelReading: 'Lecture',
    labelSpeaking: 'Parole',
    labelUpload: 'Charger fichier',
    btnCopyTitle: 'Copier texte',
    btnClearTitle: 'Effacer',
    placeholder: 'Écrivez ou collez votre texte ici...',
    unitSec: 's',
    unitMin: 'min',
    numberLocale: 'fr-FR'
  }
};
