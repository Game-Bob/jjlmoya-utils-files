import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashVerifierUI } from '../ui';

const slug = 'datei-hash-verifizieren';
const title = 'Online Hash Verifizierer — SHA 256, MD5 und SHA 1';
const description =
  'Berechnen und überprüfen Sie die Integrität Ihrer Dateien, indem Sie deren digitale Signatur SHA256, MD5 oder SHA1 vergleichen. Stellen Sie sicher, dass Ihre Downloads nicht verändert wurden.';

const faqData = [
  {
    question: 'Wie überprüfe ich, ob eine Datei verändert wurde?',
    answer:
      'Der sicherste Weg ist der Vergleich des Hash-Werts. Ein Hash ist ein eindeutiger digitaler Fingerabdruck. Wenn sich auch nur ein einzelnes Bit der Datei ändert, ist der Hash völlig anders. Durch den Vergleich des erhaltenen Hash-Werts mit dem vom Autor bereitgestellten können Sie dessen Integrität garantieren.',
  },
  {
    question: 'Welcher Algorithmus ist besser: MD5 oder SHA-256?',
    answer:
      'MD5 ist sehr schnell, gilt aber als weniger sicher gegen absichtliche Angriffe. SHA-256 ist der aktuelle Sicherheitsstandard und viel schwieriger zu "fälschen". Für die meisten Dateiintegritätsprüfungen ist SHA-256 die empfohlene Option.',
  },
  {
    question: 'Warum ändert sich der Hash, wenn ich die Datei umbenenne?',
    answer:
      'Tatsächlich ändert das Umbenennen einer Datei ihren Hash-Wert NICHT. Der Hash wird basierend auf dem internen Inhalt (den Bytes) der Datei berechnet, nicht nach ihrem Namen oder Erstellungsdatum. Wenn sich der Hash ändert, liegt es daran, dass die internen Daten geändert wurden.',
  },
  {
    question: 'Wird meine Datei auf den Server hochgeladen, um den Hash zu berechnen?',
    answer:
      'Nein. Unser Tool verwendet die Web Crypto API, was bedeutet, dass die gesamte Berechnung lokal in Ihrem Browser erfolgt. Ihre Datei verlässt nie Ihren Computer, was 100 % Datenschutz gewährleistet und viel schneller ist, da kein Upload erforderlich ist.',
  },
];

const howToData = [
  {
    name: 'Datei auswählen',
    text: 'Ziehen oder wählen Sie die Datei aus, die Sie im Tool verifizieren möchten.',
  },
  {
    name: 'Algorithmus wählen',
    text: 'Wählen Sie SHA-256, MD5 oder SHA-1, je nachdem, welche Signatur Sie haben.',
  },
  {
    name: 'Ergebnisse vergleichen',
    text: 'Fügen Sie den erwarteten Hash ein und das System teilt Ihnen sofort mit, ob sie übereinstimmen (Erfolg) oder ob sie unterschiedlich sind (Fehler).',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<HashVerifierUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Quellen und Referenzen',
  bibliography: [
    {
      name: 'NIST: Hash-Funktions-Standard',
      url: 'https://csrc.nist.gov/projects/hash-functions',
    },
    {
      name: 'MDN: Web Crypto API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API',
    },
    {
      name: 'Wikipedia: Kryptographische Hash-Funktion',
      url: 'https://de.wikipedia.org/wiki/Kryptographische_Hashfunktion',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Was ist ein Datei-Hash und warum ist er entscheidend für Ihre Sicherheit?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein Hash ist ein für jede Datei eindeutiger <strong>digitaler Fingerabdruck</strong>. Es handelt sich um eine alphanumerische Zeichenfolge, die durch einen mathematischen Algorithmus (wie SHA-256) generiert wird. Sein Hauptmerkmal ist, dass er eine „Einbahnstraße“ ist: Sie können den Hash aus einer Datei erhalten, aber Sie können die Datei nicht aus ihrem Hash rekonstruieren.',
    },
    {
      type: 'paragraph',
      html: 'Die Verwendung eines <strong>Online-Hash-Verifizierers</strong> ist beim Herunterladen von Software, ISO-Images oder sensiblen Dokumenten unerlässlich. Autoren veröffentlichen normalerweise das MD5 oder SHA256 ihrer Dateien, damit Sie überprüfen können, ob das, was Sie heruntergeladen haben, genau das ist, was sie hochgeladen haben, ohne Beschädigung oder bösartige Injektionen.',
    },
    {
      type: 'title',
      text: 'SHA-256 vs. MD5: Welchen sollten Sie verwenden?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der <strong>MD5</strong>-Algorithmus war jahrelang aufgrund seiner Geschwindigkeit sehr beliebt, gilt aber heute als kryptografisch unsicher, da er anfällig für „Kollisionen“ ist. Dennoch wird er immer noch für einfache Integritätsprüfungen (beschädigte Downloads) verwendet.',
    },
    {
      type: 'paragraph',
      html: 'Wenn Sie maximale Sicherheit suchen, ist <strong>SHA-256</strong> (Teil der SHA-2-Familie) der Standard, der von Sicherheitsbehörden weltweit empfohlen wird. Es ist praktisch ausgeschlossen, dass zwei verschiedene Dateien denselben SHA-256-Hash erzeugen.',
    },
    {
      type: 'title',
      text: 'Vollständiger Datenschutz: Berechnung zu 100 % in Ihrem Browser',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Kein Upload erforderlich',
      html: '<p>Unser Tool nutzt die Leistung Ihres Computers, um die Datei zu verarbeiten. Durch die Verwendung der <strong>Web Crypto API</strong> müssen wir die Datei auf keinen Server „hochladen“. Das bedeutet, dass Sie Dateien von mehreren Gigabyte in Sekunden verifizieren können, ohne Ihre Internetbandbreite zu verbrauchen und sicherzustellen, dass der Inhalt Ihrer Dateien niemals Ihr Gerät verlässt.</p>',
    },
  ],
  ui: {
    labelFile: 'Datei auswählen oder ziehen',
    labelAlgorithm: 'Algorithmus wählen',
    labelExpectedHash: 'Erwarteter Hash (optional)',
    labelStatus: 'Vergleichsstatus',
    placeholderHash: 'Fügen Sie hier den vom Autor bereitgestellten Hash ein...',
    btnCompare: 'Integrität verifizieren',
    btnClear: 'Alles leeren',
    toastCopied: 'Berechneter Hash kopiert!',
    statusMatch: 'Die Hashes stimmen überein! Die Datei ist authentisch.',
    statusMismatch: 'Die Hashes stimmen NICHT überein. Die Datei könnte beschädigt oder verändert worden sein.',
    statusWaiting: 'Warten auf den erwarteten Hash zum Vergleich...',
  },
};
