import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonToCsvUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'convertitore-json-in-csv';
const title = 'Convertitore da JSON a CSV Online Gratis - Esporta in Excel';
const description =
  'Trasforma i tuoi file JSON in tabelle CSV in modo rapido e semplice. Ideale per gli analisti di dati che hanno bisogno di aprire file JSON in Excel o Google Sheets.';

const faqData = [
  {
    question: 'Come convertire JSON in CSV per Excel?',
    answer:
      'Basta incollare il codice JSON o caricare il file nel nostro strumento. Il sistema elabora automaticamente la struttura dei dati e genera un file CSV che puoi scaricare e aprire direttamente in Microsoft Excel o Google Sheets.'
  },
  {
    question: 'È sicuro convertire i miei dati su questo sito?',
    answer:
      'Sì, sicuro al 100%. La conversione viene eseguita interamente nel browser tramite JavaScript. Nessun dato viene inviato ai nostri server, garantendo che le tue informazioni rimangano private e protette.'
  },
  {
    question: 'Cosa succede se il mio JSON è annidato?',
    answer:
      'Il nostro convertitore di base è ottimizzato per array di oggetti. Se hai un annidamento molto profondo, lo strumento proverà a appiattire il primo livello di proprietà per garantire una tabella leggibile per Excel.'
  },
  {
    question: 'Posso copiare il CSV direttamente invece di scaricarlo?',
    answer:
      'Certamente. Oltre al pulsante "Scarica CSV", hai un\'opzione "Copia risultato" per incollare il contenuto direttamente in qualsiasi editor di testo o foglio di calcolo.'
  },
];

const howToData = [
  {
    name: 'Incolla il tuo JSON',
    text: 'Inserisci il codice JSON o carica il file .json nell\'area di input.'
  },
  {
    name: 'Elabora i dati',
    text: 'Lo strumento identifica automaticamente i campi e la struttura per organizzarli in righe e colonne.'
  },
  {
    name: 'Scarica o copia',
    text: 'Fai clic su "Scarica CSV" per salvare il file o su "Copia risultato" per usarlo immediatamente.'
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

export const content: ToolLocaleContent<JsonToCsvUI> = {
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
      text: 'Perché convertire JSON in CSV per l\'analisi dei dati?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'JSON è il formato standard per le API moderne, mas non è il più facile da analizzare umanamente. Un <strong>convertitore da JSON a CSV</strong> ti consente di trasformare strutture complesse in righe e colonne, facilitando la manipolazione in strumenti potenti come <strong>Microsoft Excel</strong>, Numbers o Google Sheets.'
    },
    {
      type: 'title',
      text: 'Privacy Totale: Converti senza caricare file',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'La maggior parte dei convertitori online carica i tuoi dati su un server. Il nostro strumento è diverso: la <strong>conversione è al 100% locale</strong>. Utilizzando JavaScript nel tuo browser, i dati non lasciano mai il tuo computer. Questo è vitale se lavori con informazioni sensibili, elenchi di clienti o report aziendali interni.'
    },
    {
      type: 'title',
      text: 'Suggerimenti tecnici per una conversione perfetta',
      level: 3
    },
    {
      type: 'list',
      items: [
        'Assicurati che il tuo JSON sia un <strong>array di oggetti</strong> (es. [{}, {}]).',
        'Verifica che tutti gli oggetti abbiano proprietà simili per mantenere coerenti le colonne CSV.',
        'Se hai caratteri speciali, il nostro CSV viene esportato in <strong>UTF-8</strong> per evitare problemi in Excel.',
      ]
    },
  ],
  ui: {
    statusWaiting: 'In attesa di JSON valido',
    statusValid: 'JSON valido',
    statusInvalid: 'JSON non valido',
    labelFlatten: 'Appiattire gli oggetti',
    zoneLabel: 'Incolla il tuo JSON qui o trascina un file',
    placeholderJson: '[{"id": 1, "name": "John", "details": {"age": 30}}]',
    btnCopyCsv: 'Copia CSV',
    btnDownloadCsv: 'Scarica Excel (CSV)',
    copyFeedback: 'Copiato!'
  }
};
