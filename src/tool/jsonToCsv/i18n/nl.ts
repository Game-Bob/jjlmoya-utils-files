import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonToCsvUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'json-naar-csv-converter';
const title = 'JSON naar CSV Converter Online Gratis — Exporteren naar Excel';
const description =
  'Transformeer uw JSON-bestanden snel en eenvoudig in CSV-tabellen. Ideaal voor data-analisten die JSON-bestanden moeten openen in Excel of Google Sheets.';

const faqData = [
  {
    question: 'Hoe converteer je JSON naar CSV voor Excel?',
    answer:
      'Plak uw JSON-code of upload uw bestand naar onze tool. Het systeem verwerkt automatisch de datastructuur en genereert een CSV-bestand dat u kunt downloaden en rechtstreeks kunt openen in Microsoft Excel of Google Sheets.'},
  {
    question: 'Is het veilig om mijn gegevens op deze website te converteren?',
    answer:
      'Ja, 100% veilig. De conversie gebeurt volledig in uw browser via JavaScript. Er worden geen gegevens naar onze servers verzonden, waardoor uw informatie privé en beschermd blijft.'},
  {
    question: 'Wat gebeurt er als mijn JSON genest is?',
    answer:
      'Onze basisconverter is geoptimaliseerd voor arrays van objecten. Als u een zeer diepe nesteling heeft, zal de tool proberen het eerste niveau van eigenschappen vlak te maken om een leesbare tabel voor Excel te garanderen.'},
  {
    question: 'Kan ik de CSV direct kopiëren in plaats van downloaden?',
    answer:
      'Natuurlijk. Naast de knop "CSV downloaden" heeft u een optie "Resultaat kopiëren" om de inhoud rechtstreeks in een tekstverwerker of spreadsheet naar keuze te plakken.'},
];

const howToData = [
  {
    name: 'Plak uw JSON',
    text: 'Voer de JSON-code in of upload het .json-bestand in het invoerveld.'},
  {
    name: 'Verwerk de gegevens',
    text: 'De tool identificeert automatisch de velden en de structuur om ze in rijen en kolommen te organiseren.'},
  {
    name: 'Download of kopieer',
    text: 'Klik op "CSV downloaden" om het bestand op te slaan of op "Resultaat kopiëren" om het onmiddellijk te gebruiken.'},
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

export const content: ToolLocaleContent<JsonToCsvUI> = {
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
      text: 'Waarom JSON naar CSV converteren voor uw gegevensanalyse?',
      level: 2},
    {
      type: 'paragraph',
      html: 'JSON is het standaardformaat voor moderne API\'s, maar het is niet het makkelijkst door mensen te analyseren. Een <strong>JSON naar CSV converter</strong> stelt u in staat om complexe structuren om te zetten in rijen en kolommen, wat de manipulatie in krachtige tools zoals <strong>Microsoft Excel</strong>, Numbers of Google Sheets vergemakkelijkt.'},
    {
      type: 'title',
      text: 'Totale Privacy: Converteren zonder bestanden te uploaden',
      level: 2},
    {
      type: 'paragraph',
      html: 'De meeste online converters uploaden uw gegevens naar een server. Onze tool is anders: de <strong>conversie is 100% lokaal</strong>. Door JavaScript in uw browser te gebruiken, verlaten de gegevens uw computer nooit. Dit is essentieel als u werkt met gevoelige informatie, klantenlijsten of interne bedrijfsrapporten.'},
    {
      type: 'title',
      text: 'Technische tips voor een perfecte conversie',
      level: 3},
    {
      type: 'list',
      items: [
        'Zorg ervoor dat uw JSON een <strong>array van objecten</strong> is (bijv. [{}, {}]).',
        'Controleer of alle objecten vergelijkbare eigenschappen hebben om de CSV-kolommen consistent te houden.',
        'Als u speciale tekens heeft, wordt onze CSV geëxporteerd in <strong>UTF-8</strong> om problemen in Excel te voorkomen.',
      ]},
  ],
  ui: {
    statusWaiting: 'Wachten op geldige JSON',
    statusValid: 'Geldige JSON',
    statusInvalid: 'Ongeldige JSON',
    labelFlatten: 'Objecten afvlakken',
    zoneLabel: 'Plak je JSON hier of sleep een bestand',
    placeholderJson: '[{"id": 1, "name": "John", "details": {"age": 30}}]',
    btnCopyCsv: 'CSV kopiëren',
    btnDownloadCsv: 'Excel downloaden (CSV)',
    copyFeedback: 'Gekopieerd!'}};
