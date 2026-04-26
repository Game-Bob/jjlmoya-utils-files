import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FormatStripperUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'rimuovi-formattazione-testo';
const title = 'Rimuovi Formattazione Testo Online Gratis: Pulitore di Stili';
const description =
  'Elimina grassetto, corsivo, link e colori da qualsiasi testo. Converti HTML o Word in testo semplice (txt) istantaneamente con il nostro pulitore di stili professionale.';

const faqData = [
  {
    question: 'Come rimuovere grassetto e corsivo da un testo?',
    answer:
      'Basta incollare il tuo testo nel nostro strumento. Il sistema rileva automaticamente gli stili e li rimuove, lasciando solo i caratteri in testo semplice, senza alcun peso o decorazione aggiunta.'
  },
  {
    question: 'È compatibile con il testo di Microsoft Word o Google Docs?',
    answer:
      'Sì, è appositamente progettato per questo. Quando copi da Word o Docs, viene trasportato molto codice "spazzatura". Il nostro pulitore rimuove tutti quegli stili nascosti, permettendoti di incollare un testo pulito in altre applicazioni.'
  },
  {
    question: 'Posso convertire HTML in testo semplice?',
    answer:
      'Esattamente. Se incolli uno snippet HTML, il nostro strumento rimuoverà tutti i tag (come <div>, <a>, <strong>) e restituirà solo il contenuto testuale leggibile, pronto per essere utilizzato ovunque.'
  },
  {
    question: 'È sicuro incollare informazioni riservate?',
    answer:
      'Assolutamente sicuro. Tutta l\'elaborazione viene eseguita al 100% nel tuo browser. Nessun dato viene inviato ai nostri server, garantendo che il tuo testo rimanga privato e sicuro in ogni momento.'
  },
];

const howToData = [
  {
    name: 'Copia il tuo testo',
    text: 'Copia il testo con formattazione da Word, un sito web o un\'e-mail.'
  },
  {
    name: 'Incolla nel pulitore',
    text: 'Inserisci il contenuto nell\'area di input. La rimozione degli stili è automatica.'
  },
  {
    name: 'Copia il risultato',
    text: 'Il tuo testo è ora semplice e pulito. Copialo e usalo dove vuoi senza problemi di formato.'
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

export const content: ToolLocaleContent<FormatStripperUI> = {
  slug,
  title,
  description,
  bibliography,
  faq: faqData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Cosa significa "rimuovere la formattazione" e perché ne hai bisogno?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Rimuovere la formattazione è il processo di <strong>trasformazione del testo ricco in testo semplice</strong> (Plain Text). Quando copiamo informazioni da un sito web, da un eBook o da un documento Word, quel testo trasporta un "bagaglio nascosto": tipi di carattere, dimensioni, colori, link e stili CSS. Il nostro strumento funge da filtro che elimina tutta quella spazzatura digitale.'
    },
    {
      type: 'title',
      text: 'Vantaggi dell\'utilizzo di un pulitore di testo',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Compatibilità Universale:</strong> Il testo semplice funziona in qualsiasi programma, dalle vecchie e-mail ai moderni CMS come WordPress.',
        '<strong>Codice Pulito:</strong> Ideale per gli sviluppatori che devono incollare testo nel loro codice senza trasportare tag HTML o stili RTF.',
        '<strong>SEO e Leggibilità:</strong> Rimuovendo i formati irregolari, ti assicuri che il tuo contenuto mantenga la coerenza visiva del tuo sito.',
        '<strong>Privacy Totale:</strong> Il processo è locale. Il tuo testo non lascia mai il tuo browser.',
      ]
    },
    {
      type: 'title',
      text: 'Rimozione formattazione vs. Semplice Copia-Incolla',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Molte volte, un semplice <code>Ctrl + V</code> trasporta formati indesiderati che rompono il design del tuo documento di destinazione. L\'uso di un <strong>rimotore di formattazione</strong> online ti garantisce di conservare solo l\'essenza del messaggio, permettendoti di applicare i tuoi stili da zero senza interferenze tecniche.'
    },
  ],
  ui: {
    labelInput: 'Testo di origine (con formattazione)',
    labelOutput: 'Testo semplice (pulito)',
    placeholderInput: 'Incolla qui il testo da Word, Web o PDF...',
    placeholderOutput: 'Il testo pulito apparirà qui...',
    btnCopy: 'Copia Risultato',
    btnClear: 'Cancella Tutto',
    toastCopied: 'Testo pulito copiato!'
  }
};
