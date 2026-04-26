import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CharacterCounterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tekst-teller';
const title = 'Tekst en Woorden Teller Online — Letters Tellen';
const description =
  'Online teller voor karakters, woorden, zinnen en paragrafen. Bereken lees- en spreektijden. Gratis tool ideaal voor SEO en sociale media.';

const faqData = [
  {
    question: 'Waarom is het aantal tekens belangrijk voor SEO?',
    answer:
      'Zoekmachines hebben aanbevolen limieten voor titels (60 tekens) and meta-beschrijvingen (155-160 tekens). Als u deze limieten overschrijdt, kan uw inhoud worden afgekort in de zoekresultaten.'},
  {
    question: 'Telt de tekenteller ook spaties mee?',
    answer:
      'Ja, standaard tellen we alle aanslagen mee, inclusief spaties. Onze tool splitst de telling echter uit met en zonder spaties voor meer precisie, afhankelijk van uw behoeften.'},
  {
    question: 'Hoe wordt de leestijd berekend?',
    answer:
      'De leestijd is gebaseerd op een gemiddelde snelheid van 200 tot 250 woorden per minuut. De spreektijd wordt berekend op ongeveer 130-150 woorden per minuut, ideaal voor scripts en presentaties.'},
  {
    question: 'Is het veilig om hier lange teksten te analyseren?',
    answer:
      'Absoluut. De analyse wordt lokaal in uw browser uitgevoerd. U kunt volledige artikelen of lange documenten verwerken zonder dat de tekst naar onze servers wordt verzonden.'},
];

const howToData = [
  {
    name: 'Tekst invoeren',
    text: 'Typ rechtstreeks of plak de tekst die u wilt analyseren in het hoofdvenster.'},
  {
    name: 'Statistieken bekijken',
    text: 'Bekijk hoe het aantal woorden, tekens, zinnen en paragrafen in realtime wordt bijgewerkt.'},
  {
    name: 'Tijden analyseren',
    text: 'Bekijk de indicatoren voor de geschatte lees- en spreektijd voor uw inhoud.'},
  {
    name: 'Lengte optimaliseren',
    text: 'Pas uw tekst aan volgens de aanbevolen limieten voor sociale media of SEO (titels, beschrijvingen).'},
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
  inLanguage: 'nl'};

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
      text: 'Het belang van precisie in digitale tekst',
      level: 2},
    {
      type: 'paragraph',
      html: 'In de digitale wereld is de "economie van woorden" fundamenteel. We schrijven niet langer alleen om door mensen gelezen te worden, maar om door algoritmen verwerkt te worden. Google kort uw titels in op 60 tekens. Twitter (nu X) beperkt u tot 280. Een effectieve verkoopmail moet in minder than 30 seconden gelezen kunnen worden.'},
    {
      type: 'paragraph',
      html: 'Deze <strong>tool voor het tellen van tekens en woorden</strong> is niet alleen bedoeld om u een getal te geven, maar om u te helpen uw communicatie te optimaliseren. Door statistieken zoals <em>leestijd</em> of <em>woorddichtheid</em> te berekenen, gaat u van "tekst schrijven" naar "inhoud ontwerpen".'},
    {
      type: 'title',
      text: 'SEO-optimalisatie',
      level: 3},
    {
      type: 'paragraph',
      html: 'De limieten van zoekmachines zijn streng. Als u er overheen gaat, wordt uw bericht afgebroken met weglatingstekens (...) en daalt uw CTR (Click Through Rate) scherp.'},
    {
      type: 'table',
      headers: ['Element', 'Aanbevolen limiet'],
      rows: [
        ['Meta Title', '50 - 60 tekens'],
        ['Meta Description', '150 - 160 tekens'],
        ['Google Ads (Koppen)', '30 tekens'],
      ]},
    {
      type: 'title',
      text: 'Sociale Media',
      level: 3},
    {
      type: 'paragraph',
      html: 'Elk platform heeft zijn eigen taal en ideale lengte. Zelfs als de limiet hoger is, is de "sweet spot" voor betrokkenheid meestal lager.'},
    {
      type: 'table',
      headers: ['Platform', 'Limiet'],
      rows: [
        ['Twitter (X)', '280 tekens (Ideaal: 70-100)'],
        ['Instagram Bio', '150 tekens'],
        ['LinkedIn Post', '3000 tekens (Ideaal: ~1200)'],
      ]},
    {
      type: 'title',
      text: 'Veelgestelde vragen over tellen',
      level: 2},
    {
      type: 'title',
      text: 'Tellen spaties mee als tekens?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Ja, en het is een veelgemaakte fout om ze te vergeten. Voor een computer is een spatie een byte aan informatie, net als de letter "A". Op platforms zoals Twitter of SMS-databases verbruiken spaties uw limiet. Onze tool geeft u beide gegevenspunten: "met spaties" en "zonder spaties" (handig voor vertalers of lay-outers).'},
    {
      type: 'title',
      text: 'Hoe wordt de leestijd berekend?',
      level: 3},
    {
      type: 'paragraph',
      html: 'We gebruiken de gemiddelde leesstandaard voor volwassenen: <strong>200-250 woorden per minuut</strong> (stil lezen). Voor de spreektijd berekenen we ongeveer <strong>130-150 woorden per minuut</strong>, wat het ritme is van een natuurlijk gesprek of een rustige audioboekauteur.'},
    {
      type: 'title',
      text: 'Privacy: Waar gaat mijn tekst heen?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Nergens heen. Alle verwerking vindt plaats in uw browser via <strong>client-side JavaScript</strong>. U kunt de verbinding met internet verbreken en de tool blijft werken. Er worden geen gegevens naar onze servers verzonden.'},
  ],
  ui: {
    labelChars: 'Tekens',
    labelWords: 'Woorden',
    labelLines: 'Regels',
    labelParagraphs: 'Paragrafen',
    labelNoSpaces: 'Zonder spaties',
    labelBytes: 'Bytes',
    labelReading: 'Lezen',
    labelSpeaking: 'Spreken',
    labelUpload: 'Bestand uploaden',
    btnCopyTitle: 'Tekst kopiëren',
    btnClearTitle: 'Wissen',
    placeholder: 'Typ of plak uw tekst hier...',
    unitSec: 's',
    unitMin: 'min',
    numberLocale: 'nl-NL'}};
