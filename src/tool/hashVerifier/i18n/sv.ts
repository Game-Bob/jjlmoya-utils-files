import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashVerifierUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'verifiera-fil-hash';
const title = 'Hash verifierare Online — SHA 256, MD5 och SHA 1';
const description =
  'Beräkna och verifiera integriteten för dina filer genom att jämföra deras digitala signaturer SHA256, MD5 eller SHA1. Se till att dina nedladdningar inte har ändrats.';

const faqData = [
  {
    question: 'Hur verifierar man om en fil har ändrats?',
    answer:
      'Det säkraste sättet är att jämföra dess Hash. En Hash är ett unikt digitalt fingeravtryck. Om till och med en enda bit i filen ändras kommer Hash-värdet att bli helt annorlunda. Genom att jämföra den erhållna Hash-koden med den som tillhandahålls av författaren kan du garantera dess integritet.'},
  {
    question: 'Vilken algoritm är bäst: MD5 eller SHA-256?',
    answer:
      'MD5 är mycket snabb men anses vara mindre säker mot avsiktliga attacker. SHA-256 är den nuvarande standarden för säkerhet och är mycket svårare att "förfalska". För de flesta filintegritetskontroller är SHA-256 det rekommenderade alternativet.'},
  {
    question: 'Varför ändras Hash-värdet när jag byter namn på filen?',
    answer:
      'Faktum är att namnbyte på en fil INTE ändrar dess Hash-värde. Hash-värdet beräknas baserat på det interna innehållet (byten) i filen, inte dess namn eller skapelsedatum. Om Hash-värdet ändras beror det på att de interna data har modifierats.'},
  {
    question: 'Laddas min fil upp till servern för att beräkna Hash-värdet?',
    answer:
      'Nej. Vårt verktyg använder Web Crypto API, vilket innebär att all beräkning sker lokalt i din webbläsare. Din fil lämnar aldrig din dator, vilket garanterar 100 % integritet och är mycket snabbare eftersom ingen uppladdning krävs.'},
];

const howToData = [
  {
    name: 'Välj din fil',
    text: 'Dra eller välj filen du vill verifiera i verktyget.'},
  {
    name: 'Välj algoritm',
    text: 'Välj SHA-256, MD5 eller SHA-1 beroende på vilken signatur du har.'},
  {
    name: 'Jämför resultaten',
    text: 'Klistra in det förväntade Hash-värdet så talar systemet om direkt ifall de matchar (Lyckat) eller om de är olika (Fel).'},
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

export const content: ToolLocaleContent<HashVerifierUI> = {
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
      text: 'Vad är en fil-Hash och varför är den avgörande för din säkerhet?',
      level: 2},
    {
      type: 'paragraph',
      html: 'En Hash är ett unikt <strong>digitalt fingeravtryck</strong> för varje fil. Det är en alfanumerisk sträng som genereras av en matematisk algoritm (som SHA-256). Dess främsta egenskap är att den är "enkelriktad": du kan få fram Hash-värdet från en fil, men du kan inte återskapa filen från dess Hash-värde.'},
    {
      type: 'paragraph',
      html: 'Att använda en <strong>hash-verifierare online</strong> är viktigt när man laddar ner programvara, ISO-avbildningar eller känsliga dokument. Författare publicerar vanligtvis MD5 eller SHA256 för sina filer så att du kan verifiera att det du har laddat ner är exakt vad de laddade upp, utan korruption eller skadliga injektioner.'},
    {
      type: 'title',
      text: 'SHA-256 vs MD5: Vilken bör du använda?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Algoritmen <strong>MD5</strong> var mycket populär under många år på grund av sin snabbhet, men idag anses den vara kryptografiskt osäker eftersom den är mottaglig för "kollisioner". Den används dock fortfarande för enkla integritetskontroller (korrupta nedladdningar).'},
    {
      type: 'paragraph',
      html: 'Om du söker maximal säkerhet är <strong>SHA-256</strong> (en del av SHA-2-familjen) den standard som rekommenderas av säkerhetsmyndigheter världen över. Det är praktiskt taget omöjligt för två olika filer att producpa samma SHA-256 Hash.'},
    {
      type: 'title',
      text: 'Total integritet: Beräkning 100 % i din webbläsare',
      level: 3},
    {
      type: 'tip',
      title: 'Ingen uppladdning krävs',
      html: '<p>Vårt verktyg använder kraften i din dator för att bearbeta filen. Genom att använda <strong>Web Crypto API</strong> behöver vi inte "ladda upp" filen till någon server. Det betyder att du kan verifiera filer på flera gigabyte på några sekunder, utan att förbruka din internetbandbredd och säkerställa att innehållet i dina filer aldrig lämnar din enhet.</p>'},
  ],
  ui: {
    labelTitle: "Lokal Hash-verifierare",
    labelSubtitle: "Släpp en fil för att omedelbart generera dess <strong class=\"hv-accent\">SHA-256</strong>-signatur.",
    btnSelect: "Välj fil",
    labelPrivacy: "Filer lämnar aldrig din enhet.",
    labelCalculating: "Beräknar signatur...",
    labelSuccess: "Beräkning lyckades",
    btnAnother: "Verifiera en annan",
    labelHash: "SHA-256 Hash",
    btnCopyTitle: "Kopiera hash",
    labelCompare: "Jämför med original",
    placeholderCompare: "Klistra in förväntat hash här...",
    labelCompareNote: "* Jämförelsen ignorerar versaler och blanksteg.",
    statusVerified: "VERIFIERAD",
    statusCorrupt: "KORRUPT / FEL"}};
