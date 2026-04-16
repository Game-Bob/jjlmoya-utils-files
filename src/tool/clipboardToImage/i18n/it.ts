import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClipboardToImageUI } from '../ui';

const slug = 'appunti-in-png';
const title = 'Appunti in PNG: Scarica Screenshot e Immagini';
const description =
  'Strumento online per convertire il contenuto degli appunti (screenshot, immagini) in un file PNG scaricabile istantaneamente. Processo 100% privato e veloce.';

const faqData = [
  {
    question: 'È sicuro incollare i miei screenshot qui?',
    answer:
      'Sì, è totalmente sicuro. Questo strumento funziona al 100% localmente nel tuo browser. I dati dei tuoi appunti non vengono mai inviati a nessun server, garantendo la tua totale privacy.',
  },
  {
    question: 'Quali tipi di contenuto posso convertire?',
    answer:
      'Puoi incollare immagini copiate (screenshot, foto), testo che verrà convertito in un file .txt, o persino elementi HTML. L\'uso più comune è salvare screenshot rapidi come file PNG.',
  },
  {
    question: 'Perché il pulsante incolla non funziona?',
    answer:
      'A causa delle restrizioni di sicurezza dei browser, a volte il pulsante "Incolla" richiede autorizzazioni esplicite. Se non funziona, puoi sempre usare la scorciatoia da tastiera standard: Ctrl+V (Windows) o Cmd+V (Mac).',
  },
  {
    question: 'Funziona su dispositivi mobili?',
    answer:
      'Sì, puoi usare la funzione incolla del tuo cellulare per visualizzare i contenuti, anche se l\'esperienza è ottimizzata per la gestione rapida degli screenshot su desktop.',
  },
];

const howToData = [
  {
    name: 'Copia contenuto',
    text: 'Fai uno screenshot o copia un\'immagine/testo da qualsiasi applicazione.',
  },
  {
    name: 'Incolla nell\'area',
    text: 'Fai clic sull\'area di incollaggio o usa la scorciatoia Ctrl+V / Cmd+V per caricare il contenuto.',
  },
  {
    name: 'Anteprima',
    text: 'Verifica che il contenuto sia corretto nell\'area di anteprima che apparirà istantaneamente.',
  },
  {
    name: 'Scarica file',
    text: 'Premi il pulsante di download per salvare il contenuto come un file reale sul tuo computer.',
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
  inLanguage: 'it',
};

export const content: ToolLocaleContent<ClipboardToImageUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: '',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Come salvare un\'immagine degli appunti come file',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo strumento online gratuito ti consente di <strong>convertire istantaneamente il contenuto degli appunti in un file immagine</strong> (PNG). È la soluzione perfetta quando hai fatto uno screenshot (Windows + Maiusc + S) o hai copiato un\'immagine da un sito web e devi salvarla sul tuo computer senza aprire editor pesanti come Photoshop o Paint.',
    },
    {
      type: 'title',
      text: 'Perché usare questo convertitore di appunti?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Velocità:</strong> Basta premere <code>Ctrl + V</code> e scaricare. Nessun passaggio intermedio.',
        '<strong>Privacy:</strong> L\'intero processo viene eseguito nel tuo browser. Le tue immagini <strong>non vengono mai caricate su alcun server</strong>.',
        '<strong>Qualità originale:</strong> Otteniamo i dati grezzi dagli appunti, assicurando che l\'immagine scaricata mantenga la massima qualità possibile.',
        '<strong>Organizzazione automatica:</strong> I file vengono scaricati con un nome basato sulla data e sull\'ora esatte, facilitando l\'organizzazione dei tuoi screenshot.',
      ],
    },
    {
      type: 'title',
      text: 'Domande frequenti',
      level: 2,
    },
    {
      type: 'title',
      text: 'Funziona con gli screenshot?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sì, è ideale per salvare rapidamente gli screenshot realizzati con lo strumento di cattura di Windows o Mac.',
    },
    {
      type: 'title',
      text: 'Quali formati supporta?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Attualmente lo strumento rileva e converte automaticamente qualsiasi immagine negli appunti in formato PNG per garantire compatibilità e trasparenza.',
    },
  ],
  ui: {
    labelCtrlV: 'Premi Ctrl + V ovunque',
    labelClickPaste: 'o clicca qui per incollare',
    btnClear: 'Pulisci',
    btnDownload: 'Scarica',
    privacyMsg: 'L\'intero processo è 100% locale. Le tue immagini non lasciano mai il browser.',
  },
};
