import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextToMarkdownUI } from '../ui';

const slug = 'konwerter-tekstu-na-markdown';
const title = 'Konwerter Tekstu na Markdown Online — Formatowanie Dokumentów';
const description =
  'Szybko przekształć zwykły tekst w kod Markdown. Konwertuj akapity, nagłówki i listy na format kompatybilny z GitHub, Reddit i edytorami MD.';

const faqData = [
  {
    question: 'Co to jest Markdown i do czego służy?',
    answer:
      'Markdown to lekki język znaczników używany do formatowania tekstu za pomocą prostej składni tekstu jawnego. Jest szeroko stosowany na platformach takich jak GitHub, Reddit, Slack oraz w generatorach stron statycznych, ponieważ jest łatwy do czytania i pisania.',
  },
  {
    question: 'Czy mój tekst jest bezpieczny podczas konwersji?',
    answer:
      'Tak, w 100% bezpieczny. Konwersja odbywa się w całości w Twojej przeglądarce przy użyciu JavaScript. Żadne informacje nie są wysyłane na nasze serwery, co gwarantuje, że Twoje dokumenty pozostają prywatne.',
  },
  {
    question: 'Jak konwertowane są tytuły i listy?',
    answer:
      'Nasze narzędzie identyfikuje podstawową strukturę tekstu. Jeśli wykryje pojedyncze linie przed akapitami, może potraktować je jako nagłówki. Linie zaczynające się od myślników lub cyfr są formatowane jako standardowe listy Markdown.',
  },
  {
    question: 'Czy mogę używać tego do złożonych tabel lub kodu?',
    answer:
      'To narzędzie jest przeznaczone do podstawowego formatowania tekstu (akapity, listy, pogrubienie, kursywa). W przypadku bardzo złożonych struktur, takich jak tabele wielokolumnowe, może być wymagana ręczna regulacja w wygenerowanym kodzie Markdown.',
  },
];

const howToData = [
  {
    name: 'Wklej swój tekst',
    text: 'Wstaw zwykły tekst, który chcesz sformatować, w polu źródłowym.',
  },
  {
    name: 'Automatyczna konwersja',
    text: 'Narzędzie przetwarza tekst i stosuje składnię Markdown do różnych zidentyfikowanych elementów.',
  },
  {
    name: 'Kopiuj lub pobierz',
    text: 'Kliknij „Kopiuj wynik” lub „Pobierz .md”, aby otrzymać sformatowany plik.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<TextToMarkdownUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Źródła i referencje',
  bibliography: [
    { name: 'CommonMark: Standardowa specyfikacja Markdown', url: 'https://commonmark.org/' },
    { name: 'Daring Fireball: Oryginalny projekt Markdown', url: 'https://daringfireball.net/projects/markdown/' },
    { name: 'GitHub Flavored Markdown (GFM)', url: 'https://github.github.com/gfm/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Dlaczego warto konwertować tekst na Markdown?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jeśli jesteś programistą, blogerem lub pisarzem technicznym, prawdopodobnie używasz <strong>Markdown</strong> na co dzień. Konwersja <strong>zwykłego tekstu na Markdown</strong> pozwala zachować czystą strukturę, którą łatwo wyeksportować do HTML, PDF lub bezpośrednio na platformy takie jak WordPress i generatory stron statycznych.',
    },
    {
      type: 'title',
      text: 'Pełna prywatność: Konwersja 100% lokalna',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Większość konwerterów online przetwarza tekst na swoich serwerach. Nasz <strong>konwerter tekstu na Markdown</strong> działa całkowicie w Twojej przeglądarce. Twoje dane nigdy nie opuszczają Twojego komputera, co sprawia, że jest to idealne rozwiązanie do sporządzania wewnętrznych dokumentów, notatek ze spotkań czy osobistych pomysłów.',
    },
    {
      type: 'title',
      text: 'Wyróżnione funkcje',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Automatyczna identyfikacja <strong>nagłówków i tytułów</strong>.',
        'Konwersja <strong>list wypunktowanych i numerowanych</strong>.',
        'Obsługa podstawowego formatowania, takiego jak <strong>pogrubienie i kursywa</strong>.',
        'Natychmiastowy eksport do <strong>pliku .md</strong>.',
      ],
    },
  ],
  ui: {
    labelInput: 'Zwykły Tekst',
    labelOutput: 'Sformatowany Markdown',
    placeholderInput: 'Wklej tutaj swój tekst...',
    placeholderOutput: 'Wygenerowany kod Markdown pojawi się tutaj...',
    btnConvert: 'Konwertuj na Markdown',
    btnDownload: 'Pobierz .md',
    btnCopy: 'Kopiuj wynik',
    btnClear: 'Wyczyść wszystko',
    toastCopied: 'Kod Markdown skopiowany!',
    toastDownloaded: 'Pobieranie pliku .md...',
  },
};
