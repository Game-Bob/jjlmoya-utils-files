import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonToCsvUI } from '../ui';

const slug = 'konvertera-json-till-csv';
const title = 'JSON till CSV Konverterare Online Gratis — Exportera till Excel';
const description =
  'Omvandla dina JSON-filer till CSV-tabeller snabbt och enkelt. Idealiskt för dataanalytiker som behöver öppna JSON-filer i Excel eller Google Sheets.';

const faqData = [
  {
    question: 'Hur konverterar man JSON till CSV för Excel?',
    answer:
      'Klistra bara in din JSON-kod eller ladda upp din fil till vårt verktyg. Systemet bearbetar automatiskt datastrukturen och genererar en CSV-fil som du kan ladda ner och öppna direkt i Microsoft Excel eller Google Sheets.',
  },
  {
    question: 'Är det säkert att konvertera mina data på den här webbplatsen?',
    answer:
      'Ja, 100 % säkert. Konverteringen sker helt i din webbläsare med hjälp av JavaScript. Inga data skickas till våra servrar, vilket garanterar att din information förblir privat och säker.',
  },
  {
    question: 'Vad händer om min JSON är nästlad?',
    answer:
      'Vår baskonverterare är optimerad för matriser av objekt. Om du har mycket djup nästling kommer verktyget att försöka platta ut den första nivån av egenskaper för att säkerställa en läsbar tabell för Excel.',
  },
  {
    question: 'Kan jag kopiera min CSV direkt istället för att ladda ner den?',
    answer:
      'Självklart. Förutom knappen "Ladda ner CSV" har du alternativet "Kopiera resultat" för att klistra in innehållet direkt i valfri textredigerare eller kalkylblad.',
  },
];

const howToData = [
  {
    name: 'Klistra in din JSON',
    text: 'Infoga JSON-koden eller ladda upp .json-filen i inmatningsområdet.',
  },
  {
    name: 'Bearbeta data',
    text: 'Verktyget identifierar automatiskt fält och struktur för att organisera dem i rader och kolumner.',
  },
  {
    name: 'Ladda ner eller kopiera',
    text: 'Klicka på "Ladda ner CSV" för att spara filen eller "Kopiera resultat" för att använda den direkt.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<JsonToCsvUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Källor och referenser',
  bibliography: [
    { name: 'RFC 4180: Specifikation för CSV-format', url: 'https://tools.ietf.org/html/rfc4180' },
    { name: 'ECMA-404: Standarden för JSON-datautbyte', url: 'https://www.json.org/json-en.html' },
    { name: 'Microsoft: Importera CSV till Excel', url: 'https://support.microsoft.com/sv-se/office/importera-eller-exportera-textfiler-txt-eller-csv-5250ac4c-663c-47ce-937b-339e391393ba' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Varför konvertera JSON till CSV för din dataanalys?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON är standardformatet för moderna API:er, men det är inte det lättaste att analysera mänskligt. En <strong>JSON till CSV-konverterare</strong> låter dig förvandla komplexa strukturer till rader och kolumner, vilket underlättar hantering i kraftfulla verktyg som <strong>Microsoft Excel</strong>, Numbers eller Google Sheets.',
    },
    {
      type: 'title',
      text: 'Total integritet: Konvertera utan att ladda upp filer',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De flesta onlinekonverterare laddar upp dina data till en server. Vårt verktyg är annorlunda: <strong>konverteringen är 100 % lokal</strong>. Genom att använda JavaScript i din webbläsare lämnar data aldrig din dator. Detta är avgörande om du arbetar med känslig information, kundlistor eller interna företagsrapporter.',
    },
    {
      type: 'title',
      text: 'Tekniska tips för en perfekt konvertering',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Se till att din JSON är en <strong>array av objekt</strong> (t.ex. [{}, {}]).',
        'Kontrollera att alla objekt har liknande egenskaper för att hålla CSV-kolumnerna konsekventa.',
        'Om du har specialtecken exporteras vår CSV i <strong>UTF-8</strong> för att undvika problem i Excel.',
      ],
    },
  ],
  ui: {
    labelInput: 'Käll-JSON',
    labelOutput: 'Resulterande CSV',
    placeholderInput: 'Klistra in din JSON-matris här (t.ex. [{"id": 1, "name": "Johan"}])',
    placeholderOutput: 'Genererad CSV visas här...',
    btnConvert: 'Konvertera nu',
    btnDownload: 'Ladda ner CSV',
    btnCopy: 'Kopiera resultat',
    btnClear: 'Rensa allt',
    toastCopied: 'CSV kopierad till urklipp!',
    toastDownloaded: 'Laddar ner CSV-fil...',
    errorInvalidJson: 'Ogiltigt JSON-format. Vänligen kontrollera dina data.',
  },
};
