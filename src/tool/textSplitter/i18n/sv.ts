import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextSplitterUI } from '../ui';

const slug = 'text-delare';
const title = 'Textdelare Online — Dela upp efter stycke, mening eller längd';
const description =
  'Dela upp långa texter i mindre delar automatiskt. Välj mellan att dela upp efter antal ord, tecken, stycken eller meningar.';

const faqData = [
  {
    question: 'Hur delar man upp text för ChatGPT eller AI?',
    answer:
      'Många AI-system har teckenbegränsningar per meddelande. Med vårt verktyg kan du dela upp din långa prompt i mindre delar (till exempel var 2000:e tecken) för att skicka dem sekventiellt utan att förlora information.',
  },
  {
    question: 'Är det säkert att klistra in privata texter i delaren?',
    answer:
      'Helt säkert. Delningslogiken körs till 100 % i din webbläsare med hjälp av JavaScript. Ingen text skickas till våra servrar, vilket garanterar att dina data förblir privata på din enhet.',
  },
  {
    question: 'Finns det en gräns för hur stor text jag kan dela upp?',
    answer:
      'Vi sätter ingen strikt gräns eftersom bearbetningen sker lokalt. Du kan dela upp flera megabyte text på några sekunder, även om prestandan beror på din dators minne.',
  },
  {
    question: 'Lägger verktyget till numrering på delarna?',
    answer:
      'För närvarande returnerar verktyget de separata blocken. Du kan kopiera dem ett och ett. Många användare tycker att detta är användbart för att behålla manuell kontroll över hur de skickar varje segment till andra program.',
  },
];

const howToData = [
  {
    name: 'Klistra in din text',
    text: 'Infoga den långa texten du vill dela upp i huvudfältet.',
  },
  {
    name: 'Konfigurera delningen',
    text: 'Välj metod (tecken, ord, meningar eller stycken) och ställ in maxvärdet för varje del.',
  },
  {
    name: 'Kopiera delarna',
    text: 'Verktyget visar de genererade blocken. Kopiera den del du behöver och använd den var du vill.',
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

export const content: ToolLocaleContent<TextSplitterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Källor och referenser',
  bibliography: [
    { name: 'Unicode-algoritm för radbrytning', url: 'https://unicode.org/reports/tr14/' },
    { name: 'NLP: Tekniker för meningsuppdelning', url: 'https://en.wikipedia.org/wiki/Sentence_boundary_disambiguation' },
    { name: 'LLM context window-gränser', url: 'https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Varför behöver du en textdelare online?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att arbeta med mycket långa texter kan vara en utmaning i den digitala tidsåldern. Oavsett om du är en programmerare som behöver dela upp kod i moduler, en skribent som anpassar innehåll för sociala medier eller en användare som interagerar med <strong>stora språkmodeller (LLM)</strong> som ChatGPT, är en <strong>textdelare</strong> ett oumbärligt verktyg.',
    },
    {
      type: 'title',
      text: 'Intelligenta delningsmetoder',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Efter tecken:</strong> Exakt för att strikt hålla sig inom tekniska gränser.',
        '<strong>Efter ord:</strong> Idealiskt för artiklar och bloggar där en specifik längd eftersträvas för SEO eller läsbarhet.',
        '<strong>Efter meningar:</strong> Säkerställer att tankegångar inte bryts mitt itu, och bibehåller sammanhanget för varje block.',
        '<strong>Efter stycken:</strong> Det bästa alternativet för att behålla den logiska strukturen i ett komplext dokument.',
      ],
    },
    {
      type: 'title',
      text: 'Integritet och hastighet: Lokal bearbetning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vår <strong>textdelare online</strong> "laddar inte upp" ditt innehåll till någon server. Allt bearbetas direkt i din webbläsare. Det betyder att du kan arbeta med känsliga dokument, kontrakt eller privata e-postmeddelanden med fullständig visshet om att ingen annan kan se dem.',
    },
  ],
  ui: {
    labelInput: 'Text att dela',
    labelOutput: 'Resultat (ett objekt per rad)',
    placeholderInput: 'Klistra in din lista separerad med kommatecken, mellanslag eller annat avgränsningstecken...',
    placeholderOutput: 'Listan visas här...',
    labelDelimiter: 'Avgränsare',
    optComma: 'Kommatecken (,)',
    optSemicolon: 'Semikolon (;)',
    optSpace: 'Mellanslag',
    optCustom: 'Anpassad',
    labelCustom: 'Anpassad avgränsare',
    placeholderCustom: 'Ange avgränsare...',
    optTrim: 'Ta bort mellanslag',
    optUnique: 'Ta bort dubbletter',
    optClean: 'Ta bort tomma',
    optNumbered: 'Numrera rader',
    statLines: 'Resultatrader',
    statChars: 'Tecken',
    btnCopy: 'Kopiera lista',
    btnClear: 'Rensa',
    toastCopied: 'Kopierat till urklipp!',
  },
};
