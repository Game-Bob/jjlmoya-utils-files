import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FileSizeConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'filstorlek-konverterare';
const title = 'Filstorlekskonverterare & Visualiserare - Binär & Decimal';
const description =
  'Konvertera filstorleksenheter direkt. Se hur lång tid nedladdningar tar och visualisera lagringsutrymme på olika enheter. 100 % lokal bearbetning.';

const faqData = [
  {
    question: 'Vad är skillnaden mellan decimal (KB) och binär (KiB)?',
    answer:
      'Decimal använder potenser av 1000 (KB, MB, GB), medan binär använder potenser av 1024 (KiB, MiB, GiB). Det är därför en "1GB"-hårddisk ser mindre ut i din dator – tillverkare använder decimal, men operativsystem använder binär.',
  },
  {
    question: 'Är mina data säkra när jag använder detta verktyg?',
    answer:
      'Absolut. Alla beräkningar sker helt i din webbläsare med JavaScript. Inga data skickas till våra servrar. Dina filer och värden lämnar aldrig din dator.',
  },
  {
    question: 'Kan jag ladda upp filer för att se deras storlek?',
    answer:
      'Ja! Du kan dra och släppa en fil direkt i inmatningsfältet, så läser verktyget automatiskt av dess storlek. Själva filen laddas aldrig upp – endast dess storlek används lokalt.',
  },
  {
    question: 'Varför visar min externa 1TB-hårddisk mindre utrymme i min dator?',
    answer:
      'Externa hårddiskar marknadsförs med decimal (1TB = 1 000 000 000 000 byte), men ditt operativsystem visar dem i binär (1TiB = 1 099 511 627 776 byte). Detta verktyg hjälper dig att förstå båda perspektiven.',
  },
  {
    question: 'Hur exakt är beräkningen av nedladdningstid?',
    answer:
      'Beräkningen baseras på ideala nätverkshastigheter. Verkliga hastigheter varierar beroende på nätverksbelastning, avstånd och hårdvara. Använd dessa som grova uppskattningar, inte garantier.',
  },
];

const howToData = [
  {
    name: 'Ange en filstorlek',
    text: 'Skriv in en siffra i inmatningsfältet (t.ex. "500" eller "1.5") och välj enhet (KB, MB, GB, etc.).',
  },
  {
    name: 'Välj din standard',
    text: 'Växla mellan Decimal (marknadsstandard) och Binär (datorstandard) för att se hur värdet ändras.',
  },
  {
    name: 'Se omedelbara konverteringar',
    text: 'Alla enheter från Byte till Petabyte visas direkt. Klicka på valfritt block för att kopiera dess värde till ditt urklipp.',
  },
  {
    name: 'Visualisera sammanhang',
    text: 'Under konverteringarna ser du hur lång tid nedladdningar tar på olika nätverk och hur mycket utrymme filen tar upp på olika enheter.',
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
  inLanguage: 'sv',
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
      text: 'Varför konvertera filstorlekar? Förstå Decimal vs. Binär',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'När du köper en disk på <strong>"1TB"</strong> mäter tillverkarna den i decimal (1 000 GB). Men ditt operativsystem visar den i binär (1 024 GiB = ca 931 GB). Denna skillnad förvirrar ofta användare. En <strong>filstorlekskonverterare</strong> överbryggar detta gap och visar exakt vad dina filer innebär i valfri enhet.',
    },
    {
      type: 'title',
      text: 'Verkliga sammanhang: Nedladdningar & Lagring',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att veta att en fil är "50MB" betyder ingenting utan sammanhang. Hur lång tid tar det att ladda ner med 4G? Hur mycket plats tar den på en iPhone? Vårt verktyg svarar på detta direkt med live-beräkningar för riktiga nätverk och enheter.',
    },
    {
      type: 'title',
      text: 'Den dolda kostnaden: Lagringsmatematik',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'En extern disk på "1 TB" är i själva verket <strong>ca 931 GiB</strong> (tillverkarknepet)',
        'En 4K-film (ca 100GB) tar <strong>4 sekunder</strong> på fiber men <strong>13 minuter</strong> med 4G',
        'En iPhone på "256GB" rymmer mindre eftersom operativsystemet tar plats och binär matematik förstärker skillnaden',
      ],
    },
    {
      type: 'title',
      text: 'Teknisk precision du kan lita på',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Alla konverteringar följer <strong>NIST-standarder</strong>: decimal (SI) använder 1000 som bas, binär (IEC) använder 1024. Beräkningarna sker <strong>100 % lokalt</strong> – inga uppladdningar, inga servrar, full integritet.',
    },
  ],
  ui: {
    inputPlaceholder: 'Ange ett nummer (t.ex. 1.5 eller 500)',
    selectUnit: 'Enhet',
    standardLabel: 'Standard:',
    decimalOption: 'Decimal',
    binaryOption: 'Binär',
    conversionTitle: 'Konverteringar',
    networkSpeedsTitle: 'Nedladdningstider',
    deviceStorageTitle: 'Lagringspåverkan',
    copyFeedback: 'Kopierat!',
    dragDropText: 'Släpp en fil här för att läsa dess storlek',
    fileTooBig: 'Filen är för stor',
  },
};
