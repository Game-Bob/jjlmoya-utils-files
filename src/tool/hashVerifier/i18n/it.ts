import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashVerifierUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'verifica-hash-file';
const title = 'Verificatore di Hash Online — SHA 256, MD5 e SHA 1';
const description =
  'Calcola e verifica l\'integrità dei tuoi file confrontando la loro firma digitale SHA256, MD5 o SHA1. Assicurati che i tuoi download non siano stati alterati.';

const faqData = [
  {
    question: 'Come verificare se un file è stato modificato?',
    answer:
      'Il modo più sicuro è confrontare il suo Hash. Un Hash è un\'impronta digitale unica. Se cambia anche un solo bit del file, l\'Hash sarà completamente diverso. Confrontando l\'Hash ottenuto con quello fornito dall\'autore, puoi garantirne l\'integrità.'},
  {
    question: 'Quale algoritmo è migliore: MD5 o SHA-256?',
    answer:
      'MD5 è molto veloce ma è considerato meno sicuro contro attacchi intenzionali. SHA-256 è l\'attuale standard di sicurezza ed è molto più difficile da "falsificare". Per la maggior parte dei controlli di integrità dei file, SHA-256 è l\'opzione consigliata.'},
  {
    question: 'Perché l\'Hash cambia se rinomino il file?',
    answer:
      'In realtà, rinominare un file NON cambia il suo valore Hash. L\'Hash viene calcolato in base al contenuto interno (i byte) del file, non in base al suo nome o alla data di creazione. Se l\'Hash cambia, è perché i dati interni sono stati modificati.'},
  {
    question: 'Il mio file viene caricato sul server per calcolare l\'Hash?',
    answer:
      'No. Il nostro strumento utilizza la Web Crypto API, il che significa che tutto il calcolo viene eseguito localmente nel tuo browser. Il tuo file non lascia mai il tuo computer, garantendo il 100% della privacy e risultando molto più veloce poiché non è necessario alcun upload.'},
];

const howToData = [
  {
    name: 'Seleziona il tuo file',
    text: 'Trascina o seleziona il file che desideri verificare nello strumento.'},
  {
    name: 'Scegli l\'algoritmo',
    text: 'Seleziona SHA-256, MD5 o SHA-1 a seconda della firma in tuo possesso.'},
  {
    name: 'Confronta i risultati',
    text: 'Incolla l\'Hash atteso e il sistema ti dirà istantaneamente se corrispondono (Successo) o se sono diversi (Errore).'},
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
  inLanguage: 'it'};

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
      text: 'Cos\'è un Hash di file e perché è vitale per la tua sicurezza?',
      level: 2},
    {
      type: 'paragraph',
      html: 'Un Hash è un\'<strong>impronta digitale</strong> unica per ogni file. È una stringa alfanumerica generata da un algoritmo matematico (come SHA-256). La sua caratteristica principale è che è "unidirezionale": puoi ottenere l\'Hash da un file, ma non puoi ricostruire il file dal suo Hash.'},
    {
      type: 'paragraph',
      html: 'L\'uso di un <strong>verificatore di hash online</strong> è essenziale quando si scaricano software, immagini ISO o documenti sensibili. Gli autori di solito pubblicano l\'MD5 o lo SHA256 dei loro file in modo che tu possa verificare che ciò che hai scaricato sia esattamente ciò che hanno caricato loro, senza corruzioni o iniezioni malevole.'},
    {
      type: 'title',
      text: 'SHA-256 vs MD5: Quale dovresti usare?',
      level: 3},
    {
      type: 'paragraph',
      html: 'L\'algoritmo <strong>MD5</strong> è stato molto popolare per anni grazie alla sua velocità, ma oggi è considerato crittograficamente insicuro in quanto suscettibile a "collisioni". Tuttavia, viene ancora utilizzato per semplici controlli di integrità (download corrotti).'},
    {
      type: 'paragraph',
      html: 'Se cerchi la massima sicurezza, <strong>SHA-256</strong> (parte della famiglia SHA-2) è lo standard raccomandato dalle agenzie di sicurezza di tutto il mondo. È virtualmente impossibile che due file diversi producano lo stesso Hash SHA-256.'},
    {
      type: 'title',
      text: 'Privacy Totale: Calcolo 100% nel tuo browser',
      level: 3},
    {
      type: 'tip',
      title: 'Nessun caricamento necessario',
      html: '<p>Il nostro strumento utilizza la potenza del tuo computer per elaborare il file. Utilizzando la <strong>Web Crypto API</strong>, non abbiamo bisogno di "caricare" il file su alcun server. Ciò significa che puoi verificare file di diversi gigabyte in pochi secondi, ohne consumare la tua larghezza di banda internet e garantendo che il contenuto dei tuoi file non lasci mai il tuo dispositivo.</p>'},
  ],
  ui: {
    labelTitle: "Verificatore Hash Locale",
    labelSubtitle: "Trascina qualsiasi file per generare istantaneamente la sua firma <strong class=\"hv-accent\">SHA-256</strong>.",
    btnSelect: "Seleziona File",
    labelPrivacy: "I file non lasciano mai il tuo dispositivo.",
    labelCalculating: "Calcolo della firma...",
    labelSuccess: "Calcolo riuscito",
    btnAnother: "Verifica un altro",
    labelHash: "Hash SHA-256",
    btnCopyTitle: "Copia hash",
    labelCompare: "Confronta con l'originale",
    placeholderCompare: "Incolla qui l'hash atteso...",
    labelCompareNote: "* Il confronto ignora maiuscole/minuscole e spazi.",
    statusVerified: "VERIFICATO",
    statusCorrupt: "CORROTTO / ERRORE"}};
