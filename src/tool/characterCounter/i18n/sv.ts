import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CharacterCounterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'teckenraknare';
const title = 'Teckenräknare och Ordräknare Online, Räkna Bokstäver';
const description =
  'Online-räknare för tecken, ord, meningar och stycken. Beräknar läs- och taltid. Gratis verktyg perfekt för SEO och sociala medier.';

const faqData = [
  {
    question: 'Varför är teckenräkning viktigt för SEO?',
    answer:
      'Sökmotorer har rekommenderade gränser för titlar (60 tecken) och metabeskrivningar (155-160 tecken). Att överskrida dessa gränser kan leda till att ditt innehåll klipps av i sökresultaten.'},
  {
    question: 'Inkluderar teckenräknaren mellanslag?',
    answer:
      'Ja, som standard räknar vi alla tecken, inklusive mellanslag. Vårt verktyg delar dock upp räkningen med och utan mellanslag för högre precision enligt dina behov.'},
  {
    question: 'Hur beräknas lästiden?',
    answer:
      'Lästiden baseras på en genomsnittlig hastighet av 200 till 250 ord per minut. Taltiden beräknas till cirka 130-150 ord per minut, vilket är idealiskt för manus och presentationer.'},
  {
    question: 'Är det säkert att analysera långa texter här?',
    answer:
      'Absolut. Analysen utförs lokalt i din webbläsare. Du kan bearbeta hela artiklar eller långa dokument utan att texten skickas till våra servrar.'},
];

const howToData = [
  {
    name: 'Ange texten',
    text: 'Skriv direkt eller klistra in texten du vill analysera i huvudområdet.'},
  {
    name: 'Granska statistik',
    text: 'Se hur antalet ord, tecken, meningar och stycken uppdateras i realtid.'},
  {
    name: 'Analysera tider',
    text: 'Kontrollera indikatorerna för uppskattad läs- och taltid för ditt innehåll.'},
  {
    name: 'Optimera längd',
    text: 'Justera din text enligt de rekommenderade gränserna för sociala medier eller SEO (titlar, beskrivningar).'},
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  inLanguage: 'sv'};

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
      text: 'Vikten av precision i digital text',
      level: 2},
    {
      type: 'paragraph',
      html: 'I den digitala världen är "ordekonomi" grundläggande. Vi skriver inte längre bara för att läsas av människor, utan för att bearbetas av algoritmer. Google klipper dina titlar vid 60 tecken. Twitter (nu X) begränsar dig till 280. Ett effektivt säljmejl bör kunna läsas på mindre än 30 sekunder.'},
    {
      type: 'paragraph',
      html: 'Detta <strong>verktyg för tecken- och ordräkning</strong> är inte bara till för att ge dig ett antal, utan för att hjälpa dig att optimera din kommunikation. Genom att beräkna mätvärden som <em>lästid</em> eller <em>ordtäthet</em> går du från att "skriva text" till att "designa innehåll".'},
    {
      type: 'title',
      text: 'SEO-optimering',
      level: 3},
    {
      type: 'paragraph',
      html: 'Sökmotorsgränserna är strikta. Om du går över gränsen klipps ditt meddelande av med ellips (...) och din CTR (klickfrekvens) sjunker drastiskt.'},
    {
      type: 'table',
      headers: ['Element', 'Rekommenderad gräns'],
      rows: [
        ['Metatitel', '50: 60 tecken'],
        ['Metabeskrivning', '150: 160 tecken'],
        ['Google Ads (Rubriker)', '30 tecken'],
      ]},
    {
      type: 'title',
      text: 'Sociala medier',
      level: 3},
    {
      type: 'paragraph',
      html: 'Varje plattform har sitt eget språk och sin ideala längd. Även om gränsen är högre ligger "sweet spot" för engagemang vanligtvis lägre.'},
    {
      type: 'table',
      headers: ['Plattform', 'Gräns'],
      rows: [
        ['Twitter (X)', '280 tecken (Idéalt: 70-100)'],
        ['Instagram Bio', '150 tecken'],
        ['LinkedIn Post', '3000 tecken (Idéalt: ~1200)'],
      ]},
    {
      type: 'title',
      text: 'Vanliga frågor om räkning',
      level: 2},
    {
      type: 'title',
      text: 'Räknas mellanslag som tecken?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Ja, och det är ett vanligt misstag att glömma dem. För en dator är ett mellanslag en byte information precis som bokstaven "A". På plattformar som Twitter eller i SMS-databaser förbrukar mellanslag din gräns. Vårt verktyg ger dig båda datapunkterna: "med mellanslag" och "utan mellanslag" (användbart för översättare eller layoutare).'},
    {
      type: 'title',
      text: 'Hur beräknas lästiden?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Vi använder genomsnittlig lässtandard för vuxna: <strong>200-250 ord per minut</strong> (tyst läsning). För taltid beräknar vi cirka <strong>130-150 ord per minut</strong>, vilket är rytmen i ett naturligt samtal eller en uppmätt ljudboksberättare.'},
    {
      type: 'title',
      text: 'Integritet: Vart tar min text vägen?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Ingenstans. All bearbetning sker i din webbläsare med <strong>JavaScript på klientsidan</strong>. Du kan koppla bort internet och verktyget kommer fortfarande att fungera. Ingen data skickas till våra servrar.'},
  ],
  ui: {
    labelChars: 'Tecken',
    labelWords: 'Ord',
    labelLines: 'Rader',
    labelParagraphs: 'Stycken',
    labelNoSpaces: 'Utan mellanslag',
    labelBytes: 'Byte',
    labelReading: 'Läsning',
    labelSpeaking: 'Tal',
    labelUpload: 'Ladda upp fil',
    btnCopyTitle: 'Kopiera text',
    btnClearTitle: 'Rensa',
    placeholder: 'Skriv eller klistra in din text här...',
    unitSec: 's',
    unitMin: 'min',
    numberLocale: 'sv-SE'}};
