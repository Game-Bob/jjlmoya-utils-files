import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClipboardToImageUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'urklipp-till-png';
const title = 'Urhlipp till PNG: Ladda ner skärmbilder och bilder';
const description =
  'Onlineverktyg för att konvertera innehåll i urklipp (skärmbilder, bilder) till en direkt nedladdningsbar PNG-fil. 100 % privat och snabb process.';

const faqData = [
  {
    question: 'Är det säkert att klistra in mina skärmbilder här?',
    answer:
      'Ja, det är helt säkert. Det här verktyget fungerar till 100 % lokalt i din webbläsare. Dina urklippsdata skickas aldrig till någon server, vilket garanterar din totala integritet.'},
  {
    question: 'Vilka typer av innehåll kan jag konvertera?',
    answer:
      'Du kan klistra in kopierade bilder (skärmbilder, foton), text som konverteras till en .txt-fil eller till och med HTML-element. Den vanligaste användningen är att spara snabba skärmbilder som PNG-filer.'},
  {
    question: 'Varför fungerar inte klistra in-knappen?',
    answer:
      'På grund av säkerhetsrestriktioner i webbläsare kräver knappen "Klistra in" ibland uttryckliga tillstånd. Om den inte fungerar kan du alltid använda standardkortkommandot: Ctrl+V (Windows) eller Cmd+V (Mac).'},
  {
    question: 'Fungerar det på mobila enheter?',
    answer:
      'Ja, du kan använda din mobils klistra in-funktion för att visa innehåll, även om upplevelsen är optimerad för snabb skärmbildshantering på skrivbordet.'},
];

const howToData = [
  {
    name: 'Kopiera innehåll',
    text: 'Ta en skärmbild eller kopiera en bild/text från valfritt program.'},
  {
    name: 'Klistra in i området',
    text: 'Klicka på inklistringsområdet eller använd kortkommandot Ctrl+V / Cmd+V för att ladda innehållet.'},
  {
    name: 'Förhandsgranska',
    text: 'Kontrollera att innehållet är korrekt i förhandsgranskningsområdet som visas omedelbart.'},
  {
    name: 'Ladda ner fil',
    text: 'Tryck på nedladdningsknappen för att spara innehållet som en riktig fil på din dator.'},
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

export const content: ToolLocaleContent<ClipboardToImageUI> = {
  slug,
  title,
  description,
  bibliography,
  faq: faqData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Så här sparar du en bild från urklipp som en fil',
      level: 2},
    {
      type: 'paragraph',
      html: 'Med det här kostnadsfria onlineverktyget kan du <strong>omedelbart konvertera innehållet i ditt urklipp till en bildfil</strong> (PNG). Det är den perfekta lösningen när du har tagit en skärmbild (Windows + Shift + S) eller kopierat en bild från en webbplats och behöver spara den på din dator utan att öppna tunga redigeringsprogram som Photoshop eller Paint.'},
    {
      type: 'title',
      text: 'Varför använda den här urklippskonverteraren?',
      level: 2},
    {
      type: 'list',
      items: [
        '<strong>Snabbhet:</strong> Tryck bara på <code>Ctrl + V</code> och ladda ner. Inga mellansteg.',
        '<strong>Integritet:</strong> Hela processen sker i din webbläsare. Dina bilder <strong>laddas aldrig upp till någon server</strong>.',
        '<strong>Originalkvalitet:</strong> Vi hämtar rådata från urklippet, vilket säkerställer att den nedladdade bilden bibehåller högsta möjliga kvalitet.',
        '<strong>Automatisk organisering:</strong> Filer laddas ner med ett namn baserat på exakt datum och tid, vilket gör det enkelt att organisera dina bilder.',
      ]},
    {
      type: 'title',
      text: 'Vanliga frågor',
      level: 2},
    {
      type: 'title',
      text: 'Fungerar det med skärmbilder?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Ja, det är idealiskt för att snabbt spara skärmbilder gjorda med klippverktyget i Windows eller Mac.'},
    {
      type: 'title',
      text: 'Vilka format stöds?',
      level: 3},
    {
      type: 'paragraph',
      html: 'För närvarande upptäcker och konverterar verktyget automatiskt alla bilder i urklippet till PNG-format för att garantera kompatibilitet och transparens.'},
  ],
  ui: {
    labelCtrlV: 'Tryck på Ctrl + V var som helst',
    labelClickPaste: 'eller klicka här för att klistra in',
    btnClear: 'Rensa',
    btnDownload: 'Ladda ner',
    privacyMsg: 'Hela processen är 100 % lokal. Dina bilder lämnar aldrig din webbläsare.'}};
