import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClipboardToImageUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'klembord-naar-png';
const title = 'Klembord naar PNG: Screenshots en Afbeeldingen Downloaden';
const description =
  'Online tool om klembordinhoud (screenshots, afbeeldingen) om te zetten in een direct downloadbaar PNG-bestand. 100% privé en snel proces.';

const faqData = [
  {
    question: 'Is het veilig om mijn screenshots hier te plakken?',
    answer:
      'Ja, het is volkomen veilig. Deze tool werkt 100% lokaal in uw browser. Uw klembordgegevens worden nooit naar een server verzonden, wat uw totale privacy garandeert.'},
  {
    question: 'Welke soorten inhoud kan ik converteren?',
    answer:
      'Gekopieerde afbeeldingen (screenshots, foto\'s), tekst die naar een .txt-bestand wordt omgezet, of zelfs HTML-elementen kunt u plakken. Het meest gebruikelijke is om snelle screenshots op te slaan als PNG-bestanden.'},
  {
    question: 'Waarom werkt de plakknop niet?',
    answer:
      'Vanwege beveiligingsbeperkingen van browsers vereist de knop "Plakken" soms expliciete toestemming. Als het niet werkt, kunt u altijd de standaard sneltoets gebruiken: Ctrl+V (Windows) of Cmd+V (Mac).'},
  {
    question: 'Werkt het op mobiele apparaten?',
    answer:
      'Ja, u kunt de plakfunctie van uw mobiel gebruiken om inhoud te bekijken, hoewel de ervaring is geoptimaliseerd voor snel screenshot-beheer op desktop.'},
];

const howToData = [
  {
    name: 'Inhoud kopiëren',
    text: 'Maak een screenshot of kopieer een afbeelding/tekst uit een willekeurige toepassing.'},
  {
    name: 'In het gebied plakken',
    text: 'Klik op het plakgebied of gebruik de sneltoets Ctrl+V / Cmd+V om de inhoud te laden.'},
  {
    name: 'Voorbeeld bekijken',
    text: 'Controleer of de inhoud correct is in het voorbeeldgebied dat direct verschijnt.'},
  {
    name: 'Bestand downloaden',
    text: 'Druk op de downloadknop om de inhoud als een echt bestand op uw computer op te slaan.'},
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

export const content: ToolLocaleContent<ClipboardToImageUI> = {
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
      text: 'Hoe een klembordafbeelding als bestand op te slaan',
      level: 2},
    {
      type: 'paragraph',
      html: 'Met deze gratis online tool kunt u <strong>de inhoud van uw klembord direct omzetten in een afbeeldingsbestand</strong> (PNG). Het is de perfecte oplossing wanneer u een screenshot heeft gemaakt (Windows + Shift + S) of een afbeelding van een website heeft gekopieerd en deze op uw computer moet opslaan zonder zware editors zoals Photoshop of Paint te openen.'},
    {
      type: 'title',
      text: 'Waarom deze klembord-converter gebruiken?',
      level: 2},
    {
      type: 'list',
      items: [
        '<strong>Snelheid:</strong> Druk gewoon op <code>Ctrl + V</code> en download. Geen tussenstappen.',
        '<strong>Privacy:</strong> Het hele proces wordt in uw browser uitgevoerd. Uw afbeeldingen <strong>worden nooit naar een server geüpload</strong>.',
        '<strong>Originele kwaliteit:</strong> We halen de ruwe gegevens van het klembord, zodat de gedownloade afbeelding de hoogst mogelijke kwaliteit behoudt.',
        '<strong>Automatische organisatie:</strong> Bestanden worden gedownload met een naam op basis van de exacte datum en tijd, waardoor het organiseren van uw captures eenvoudig is.',
      ]},
    {
      type: 'title',
      text: 'Veelgestelde vragen',
      level: 2},
    {
      type: 'title',
      text: 'Werkt het met screenshots?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Ja, het is ideaal voor het snel opslaan van screenshots die zijn gemaakt met het knipprogramma van Windows of Mac.'},
    {
      type: 'title',
      text: 'Welke formaten worden ondersteund?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Momenteel detecteert en converteert de tool automatisch elke afbeelding op het klembord naar PNG-indeling om compatibiliteit en transparantie te garanderen.'},
  ],
  ui: {
    labelCtrlV: 'Druk overal op Ctrl + V',
    labelClickPaste: 'of klik hier om te plakken',
    btnClear: 'Wissen',
    btnDownload: 'Downloaden',
    privacyMsg: 'Het hele proces is 100% lokaal. Uw afbeeldingen verlaten nooit uw browser.'}};
