import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FormatStripperUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'usuwanie-formatowania-tekstu';
const title = 'Usuwanie Formatowania Tekstu Online Za Darmo: Czyściciel Stylów';
const description =
  'Usuń pogrubienie, kursywę, linki i kolory z dowolnego tekstu. Konwertuj HTML lub Word na czysty tekst (txt) natychmiast dzięki naszemu profesjonalnemu narzędziu.';

const faqData = [
  {
    question: 'Jak usunąć pogrubienie i kursywę z tekstu?',
    answer:
      'Po prostu wklej tekst do naszego narzędzia. System automatycznie wykryje style i usunie je, pozostawiając same znaki jako czysty tekst, bez żadnych dodatkowych wag czy dekoracji.'
  },
  {
    question: 'Czy narzędzie jest kompatybilne z tekstem z Microsoft Word lub Google Docs?',
    answer:
      'Tak, zostało zaprojektowane specjalnie w tym celu. Podczas kopiowania z Worda lub Docs przenoszonych jest wiele "śmieciowych" kodów. Nasz czyściciel usuwa wszystkie te ukryte style, pozwalając na wklejenie czystego tekstu do innych aplikacji.'
  },
  {
    question: 'Czy mogę konwertować HTML na czysty tekst?',
    answer:
      'Dokładnie tak. Jeśli wkleisz fragment kodu HTML, nasze narzędzie usunie wszystkie tagi (takie jak <div>, <a>, <strong>) i zwróci tylko czytelną treść tekstową, gotową do użycia w dowolnym miejscu.'
  },
  {
    question: 'Czy wklejanie poufnych informacji jest bezpieczne?',
    answer:
      'Całkowicie bezpieczne. Całe przetwarzanie odbywa się w 100% w Twojej przeglądarce. Żadne dane nie są wysyłane na nasze serwery, co gwarantuje, że Twój tekst pozostaje prywatny i bezpieczny przez cały czas.'
  },
];

const howToData = [
  {
    name: 'Skopiuj swój tekst',
    text: 'Skopiuj tekst z formatowaniem z Worda, strony WWW lub e-maila.'
  },
  {
    name: 'Wklej do czyściciela',
    text: 'Wstaw treść w obszar wejściowy. Usuwanie stylów następuje automatycznie.'
  },
  {
    name: 'Skopiuj wynik',
    text: 'Twój tekst jest teraz czysty. Skopiuj go i używaj gdziekolwiek chcesz bez problemów z formatowaniem.'
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
      text: 'Co oznacza "usuwanie formatowania" i dlaczego tego potrzebujesz?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Usuwanie formatowania to proces <strong>transformacji tekstu sformatowanego (Rich Text) na czysty tekst (Plain Text)</strong>. Kiedy kopiujemy informacje ze strony internetowej, eBooka lub dokumentu Word, tekst ten niesie ze sobą "ukryty bagaż": rodzaje czcionek, rozmiary, kolory, linki i style CSS. Nasze narzędzie służy jako filtr, który eliminuje wszystkie te cyfrowe śmieci.'
    },
    {
      type: 'title',
      text: 'Korzyści z używania czyściciela tekstu',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Uniwersalna kompatybilność:</strong> Czysty tekst działa w każdym programie, od starych e-maili po nowoczesne systemy CMS, takie jak WordPress.',
        '<strong>Czysty kod:</strong> Idealny dla programistów, którzy muszą wkleić tekst do swojego kodu bez przenoszenia tagów HTML czy stylów RTF.',
        '<strong>SEO i czytelność:</strong> Usuwając nieregularne formaty, zapewniasz, że Twoja treść zachowuje spójność wizualną Twojej strony.',
        '<strong>Pełna prywatność:</strong> Proces jest lokalny. Twój tekst nigdy nie opuszcza przeglądarki.',
      ]
    },
    {
      type: 'title',
      text: 'Usuwanie formatowania vs. zwykłe kopiuj-wklej',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Często zwykłe <code>Ctrl + V</code> przenosi niepożądane formaty, które psują układ dokumentu docelowego. Korzystanie z online <strong>usuwacza formatowania</strong> gwarantuje, że zachowasz tylko istotę przekazu, co pozwala na nałożenie własnych stylów od zera bez technicznych zakłóceń.'
    },
  ],
  ui: {
    labelInput: 'Tekst źródłowy (z formatowaniem)',
    labelOutput: 'Czysty tekst (oczyszczony)',
    placeholderInput: 'Wklej tutaj tekst z Worda, strony WWW lub PDF...',
    placeholderOutput: 'Oczyszczony tekst pojawi się tutaj...',
    btnCopy: 'Kopiuj wynik',
    btnClear: 'Wyczyść wszystko',
    toastCopied: 'Czysty tekst skopiowany!'
  }
};
