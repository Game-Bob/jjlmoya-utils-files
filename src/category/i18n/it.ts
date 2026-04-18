import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'file-e-testo',
  title: 'Strumenti per File e Testo',
  description: 'Strumenti online gratuiti per lavorare con file e testo direttamente nel browser. Converti gli appunti in immagini scaricabili, senza installazioni e con totale privacy.',
  seo: [
    {
      type: 'title',
      text: 'Perché gestire i file dal browser?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le attività quotidiane con file e testo — salvare uno screenshot, convertire un formato, estrarre testo — richiedono di solito l\'installazione di software pesante o l\'utilizzo di servizi online che caricano i tuoi dati su server esterni. Questi strumenti funzionano <strong>100% localmente nel tuo browser</strong>: nessuno dei tuoi dati lascia mai il tuo dispositivo.',
    },
    {
      type: 'paragraph',
      html: 'Il browser moderno ha accesso nativo alla Clipboard API, al file system locale e ai motori di elaborazione immagini. Questo rende possibile replicare le funzioni più comuni delle applicazioni desktop senza installare nulla, registrarsi a nessun servizio o vedere annunci pubblicitari.',
    },
    {
      type: 'title',
      text: 'Appunti: dal copia-incolla a un file vero',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Quando esegui uno screenshot con <strong>Windows + Shift + S</strong> o <strong>Cmd + Shift + 4</strong>, l\'immagine finisce negli appunti ma non viene salvata come file. Per ottenerla dovresti normalmente aprire Paint, Photoshop o un altro editor, incollare ed esportare. Con lo strumento da appunti a immagine, l\'intero processo si riduce a <strong>Ctrl+V e un clic</strong>.',
    },
    {
      type: 'paragraph',
      html: 'I file vengono scaricati con un nome basato sulla data e sull\'ora esatta, facilitando l\'organizzazione cronologica degli screenshot senza rinominarli manualmente. Il formato di output è PNG, che preserva la qualità originale senza alcuna perdita.',
    },
    {
      type: 'title',
      text: 'Privacy by design',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ogni strumento in questa categoria è costruito su un unico principio: <strong>i dati non lasciano mai il browser</strong>. Non ci sono richieste a server esterni, nessun archiviazione cloud, nessun registro delle attività. Qualsiasi cosa incolli nello strumento viene elaborata in memoria e scaricata direttamente sul tuo disco, senza intermediari.',
    },
    {
      type: 'list',
      items: [
        '<strong>Nessuna installazione:</strong> Funziona direttamente nel browser su qualsiasi sistema operativo.',
        '<strong>Privacy totale:</strong> Nessun file o testo viene mai inviato a nessun server.',
        '<strong>Gratuito:</strong> Nessun limite di utilizzo, nessun abbonamento, nessuna filigrana.',
        '<strong>Veloce:</strong> L\'elaborazione è locale, quindi la velocità dipende dal tuo dispositivo, non da una connessione.',
      ],
    },
    {
      type: 'title',
      text: 'Il futuro degli strumenti di produttività',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le moderne API web (Clipboard API, File System Access API, Canvas API) hanno colmato il divario tra ciò che un\'applicazione nativa e ciò che il browser possono fare. Ogni nuovo strumento in questa categoria sfrutta queste capacità per offrire <strong>funzionalità di livello desktop con l\'accessibilità di un URL</strong>.',
    },
  ],
};
