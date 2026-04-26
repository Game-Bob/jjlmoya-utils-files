import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CharacterCounterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'licznik-znakow';
const title = 'Licznik Znaków i Słów Online — Liczenie Liter';
const description =
  'Online licznik znaków, słów, zdań i akapitów. Oblicz czas czytania i mówienia. Darmowe narzędzie idealne dla SEO i mediów społecznościowych.';

const faqData = [
  {
    question: 'Dlaczego liczenie znaków jest ważne dla SEO?',
    answer:
      'Wyszukiwarki mają zalecane limity dla tytułów (60 znaków) i meta opisów (155-160 znaków). Przekroczenie tych limitów może spowodować obcięcie treści w wynikach wyszukiwania.'},
  {
    question: 'Czy licznik znaków uwzględnia spacje?',
    answer:
      'Tak, domyślnie liczymy wszystkie uderzenia klawiszy, w tym spacje. Nasze narzędzie rozbija jednak licznik na dane ze spacjami i bez spacji dla większej precyzji, zgodnie z Twoimi potrzebami.'},
  {
    question: 'Jak obliczany jest czas czytania?',
    answer:
      'Czas czytania opiera się na średniej prędkości od 200 do 250 słów na minutę. Czas mówienia jest obliczany na około 130-150 słów na minutę, co jest idealne dla skryptów i prezentacji.'},
  {
    question: 'Czy analizowanie tutaj długich tekstów jest bezpieczne?',
    answer:
      'Absolutnie. Analiza odbywa się lokalnie w Twojej przeglądarce. Możesz przetwarzać całe artykuły lub długie dokumenty bez wysyłania tekstu na nasze serwery.'},
];

const howToData = [
  {
    name: 'Wprowadź tekst',
    text: 'Wpisz bezpośrednio lub wklej tekst, który chcesz przeanalizować, w głównym polu.'},
  {
    name: 'Sprawdź statystyki',
    text: 'Obserwuj licznik słów, znaków, zdań i akapitów aktualizowany w czasie rzeczywistym.'},
  {
    name: 'Analizuj czasy',
    text: 'Sprawdź wskaźniki szacowanego czasu czytania i mówienia dla Twojej treści.'},
  {
    name: 'Optymalizuj długość',
    text: 'Dostosuj swój tekst do zalecanych limitów dla mediów społecznościowych lub SEO (tytuły, opisy).'},
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

export const content: ToolLocaleContent<CharacterCounterUI> = {
  slug,
  title,
  description,
  bibliography,
  faq: faqData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Znaczenie precyzji w tekście cyfrowym',
      level: 2},
    {
      type: 'paragraph',
      html: 'W cyfrowym świecie "ekonomia słów" jest fundamentalna. Nie piszemy już tylko po to, by być czytanym przez ludzi, ale by być przetwarzanym przez algorytmy. Google ucina tytuły przy 60 znakach. Twitter (teraz X) ogranicza Cię do 280 znaków. Skuteczny e-mail sprzedażowy powinien być przeczytany w mniej niż 30 sekund.'},
    {
      type: 'paragraph',
      html: 'To <strong>narzędzie do liczenia znaków i słów</strong> zostało zaprojektowane nie tylko po to, by podać Ci liczbę, ale by pomóc Ci zoptymalizować komunikację. Obliczając wskaźniki, takie jak <em>czas czytania</em> czy <em>gęstość słów</em>, przechodzisz od "pisania tekstu" do "projektowania treści".'},
    {
      type: 'title',
      text: 'Optymalizacja SEO',
      level: 3},
    {
      type: 'paragraph',
      html: 'Limity wyszukiwarek są rygorystyczne. Jeśli je przekroczysz, Twoja wiadomość zostanie odcięta wielokropkiem (...) i Twój CTR (Click Through Rate) gwałtownie spadnie.'},
    {
      type: 'table',
      headers: ['Element', 'Zalecany limit'],
      rows: [
        ['Meta Title', '50 - 60 znaków'],
        ['Meta Description', '150 - 160 znaków'],
        ['Google Ads (Nagłówki)', '30 znaków'],
      ]},
    {
      type: 'title',
      text: 'Media społecznościowe',
      level: 3},
    {
      type: 'paragraph',
      html: 'Każda platforma ma swój własny język i idealną długość. Nawet jeśli limit jest wyższy, "sweet spot" zaangażowania jest zazwyczaj niższy.'},
    {
      type: 'table',
      headers: ['Platforma', 'Limit'],
      rows: [
        ['Twitter (X)', '280 znaków (Idea: 70-100)'],
        ['Instagram Bio', '150 znaków'],
        ['LinkedIn Post', '3000 znaków (Idea: ~1200)'],
      ]},
    {
      type: 'title',
      text: 'Często zadawane pytania o liczenie',
      level: 2},
    {
      type: 'title',
      text: 'Czy spacje liczą się jako znaki?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Tak, i częstym błędem jest zapominanie o nich. Dla komputera spacja jest bajtem informacji, tak samo jak litera "A". Na platformach takich jak Twitter czy w bazach danych SMS, spacje zużywają Twój limit. Nasze narzędzie podaje obie dane: "ze spacjami" i "bez spacji" (przydatne dla tłumaczy czy składaczy tekstu).'},
    {
      type: 'title',
      text: 'Jak obliczany jest czas czytania?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Używamy średniego standardu czytania dla dorosłych: <strong>200-250 słów na minutę</strong> (czytanie ciche). W przypadku czasu mówienia (dykcji) obliczamy około <strong>130-150 słów na minutę</strong>, co jest rytmem naturalnej rozmowy lub spokojnego lektora audiobooka.'},
    {
      type: 'title',
      text: 'Prywatność: Gdzie trafia mój tekst?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Nigdzie. Całe przetwarzanie odbywa się w Twojej przeglądarce za pomocą <strong>JavaScript po stronie klienta</strong>. Możesz odłączyć internet, a narzędzie nadal będzie działać. Żadne dane nie są wysyłane na nasze serwery.'},
  ],
  ui: {
    labelChars: 'Znaki',
    labelWords: 'Słowa',
    labelLines: 'Linie',
    labelParagraphs: 'Akapity',
    labelNoSpaces: 'Bez spacji',
    labelBytes: 'Bajty',
    labelReading: 'Czytanie',
    labelSpeaking: 'Mówienie',
    labelUpload: 'Prześlij plik',
    btnCopyTitle: 'Kopiuj tekst',
    btnClearTitle: 'Wyczyść',
    placeholder: 'Wpisz lub wklej swój tekst tutaj...',
    unitSec: 's',
    unitMin: 'min',
    numberLocale: 'pl-PL'}};
