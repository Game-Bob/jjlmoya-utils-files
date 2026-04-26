import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FormatStripperUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tekst-opmaak-verwijderen';
const title = 'Tekst Opmaak Verwijderen Online Gratis - Stijlverwijderaar';
const description =
  'Verwijder vetgedrukt, cursief, links en kleuren uit elke tekst. Convert HTML of Word direct naar platte tekst (txt) met onze professionele stijlverwijderaar.';

const faqData = [
  {
    question: 'Hoe verwijder je vetgedrukt en cursief uit een tekst?',
    answer:
      'Plak uw tekst gewoon in onze tool. Het systeem detecteert automatisch stijlen en verwijdert ze, waardoor alleen de tekens in platte tekst overblijven, zonder toegevoegde dikte of versiering.'
  },
  {
    question: 'Is het compatibel met tekst uit Microsoft Word of Google Docs?',
    answer:
      'Ja, het is er speciaal voor ontworpen. Bij het kopiëren uit Word of Docs wordt veel "rommelcode" meegenomen. Onze verwijderaar verwijdert al die verborgen stijlen, zodat u een schone tekst in andere toepassingen kunt plakken.'
  },
  {
    question: 'Kan ik HTML naar platte tekst converteren?',
    answer:
      'Precies. Als u een HTML-fragment plakt, verwijdert onze tool alle tags (zoals <div>, <a>, <strong>) and geeft alleen de leesbare tekstinhoud terug, klaar om overal te worden gebruikt.'
  },
  {
    question: 'Is het veilig om vertrouwelijke informatie te plakken?',
    answer:
      'Volkomen veilig. Alle verwerking wordt 100% in uw browser gedaan. Er worden geen gegevens naar onze servers verzonden, zodat uw tekst te allen tijde privé en veilig blijft.'
  },
];

const howToData = [
  {
    name: 'Kopieer uw tekst',
    text: 'Kopieer de tekst met opmaak uit Word, een website of een e-mail.'
  },
  {
    name: 'Plak in de verwijderaar',
    text: 'Plaak de inhoud in het invoerveld. Het verwijderen van stijlen gebeurt automatisch.'
  },
  {
    name: 'Kopieer het resultaat',
    text: 'Uw tekst is nu plat en schoon. Kopieer het en gebruik het overal waar u maar wilt zonder opmaakproblemen.'
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'nl'
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
      text: 'Wat betekent het om "opmaak te verwijderen" en waarom heeft u het nodig?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Opmaak verwijderen is het proces van <strong>het transformeren van rich text naar platte tekst</strong> (Plain Text). Wanneer we informatie kopiëren van een website, een eBook of een Word-document, draagt die tekst "verborgen bagage" met zich mee: lettertypen, groottes, kleuren, links en CSS-stijlen. Onze tool dient als een filter dat al die digitale rommel verwijdert.'
    },
    {
      type: 'title',
      text: 'Voordelen van het gebruik van een tekstreiniger',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Universele Compatibiliteit:</strong> Platte tekst werkt in elk programma, van oude e-mails tot moderne CMS zoals WordPress.',
        '<strong>Schone Code:</strong> Ideaal voor ontwikkelaars die tekst in hun code moeten plakken zonder HTML-tags of RTF-stijlen mee te nemen.',
        '<strong>SEO en Leesbaarheid:</strong> Door onregelmatige opmaak te verwijderen, zorgt u ervoor dat uw inhoud de visuele consistentie van uw website behoudt.',
        '<strong>Totale Privacy:</strong> Het proces is lokaal. Uw tekst verlaat nooit uw browser.',
      ]
    },
    {
      type: 'title',
      text: 'Opmaak verwijderen vs. Simpel Kopiëren en Plakken',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Vaak brengt een simpele <code>Ctrl + V</code> ongewenste formaten met zich mee die het ontwerp van uw doeldocument breken. Het gebruik van een online <strong>opmaakverwijderaar</strong> zorgt ervoor dat u alleen de essentie van de boodschap behoudt, zodat u uw eigen stijlen vanaf nul kunt toepassen zonder technische interferentie.'
    },
  ],
  ui: {
    labelInput: 'Brontekst (met opmaak)',
    labelOutput: 'Platte tekst (schoon)',
    placeholderInput: 'Plak hier de tekst uit Word, Web of PDF...',
    placeholderOutput: 'Schone tekst verschijnt hier...',
    btnCopy: 'Kopieer Resultaat',
    btnClear: 'Alles Wissen',
    toastCopied: 'Schone tekst gekopieerd!'
  }
};
