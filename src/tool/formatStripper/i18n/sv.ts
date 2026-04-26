import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FormatStripperUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ta-bort-textformatering';
const title = 'Ta bort textformatering online gratis — Stilrensare';
const description =
  'Ta bort fetstil, kursiv stil, länkar och färger från valfri text. Konvertera HTML eller Word till ren text (txt) direkt med vår professionella stilrensare.';

const faqData = [
  {
    question: 'Hur tar man bort fetstil och kursiv stil från en text?',
    answer:
      'Klistra helt enkelt in din text i vårt verktyg. Systemet upptäcker automatiskt stilar och tar bort dem, och lämnar bara tecknen i ren text, utan extra tyngd eller dekoration.'},
  {
    question: 'Är det kompatibelt med text från Microsoft Word eller Google Docs?',
    answer:
      'Ja, det är speciellt utformat för det. När man kopierar från Word eller Docs följer det med mycket "skräpkod". Vår rensare tar bort alla dessa dolda stilar, så att du kan klistra in en ren text i andra program.'},
  {
    question: 'Kan jag konvertera HTML till ren text?',
    answer:
      'Exakt. Om du klistrar in ett HTML-kodstycke kommer vårt verktyg att rensa bort alla taggar (som <div>, <a>, <strong>) och bara returnera det läsbara textinnehållet.'},
  {
    question: 'Är det säkert att klistra in konfidentiell information?',
    answer:
      'Helt säkert. All bearbetning sker till 100 % i din webbläsare. Inga data skickas till våra servrar, vilket garanterar att din text förblir privat och säker hela tiden.'},
];

const howToData = [
  {
    name: 'Kopiera din text',
    text: 'Kopiera den formaterade texten från Word, en webbplats eller ett e-postmeddelande.'},
  {
    name: 'Klistra in i rensaren',
    text: 'Infoga innehållet i inmatningsområdet. Borttagningen av stilar sker automatiskt.'},
  {
    name: 'Kopiera resultatet',
    text: 'Din text är nu enkel och ren. Kopiera den och använd den var du vill utan formateringsproblem.'},
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

export const content: ToolLocaleContent<FormatStripperUI> = {
  slug,
  title,
  description,
  bibliography,
  faq: faqData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Vad innebär det att "rensa formatering" och varför behöver du det?',
      level: 2},
    {
      type: 'paragraph',
      html: 'Att rensa formatering är processen att <strong>omvandla formaterad text till ren text</strong> (Plain Text). När vi kopierar information från en webbplats, en e-bok eller ett Word-dokument bär texten med sig "dolt bagage": typsnitt, storlekar, färger, länkar och CSS-stilar. Vårt verktyg fungerar som ett filter som tar bort allt detta digitala skräp.'},
    {
      type: 'title',
      text: 'Fördelar med att använda en textrensare',
      level: 2},
    {
      type: 'list',
      items: [
        '<strong>Universell kompatibilitet:</strong> Ren text fungerar i alla program, från gamla e-postmeddelanden till moderna CMS som WordPress.',
        '<strong>Ren kod:</strong> Idealiskt för utvecklare som behöver klistra in text i sin kod utan att bära med sig HTML-taggar eller RTF-stilar.',
        '<strong>SEO och läsbarhet:</strong> Genom att ta bort oregelbundna format ser du till att ditt innehåll bibehåller webbplatsens visuella konsistens.',
        '<strong>Total integritet:</strong> Processen är lokal. Din text lämnar aldrig din webbläsare.',
      ]},
    {
      type: 'title',
      text: 'Rensa formatering vs. enkel kopiera-klistra in',
      level: 2},
    {
      type: 'paragraph',
      html: 'Ofta medför en enkel <code>Ctrl + V</code> oönskade format som förstör designen på ditt måldokument. Genom att använda en <strong>formateringsborttagare</strong> online säkerställer du att du bara behåller budskapets kärna.'},
  ],
  ui: {
    labelInput: 'Källtext (med formatering)',
    labelOutput: 'Ren text (rensad)',
    placeholderInput: 'Klistra in text från Word, webben eller PDF här...',
    placeholderOutput: 'Ren text visas här...',
    btnCopy: 'Kopiera resultat',
    btnClear: 'Rensa allt',
    toastCopied: 'Ren text kopierad!'}};
