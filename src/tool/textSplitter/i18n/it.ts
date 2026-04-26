import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextSplitterUI } from '../ui';

const slug = 'divisore-di-testo';
const title = 'Divisore di Testo Online: Separa per Paragrafi, Frasi o Lunghezza';
const description =
  'Dividi automaticamente testi lunghi in parti più piccole. Scegli tra separare per numero di parole, caratteri, paragrafi o frasi.';

const faqData = [
  {
    question: 'Come dividere il testo per ChatGPT o IA?',
    answer:
      'Molte IA hanno limiti di caratteri per messaggio. Con il nostro strumento, puoi dividere il tuo prompt lungo in parti più piccole (ad esempio ogni 2000 caratteri) per inviarle sequenzialmente senza perdere informazioni.'
  },
  {
    question: 'È sicuro incollare testi privati nel divisore?',
    answer:
      'Totalmente sicuro. La logica di divisione viene eseguita al 100% nel tuo browser utilizzando JavaScript. Nessun testo viene inviato ai nostri server, garantendo che i tuoi dati rimangano privati sul tuo dispositivo.'
  },
  {
    question: 'C\'è un limite alla dimensione del testo che posso dividere?',
    answer:
      'Non imponiamo un limite rigoroso, poiché l\'elaborazione avviene localmente. Puoi dividere diversi megabyte di testo in pochi secondi, anche se le prestazioni dipendono dalla memoria del tuo computer.'
  },
  {
    question: 'Aggiunge la numerazione alle parti?',
    answer:
      'Attualmente, lo strumento restituisce i blocchi separati. Puoi copiarli uno per uno. Molti utenti lo trovano utile per mantenere il controllo manuale su come inviano ogni segmento ad altre applicazioni.'
  },
];

const howToData = [
  {
    name: 'Incolla il tuo testo',
    text: 'Inserisci il testo lungo che desideri dividere nell\'area di input principale.'
  },
  {
    name: 'Configura la divisione',
    text: 'Scegli il metodo (caratteri, parole, frasi o paragrafi) e imposta il valore massimo per ogni parte.'
  },
  {
    name: 'Copia le parti',
    text: 'Lo strumento ti mostrerà i blocchi generati. Copia quello che ti serve e usalo dove desideri.'
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
  inLanguage: 'it'
};

export const content: ToolLocaleContent<TextSplitterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Perché hai bisogno di un divisore di testo online?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Lavorare con testi molto lunghi può essere una sfida nell\'era digitale. Che tu sia un programmatore che deve dividere il codice in moduli, uno scrittore che adatta i contenuti per i social media o un utente che interagisce con <strong>Modelli di Linguaggio di Grandi Dimensioni (LLM)</strong> come ChatGPT, un <strong>divisore di testo</strong> è uno strumento essenziale.'
    },
    {
      type: 'title',
      text: 'Metodi di Divisione Intelligenti',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Per Caratteri:</strong> Preciso per rispettare rigorosamente i limiti tecnici.',
        '<strong>Per Parole:</strong> Ideale per articoli e blog dove si cerca una lunghezza specifica per la SEO o la leggibilità.',
        '<strong>Per Frasi:</strong> Garantisce che le idee non vengano interrotte a metà, mantenendo il contesto di ogni blocco.',
        '<strong>Per Paragrafi:</strong> L\'opzione migliore per mantenere la struttura logica di un documento complesso.',
      ]
    },
    {
      type: 'title',
      text: 'Privacy e Velocità: Elaborazione Locale',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Il nostro <strong>divisore di testo online</strong> non "carica" i tuoi contenuti su alcun server. Tutto viene elaborato istantaneamente nel tuo browser. Ciò significa che puoi lavorare con documenti sensibili, contratti o e-mail private con la certezza assoluta che nessun altro possa vederli.'
    },
  ],
  ui: {
    labelInput: 'Testo da Separare',
    labelOutput: 'Risultato (un elemento per riga)',
    placeholderInput: 'Incolla qui la tua lista separata da virgole, spazi o qualsiasi delimitatore...',
    placeholderOutput: 'L\'elenco apparirà qui...',
    labelDelimiter: 'Delimitatore',
    optComma: 'Virgola (,)',
    optSemicolon: 'Punto e virgola (;)',
    optSpace: 'Spazio',
    optCustom: 'Personalizzato',
    labelCustom: 'Delimitatore personalizzato',
    placeholderCustom: 'Inserisci il delimitatore...',
    optTrim: 'Elimina spazi',
    optUnique: 'Rimuovi duplicati',
    optClean: 'Rimuovi vuoti',
    optNumbered: 'Numera le righe',
    statLines: 'Righe risultanti',
    statChars: 'Caratteri',
    btnCopy: 'Copia Lista',
    btnClear: 'Cancella',
    toastCopied: 'Copiato negli appunti!'
  }
};
