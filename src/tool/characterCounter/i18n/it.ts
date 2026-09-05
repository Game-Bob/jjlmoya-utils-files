import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CharacterCounterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'conta-caratteri';
const title = 'Contatore Caratteri e Parole Online: Strumento di Calcolo';
const description =
  'Contatore di caratteri, parole, frasi e paragrafi online. Calcola i tempi di lettura e di conversazione. Strumento gratuito perfetto per SEO e social media.';

const faqData = [
  {
    question: 'Perché il conteggio dei caratteri è importante per la SEO?',
    answer:
      'I motori di ricerca hanno limiti raccomandati per i titoli (60 caratteri) e le meta descrizioni (155-160 caratteri). Superare questi limiti può causare la troncatura dei contenuti nei risultati di ricerca.'
  },
  {
    question: 'Il contatore dei caratteri include gli spazi?',
    answer:
      'Sì, per impostazione predefinita contiamo tutte le battute, inclusi gli spazi. Tuttavia, il nostro strumento suddivide il conteggio con e senza spazi per una maggiore precisione in base alle tue esigenze.'
  },
  {
    question: 'Come viene calcolato il tempo di lettura?',
    answer:
      'Il tempo di lettura si basa su una velocità media di 200-250 parole al minuto. Il tempo di conversazione è calcolato su circa 130-150 parole al minuto, ideale per script e presentazioni.'
  },
  {
    question: 'È sicuro analizzare testi lunghi qui?',
    answer:
      'Assolutamente. L\'analisi viene eseguita localmente nel tuo browser. Puoi elaborare interi articoli o documenti lunghi senza che il testo venga inviato ai nostri server.'
  },
];

const howToData = [
  {
    name: 'Inserire il testo',
    text: 'Scrivi direttamente o incolla il testo che vuoi analizzare nell\'area principale.'
  },
  {
    name: 'Controllare le statistiche',
    text: 'Osserva il conteggio di parole, caratteri, frasi e paragrafi che si aggiornano in tempo reale.'
  },
  {
    name: 'Analizzare i tempi',
    text: 'Controlla gli indicatori del tempo stimato di lettura e di conversazione per il tuo contenuto.'
  },
  {
    name: 'Ottimizzare la lunghezza',
    text: 'Regola il tuo testo in base ai limiti raccomandati per i social media o la SEO (titoli, descrizioni).'
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

export const content: ToolLocaleContent<CharacterCounterUI> = {
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
      text: 'L\'importanza della precisione nel testo digitale',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Nel mondo digitale, l\'"economia delle parole" è fondamentale. Non scriviamo più solo per essere letti dagli esseri umani, ma per essere elaborati dagli algoritmi. Google taglia i titoli a 60 caratteri. Twitter (ora X) ti limita a 280. Un\'e-mail di vendita efficace dovrebbe essere letta in meno di 30 secondi.'
    },
    {
      type: 'paragraph',
      html: 'Questo <strong>strumento di conteggio dei caratteri e delle parole</strong> è progettato non solo per darti un numero, ma per aiutarti a ottimizzare la tua comunicazione. Calcolando metriche come il <em>tempo di lettura</em> o la <em>densità delle parole</em>, passi dallo "scrivere un testo" al "progettare un contenuto".'
    },
    {
      type: 'title',
      text: 'Ottimizzazione SEO',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'I limiti dei motori di ricerca sono rigorosi. Se li superi, il tuo messaggio viene tagliato con i puntini di sospensione (...) e il tuo CTR (Click Through Rate) cala drasticamente.'
    },
    {
      type: 'table',
      headers: ['Elemento', 'Limite raccomandato'],
      rows: [
        ['Meta Title', '50: 60 caratteri'],
        ['Meta Description', '150: 160 caratteri'],
        ['Google Ads (Titoli)', '30 caratteri'],
      ]
    },
    {
      type: 'title',
      text: 'Social Media',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Ogni piattaforma ha il suo linguaggio e la sua lunghezza ideale. Anche se il limite è più alto, il "punto ideale" di engagement è solitamente più basso.'
    },
    {
      type: 'table',
      headers: ['Piattaforma', 'Limite'],
      rows: [
        ['Twitter (X)', '280 car. (Punto ideale: 70-100)'],
        ['Instagram Bio', '150 caratteri'],
        ['LinkedIn Post', '3000 car. (Ideale: ~1200)'],
      ]
    },
    {
      type: 'title',
      text: 'Domande frequenti sul conteggio',
      level: 2
    },
    {
      type: 'title',
      text: 'Gli spazi contano come caratteri?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Sì, ed è un errore comune dimenticarli. Per un computer, uno spazio è un byte di informazioni proprio come la lettera "A". Su piattaforme come Twitter o database SMS, gli spazi consumano il tuo limite. Il nostro strumento ti fornisce entrambi i dati: "con spazi" e "senza spazi" (utile per traduttori o grafici).'
    },
    {
      type: 'title',
      text: 'Come viene calcolato il Tempo di Lettura?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Utilizziamo lo standard medio di lettura per gli adulti: <strong>200-250 parole al minuto</strong> (lettura silenziosa). Per il tempo di conversazione (locuzione), calcoliamo circa <strong>130-150 parole al minuto</strong>, che è il ritmo di una conversazione naturale o di un narratore di audiolibri misurato.'
    },
    {
      type: 'title',
      text: 'Privacy: Dove finisce il mio testo?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Da nessuna parte. Tutta l\'elaborazione viene eseguita nel tuo browser tramite <strong>JavaScript lato client</strong>. Puoi disconnetterti da Internet e lo strumento continuerà a funzionare. Nessun dato viene inviato ai nostri server.'
    },
  ],
  ui: {
    labelChars: 'Caratteri',
    labelWords: 'Parole',
    labelLines: 'Linee',
    labelParagraphs: 'Paragrafi',
    labelNoSpaces: 'Senza spazi',
    labelBytes: 'Byte',
    labelReading: 'Lettura',
    labelSpeaking: 'Parlato',
    labelUpload: 'Carica file',
    btnCopyTitle: 'Copia testo',
    btnClearTitle: 'Pulisci',
    placeholder: 'Scrivi o incolla il tuo testo qui...',
    unitSec: 's',
    unitMin: 'min',
    numberLocale: 'it-IT'
  }
};
