import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FileSizeConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'konwerter-rozmiaru-plikow';
const title = 'Konwerter i Wizualizator Rozmiaru Plików: Binarny i Dziesiętny';
const description =
  'Błyskawicznie konwertuj jednostki rozmiaru plików. Sprawdź czas pobierania i wizualizuj zajętość miejsca na różnych urządzeniach. Przetwarzanie 100% lokalne.';

const faqData = [
  {
    question: 'Jaka jest różnica między systemem dziesiętnym (KB) a binarnym (KiB)?',
    answer:
      'System dziesiętny używa potęg 1000 (KB, MB, GB), podczas gdy system binarny używa potęg 1024 (KiB, MiB, GiB). Dlatego dysk \"1 GB\" wydaje się mniejszy w komputerze - producenci stosują system dziesiętny, ale systemy operacyjne używają binarnego.',
  },
  {
    question: 'Czy moje dane są bezpieczne podczas korzystania z tego narzędzia?',
    answer:
      'Absolutnie tak. Wszystkie obliczenia odbywają się całkowicie w Twojej przeglądarce za pomocą JavaScript. Żadne dane nie są wysyłane na nasze serwery. Twoje pliki i wartości nigdy nie opuszczają Twojego komputera.',
  },
  {
    question: 'Czy mogę przesłać pliki, aby zobaczyć ich rozmiar?',
    answer:
      'Tak! Możesz przeciągnąć i upuścić plik bezpośrednio w obszarze wejściowym, a narzędzie automatycznie odczyta jego rozmiar. Sam plik nigdy nie jest przesyłany - lokalnie wykorzystywany jest tylko jego rozmiar.',
  },
  {
    question: 'Dlaczego mój dysk zewnętrzny 1 TB pokazuje mniej miejsca w komputerze?',
    answer:
      'Dyski zewnętrzne są sprzedawane w systemie dziesiętnym (1 TB = 1 000 000 000 000 bajtów), ale system operacyjny wyświetla je w systemie binarnym (1 TiB = 1 099 511 627 776 bajtów). To narzędzie pomaga zrozumieć obie perspektywy.',
  },
  {
    question: 'Jak dokładne jest obliczanie czasu pobierania?',
    answer:
      'Obliczenia opierają się na idealnych prędkościach sieci. Rzeczywiste prędkości różnią się ze względu na obciążenie sieci, odległość i sprzęt. Traktuj je jako szacunkowe przybliżenia, a nie gwarancje.',
  },
];

const howToData = [
  {
    name: 'Wprowadź rozmiar pliku',
    text: 'Wpisz liczbę w polu wejściowym (np. \"500\" lub \"1.5\") i wybierz jednostkę (KB, MB, GB itp.).',
  },
  {
    name: 'Wybierz swój standard',
    text: 'Przełączaj się między systemem dziesiętnym (standard marketingowy) a binarnym (standard komputerowy), aby zobaczyć, jak zmienia się wartość.',
  },
  {
    name: 'Zobacz natychmiastowe konwersje',
    text: 'Wszystkie jednostki, od bajtów po petabajty, pojawiają się natychmiast. Kliknij dowolny blok, aby skopiować jego wartość do schowka.',
  },
  {
    name: 'Wizualizuj kontekst',
    text: 'Poniżej konwersji sprawdź, ile czasu zajmuje pobieranie w różnych sieciach i ile miejsca zajmuje plik na różnych urządzeniach.',
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
  inLanguage: 'pl',
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
      text: 'Dlaczego warto konwertować rozmiary plików? Zrozumienie różnicy dziesiętny vs binarny',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kiedy kupujesz dysk <strong>\"1 TB\"</strong>, producenci mierzą go w systemie dziesiętnym (1000 GB). Jednak system operacyjny wyświetla go w systemie binarnym (1024 GiB = ok. 931 GB). Ta różnica dezorientuje użytkowników. <strong>Konwerter rozmiaru plików</strong> wypełnia tę lukę, pokazując dokładnie, co oznaczają Twoje pliki w dowolnej jednostce.',
    },
    {
      type: 'title',
      text: 'Kontekst rzeczywisty: Pobieranie i Przechowywanie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Informacja, że plik ma \"50 MB\", nic nie znaczy bez kontekstu. Ile czasu zajmie pobranie przez 4G? Ile miejsca zajmie na iPhonie? Nasze narzędzie odpowiada na te pytania natychmiast dzięki obliczeniom na żywo dla rzeczywistych sieci i urządzeń.',
    },
    {
      type: 'title',
      text: 'Ukryty koszt: Matematyka przechowywania danych',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Zewnętrzny dysk \"1 TB\" to w rzeczywistości <strong>ok. 931 GiB</strong> (sztuczka producenta)',
        'Film 4K (ok. 100 GB) pobiera się <strong>4 sekundy</strong> na światłowodzie, ale <strong>13 minut</strong> przez 4G',
        'iPhone \"256 GB\" pomieści mniej, ponieważ system operacyjny zajmuje miejsce, a matematyka binarna pogłębia różnicę',
      ],
    },
    {
      type: 'title',
      text: 'Techniczna precyzja, której możesz zaufać',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wszystkie konwersje są zgodne ze <strong>standardami NIST</strong>: system dziesiętny (SI) używa bazy 1000, binarny (IEC) bazy 1024. Obliczenia odbywają się <strong>w 100% lokalnie</strong> - bez przesyłania danych, bez serwerów, przy pełnej prywatności.',
    },
  ],
  ui: {
    inputPlaceholder: 'Wprowadź liczbę (np. 1.5 lub 500)',
    selectUnit: 'Jednostka',
    standardLabel: 'Standard:',
    decimalOption: 'Dziesiętny',
    binaryOption: 'Binarny',
    conversionTitle: 'Konwersje',
    networkSpeedsTitle: 'Czas pobierania',
    deviceStorageTitle: 'Wpływ na pamięć urządzenia',
    copyFeedback: 'Skopiowano!',
    dragDropText: 'Przeciągnij plik tutaj, aby odczytać jego rozmiar',
  },
};
