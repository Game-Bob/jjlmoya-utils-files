import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextSplitterUI } from '../ui';

const slug = 'dzielenie-tekstu';
const title = 'Dzielenie Tekstu Online — Rozdzielanie według Akapitów, Zdań lub Długości';
const description =
  'Automatycznie dziel długie teksty na mniejsze części. Wybieraj między rozdzielaniem według liczby słów, znaków, akapitów lub zdań.';

const faqData = [
  {
    question: 'Jak podzielić tekst dla ChatGPT lub AI?',
    answer:
      'Wiele systemów AI posiada limity znaków na wiadomość. Dzięki naszemu narzędziu możesz podzielić swój długi prompt na mniejsze części (np. co 2000 znaków), aby wysyłać je sekwencyjnie bez utraty informacji.',
  },
  {
    question: 'Czy wklejanie prywatnych tekstów do dzielnika jest bezpieczne?',
    answer:
      'Całkowicie bezpieczne. Logika dzielenia działa w 100% w Twojej przeglądarce przy użyciu JavaScript. Żaden tekst nie jest wysyłany na nasze serwery, co gwarantuje, że Twoje dane pozostają prywatne na Twoim urządzeniu.',
  },
  {
    question: 'Czy istnieje limit rozmiaru tekstu, który mogę podzielić?',
    answer:
      'Nie narzucamy ścisłego limitu, ponieważ przetwarzanie odbywa się lokalnie. Możesz podzielić kilka megabajtów tekstu w kilka sekund, choć wydajność zależy od pamięci Twojego komputera.',
  },
  {
    question: 'Czy narzędzie dodaje numerację do części?',
    answer:
      'Obecnie narzędzie zwraca oddzielne bloki. Możesz je kopiować jeden po drugim. Wielu użytkowników uważa to za przydatne, aby zachować ręczną kontrolę nad sposobem wysyłania każdego segmentu do innych aplikacji.',
  },
];

const howToData = [
  {
    name: 'Wklej swój tekst',
    text: 'Wstaw długi tekst, który chcesz podzielić, w głównym obszarze wejściowym.',
  },
  {
    name: 'Skonfiguruj podział',
    text: 'Wybierz metodę (znaki, słowa, zdania lub akapity) i ustaw maksymalną wartość dla każdej części.',
  },
  {
    name: 'Skopiuj części',
    text: 'Narzędzie pokaże Ci wygenerowane bloki. Skopiuj ten, którego potrzebujesz i użyj go gdziekolwiek chcesz.',
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

export const content: ToolLocaleContent<TextSplitterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Źródła i referencje',
  bibliography: [
    { name: 'Algorytm łamania linii Unicode', url: 'https://unicode.org/reports/tr14/' },
    { name: 'NLP: Techniki dzielenia zdań', url: 'https://pl.wikipedia.org/wiki/Segmentacja_zda%C5%84' },
    { name: 'Limity okna kontekstowego LLM', url: 'https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Dlaczego potrzebujesz dzielnika tekstu online?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Praca z bardzo długimi tekstami może być wyzwaniem w dobie cyfrowej. Niezależnie od tego, czy jesteś programistą wymagającym podziału kodu na moduły, pisarzem dostosowującym treści do mediów społecznościowych, czy użytkownikiem wchodzącym w interakcję z <strong>Modelami Wielkohulubnych Języków (LLM)</strong> takimi jak ChatGPT, <strong>dzielnik tekstu</strong> jest niezbędnym narzędziem.',
    },
    {
      type: 'title',
      text: 'Inteligentne metody dzielenia',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Według Znaków:</strong> Precyzyjne dla ścisłego przestrzegania limitów technicznych.',
        '<strong>Według Słów:</strong> Idealne dla artykułów i blogów, gdzie szukana jest określona długość dla SEO lub czytelności.',
        '<strong>Według Zdań:</strong> Zapewnia, że myśli nie są przerywane w połowie, zachowując kontekst każdego bloku.',
        '<strong>Według Akapitów:</strong> Najlepsza opcja dla zachowania logicznej struktury złożonego dokumentu.',
      ],
    },
    {
      type: 'title',
      text: 'Prywatność i Szybkość: Przetwarzanie Lokalne',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nasz <strong>dzielnik tekstu online</strong> nie przesyła Twoich treści na żaden serwer. Wszystko jest przetwarzane natychmiast w Twojej przeglądarce. Oznacza to, że możesz pracować z poufnymi dokumentami, umowami czy prywatnymi e-mailami z absolutną pewnością, że nikt inny ich nie zobaczy.',
    },
  ],
  ui: {
    labelInput: 'Oryginalny Tekst',
    labelOutput: 'Podzielone Części',
    labelMethod: 'Metoda Podziału',
    labelValue: 'Maks. na część',
    placeholderInput: 'Wklej tutaj długi tekst...',
    placeholderOutput: 'Podzielone części pojawią się tutaj...',
    optionChars: 'Znaki',
    optionWords: 'Słowa',
    optionSentences: 'Zdania',
    optionParagraphs: 'Akapity',
    btnSplit: 'Podziel Tekst',
    btnCopy: 'Kopiuj Część',
    btnClear: 'Wyczyść wszystko',
    toastCopied: 'Część skopiowana do schowka!',
    labelPartsFound: 'Wygenerowane części',
  },
};
