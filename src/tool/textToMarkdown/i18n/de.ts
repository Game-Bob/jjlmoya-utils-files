import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextToMarkdownUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'text-in-markdown-umwandeln';
const title = 'Online Text zu Markdown Konverter - Dokumente formatieren';
const description =
  'Wandeln Sie einfachen Text schnell in Markdown-Code um. Konvertieren Sie Absätze, Überschriften und Listen in ein Format, das mit GitHub, Reddit und MD-Editoren kompatibel ist.';

const faqData = [
  {
    question: 'Was ist Markdown und wofür wird es verwendet?',
    answer:
      'Markdown ist eine leichtgewichtige Auszeichnungssprache, die verwendet wird, um Text mit einer einfachen Textsyntax zu formatieren. Sie wird häufig auf Plattformen wie GitHub, Reddit, Slack und in Generatoren für statische Websites verwendet, da sie leicht zu lesen und zu schreiben ist.'
  },
  {
    question: 'Ist mein Text während der Konvertierung sicher?',
    answer:
      'Ja, 100 % sicher. Die Konvertierung erfolgt vollständig in Ihrem Browser mittels JavaScript. Es werden keine Informationen an unsere Server gesendet, sodass Ihre Dokumente privat bleiben.'
  },
  {
    question: 'Wie werden Überschriften und Listen konvertiert?',
    answer:
      'Unser Tool identifiziert die Grundstruktur des Textes. Wenn es einzelne Zeilen vor Absätzen erkennt, kann es diese als Überschriften behandeln. Zeilen, die mit Bindestrichen oder Zahlen beginnen, werden als Standard-Markdown-Listen formatiert.'
  },
  {
    question: 'Kann ich dies für komplexe Tabellen oder Code verwenden?',
    answer:
      'Dieses Tool ist für grundlegende Textformatierungen (Absätze, Listen, Fett, Kursiv) konzipiert. Für sehr komplexe Strukturen wie mehrspaltige Tabellen kann eine manuelle Anpassung im generierten Markdown erforderlich sein.'
  },
];

const howToData = [
  {
    name: 'Text einfügen',
    text: 'Fügen Sie den einfachen Text, den Sie formatieren möchten, in das Quellfeld ein.'
  },
  {
    name: 'Automatische Konvertierung',
    text: 'Das Tool verarbeitet den Text und wendet die Markdown-Syntax auf die verschiedenen identifizierten Elemente an.'
  },
  {
    name: 'Kopieren oder Herunterladen',
    text: 'Klicken Sie auf "Ergebnis kopieren" oder ".md herunterladen", um Ihre formatierte Datei zu erhalten.'
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text
  }))
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'de'
};

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
      text: 'Warum sollten Sie Ihren Text in Markdown konvertieren?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Wenn Sie Entwickler, Blogger oder technischer Redakteur sind, verwenden Sie wahrscheinlich täglich <strong>Markdown</strong>. Die Konvertierung Ihres <strong>einfachen Textes in Markdown</strong> ermöglicht es Ihnen, eine saubere Struktur beizubehalten, die sich leicht in HTML, PDF oder direkt in Plattformen wie WordPress und Generatoren für statische Websites exportieren lässt.'
    },
    {
      type: 'title',
      text: 'Vollständiger Datenschutz: 100 % lokale Konvertierung',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Die meisten Online-Konverter verarbeiten Ihren Text auf ihren Servern. Unser <strong>Text-zu-Markdown-Konverter</strong> läuft vollständig in Ihrem Browser. Ihre Daten verlassen nie Ihren Computer, was ihn ideal für den Entwurf interner Dokumente, Protokolle oder persönlicher Ideen macht.'
    },
    {
      type: 'title',
      text: 'Herausragende Funktionen',
      level: 3
    },
    {
      type: 'list',
      items: [
        'Automatische Identifizierung von <strong>Überschriften und Titeln</strong>.',
        'Umwandlung von <strong>Aufzählungs- und nummerierten Listen</strong>.',
        'Unterstützung für grundlegende Formatierungen wie <strong>Fett und Kursiv</strong>.',
        'Sofortiger Export als <strong>.md-Datei</strong>.',
      ]
    },
  ],
  ui: {
    labelInput: 'Einfacher Text',
    labelOutput: 'Formatiertes Markdown',
    placeholderInput: 'Text hier einfügen...',
    placeholderOutput: 'Der generierte Markdown-Code wird hier erscheinen...',
    btnConvert: 'In Markdown umwandeln',
    btnDownload: '.md herunterladen',
    btnCopy: 'Ergebnis kopieren',
    btnClear: 'Alles leeren',
    toastCopied: 'Markdown-Code kopiert!',
    toastDownloaded: '.md-Datei wird heruntergeladen...'
  }
};
