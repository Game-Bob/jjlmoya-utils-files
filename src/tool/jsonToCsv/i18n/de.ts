import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonToCsvUI } from '../ui';

const slug = 'json-zu-csv-konverter';
const title = 'JSON zu CSV Konverter Online Kostenlos — Export nach Excel';
const description =
  'Verwandeln Sie Ihre JSON-Dateien schnell und einfach in CSV-Tabellen. Ideal für Datenanalysten, die JSON-Dateien in Excel oder Google Sheets öffnen müssen.';

const faqData = [
  {
    question: 'Wie konvertiert man JSON für Excel in CSV?',
    answer:
      'Fügen Sie einfach Ihren JSON-Code in unser Tool ein oder laden Sie Ihre Datei hoch. Das System verarbeitet automatisch die Datenstruktur und erstellt eine CSV-Datei, die Sie herunterladen und direkt in Microsoft Excel oder Google Sheets öffnen können.',
  },
  {
    question: 'Ist es sicher, meine Daten auf dieser Website zu konvertieren?',
    answer:
      'Ja, 100 % sicher. Die Konvertierung erfolgt vollständig in Ihrem Browser mittels JavaScript. Es werden keine Daten an unsere Server gesendet, wodurch sichergestellt wird, dass Ihre Informationen privat und sicher bleiben.',
  },
  {
    question: 'Was passiert, wenn mein JSON verschachtelt ist?',
    answer:
      'Unser Basis-Konverter ist für Arrays von Objekten optimiert. Bei sehr tiefer Verschachtelung versucht das Tool, die erste Ebene der Eigenschaften flach zu klopfen, um eine lesbare Tabelle für Excel zu gewährleisten.',
  },
  {
    question: 'Kann ich die CSV direkt kopieren, anstatt sie herunterzuladen?',
    answer:
      'Natürlich. Neben der Schaltfläche "CSV herunterladen" haben Sie die Option "Ergebnis kopieren", um den Inhalt direkt in einen beliebigen Texteditor oder eine Tabellenkalkulation einzufügen.',
  },
];

const howToData = [
  {
    name: 'JSON einfügen',
    text: 'Fügen Sie den JSON-Code ein oder laden Sie die .json-Datei im Eingabebereich hoch.',
  },
  {
    name: 'Daten verarbeiten',
    text: 'Das Tool identifiziert automatisch die Felder und die Struktur, um sie in Zeilen und Spalten zu organisieren.',
  },
  {
    name: 'Herunterladen oder Kopieren',
    text: 'Klicken Sie auf "CSV herunterladen", um die Datei zu speichern, oder auf "Ergebnis kopieren", um sie sofort zu verwenden.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<JsonToCsvUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Quellen und Referenzen',
  bibliography: [
    { name: 'RFC 4180: CSV-Format-Spezifikation', url: 'https://tools.ietf.org/html/rfc4180' },
    { name: 'ECMA-404: Der JSON-Datenaustauschstandard', url: 'https://www.json.org/json-en.html' },
    { name: 'Microsoft: CSV in Excel importieren', url: 'https://support.microsoft.com/de-de/office/importieren-oder-exportieren-von-text-txt-oder-csv-dateien-5250ac4c-663c-47ce-937b-339e391393ba' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Warum JSON für Ihre Datenanalyse in CSV konvertieren?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON ist das Standardformat für moderne APIs, aber es ist nicht am einfachsten menschlich zu analysieren. Ein <strong>JSON-zu-CSV-Konverter</strong> ermöglicht es Ihnen, komplexe Strukturen in Zeilen und Spalten zu verwandeln, was die Manipulation in leistungsstarken Tools wie <strong>Microsoft Excel</strong>, Numbers oder Google Sheets erleichtert.',
    },
    {
      type: 'title',
      text: 'Vollständiger Datenschutz: Konvertieren ohne Hochladen von Dateien',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die meisten Online-Konverter laden Ihre Daten auf einen Server hoch. Unser Tool ist anders: Die <strong>Konvertierung erfolgt zu 100 % lokal</strong>. Durch die Verwendung von JavaScript in Ihrem Browser verlassen die Daten nie Ihren Computer. Dies ist entscheidend, wenn Sie mit sensiblen Informationen, Kundenlisten oder internen Unternehmensberichten arbeiten.',
    },
    {
      type: 'title',
      text: 'Technische Tipps für eine perfekte Konvertierung',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Stellen Sie sicher, dass Ihr JSON ein <strong>Array von Objekten</strong> ist (z. B. [{}, {}]).',
        'Überprüfen Sie, ob alle Objekte ähnliche Eigenschaften haben, um die CSV-Spalten konsistent zu halten.',
        'Wenn Sie Sonderzeichen haben, wird unser CSV in <strong>UTF-8</strong> exportiert, um Probleme in Excel zu vermeiden.',
      ],
    },
  ],
  ui: {
    labelInput: 'Quell-JSON',
    labelOutput: 'Resultierende CSV',
    placeholderInput: 'Fügen Sie hier Ihr JSON-Array ein (z. B. [{"id": 1, "name": "John"}])',
    placeholderOutput: 'Die generierte CSV wird hier erscheinen...',
    btnConvert: 'Jetzt konvertieren',
    btnDownload: 'CSV herunterladen',
    btnCopy: 'Ergebnis kopieren',
    btnClear: 'Alles leeren',
    toastCopied: 'CSV in die Zwischenablage kopiert!',
    toastDownloaded: 'CSV-Datei wird heruntergeladen...',
    errorInvalidJson: 'Ungültiges JSON-Format. Bitte überprüfen Sie Ihre Daten.',
  },
};
