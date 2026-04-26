import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashVerifierUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'weryfikacja-hash-pliku';
const title = 'Weryfikator Hash Online — SHA 256, MD5 i SHA 1';
const description =
  'Oblicz i zweryfikuj integralność swoich plików, porównując ich podpisy cyfrowe SHA256, MD5 lub SHA1. Upewnij się, że Twoje pliki nie zostały zmienione.';

const faqData = [
  {
    question: 'Jak sprawdzić, czy plik został zmodyfikowany?',
    answer:
      'Najbezpieczniejszym sposobem jest porównanie jego skrótu (Hash). Hash to unikalny cyfrowy odcisk palca. Jeśli zmieni się choćby jeden bit pliku, Hash będzie zupełnie inny. Porównując otrzymany Hash z tym dostarczonym przez autora, możesz zagwarantować jego integralność.'},
  {
    question: 'Który algorytm jest lepszy: MD5 czy SHA-256?',
    answer:
      'MD5 jest bardzo szybki, ale uważany za mniej bezpieczny w obliczu celowych ataków. SHA-256 jest obecnym standardem bezpieczeństwa i znacznie trudniej go „podrobić”. Do większości kontroli integralności plików zalecaną opcją jest SHA-256.'},
  {
    question: 'Dlaczego Hash zmienia się po zmianie nazwy pliku?',
    answer:
      'W rzeczywistości zmiana nazwy pliku NIE zmienia jego wartości Hash. Hash jest obliczany na podstawie wewnętrznej zawartości (bajtów) pliku, a nie jego nazwy czy daty utworzenia. Jeśli Hash się zmienia, oznacza to, że zmodyfikowano dane wewnętrzne.'},
  {
    question: 'Czy mój plik jest przesyłany na serwer w celu obliczenia Hash?',
    answer:
      'Nie. Nasze narzędzie korzysta z interfejsu Web Crypto API, co oznacza, że wszystkie obliczenia odbywają się lokalnie w Twojej przeglądarce. Twój plik nigdy nie opuszcza komputera, co zapewnia 100% prywatności i jest znacznie szybsze, ponieważ nie jest wymagane przesyłanie danych.'},
];

const howToData = [
  {
    name: 'Wybierz swój plik',
    text: 'Przeciągnij lub wybierz plik, który chcesz zweryfikować w narzędziu.'},
  {
    name: 'Wybierz algorytm',
    text: 'Wybierz SHA-256, MD5 lub SHA-1 w zależności od podpisu, który posiadasz.'},
  {
    name: 'Porównaj wyniki',
    text: 'Wklej oczekiwany Hash, a system natychmiast poinformuje Cię, czy są one zgodne (Sukces), czy różne (Błąd).'},
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }}))};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text}))};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
  inLanguage: 'pl'};

export const content: ToolLocaleContent<HashVerifierUI> = {
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
      text: 'Co to jest Hash pliku i dlaczego jest kluczowy dla Twojego bezpieczeństwa?',
      level: 2},
    {
      type: 'paragraph',
      html: 'Hash to <strong>cyfrowy odcisk palca</strong> unikalny dla każdego pliku. Jest to ciąg alfanumeryczny generowany przez algorytm matematyczny (taki jak SHA-256). Jego główną cechą jest to, że jest „jednokierunkowy”: możesz uzyskać Hash z pliku, ale nie możesz zrekonstruować pliku na podstawie jego skrótu.'},
    {
      type: 'paragraph',
      html: 'Korzystanie z <strong>weryfikatora hash online</strong> jest niezbędne podczas pobierania oprogramowania, obrazów ISO lub poufnych dokumentów. Autorzy zazwyczaj publikują MD5 lub SHA256 swoich plików, abyś mógł sprawdzić, czy pobrany plik jest dokładnie tym samym, który oni udostępnili, bez uszkodzeń czy złośliwych modyfikacji.'},
    {
      type: 'title',
      text: 'SHA-256 vs MD5: Którego powinieneś użyć?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Algorytm <strong>MD5</strong> był bardzo popularny przez lata ze względu na swoją szybkość, ale obecnie uważa się go za niebezpieczny pod względem kryptograficznym, ponieważ jest podatny na „kolizje”. Jest jednak nadal używany do prostych kontroli integralności (uszkodzone pliki podczas pobierania).'},
    {
      type: 'paragraph',
      html: 'Jeśli szukasz maksymalnego bezpieczeństwa, <strong>SHA-256</strong> (część rodziny SHA-2) jest standardem zalecanym przez agencje bezpieczeństwa na całym świecie. Jest praktycznie niemożliwe, aby dwa różne pliki wygenerowały ten sam Hash SHA-256.'},
    {
      type: 'title',
      text: 'Pełna prywatność: Obliczenia 100% w Twojej przeglądarce',
      level: 3},
    {
      type: 'tip',
      title: 'Brak konieczności przesyłania plików',
      html: '<p>Nasze narzędzie wykorzystuje moc Twojego komputera do przetwarzania pliku. Dzięki interfejsowi <strong>Web Crypto API</strong> nie musimy przesyłać pliku na żaden serwer. Oznacza to, że możesz zweryfikować pliki o rozmiarze kilku gigabajtów w kilka sekund, nie zużywając transferu internetowego i mając pewność, że zawartość Twoich plików nigdy nie opuszcza urządzenia.</p>'},
  ],
  ui: {
    labelTitle: "Lokalny Weryfikator Hash",
    labelSubtitle: "Upuść dowolny plik, aby natychmiast wygenerować jego sygnaturę <strong class=\"hv-accent\">SHA-256</strong>.",
    btnSelect: "Wybierz plik",
    labelPrivacy: "Pliki nigdy nie opuszczają Twojego urządzenia.",
    labelCalculating: "Obliczanie sygnatury...",
    labelSuccess: "Obliczenia zakończone sukcesem",
    btnAnother: "Zweryfikuj inny",
    labelHash: "Hash SHA-256",
    btnCopyTitle: "Kopiuj hash",
    labelCompare: "Porównaj z oryginałem",
    placeholderCompare: "Wklej tutaj oczekiwany hash...",
    labelCompareNote: "* Porównanie ignoruje wielkość liter i spacje.",
    statusVerified: "ZWERYFIKOWANY",
    statusCorrupt: "USZKODZONY / BŁĄD"}};
