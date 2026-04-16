import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClipboardToImageUI } from '../ui';

const slug = 'zwischenablage-zu-png';
const title = 'Zwischenablage zu PNG: Screenshots und Bilder herunterladen';
const description =
  'Online-Tool zum Konvertieren von Inhalten aus der Zwischenablage (Screenshots, Bilder) in eine sofort herunterladbare PNG-Datei. 100 % privater und schneller Prozess.';

const faqData = [
  {
    question: 'Ist es sicher, meine Screenshots hier einzufügen?',
    answer:
      'Ja, es ist absolut sicher. Dieses Tool arbeitet zu 100 % lokal in Ihrem Browser. Ihre Daten aus der Zwischenablage werden niemals an einen Server gesendet, was Ihre vollständige Privatsphäre garantiert.',
  },
  {
    question: 'Welche Arten von Inhalten kann ich konvertieren?',
    answer:
      'Sie können kopierte Bilder (Screenshots, Fotos), Text, der in eine .txt-Datei konvertiert wird, oder sogar HTML-Elemente einfügen. Die häufigste Verwendung ist das Speichern schneller Screenshots als PNG-Dateien.',
  },
  {
    question: 'Warum funktioniert die Einfügen-Schaltfläche nicht?',
    answer:
      'Aufgrund von Sicherheitsbeschränkungen der Browser erfordert die Schaltfläche "Einfügen" manchmal explizite Berechtigungen. Wenn sie nicht funktioniert, können Sie jederzeit die Standard-Tastenkombination verwenden: Strg+V (Windows) oder Cmd+V (Mac).',
  },
  {
    question: 'Funktioniert es auf Mobilgeräten?',
    answer:
      'Ja, Sie können die Einfügen-Funktion Ihres Mobilgeräts verwenden, um Inhalte anzuzeigen, obwohl das Erlebnis für die schnelle Screenshot-Verwaltung auf dem Desktop optimiert ist.',
  },
];

const howToData = [
  {
    name: 'Inhalt kopieren',
    text: 'Erstellen Sie einen Screenshot oder kopieren Sie ein Bild/einen Text aus einer beliebigen Anwendung.',
  },
  {
    name: 'In den Bereich einfügen',
    text: 'Klicken Sie auf den Einfügebereich oder verwenden Sie die Tastenkombination Strg+V / Cmd+V, um den Inhalt zu laden.',
  },
  {
    name: 'Vorschau anzeigen',
    text: 'Überprüfen Sie im Vorschaubereich, der sofort erscheint, ob der Inhalt korrekt ist.',
  },
  {
    name: 'Datei herunterladen',
    text: 'Drücken Sie die Download-Schaltfläche, um den Inhalt als echte Datei auf Ihrem Computer zu speichern.',
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

export const content: ToolLocaleContent<ClipboardToImageUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: '',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'So speichern Sie ein Bild aus der Zwischenablage als Datei',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mit diesem kostenlosen Online-Tool können Sie den <strong>Inhalt Ihrer Zwischenablage sofort in eine Bilddatei</strong> (PNG) konvertieren. Es ist die perfekte Lösung, wenn Sie einen Screenshot gemacht (Windows + Umschalt + S) oder ein Bild von einer Website kopiert haben und es auf Ihrem Computer speichern müssen, ohne schwere Editoren wie Photoshop oder Paint zu öffnen.',
    },
    {
      type: 'title',
      text: 'Warum sollten Sie diesen Zwischenablage-Konverter verwenden?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Schnelligkeit:</strong> Einfach <code>Strg + V</code> drücken und herunterladen. Keine Zwischenschritte.',
        '<strong>Privatsphäre:</strong> Der gesamte Prozess erfolgt in Ihrem Browser. Ihre Bilder <strong>werden niemals auf einen Server hochgeladen</strong>.',
        '<strong>Originalqualität:</strong> Wir beziehen die Rohdaten aus der Zwischenablage und stellen so sicher, dass das heruntergeladene Bild die höchstmögliche Qualität behält.',
        '<strong>Automatische Organisation:</strong> Dateien werden mit einem Namen heruntergeladen, der auf dem exakten Datum und der Uhrzeit basiert, was die Organisation Ihrer Aufnahmen erleichtert.',
      ],
    },
    {
      type: 'title',
      text: 'Häufig gestellte Fragen',
      level: 2,
    },
    {
      type: 'title',
      text: 'Funktioniert es mit Screenshots?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ja, es ist ideal zum schnellen Speichern von Screenshots, die mit dem Snipping Tool von Windows oder Mac erstellt wurden.',
    },
    {
      type: 'title',
      text: 'Welche Formate werden unterstützt?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Derzeit erkennt und konvertiert das Tool automatisch jedes Bild in der Zwischenablage in das PNG-Format, um Kompatibilität und Transparenz zu gewährleisten.',
    },
  ],
  ui: {
    labelCtrlV: 'Drücken Sie Strg + V an einer beliebigen Stelle',
    labelClickPaste: 'oder klicken Sie hier zum Einfügen',
    btnClear: 'Leeren',
    btnDownload: 'Herunterladen',
    privacyMsg: 'Der gesamte Prozess erfolgt 100 % lokal. Ihre Bilder verlassen niemals Ihren Browser.',
  },
};
