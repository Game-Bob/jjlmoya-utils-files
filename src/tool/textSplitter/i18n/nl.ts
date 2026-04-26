import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextSplitterUI } from '../ui';

const slug = 'tekst-splitser';
const title = 'Online Tekst Splitser - Scheiden per alinea, zin of lengte';
const description =
  'Splits lange teksten automatisch in kleinere delen. Kies tussen scheiden op aantal woorden, tekens, alinea\'s of zinnen.';

const faqData = [
  {
    question: 'Hoe splits je tekst voor ChatGPT of AI?',
    answer:
      'Veel AI\'s hebben een limiet op het aantal tekens per bericht. Met onze tool kun je je lange prompt opdelen in kleinere delen (bijvoorbeeld elke 2000 tekens) om ze opeenvolgend te verzenden zonder informatie te verliezen.'
  },
  {
    question: 'Is het veilig om priveteksten in de splitser te plakken?',
    answer:
      'Volkomen veilig. De splitsingslogica draait 100% in je browser met behulp van JavaScript. Er wordt geen tekst naar onze servers verzonden, waardoor je gegevens prive blijven op je eigen apparaat.'
  },
  {
    question: 'Is er een limiet aan de grootte van de tekst die ik kan splitsen?',
    answer:
      'We hanteren geen strikte limiet, aangezien de verwerking lokaal gebeurt. Je kunt in enkele seconden meerdere megabytes aan tekst splitsen, hoewel de prestaties afhangen van het geheugen van je computer.'
  },
  {
    question: 'Voegt het nummering toe aan de delen?',
    answer:
      'Momenteel geeft de tool de afzonderlijke blokken terug. Je kunt ze een voor een kopiëren. Veel gebruikers vinden dit handig om handmatige controle te houden over hoe ze elk segment naar andere applicaties sturen.'
  },
];

const howToData = [
  {
    name: 'Plak je tekst',
    text: 'Voer de lange tekst die je wilt splitsen in het hoofdinvoerveld in.'
  },
  {
    name: 'Configureer de splitsing',
    text: 'Kies de methode (tekens, woorden, zinnen of alinea\'s) en stel de maximale waarde voor elk deel in.'
  },
  {
    name: 'Kopieer de delen',
    text: 'De tool toont je de gegenereerde blokken. Kopieer het deel dat je nodig hebt en gebruik het waar je maar wilt.'
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
  inLanguage: 'nl'
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
      text: 'Waarom heb je een online tekst splitser nodig?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Werken met zeer lange teksten kan in het digitale tijdperk een uitdaging zijn. Of je nu een programmeur bent die code in modules moet splitsen, een schrijver die content aanpast voor sociale media, of een gebruiker die communiceert met <strong>Large Language Models (LLM\'s)</strong> zoals ChatGPT, een <strong>tekst splitser</strong> is een essentieel hulpmiddel.'
    },
    {
      type: 'title',
      text: 'Intelligente Splitsingsmethoden',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Per tekens:</strong> Precies voor het strikt naleven van technische limieten.',
        '<strong>Per woorden:</strong> Ideaal voor artikelen en blogs waarbij een specifieke lengte gewenst is voor SEO of leesbaarheid.',
        '<strong>Per zinnen:</strong> Zorgt ervoor dat ideeën niet in het midden worden afgebroken, waarbij de context van elk blok behouden blijft.',
        '<strong>Per alinea\'s:</strong> De beste optie om de logische structuur van een complex document te behouden.',
      ]
    },
    {
      type: 'title',
      text: 'Privacy en Snelheid: Lokale Verwerking',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Onze <strong>online tekst splitser</strong> "uploadt" je content niet naar een server. Alles wordt direct in je browser verwerkt. Dit betekent dat je kunt werken met gevoelige documenten, contracten of privé-e-mails in de wetenschap dat niemand anders ze kan inzien.'
    },
  ],
  ui: {
    labelInput: 'Te splitsen tekst',
    labelOutput: 'Resultaat (één item per regel)',
    placeholderInput: 'Plak hier je lijst gescheiden door komma\'s, spaties of een ander scheidingsteken...',
    placeholderOutput: 'De lijst verschijnt hier...',
    labelDelimiter: 'Scheidingsteken',
    optComma: 'Komma (,)',
    optSemicolon: 'Puntkomma (;)',
    optSpace: 'Spatie',
    optCustom: 'Aangepast',
    labelCustom: 'Aangepast scheidingsteken',
    placeholderCustom: 'Voer het scheidingsteken in...',
    optTrim: 'Spaties verwijderen',
    optUnique: 'Duplicaten verwijderen',
    optClean: 'Lege verwijderen',
    optNumbered: 'Regels nummeren',
    statLines: 'Resultaatregels',
    statChars: 'Tekens',
    btnCopy: 'Kopieer lijst',
    btnClear: 'Wissen',
    toastCopied: 'Gekopieerd naar klembord!'
  }
};
