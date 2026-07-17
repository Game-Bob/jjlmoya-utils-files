import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonToCsvUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'konwerter-json-na-csv';
const title = 'Konwerter JSON na CSV Online Za Darmo: Eksport do Excela';
const description =
  'Szybko i łatwo przekształć swoje pliki JSON w tabele CSV. Idealne dla analityków danych, którzy muszą otwierać pliki JSON w programie Excel lub Google Sheets.';

const faqData = [
  {
    question: 'Jak przekonwertować JSON na CSV dla Excela?',
    answer:
      'Po prostu wklej kod JSON lub prześlij plik do naszego narzędzia. System automatycznie przetworzy strukturę danych i wygeneruje plik CSV, który możesz pobrać i otworzyć bezpośrednio w Microsoft Excel lub Google Sheets.'
  },
  {
    question: 'Czy konwertowanie danych na tej stronie jest bezpieczne?',
    answer:
      'Tak, w 100% bezpieczne. Konwersja odbywa się w całości w Twojej przeglądarce przy użyciu JavaScript. Żadne dane nie są wysyłane na nasze serwery, co gwarantuje, że Twoje informacje pozostają prywatne i bezpieczne.'
  },
  {
    question: 'Co się stanie, jeśli mój JSON jest zagnieżdżony?',
    answer:
      'Nasz podstawowy konwerter jest zoptymalizowany pod kątem tablic obiektów. Jeśli masz bardzo głębokie zagnieżdżenie, narzędzie spróbuje spłaszczyć pierwszy poziom właściwości, aby zapewnić czytelną tabelę dla Excela.'
  },
  {
    question: 'Czy mogę skopiować CSV bezpośrednio zamiast go pobierać?',
    answer:
      'Oczywiście. Oprócz przycisku \"Pobierz CSV\" masz opcję \"Kopiuj wynik\", aby wkleić zawartość bezpośrednio do dowolnego edytora tekstu lub arkusza kalkulacyjnego.'
  },
];

const howToData = [
  {
    name: 'Wklej swój JSON',
    text: 'Wstaw kod JSON lub prześlij plik .json w obszarze wejściowym.'
  },
  {
    name: 'Przetwórz dane',
    text: 'Narzędzie automatycznie zidentyfikuje pola i strukturę, aby zorganizować je w wiersze i kolumny.'
  },
  {
    name: 'Pobierz lub kopiuj',
    text: 'Kliknij \"Pobierz CSV\", aby zapisać plik, lub \"Kopiuj wynik\", aby natychmiast go użyć.'
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
  inLanguage: 'pl'
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
      text: 'Dlaczego warto konwertować JSON na CSV do analizy danych?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'JSON to standardowy format dla nowoczesnych interfejsów API, ale nie jest najłatwiejszy do ręcznej analizy. <strong>Konwerter JSON na CSV</strong> pozwala przekształcić złożone struktury w wiersze i kolumny, ułatwiając manipulację w potężnych narzędziach, takich jak <strong>Microsoft Excel</strong>, Numbers czy Google Sheets.'
    },
    {
      type: 'title',
      text: 'Pełna prywatność: Konwertuj bez przesyłania plików',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Większość konwerterów online przesyła dane na serwer. Nasze narzędzie jest inne: <strong>konwersja odbywa się w 100% lokalnie</strong>. Dzięki zastosowaniu JavaScript w przeglądarce dane nigdy nie opuszczają Twojego komputera. Jest to kluczowe, jeśli pracujesz z poufnymi informacjami, listami klientów czy wewnętrznymi raportami firmowymi.'
    },
    {
      type: 'title',
      text: 'Wskazówki techniczne dla idealnej konwersji',
      level: 3
    },
    {
      type: 'list',
      items: [
        'Upewnij się, że Twój JSON jest <strong>tablicą obiektów</strong> (np. [{}, {}]).',
        'Sprawdź, czy wszystkie obiekty mają podobne właściwości, aby zachować spójność kolumn CSV.',
        'W przypadku znaków specjalnych, nasz plik CSV jest eksportowany w formacie <strong>UTF-8</strong>, aby uniknąć problemów w programie Excel.',
      ]
    },
  ],
  ui: {
    statusWaiting: 'Oczekiwanie na prawidłowy JSON',
    statusValid: 'Prawidłowy JSON',
    statusInvalid: 'Nieprawidłowy JSON',
    labelFlatten: 'Spłaszcz obiekty',
    zoneLabel: 'Wklej swój JSON tutaj lub przeciągnij plik',
    placeholderJson: '[{"id": 1, "name": "John", "details": {"age": 30}}]',
    btnCopyCsv: 'Kopiuj CSV',
    btnDownloadCsv: 'Pobierz Excel (CSV)',
    copyFeedback: 'Skopiowano!'
  }
};
