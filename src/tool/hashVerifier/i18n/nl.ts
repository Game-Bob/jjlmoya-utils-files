import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashVerifierUI } from '../ui';

const slug = 'bestands-hash-verifieren';
const title = 'Online Hash Verifier — SHA 256, MD5 en SHA 1';
const description =
  'Bereken en verifieer de integriteit van uw bestanden door hun SHA256, MD5 of SHA1 digitale handtekening te vergelijken. Zorg ervoor dat uw downloads niet gewijzigd zijn.';

const faqData = [
  {
    question: 'Hoe kun je controleren of een bestand is gewijzigd?',
    answer:
      'De veiligste manier is om de Hash te vergelijken. Een Hash is een unieke digitale vingerafdruk. Als zelfs maar één bit van het bestand verandert, zal de Hash volledig anders zijn. Door de verkregen Hash te vergelijken met die van de auteur, kunt u de integriteit garanderen.',
  },
  {
    question: 'Welk algoritme is beter: MD5 of SHA-256?',
    answer:
      'MD5 is erg snel, maar wordt als minder veilig beschouwd tegen opzettelijke aanvallen. SHA-256 is de huidige standaard voor beveiliging en is veel moeilijker te "vervalsen". Voor de meeste bestandsintegriteitscontroles is SHA-256 de aanbevolen optie.',
  },
  {
    question: 'Waarom verandert de Hash als ik de naam van het bestand wijzig?',
    answer:
      'In feite verandert het wijzigen van de naam van een bestand de Hash-waarde NIET. De Hash wordt berekend op basis van de interne inhoud (de bytes) van het bestand, niet op de naam of aanmaakdatum. Als de Hash verandert, komt dat doordat de interne gegevens zijn gewijzigd.',
  },
  {
    question: 'Wordt mijn bestand naar de server geüpload om de Hash te berekenen?',
    answer:
      'Nee. Onze tool maakt gebruik van de Web Crypto API, wat betekent dat alle berekeningen lokaal in uw browser worden uitgevoerd. Uw bestand verlaat uw computer nooit, wat 100% privacy garandeert en veel sneller is omdat er geen upload nodig is.',
  },
];

const howToData = [
  {
    name: 'Selecteer uw bestand',
    text: 'Sleep of selecteer het bestand dat u wilt verifiëren in de tool.',
  },
  {
    name: 'Kies het algoritme',
    text: 'Selecteer SHA-256, MD5 of SHA-1, afhankelijk van de handtekening die u heeft.',
  },
  {
    name: 'Vergelijk de resultaten',
    text: 'Plak de verwachte Hash en het systeem vertelt u direct of ze overeenkomen (Succes) of dat ze verschillend zijn (Fout).',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<HashVerifierUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Bronnen en Referenties',
  bibliography: [
    {
      name: 'NIST: Hash-functies standaard',
      url: 'https://csrc.nist.gov/projects/hash-functions',
    },
    {
      name: 'MDN: Web Crypto API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API',
    },
    {
      name: 'Wikipedia: Cryptografische hash-functie',
      url: 'https://nl.wikipedia.org/wiki/Cryptografische_hashfunctie',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Wat is een bestands-Hash en waarom is het essentieel voor uw veiligheid?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een Hash is een voor elk bestand unieke <strong>digitale vingerafdruk</strong>. Het is een alfanumerieke reeks gegenereerd door een wiskundig algoritme (zoals SHA-256). Het belangrijkste kenmerk is dat het "één-weg" is: u kunt de Hash van een bestand verkrijgen, maar u kunt het bestand niet reconstrueren vanuit de Hash.',
    },
    {
      type: 'paragraph',
      html: 'Het gebruik van een <strong>online hash verifier</strong> is essentieel bij het downloaden van software, ISO-images of gevoelige documenten. Auteurs publiceren gewoonlijk de MD5 of SHA256 van hun bestanden, zodat u kunt verifiëren of wat u heeft gedownload precies is wat zij hebben geüpload, zonder corruptie of kwaadaardige injecties.',
    },
    {
      type: 'title',
      text: 'SHA-256 vs MD5: Welke moet u gebruiken?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het <strong>MD5</strong>-algoritme was jarenlang erg populair vanwege de snelheid, maar tegenwoordig wordt het als cryptografisch onveilig beschouwd omdat het vatbaar is voor "collisies". Het wordt echter nog steeds gebruikt voor eenvoudige integriteitscontroles (corrupte downloads).',
    },
    {
      type: 'paragraph',
      html: 'Als u op zoek bent naar maximale veiligheid, is <strong>SHA-256</strong> (onderdeel van de SHA-2-familie) de standaard die wordt aanbevolen door beveiligingsinstanties over de hele wereld. Het is vrijwel onmogelijk dat twee verschillende bestanden dezelfde SHA-256 Hash produceren.',
    },
    {
      type: 'title',
      text: 'Totale Privacy: Berekening 100% in uw browser',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Geen upload nodig',
      html: '<p>Onze tool maakt gebruik van de kracht van uw computer om het bestand te verwerken. Door gebruik te maken van de <strong>Web Crypto API</strong>, hoeven we het bestand niet naar een server te "uploaden". Dit betekent dat u bestanden van meerdere gigabytes in seconden kunt verifiëren, zonder uw internetbandbreedte te verbruiken en ervoor te zorgen dat de inhoud van uw bestanden uw apparaat nooit verlaat.</p>',
    },
  ],
  ui: {
    labelFile: 'Selecteer of sleep bestand',
    labelAlgorithm: 'Selecteer Algoritme',
    labelExpectedHash: 'Verwachte Hash (optioneel)',
    labelStatus: 'Vergelijkingsstatus',
    placeholderHash: 'Plak hier de door de auteur verstrekte hash...',
    btnCompare: 'Verifieer Integriteit',
    btnClear: 'Alles Wissen',
    toastCopied: 'Berekende hash gekopieerd!',
    statusMatch: 'De hashes komen overeen! Het bestand is authentiek.',
    statusMismatch: 'De hashes komen NIET overeen. Het bestand is mogelijk corrupt of gewijzigd.',
    statusWaiting: 'Wachten op verwachte hash om te vergelijken...',
  },
};
