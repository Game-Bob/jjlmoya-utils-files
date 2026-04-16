import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClipboardToImageUI } from '../ui';

const slug = 'schowek-pod-png';
const title = 'Schowek do PNG: Pobieraj Zrzuty Ekranu i Obrazy';
const description =
  'Narzędzie online do konwersji zawartości schowka (zrzuty ekranu, obrazy) na plik PNG gotowy do natychmiastowego pobrania. Proces w 100% prywatny i szybki.';

const faqData = [
  {
    question: 'Czy wklejanie tutaj moich zrzutów ekranu jest bezpieczne?',
    answer:
      'Tak, jest to całkowicie bezpieczne. To narzędzie działa w 100% lokalnie w Twojej przeglądarce. Dane z Twojego schowka nigdy nie są wysyłane na żaden serwer, co gwarantuje pełną prywatność.',
  },
  {
    question: 'Jakie typy treści mogę konwertować?',
    answer:
      'Możesz wklejać skopiowane obrazy (zrzuty ekranu, zdjęcia), tekst, który zostanie skonwertowany na plik .txt, a nawet elementy HTML. Najczęstszym zastosowaniem jest zapisywanie szybkich zrzutów ekranu jako plików PNG.',
  },
  {
    question: 'Dlaczego przycisk wklejania nie działa?',
    answer:
      'Ze względu na ograniczenia bezpieczeństwa przeglądarek, przycisk "Wklej" wymaga czasami wyraźnych uprawnień. Jeśli nie działa, zawsze możesz użyć standardowego skrótu klawiszowego: Ctrl+V (Windows) lub Cmd+V (Mac).',
  },
  {
    question: 'Czy to działa na urządzeniach mobilnych?',
    answer:
      'Tak, możesz użyć funkcji wklejania w telefonie, aby wyświetlić zawartość, choć narzędzie jest zoptymalizowane pod kątem szybkiego zarządzania zrzutami ekranu na komputerze.',
  },
];

const howToData = [
  {
    name: 'Skopiuj zawartość',
    text: 'Zrób zrzut ekranu lub skopiuj obraz/tekst z dowolnej aplikacji.',
  },
  {
    name: 'Wklej w obszarze',
    text: 'Kliknij w obszarze wklejania lub użyj skrótu Ctrl+V / Cmd+V, aby załadować treść.',
  },
  {
    name: 'Podgląd',
    text: 'Sprawdź, czy treść jest poprawna w obszarze podglądu, który pojawi się natychmiast.',
  },
  {
    name: 'Pobierz plik',
    text: 'Naciśnij przycisk pobierania, aby zapisać treść jako plik na swoim komputerze.',
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

export const content: ToolLocaleContent<ClipboardToImageUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: '',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Jak zapisać obraz ze schowka jako plik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'To bezpłatne narzędzie online pozwala na natychmiastową <strong>konwersję zawartości schowka na plik obrazu</strong> (PNG). To idealne rozwiązanie, gdy zrobiłeś zrzut ekranu (Windows + Shift + S) lub skopiowałeś obraz ze strony WWW i musisz zapisać go na komputerze bez otwierania ciężkich edytorów, takich jak Photoshop czy Paint.',
    },
    {
      type: 'title',
      text: 'Dlaczego warto korzystać z tego konwertera schowka?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Szybkość:</strong> Po prostu naciśnij <code>Ctrl + V</code> i pobierz. Bez kroków pośrednich.',
        '<strong>Prywatność:</strong> Cały proces odbywa się w Twojej przeglądarce. Twoje obrazy <strong>nigdy nie są przesyłane na żaden serwer</strong>.',
        '<strong>Oryginalna jakość:</strong> Pobieramy surowe dane ze schowka, zapewniając, że pobrany obraz zachowuje najwyższą możliwą jakość.',
        '<strong>Automatyczna organizacja:</strong> Pliki są pobierane z nazwą opartą na dokładnej dacie i godzinie, co ułatwia organizację Twoich zrzutów.',
      ],
    },
    {
      type: 'title',
      text: 'Często zadawane pytania',
      level: 2,
    },
    {
      type: 'title',
      text: 'Czy to działa ze zrzutami ekranu?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tak, narzędzie jest idealne do szybkiego zapisywania zrzutów ekranu wykonanych za pomocą narzędzia Wycinanie w systemie Windows lub Mac.',
    },
    {
      type: 'title',
      text: 'Jakie formaty są obsługiwane?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Obecnie narzędzie automatycznie wykrywa i konwertuje każdy obraz w schowku na format PNG, aby zapewnić kompatybilność i przezroczystość.',
    },
  ],
  ui: {
    labelCtrlV: 'Naciśnij Ctrl + V w dowolnym miejscu',
    labelClickPaste: 'lub kliknij tutaj, aby wkleić',
    btnClear: 'Wyczyść',
    btnDownload: 'Pobierz',
    privacyMsg: 'Cały proces jest w 100% lokalny. Twoje obrazy nigdy nie opuszczają przeglądarki.',
  },
};
