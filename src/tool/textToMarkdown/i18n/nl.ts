import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextToMarkdownUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tekst-naar-markdown-converter';
const title = 'Online Tekst naar Markdown Converter: Documenten formatteren';
const description =
  'Transformeer platte tekst snel in Markdown-code. Converteer alinea\'s, koppen en lijsten naar een formaat dat compatibel is met GitHub, Reddit en MD-editors.';

const faqData = [
  {
    question: 'Wat is Markdown en waar is het voor?',
    answer:
      'Markdown is een lichtgewicht opmaaktaal die wordt gebruikt om tekst te formatteren met een platte tekstsyntaxis. Het wordt veel gebruikt op platforms zoals GitHub, Reddit, Slack en in generatoren voor statische sites omdat het gemakkelijk te lezen en te schrijven is.'
  },
  {
    question: 'Is mijn tekst veilig tijdens de conversie?',
    answer:
      'Ja, 100% veilig. De conversie gebeurt volledig in uw browser via JavaScript. Er wordt geen informatie naar onze servers verzonden, waardoor uw documenten privé blijven.'
  },
  {
    question: 'Hoe worden koppen en lijsten geconverteerd?',
    answer:
      'Onze tool identificeert de basisstructuur van de tekst. Als er enkele regels voor alinea\'s worden gedetecteerd, kan het deze als koppen behandelen. Regels die beginnen met streepjes of cijfers worden geformatteerd als standaard Markdown-lijsten.'
  },
  {
    question: 'Kan ik dit gebruiken voor complexe tabellen of code?',
    answer:
      'Deze tool is ontworpen voor basis tekstverwerking (alinea\'s, lijsten, vet, cursief). Voor zeer complexe structuren zoals tabellen met meerdere kolommen kan handmatige aanpassing in de gegenereerde Markdown vereist zijn.'
  },
];

const howToData = [
  {
    name: 'Plak uw tekst',
    text: 'Voer de platte tekst die u wilt formatteren in het invoerveld in.'
  },
  {
    name: 'Automatische conversie',
    text: 'De tool verwerkt de tekst en past de Markdown-syntaxis toe op de verschillende geïdentificeerde elementen.'
  },
  {
    name: 'Kopiëren of downloaden',
    text: 'Klik op "Resultaat kopiëren" or "Download .md" om uw geformatteerde bestand te verkrijgen.'
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

export const content: ToolLocaleContent<TextToMarkdownUI> = {
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
      text: 'Waarom uw tekst naar Markdown converteren?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Als u een ontwikkelaar, blogger of technisch schrijver bent, gebruikt u waarschijnlijk dagelijks <strong>Markdown</strong>. Door uw <strong>platte tekst naar Markdown</strong> te converteren, behoudt u een schone structuur die gemakkelijk kan worden geëxporteerd naar HTML, PDF of rechtstreeks naar platforms zoals WordPress en generatoren voor statische sites.'
    },
    {
      type: 'title',
      text: 'Totale Privacy: 100% Lokale Conversie',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'De meeste online converters verwerken uw tekst op hun servers. Onze <strong>tekst naar Markdown converter</strong> draait volledig in uw browser. Uw gegevens verlaten uw computer nooit, waardoor het ideaal is voor het opstellen van interne documenten, vergadernotities of persoonlijke ideeën.'
    },
    {
      type: 'title',
      text: 'Belangrijkste Kenmerken',
      level: 3
    },
    {
      type: 'list',
      items: [
        'Automatische identificatie van <strong>koppen en titels</strong>.',
        'Conversione van <strong>lijsten met opsommingstekens en genummerde lijsten</strong>.',
        'Ondersteuning voor basisopmaak zoals <strong>vet en cursief</strong>.',
        'Onmiddellijke export naar <strong>.md bestand</strong>.',
      ]
    },
  ],
  ui: {
    labelInput: 'Platte Tekst',
    labelOutput: 'Geformatteerde Markdown',
    placeholderInput: 'Plak uw tekst hier...',
    placeholderOutput: 'De gegenereerde Markdown code verschijnt hier...',
    btnConvert: 'Converteer naar Markdown',
    btnDownload: 'Download .md',
    btnCopy: 'Resultaat kopiëren',
    btnClear: 'Alles wissen',
    toastCopied: 'Markdown code gekopieerd!',
    toastDownloaded: '.md bestand wordt gedownload...',
    labelHint: 'Plak de inhoud en controleer de geconverteerde Markdown direct in je browser.',
  }
};
