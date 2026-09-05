import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FormatStripperUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'textformatierung-entfernen';
const title = 'Textformatierung online kostenlos entfernen: Stil Reiniger';
const description =
  'Entfernen Sie Fett- und Kursivdruck, Links und Farben aus jedem Text. Konvertieren Sie HTML oder Word sofort in Reintext (txt) mit unserem professionellen Stil-Reiniger.';

const faqData = [
  {
    question: 'Wie man Fett- und Kursivdruck aus einem Text entfernt?',
    answer:
      'Fügen Sie Ihren Text einfach in unser Tool ein. Das System erkennt automatisch Stile und entfernt sie, sodass nur die Zeichen im Reintext übrig bleiben, ohne zusätzliches Gewicht oder Dekoration.'
  },
  {
    question: 'Ist es mit Texten aus Microsoft Word oder Google Docs kompatibel?',
    answer:
      'Ja, es ist speziell dafür konzipiert. Beim Kopieren aus Word oder Docs wird viel "Müll-Code" mitgeschleift. Unser Reiniger entfernt alle diese versteckten Stile, sodass Sie einen sauberen Text in andere Anwendungen einfügen können.'
  },
  {
    question: 'Kann ich HTML in Reintext konvertieren?',
    answer:
      'Genau. Wenn Sie ein HTML-Snippet einfügen, entfernt unser Tool alle Tags (wie <div>, <a>, <strong>) und gibt nur den lesbaren Textinhalt zurück, der überall verwendet werden kann.'
  },
  {
    question: 'Ist es sicher, vertrauliche Informationen einzufügen?',
    answer:
      'Absolut sicher. Die gesamte Verarbeitung erfolgt zu 100 % in Ihrem Browser. Es werden keine Daten an unsere Server gesendet, wodurch sichergestellt wird, dass Ihr Text jederzeit privat und sicher bleibt.'
  },
];

const howToData = [
  {
    name: 'Text kopieren',
    text: 'Kopieren Sie den formatierten Text aus Word, einer Website oder einer E-Mail.'
  },
  {
    name: 'In den Reiniger einfügen',
    text: 'Fügen Sie den Inhalt in den Eingabebereich ein. Das Entfernen der Stile erfolgt automatisch.'
  },
  {
    name: 'Ergebnis kopieren',
    text: 'Ihr Text ist nun einfach und sauber. Kopieren Sie ihn und verwenden Sie ihn überall ohne Formatierungsprobleme.'
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

export const content: ToolLocaleContent<FormatStripperUI> = {
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
      text: 'Was bedeutet es, die "Formatierung zu entfernen" und warum brauchen Sie das?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Das Entfernen der Formatierung ist der Prozess der <strong>Umwandlung von Rich-Text in Reintext</strong> (Plain Text). Wenn wir Informationen von einer Website, einem E-Book oder einem Word-Dokument kopieren, trägt dieser Text "verstecktes Gepäck": Schriftarten, Größen, Farben, Links und CSS-Stile. Unser Tool dient als Filter, der all diesen digitalen Müll entfernt.'
    },
    {
      type: 'title',
      text: 'Vorteile der Verwendung eines Textreinigers',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Universelle Kompatibilität:</strong> Reintext funktioniert in jedem Programm, von alten E-Mails bis hin zu modernen CMS wie WordPress.',
        '<strong>Sauberer Code:</strong> Ideal für Entwickler, die Text in ihren Code einfügen müssen, ohne HTML-Tags oder RTF-Stile mitzuschleppen.',
        '<strong>SEO und Lesbarkeit:</strong> Durch das Entfernen unregelmäßiger Formate stellen Sie sicher, dass Ihr Inhalt die visuelle Konsistenz Ihrer Website beibehält.',
        '<strong>Totaler Datenschutz:</strong> Der Prozess ist lokal. Ihr Text verlässt nie Ihren Browser.',
      ]
    },
    {
      type: 'title',
      text: 'Formatierung entfernen vs. einfaches Kopieren und Einfügen',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Oft führt ein einfaches <code>Strg + V</code> zu unerwünschten Formaten, die das Design Ihres Zieldokuments zerstören. Die Verwendung eines Online-<strong>Formatentferners</strong> stellt sicher, dass Sie nur die Essenz der Nachricht behalten, sodass Sie Ihre eigenen Stile von Grund auf ohne technische Störungen anwenden können.'
    },
  ],
  ui: {
    labelInput: 'Quelltext (mit Formatierung)',
    labelOutput: 'Reintext (sauber)',
    placeholderInput: 'Fügen Sie hier den Text aus Word, Web oder PDF ein...',
    placeholderOutput: 'Der saubere Text wird hier erscheinen...',
    btnCopy: 'Ergebnis kopieren',
    btnClear: 'Alles leeren',
    toastCopied: 'Sauberer Text kopiert!'
  }
};
