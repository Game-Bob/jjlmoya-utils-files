import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FileSizeConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'convertitore-dimensioni-file';
const title = 'Convertitore e Visualizzatore Dimensioni File - Binario e Decimale';
const description =
  'Converti istantaneamente le unità di misura dei file. Scopri quanto tempo richiedono i download e visualizza l\'occupazione di memoria sui dispositivi. Elaborazione locale al 100%.';

const faqData = [
  {
    question: 'Qual è la differenza tra decimale (KB) e binario (KiB)?',
    answer:
      'Il sistema decimale utilizza potenze di 1000 (KB, MB, GB), mentre quello binario utilizza potenze di 1024 (KiB, MiB, GiB). Ecco perché un disco da "1GB" appare più piccolo sul computer: i produttori usano il decimale, ma i sistemi operativi usano il binario.',
  },
  {
    question: 'I miei dati sono al sicuro usando questo strumento?',
    answer:
      'Assolutamente sì. Tutti i calcoli avvengono interamente nel tuo browser tramite JavaScript. Nessun dato viene inviato ai nostri server. I tuoi file e i tuoi valori non lasciano mai il tuo computer.',
  },
  {
    question: 'Posso caricare file per vederne le dimensioni?',
    answer:
      'Sì! Puoi trascinare e rilasciare un file direttamente nell\'area di input e lo strumento ne leggerà automaticamente le dimensioni. Il file stesso non viene mai caricato: solo la sua dimensione viene utilizzata localmente.',
  },
  {
    question: 'Perché il mio disco esterno da 1TB mostra meno spazio sul computer?',
    answer:
      'I dischi esterni sono commercializzati utilizzando il sistema decimale (1TB = 1.000.000.000.000 byte), ma il sistema operativo li visualizza in binario (1TiB = 1.099.511.627.776 byte). Questo strumento ti aiuta a comprendere entrambe le prospettive.',
  },
  {
    question: 'Quanto è accurato il calcolo del tempo di download?',
    answer:
      'Il calcolo si basa su velocità di rete ideali. Le velocità reali variano a causa della congestione della rete, della distanza e dell\'hardware. Considerale stime approssimative, non garanzie.',
  },
];

const howToData = [
  {
    name: 'Inserisci una dimensione di file',
    text: 'Digita un numero nel campo di input (ad es. "500" o "1.5") e seleziona l\'unità (KB, MB, GB, ecc.).',
  },
  {
    name: 'Scegli il tuo standard',
    text: 'Passa da Decimale (standard commerciale) a Binario (standard informatico) per vedere come cambia il valore.',
  },
  {
    name: 'Visualizza conversioni istantanee',
    text: 'Tutte le unità, dai Byte ai Petabyte, appaiono istantaneamente. Clicca su qualsiasi blocco per copiarne il valore negli appunti.',
  },
  {
    name: 'Visualizza il contesto',
    text: 'Sotto le conversioni, scopri quanto tempo richiedono i download su diverse reti e quanto spazio occupa il file su diversi dispositivi.',
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
  inLanguage: 'it',
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
      text: 'Perché convertire le dimensioni dei file? Capire Decimale vs Binario',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Quando acquisti un disco da <strong>"1TB"</strong>, i produttori lo misurano in decimale (1.000 GB). Ma il tuo sistema operativo lo visualizza in binario (1.024 GiB = ~931 GB). Questa differenza confonde gli utenti. Un <strong>convertitore di dimensioni file</strong> colma questo divario, mostrandoti esattamente cosa significano i tuoi file in qualsiasi unità.',
    },
    {
      type: 'title',
      text: 'Contesto Reale: Download e Archiviazione',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sapere che un file è di "50MB" non significa nulla senza contesto. Quanto tempo per scaricarlo in 4G? Quanto spazio su un iPhone? Il nostro strumento risponde istantaneamente con calcoli in tempo reale per reti e dispositivi reali.',
    },
    {
      type: 'title',
      text: 'Il costo nascosto: La matematica dell\'archiviazione',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Un disco esterno da "1 TB" è in realtà di <strong>~931 GiB</strong> (il trucco del produttore)',
        'Un film in 4K (~100GB) richiede <strong>4 secondi</strong> su fibra ma <strong>13 minuti</strong> su 4G',
        'Un iPhone da "256GB" archivia meno perché il sistema operativo occupa spazio e la matematica binaria accentua la differenza',
      ],
    },
    {
      type: 'title',
      text: 'Precisione tecnica di cui ti puoi fidare',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tutte le conversioni seguono gli <strong>standard NIST</strong>: il decimale (SI) usa 1000 come base, il binario (IEC) usa 1024. I calcoli avvengono <strong>al 100% localmente</strong>: nessun caricamento, nessun server, massima privacy.',
    },
  ],
  ui: {
    inputPlaceholder: 'Inserisci un numero (es. 1.5 o 500)',
    selectUnit: 'Unità',
    standardLabel: 'Standard:',
    decimalOption: 'Decimale',
    binaryOption: 'Binario',
    conversionTitle: 'Conversioni',
    networkSpeedsTitle: 'Tempi di Download',
    deviceStorageTitle: 'Impatto Memoria Dispositivo',
    copyFeedback: 'Copiato!',
    dragDropText: 'Trascina un file qui per leggerne la dimensione',
    fileTooBig: 'Il file è troppo grande',
  },
};
