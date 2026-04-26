import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FileSizeConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'bestandsgrootte-converter';
const title = 'Bestandsgrootte Omzetter & Visualisator - Binair & Decimaal';
const description =
  'Zet direct bestandsgrootte-eenheden om. Zie hoe lang downloads duren en visualiseer opslaggebruik op verschillende apparaten. 100% lokale verwerking.';

const faqData = [
  {
    question: 'Wat is het verschil tussen decimaal (KB) en binair (KiB)?',
    answer:
      'Decimaal gebruikt machten van 1000 (KB, MB, GB), terwijl binair machten van 1024 (KiB, MiB, GiB) gebruikt. Dit is de reden waarom een "1GB" schijf kleiner lijkt op je computer - fabrikanten gebruiken decimaal, maar besturingssystemen gebruiken binair.',
  },
  {
    question: 'Zijn mijn gegevens veilig bij het gebruik van deze tool?',
    answer:
      'Absoluut. Alle berekeningen vinden volledig plaats in je browser met JavaScript. Er worden geen gegevens naar onze servers verzonden. Je bestanden en waarden verlaten nooit je computer.',
  },
  {
    question: 'Kan ik bestanden uploaden om hun grootte te zien?',
    answer:
      'Ja! Je kunt een bestand rechtstreeks naar het invoerveld slepen, en de tool leest automatisch de grootte uit. Het bestand zelf wordt nooit geüpload - alleen de grootte wordt lokaal gebruikt.',
  },
  {
    question: 'Waarom toont mijn 1TB externe schijf minder ruimte op mijn computer?',
    answer:
      'Externe schijven worden op de markt gebracht met decimaal (1TB = 1.000.000.000.000 bytes), maar je besturingssysteem toont ze in binair (1TiB = 1.099.511.627.776 bytes). Deze tool helpt je beide perspectieven te begrijpen.',
  },
  {
    question: 'Hoe nauwkeurig is de berekening van de downloadtijd?',
    answer:
      'De berekening is gebaseerd op ideale netwerksnelheden. In de praktijk variëren snelheden door netwerkcongestie, afstand en hardware. Gebruik deze als ruwe schattingen, niet als garanties.',
  },
];

const howToData = [
  {
    name: 'Voer een bestandsgrootte in',
    text: 'Typ een getal in het invoerveld (bijv. "500" of "1.5") en selecteer de eenheid (KB, MB, GB, enz.).',
  },
  {
    name: 'Kies je standaard',
    text: 'Schakel tussen Decimaal (marketingstandaard) en Binair (computerstandaard) om te zien hoe de waarde verandert.',
  },
  {
    name: 'Zie direct omzettingen',
    text: 'Alle eenheden van Bytes tot Petabytes verschijnen direct. Klik op een blok om de waarde naar je klembord te kopiëren.',
  },
  {
    name: 'Visualiseer context',
    text: 'Zie onder de omzettingen hoe lang downloads duren op verschillende netwerken en hoeveel ruimte het bestand inneemt op verschillende apparaten.',
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
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<FileSizeConverterUI> = {
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
      text: 'Waarom bestandsgroottes omzetten? Decimaal vs. Binair begrijpen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wanneer je een <strong>"1TB"</strong> schijf koopt, meten fabrikanten dit in decimaal (1.000 GB). Maar je besturingssysteem toont het in binair (1.024 GiB = ~931 GB). Dit verschil verwart gebruikers. Een <strong>bestandsgrootte omzetter</strong> overbrugt dit gat en laat je precies zien wat je bestanden betekenen in elke eenheid.',
    },
    {
      type: 'title',
      text: 'Real-world context: Downloads & Opslag',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Weten dat een bestand "50MB" is, betekent niets zonder context. Hoe lang duurt het downloaden op 4G? Hoeveel ruimte neemt het in op een iPhone? Onze tool beantwoordt dit direct met live berekeningen voor echte netwerken en echte apparaten.',
    },
    {
      type: 'title',
      text: 'De verborgen kosten: Opslag-wiskunde',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Een "1 TB" externe schijf is in werkelijkheid <strong>~931 GiB</strong> (de truc van de fabrikant)',
        'Een 4K-film (~100GB) duurt <strong>4 seconden</strong> op glasvezel, maar <strong>13 minuten</strong> op 4G',
        'Een "256GB" iPhone slaat minder op omdat het OS ruimte inneemt en binaire wiskunde het verschil vergroot',
      ],
    },
    {
      type: 'title',
      text: 'Technische precisie waarop je kunt vertrouwen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Alle omzettingen volgen de <strong>NIST-standaarden</strong>: decimaal (SI) gebruikt 1000 als basis, binair (IEC) gebruikt 1024. De berekeningen vinden <strong>100% lokaal</strong> plaats - geen uploads, geen servers, volledige privacy.',
    },
  ],
  ui: {
    inputPlaceholder: 'Voer een getal in (bijv. 1.5 of 500)',
    selectUnit: 'Eenheid',
    standardLabel: 'Standaard:',
    decimalOption: 'Decimaal',
    binaryOption: 'Binair',
    conversionTitle: 'Omzettingen',
    networkSpeedsTitle: 'Downloadtijden',
    deviceStorageTitle: 'Impact op Opslag',
    copyFeedback: 'Gekopieerd!',
    dragDropText: 'Sleep een bestand hierheen om de grootte te lezen',
    fileTooBig: 'Bestand is te groot',
  },
};
