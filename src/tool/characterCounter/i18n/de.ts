import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CharacterCounterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'zeichenzaehler';
const title = 'Zeichenzähler und Wortzähler Online, Buchstaben zählen';
const description =
  'Online-Zähler für Zeichen, Wörter, Sätze und Absätze. Berechnet Lese- und Sprechzeiten. Kostenloses Tool, ideal für SEO und soziale Medien.';

const faqData = [
  {
    question: 'Warum ist die Anzahl der Zeichen für SEO wichtig?',
    answer:
      'Suchmaschinen haben empfohlene Grenzwerte für Titel (60 Zeichen) und Meta-Beschreibungen (155-160 Zeichen). Das Überschreiten dieser Limits kann dazu führen, dass Ihre Inhalte in den Suchergebnissen abgeschnitten werden.'},
  {
    question: 'Werden Leerzeichen vom Zeichenzähler mitgezählt?',
    answer:
      'Ja, standardmäßig zählen wir alle Anschläge, einschließlich Leerzeichen. Unser Tool schlüsselt die Zählung jedoch mit und ohne Leerzeichen auf, um eine höhere Präzision für Ihre Bedürfnisse zu gewährleisten.'},
  {
    question: 'Wie wird die Lesezeit berechnet?',
    answer:
      'Die Lesezeit basiert auf einer durchschnittlichen Geschwindigkeit von 200 bis 250 Wörtern pro Minute. Die Sprechzeit wird mit etwa 130-150 Wörtern pro Minute berechnet, ideal für Skripte und Präsentationen.'},
  {
    question: 'Ist es sicher, hier lange Texte zu analysieren?',
    answer:
      'Absolut. Die Analyse erfolgt lokal in Ihrem Browser. Sie können ganze Artikel oder umfangreiche Dokumente verarbeiten, ohne dass der Text an unsere Server gesendet wird.'},
];

const howToData = [
  {
    name: 'Text eingeben',
    text: 'Schreiben Sie direkt oder fügen Sie den Text, den Sie analysieren möchten, in den Hauptbereich ein.'},
  {
    name: 'Statistiken prüfen',
    text: 'Verfolgen Sie die Anzahl der Wörter, Zeichen, Sätze und Absätze, die in Echtzeit aktualisiert werden.'},
  {
    name: 'Zeiten analysieren',
    text: 'Überprüfen Sie die Indikatoren für die geschätzte Lese- und Sprechzeit Ihrer Inhalte.'},
  {
    name: 'Länge optimieren',
    text: 'Passen Sie Ihren Text an die empfohlenen Grenzwerte für soziale Medien oder SEO (Titel, Beschreibungen) an.'},
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
  inLanguage: 'de'};

export const content: ToolLocaleContent<CharacterCounterUI> = {
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
      text: 'Die Bedeutung von Präzision in digitalen Texten',
      level: 2},
    {
      type: 'paragraph',
      html: 'In der digitalen Welt ist die "Ökonomie der Worte" grundlegend. Wir schreiben nicht mehr nur, um von Menschen gelesen zu werden, sondern um von Algorithmen verarbeitet zu werden. Google kürzt Ihre Titel bei 60 Zeichen. Twitter (jetzt X) begrenzt Sie auf 280. Eine effektive Verkaufs-E-Mail sollte in weniger als 30 Sekunden lesbar sein.'},
    {
      type: 'paragraph',
      html: 'Dieses <strong>Tool zum Zählen von Zeichen und Wörtern</strong> ist nicht nur dazu gedacht, Ihnen eine Zahl zu liefern, sondern Ihnen bei der Optimierung Ihrer Kommunikation zu helfen. Durch die Berechnung von Metriken wie der <em>Lesezeit</em> oder der <em>Wortdichte</em> gehen Sie vom "Schreiben von Text" zum "Entwerfen von Inhalten" über.'},
    {
      type: 'title',
      text: 'SEO-Optimierung',
      level: 3},
    {
      type: 'paragraph',
      html: 'Suchmaschinengrenzwerte sind streng. Wenn Sie diese überschreiten, wird Ihre Nachricht mit Auslassungspunkten (...) abgeschnitten und Ihre CTR (Click-Through-Rate) sinkt drastisch.'},
    {
      type: 'table',
      headers: ['Element', 'Empfohlener Grenzwert'],
      rows: [
        ['Meta-Titel', '50: 60 Zeichen'],
        ['Meta-Beschreibung', '150: 160 Zeichen'],
        ['Google Ads (Überschriften)', '30 Zeichen'],
      ]},
    {
      type: 'title',
      text: 'Soziale Medien',
      level: 3},
    {
      type: 'paragraph',
      html: 'Jede Plattform hat ihre eigene Sprache und ideale Länge. Selbst wenn das Limit höher ist, liegt der "Sweet Spot" für Engagement meist niedriger.'},
    {
      type: 'table',
      headers: ['Plattform', 'Limit'],
      rows: [
        ['Twitter (X)', '280 Zeichen (Ideal: 70-100)'],
        ['Instagram Bio', '150 Zeichen'],
        ['LinkedIn Post', '3000 Zeichen (Ideal: ~1200)'],
      ]},
    {
      type: 'title',
      text: 'Häufig gestellte Fragen zum Zählen',
      level: 2},
    {
      type: 'title',
      text: 'Zählen Leerzeichen als Zeichen?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Ja, und es ist ein häufiger Fehler, sie zu vergessen. Für einen Computer ist ein Leerzeichen ein Byte an Information, genau wie der Buchstabe "A". Auf Plattformen wie Twitter oder SMS-Datenbanken verbrauchen Leerzeichen Ihr Limit. Unser Tool liefert Ihnen beide Datenpunkte: "mit Leerzeichen" und "ohne Leerzeichen" (nützlich für Übersetzer oder Layouter).'},
    {
      type: 'title',
      text: 'Wie wird die Lesezeit berechnet?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Wir verwenden den durchschnittlichen Lesestandard für Erwachsene: <strong>200-250 Wörter pro Minute</strong> (stilles Lesen). Für die Sprechzeit berechnen wir etwa <strong>130-150 Wörter pro Minute</strong>, was dem Rhythmus einer natürlichen Unterhaltung oder eines gemessenen Hörbucherzählers entspricht.'},
    {
      type: 'title',
      text: 'Datenschutz: Wo landet mein Text?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Nirgendwohin. Die gesamte Verarbeitung erfolgt in Ihrem Browser mittels <strong>clientseitigem JavaScript</strong>. Sie können die Internetverbindung trennen und das Tool wird weiterhin funktionieren. Es werden keine Daten an unsere Server gesendet.'},
  ],
  ui: {
    labelChars: 'Zeichen',
    labelWords: 'Wörter',
    labelLines: 'Zeilen',
    labelParagraphs: 'Absätze',
    labelNoSpaces: 'Ohne Leerzeichen',
    labelBytes: 'Bytes',
    labelReading: 'Lesen',
    labelSpeaking: 'Sprechen',
    labelUpload: 'Datei hochladen',
    btnCopyTitle: 'Text kopieren',
    btnClearTitle: 'Leeren',
    placeholder: 'Schreiben oder fügen Sie Ihren Text hier ein...',
    unitSec: 's',
    unitMin: 'min',
    numberLocale: 'de-DE'}};
