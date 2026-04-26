import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextToMarkdownUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'convertitore-testo-in-markdown';
const title = 'Convertitore da Testo a Markdown Online — Formatta Documenti';
const description =
  'Trasforma rapidamente il testo semplice in codice Markdown. Converti paragrafi, intestazioni e elenchi in un formato compatibile con GitHub, Reddit e gli editor MD.';

const faqData = [
  {
    question: 'Cos\'è il Markdown e a cosa serve?',
    answer:
      'Il Markdown è un linguaggio di markup leggero utilizzato per formattare il testo utilizzando una sintassi di testo semplice. È ampiamente utilizzato su piattaforme come GitHub, Reddit, Slack e nei generatori di siti statici perché è facile da leggere e scrivere.'},
  {
    question: 'Il mio testo è al sicuro durante la conversione?',
    answer:
      'Sì, sicuro al 100%. La conversione viene eseguita interamente nel browser tramite JavaScript. Nessuna informazione viene inviata ai nostri server, garantendo che i tuoi documenti rimangano privati.'},
  {
    question: 'Come vengono convertiti i titoli e gli elenchi?',
    answer:
      'Il nostro strumento identifica la struttura di base del testo. Se rileva righe singole prima dei paragrafi, può trattarle come intestazioni. Le righe che iniziano con trattini o numeri sono formattate come elenchi Markdown standard.'},
  {
    question: 'Posso usarlo per tabelle complesse o codice?',
    answer:
      'Questo strumento è progettato per la formattazione di base del testo (paragrafi, elenchi, grassetto, corsivo). Per strutture molto complesse come tabelle a più colonne, potrebbe essere necessario un aggiustamento manuale nel Markdown generato.'},
];

const howToData = [
  {
    name: 'Incolla il tuo testo',
    text: 'Inserisci il testo semplice che desideri formattare nel campo sorgente.'},
  {
    name: 'Conversione automatica',
    text: 'Lo strumento elabora il testo e applica la sintassi Markdown ai diversi elementi identificati.'},
  {
    name: 'Copia o scarica',
    text: 'Fai clic su "Copia risultato" o "Scarica .md" per ottenere il tuo file formattato.'},
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
      text: 'Perché convertire il tuo testo in Markdown?',
      level: 2},
    {
      type: 'paragraph',
      html: 'Se sei uno sviluppatore, un blogger o un redattore tecnico, probabilmente usi <strong>Markdown</strong> ogni giorno. Convertire il tuo <strong>testo semplice in Markdown</strong> ti consente di mantenere una struttura pulita che si esporta facilmente in HTML, PDF o direttamente su piattaforme come WordPress e generatori di siti statici.'},
    {
      type: 'title',
      text: 'Privacy Totale: Conversione 100% Locale',
      level: 2},
    {
      type: 'paragraph',
      html: 'La maggior parte dei convertitori online elabora il tuo testo sui propri server. Il nostro <strong>convertitore da testo a Markdown</strong> viene eseguito completamente nel tuo browser. I tuoi dati non lasciano mai il tuo computer, rendendolo ideale per la bozza di documenti interni, verbali di riunioni o idee personali.'},
    {
      type: 'title',
      text: 'Caratteristiche principali',
      level: 3},
    {
      type: 'list',
      items: [
        'Identificazione automatica di <strong>intestazioni e titoli</strong>.',
        'Conversione di <strong>elenchi puntati e numerati</strong>.',
        'Supporto per la formattazione di base come <strong>grassetto e corsivo</strong>.',
        'Esportazione immediata in <strong>file .md</strong>.',
      ]},
  ],
  ui: {
    labelInput: 'Testo Semplice',
    labelOutput: 'Markdown Formattato',
    placeholderInput: 'Incolla qui il tuo testo...',
    placeholderOutput: 'Il codice Markdown generato apparirà qui...',
    btnConvert: 'Converti in Markdown',
    btnDownload: 'Scarica .md',
    btnCopy: 'Copia risultato',
    btnClear: 'Cancella Tutto',
    toastCopied: 'Codice Markdown copiato!',
    toastDownloaded: 'Download del file .md in corso...'}};
