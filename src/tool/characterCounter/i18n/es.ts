import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CharacterCounterUI } from '../ui';

const slug = 'contador-caracteres';
const title = 'Contador de Caracteres y Palabras Online | Contador de Letras';
const description =
  'Contador de caracteres, palabras, frases y párrafos online. Calcula tiempos de lectura y voz. Herramienta gratuita perfecta para SEO y redes sociales.';

const faqData = [
  {
    question: '¿Por qué es importante contar caracteres en SEO?',
    answer:
      'Los motores de búsqueda tienen límites recomendados para títulos (60 caracteres) y meta descripciones (155-160 caracteres). Superar estos límites puede hacer que tu contenido se corte en los resultados de búsqueda.',
  },
  {
    question: '¿Incluye espacios el contador de caracteres?',
    answer:
      'Sí, por defecto contamos todos los pulsos, incluidos espacios. Sin embargo, nuestra herramienta desglosa el conteo con y sin espacios para mayor precisión según tus necesidades.',
  },
  {
    question: '¿Cómo se calcula el tiempo de lectura?',
    answer:
      'El tiempo de lectura se basa en una velocidad media de 200 a 250 palabras por minuto. El tiempo de voz se calcula sobre unas 130-150 palabras por minuto, ideal para guiones y presentaciones.',
  },
  {
    question: '¿Es seguro analizar textos largos aquí?',
    answer:
      'Totalmente. El análisis se realiza localmente en tu navegador. Puedes procesar artículos enteros o documentos extensos sin que el texto se envíe a nuestros servidores.',
  },
];

const howToData = [
  {
    name: 'Introducir el texto',
    text: 'Escribe directamente o pega el texto que quieras analizar en el área principal.',
  },
  {
    name: 'Revisar estadísticas',
    text: 'Observa el conteo de palabras, caracteres, frases y párrafos que se actualizan en tiempo real.',
  },
  {
    name: 'Analizar tiempos',
    text: 'Consulta los indicadores de tiempo estimado de lectura y tiempo de locución para tu contenido.',
  },
  {
    name: 'Optimizar longitud',
    text: 'Ajusta tu texto según los límites recomendados para redes sociales o SEO (títulos, descripciones).',
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
  inLanguage: 'es',
};

export const content: ToolLocaleContent<CharacterCounterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: '',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'La importancia de la precisión en el texto digital',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En el mundo digital, la "economía de las palabras" es fundamental. Ya no escribimos solo para ser leídos por humanos, sino para ser procesados por algoritmos. Google corta tus títulos a los 60 caracteres. Twitter (ahora X) te limita a 280. Un email de ventas efectivo debe leerse en menos de 30 segundos.',
    },
    {
      type: 'paragraph',
      html: 'Esta <strong>herramienta de conteo de caracteres y palabras</strong> está diseñada no solo para darte un número, sino para ayudarte a optimizar tu comunicación. Al calcular métricas como el <em>tiempo de lectura</em> o la <em>densidad de palabras</em>, pasas de "escribir texto" a "diseñar contenido".',
    },
    {
      type: 'title',
      text: 'Optimización SEO',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Los límites de los motores de búsqueda son estrictos. Si te pasas, tu mensaje se corta con puntos suspensivos (...) y tu CTR (Click Through Rate) cae bruscamente.',
    },
    {
      type: 'table',
      headers: ['Elemento', 'Límite recomendado'],
      rows: [
        ['Meta Title', '50 - 60 caracteres'],
        ['Meta Description', '150 - 160 caracteres'],
        ['Google Ads (Títulos)', '30 caracteres'],
      ],
    },
    {
      type: 'title',
      text: 'Redes Sociales',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cada plataforma tiene su propio lenguaje y longitud ideal. Aunque el límite sea mayor, el "punto dulce" de engagement suele ser menor.',
    },
    {
      type: 'table',
      headers: ['Plataforma', 'Límite'],
      rows: [
        ['Twitter (X)', '280 car. (Punto dulce: 70-100)'],
        ['Instagram Bio', '150 caracteres'],
        ['LinkedIn Post', '3000 car. (Ideal: ~1200)'],
      ],
    },
    {
      type: 'title',
      text: 'Preguntas Frecuentes sobre el Conteo',
      level: 2,
    },
    {
      type: 'title',
      text: '¿Cuentan los espacios como caracteres?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sí, y es un error común olvidarlos. Para un ordenador, un espacio es un byte de información igual que una letra "A". En plataformas como Twitter o bases de datos SMS, los espacios consumen tu límite. Nuestra herramienta te da ambos datos: "con espacios" y "sin espacios" (útil para traductores o maquetadores).',
    },
    {
      type: 'title',
      text: '¿Cómo se calcula el Tiempo de Lectura?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Utilizamos el estándar medio de lectura para adultos: <strong>200-250 palabras por minuto</strong> (silent reading). Para el tiempo de voz (locución), calculamos unas <strong>130-150 palabras por minuto</strong>, que es el ritmo de conversación natural o de un narrador de audiolibros pausado.',
    },
    {
      type: 'title',
      text: 'Privacidad: ¿Dónde va mi texto?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A ninguna parte. Todo el procesamiento se realiza en tu navegador mediante <strong>JavaScript en el lado del cliente</strong>. Puedes desconectar internet y la herramienta seguirá funcionando. Ningún dato se envía a nuestros servidores.',
    },
  ],
  ui: {
    labelChars: 'Caracteres',
    labelWords: 'Palabras',
    labelLines: 'Líneas',
    labelParagraphs: 'Párrafos',
    labelNoSpaces: 'Sin espacios',
    labelBytes: 'Bytes',
    labelReading: 'Lectura',
    labelSpeaking: 'Locución',
    labelUpload: 'Subir archivo',
    btnCopyTitle: 'Copiar texto',
    btnClearTitle: 'Limpiar',
    placeholder: 'Escribe o pega tu texto aquí...',
    unitSec: 's',
    unitMin: 'min',
    numberLocale: 'es-ES',
  },
};
