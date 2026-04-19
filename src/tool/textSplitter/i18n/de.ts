import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextSplitterUI } from '../ui';

const slug = 'text-teilen';
const title = 'Online Text Teiler — Trennen nach Absätzen, Sätzen oder Länge';
const description =
  'Teilen Sie lange Texte automatisch in kleinere Teile auf. Wählen Sie zwischen der Trennung nach Anzahl der Wörter, Zeichen, Absätze oder Sätze.';

const faqData = [
  {
    question: 'Wie teilt man Text für ChatGPT oder KI auf?',
    answer:
      'Viele KIs haben Zeichenbeschränkungen pro Nachricht. Mit unserem Tool können Sie Ihren langen Prompt in kleinere Teile unterteilen (z. B. alle 2000 Zeichen), um sie nacheinander zu senden, ohne Informationen zu verlieren.',
  },
  {
    question: 'Ist es sicher, private Texte in den Teiler einzufügen?',
    answer:
      'Völlig sicher. Die Trennlogik läuft zu 100 % in Ihrem Browser mittels JavaScript ab. Es wird kein Text an unsere Server gesendet, sodass Ihre Daten privat auf Ihrem Gerät bleiben.',
  },
  {
    question: 'Gibt es eine Grenze für die Größe des Textes, den ich teilen kann?',
    answer:
      'Wir legen kein striktes Limit fest, da die Verarbeitung lokal erfolgt. Sie können mehrere Megabyte Text in Sekunden teilen, wobei die Leistung von der Speicherkapazität Ihres Computers abhängt.',
  },
  {
    question: 'Fügt es den Teilen eine Nummerierung hinzu?',
    answer:
      'Derzeit gibt das Tool die einzelnen Blöcke separat aus. Sie können sie einzeln kopieren. Viele Benutzer finden dies nützlich, um die manuelle Kontrolle darüber zu behalten, wie sie jedes Segment an andere Anwendungen senden.',
  },
];

const howToData = [
  {
    name: 'Text einfügen',
    text: 'Fügen Sie den langen Text, den Sie teilen möchten, in das Haupteingabefeld ein.',
  },
  {
    name: 'Teilung konfigurieren',
    text: 'Wählen Sie die Methode (Zeichen, Wörter, Sätze oder Absätze) und legen Sie den Maximalwert für jeden Teil fest.',
  },
  {
    name: 'Teile kopieren',
    text: 'Das Tool zeigt Ihnen die generierten Blöcke an. Kopieren Sie den Teil, den Sie benötigen, und verwenden Sie ihn nach Belieben.',
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

export const content: ToolLocaleContent<TextSplitterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Quellen und Referenzen',
  bibliography: [
    { name: 'Unicode-Zeilenumbruch-Algorithmus', url: 'https://unicode.org/reports/tr14/' },
    { name: 'NLP: Techniken zur Satzteilung', url: 'https://de.wikipedia.org/wiki/Satzende-Erkennung' },
    { name: 'LLM Kontextfenster-Limits', url: 'https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Warum brauchen Sie einen Online-Text-Teiler?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Arbeit mit sehr langen Texten kann im digitalen Zeitalter eine Herausforderung sein. Ob Sie nun ein Programmierer sind, der Code in Module aufteilen muss, ein Autor, der Inhalte für soziale Medien anpasst, oder ein Benutzer, der mit <strong>Large Language Models (LLMs)</strong> wie ChatGPT interagiert – ein <strong>Text-Teiler</strong> ist ein unverzichtbares Werkzeug.',
    },
    {
      type: 'title',
      text: 'Intelligente Teilungsmethoden',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Nach Zeichen:</strong> Präzise zur Einhaltung strenger technischer Limits.',
        '<strong>Nach Wörtern:</strong> Ideal für Artikel und Blogs, bei denen eine bestimmte Länge für SEO oder Lesbarkeit angestrebt wird.',
        '<strong>Nach Sätzen:</strong> Stellt sicher, dass Gedanken nicht unterbrochen werden und der Kontext jedes Blocks erhalten bleibt.',
        '<strong>Nach Absätzen:</strong> Die beste Option, um die logische Struktur eines komplexen Dokuments beizubehalten.',
      ],
    },
    {
      type: 'title',
      text: 'Datenschutz und Geschwindigkeit: Lokale Verarbeitung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Unser <strong>Online-Text-Teiler</strong> "lädt" Ihre Inhalte nicht auf einen Server hoch. Alles wird sofort in Ihrem Browser verarbeitet. Das bedeutet, dass Sie mit sensiblen Dokumenten, Verträgen oder privaten E-Mails arbeiten können, mit der absoluten Gewissheit, dass niemand sonst sie sehen kann.',
    },
  ],
  ui: {
    labelInput: 'Zu trennender Text',
    labelOutput: 'Ergebnis (ein Element pro Zeile)',
    placeholderInput: 'Füge hier deine durch Komma, Leerzeichen oder andere Trennzeichen getrennte Liste ein...',
    placeholderOutput: 'Die Liste erscheint hier...',
    labelDelimiter: 'Trennzeichen',
    optComma: 'Komma (,)',
    optSemicolon: 'Semikolon (;)',
    optSpace: 'Leerzeichen',
    optCustom: 'Benutzerdefiniert',
    labelCustom: 'Benutzerdefiniertes Trennzeichen',
    placeholderCustom: 'Trennzeichen eingeben...',
    optTrim: 'Leerzeichen trimmen',
    optUnique: 'Duplikate entfernen',
    optClean: 'Leere entfernen',
    optNumbered: 'Zeilen nummerieren',
    statLines: 'Ergebniszeilen',
    statChars: 'Zeichen',
    btnCopy: 'Liste kopieren',
    btnClear: 'Leeren',
    toastCopied: 'In die Zwischenablage kopiert!',
  },
};
