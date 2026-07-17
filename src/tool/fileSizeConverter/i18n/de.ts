import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FileSizeConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'dateigroessen-konverter';
const title = 'Dateigroessenkonverter und Visualisierer: Binär und Dezimal';
const description =
  'Konvertieren Sie Dateigrößeneinheiten sofort. Berechnen Sie Downloadzeiten und visualisieren Sie die Speicherauslastung auf verschiedenen Geräten. 100 % lokale Verarbeitung.';

const faqData = [
  {
    question: 'Was ist der Unterschied zwischen Dezimal (KB) und Binär (KiB)?',
    answer:
      'Dezimal verwendet Zehnerpotenzen (KB, MB, GB), während Binär Zweierpotenzen (KiB, MiB, GiB) nutzt. Deshalb erscheint eine \"1GB\"-Festplatte auf Ihrem Computer kleiner - Hersteller verwenden Dezimal, Betriebssysteme jedoch Binär.',
  },
  {
    question: 'Sind meine Daten bei der Verwendung dieses Tools sicher?',
    answer:
      'Absolut. Alle Berechnungen erfolgen vollständig in Ihrem Browser mittels JavaScript. Es werden keine Daten an unsere Server gesendet. Ihre Dateien und Werte verlassen niemals Ihren Computer.',
  },
  {
    question: 'Kann ich Dateien hochladen, um deren Größe zu sehen?',
    answer:
      'Ja! Sie können eine Datei direkt in das Eingabefeld ziehen, und das Tool liest automatisch deren Größe aus. Die Datei selbst wird niemals hochgeladen - nur die Größeninformation wird lokal verwendet.',
  },
  {
    question: 'Warum zeigt meine externe 1TB-Festplatte auf meinem Computer weniger Platz an?',
    answer:
      'Externe Festplatten werden mit Dezimalwerten vermarktet (1TB = 1.000.000.000.000 Bytes), aber Ihr Betriebssystem zeigt sie in Binärwerten an (1TiB = 1.099.511.627.776 Bytes). Dieses Tool hilft Ihnen, beide Perspektiven zu verstehen.',
  },
  {
    question: 'Wie genau ist die Berechnung der Downloadzeit?',
    answer:
      'Die Berechnung basiert auf idealen Netzwerkgeschwindigkeiten. Reale Geschwindigkeiten variieren aufgrund von Netzüberlastung, Entfernung und Hardware. Betrachten Sie diese als grobe Schätzungen, nicht als Garantien.',
  },
];

const howToData = [
  {
    name: 'Geben Sie eine Dateigröße ein',
    text: 'Tippen Sie eine Zahl in das Eingabefeld (z. B. \"500\" oder \"1,5\") und wählen Sie die Einheit (KB, MB, GB usw.).',
  },
  {
    name: 'Wählen Sie Ihren Standard',
    text: 'Schalten Sie zwischen Dezimal (Marketing-Standard) und Binär (Computer-Standard) um, um zu sehen, wie sich der Wert ändert.',
  },
  {
    name: 'Sofortige Konvertierungen sehen',
    text: 'Alle Einheiten von Bytes bis Petabytes werden sofort angezeigt. Klicken Sie auf einen Block, um den Wert in Ihre Zwischenablage zu kopieren.',
  },
  {
    name: 'Kontext visualisieren',
    text: 'Sehen Sie unter den Konvertierungen, wie lange Downloads in verschiedenen Netzwerken dauern und wie viel Platz die Datei auf verschiedenen Geräten einnimmt.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<FileSizeConverterUI> = {
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
      text: 'Warum Dateigrößen konvertieren? Dezimal vs. Binär verstehen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wenn Sie ein <strong>\"1TB\"</strong>-Laufwerk kaufen, messen Hersteller dies dezimal (1.000 GB). Ihr Betriebssystem zeigt es jedoch binär an (1.024 Gio = ca. 931 GB). Dieser Unterschied verwirrt viele Nutzer. Ein <strong>Dateigrößen-Konverter</strong> schließt diese Lücke und zeigt Ihnen genau, was Ihre Dateien in jeder Einheit bedeuten.',
    },
    {
      type: 'title',
      text: 'Praxisnaher Kontext: Downloads & Speicher',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zu wissen, dass eine Datei \"50MB\" groß ist, bedeutet ohne Kontext wenig. Wie lange dauert der Download über 4G? Wie viel Platz belegt sie auf einem iPhone? Unser Tool liefert sofort Antworten mit Echtzeit-Berechnungen für reale Netzwerke und Geräte.',
    },
    {
      type: 'title',
      text: 'Die versteckten Kosten: Speichermathematik',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Eine externe \"1 TB\"-Festplatte hat tatsächlich nur <strong>ca. 931 GiB</strong> (der Herstellertrick)',
        'Ein 4K-Film (ca. 100GB) dauert über Glasfaser <strong>4 Sekunden</strong>, über 4G jedoch <strong>13 Minuten</strong>',
        'Ein \"256GB\" iPhone speichert weniger, da das Betriebssystem Platz belegt und die Binärrechnung den Unterschied verstärkt',
      ],
    },
    {
      type: 'title',
      text: 'Technische Präzision, der Sie vertrauen können',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Alle Konvertierungen folgen den <strong>NIST-Standards</strong>: Dezimal (SI) nutzt die Basis 1000, Binär (IEC) die Basis 1024. Die Berechnungen erfolgen <strong>zu 100 % lokal</strong> - keine Uploads, keine Server, voller Datenschutz.',
    },
  ],
  ui: {
    inputPlaceholder: 'Zahl eingeben (z. B. 1,5 oder 500)',
    selectUnit: 'Einheit',
    standardLabel: 'Standard:',
    decimalOption: 'Dezimal',
    binaryOption: 'Binär',
    conversionTitle: 'Konvertierungen',
    networkSpeedsTitle: 'Downloadzeiten',
    deviceStorageTitle: 'Speicherplatzbedarf',
    copyFeedback: 'Kopiert!',
    dragDropText: 'Datei hierher ziehen, um Größe zu lesen',
    fileTooBig: 'Datei ist zu groß',
  },
};
