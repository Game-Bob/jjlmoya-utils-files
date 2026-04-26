import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextToMarkdownUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'konvertera-text-till-markdown';
const title = 'Text till Markdown Konverterare Online: Formatera dokument';
const description =
  'Omvandla snabbt vanlig text till Markdown-kod. Konvertera stycken, rubriker och listor till ett format som är kompatibelt med GitHub, Reddit och MD-redigerare.';

const faqData = [
  {
    question: 'Vad är Markdown och vad används det till?',
    answer:
      'Markdown är ett lättviktigt märkspråk som används för att formatera text med en enkel textbaserad syntax. Det används flitigt på plattformar som GitHub, Reddit, Slack och i statiska webbplatsgeneratorer eftersom det är lätt att läsa och skriva.'
  },
  {
    question: 'Är min text säker under konverteringen?',
    answer:
      'Ja, 100 % säkert. Konverteringen sker helt i din webbläsare med hjälp av JavaScript. Ingen information skickas till våra servrar, vilket garanterar att dina dokument förblir privata.'
  },
  {
    question: 'Hur konverteras rubriker och listor?',
    answer:
      'Vårt verktyg identifierar textens grundläggande struktur. Om det upptäcker enstaka rader före stycken kan det behandla dem som rubriker. Rader som börjar med bindestreck eller siffror formateras som standard Markdown-listor.'
  },
  {
    question: 'Kan jag använda detta för komplexa tabeller eller kod?',
    answer:
      'Detta verktyg är utformat för grundläggande textformatering (stycken, listor, fetstil, kursiv stil). För mycket komplexa strukturer, som tabeller med flera kolumner, kan manuell justering i den genererade Markdown-koden krävas.'
  },
];

const howToData = [
  {
    name: 'Klistra in din text',
    text: 'Infoga den vanliga texten du vill formatera i källfältet.'
  },
  {
    name: 'Automatisk konvertering',
    text: 'Verktyget bearbetar texten och tillämpar Markdown-syntax på de olika identifierade elementen.'
  },
  {
    name: 'Kopiera eller ladda ner',
    text: 'Klicka på "Kopiera resultat" eller "Ladda ner .md" för att få din formaterade fil.'
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  inLanguage: 'sv'
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
      text: 'Varför konvertera din text till Markdown?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Om du är utvecklare, bloggare eller teknisk skribent använder du förmodligen <strong>Markdown</strong> dagligen. Genom att konvertera din <strong>vanliga text till Markdown</strong> kan du bibehålla en ren struktur som enkelt kan exporteras till HTML, PDF eller direkt till plattformar som WordPress och statiska webbplatsgeneratorer.'
    },
    {
      type: 'title',
      text: 'Total integritet: 100 % lokal konvertering',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'De flesta onlinekonverterare bearbetar din text på sina servrar. Vår <strong>text till Markdown konverterare</strong> körs helt i din webbläsare. Dina data lämnar aldrig din dator, vilket gör det idealiskt för att utkast till interna dokument, mötesanteckningar eller personliga idéer.'
    },
    {
      type: 'title',
      text: 'Utvalda funktioner',
      level: 3
    },
    {
      type: 'list',
      items: [
        'Automatisk identifiering av <strong>rubriker och titlar</strong>.',
        'Konvertering av <strong>punktlistor och numrerade listor</strong>.',
        'Stöd för grundläggande formatering som <strong>fetstil och kursiv stil</strong>.',
        'Omedelbar export till <strong>.md-fil</strong>.',
      ]
    },
  ],
  ui: {
    labelInput: 'Vanlig text',
    labelOutput: 'Formaterad Markdown',
    placeholderInput: 'Klistra in din text här...',
    placeholderOutput: 'Den genererade Markdown-koden visas här...',
    btnConvert: 'Konvertera till Markdown',
    btnDownload: 'Ladda ner .md',
    btnCopy: 'Kopiera resultat',
    btnClear: 'Rensa allt',
    toastCopied: 'Markdown-kod kopierad!',
    toastDownloaded: 'Laddar ner .md-fil...'
  }
};
