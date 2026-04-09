import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FormatStripperUI } from '../ui';

const slug = 'format-stripper';
const title = 'Limpiador de Formato y Texto Online: Eliminar Basura';
const description =
  'Limpiador de texto online para normalizar cualquier contenido copiado. Elimina formato basura, espacios dobles y convierte a formatos específicos.';

const faqData = [
  {
    question: '¿Qué tipos de formato elimina esta herramienta?',
    answer:
      'Elimina estilos CSS (negritas, colores, fuentes), enlaces, tablas complejas y metadatos ocultos. El resultado es texto plano puro, listo para ser pegado sin "basura" visual en cualquier documento o editor.',
  },
  {
    question: '¿Puedo normalizar los espacios en blanco?',
    answer:
      'Sí. La herramienta permite eliminar espacios dobles, tabuladores y normalizar los saltos de línea para que el texto sea homogéneo y profesional.',
  },
  {
    question: '¿El texto se envía a algún sitio?',
    answer:
      'No. Al igual que el resto de nuestras utilidades, el procesamiento de texto ocurre localmente en tu navegador. Tu contenido nunca sale de tu equipo.',
  },
  {
    question: '¿Para qué sirve convertir a mayúsculas o minúsculas?',
    answer:
      'Es útil para normalizar títulos, transformar listas de nombres o corregir textos que han sido escritos accidentalmente con el bloqueo de mayúsculas activado.',
  },
];

const howToData = [
  {
    name: 'Pegar el texto',
    text: 'Pega el contenido con formato que quieras limpiar en el área de texto principal.',
  },
  {
    name: 'Seleccionar limpieza',
    text: 'Elige si quieres eliminar solo el formato, normalizar espacios o cambiar el caso (mayúsculas/minúsculas).',
  },
  {
    name: 'Previsualizar resultado',
    text: 'Observa cómo el texto se limpia automáticamente en tiempo real.',
  },
  {
    name: 'Copiar texto limpio',
    text: 'Usa el botón de copiar para llevarte el texto sin formato a tu documento de destino.',
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

export const content: ToolLocaleContent<FormatStripperUI> = {
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
      text: 'Limpieza y Normalización de Texto',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Format Stripper es una utilidad diseñada para resolver los problemas comunes al copiar y pegar texto entre diferentes aplicaciones. Elimina el formato enriquecido no deseado y normaliza la estructura del texto para su uso inmediato.',
    },
    {
      type: 'paragraph',
      html: 'Esta herramienta procesa el texto en el navegador del cliente, garantizando que tus datos nunca salgan de tu dispositivo.',
    },
    {
      type: 'title',
      text: 'Problemas que Resuelve',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Saltos de línea en PDFs:</strong> Detecta y une líneas cortadas artificialmente por el formato de columna de los documentos PDF.',
        '<strong>Caracteres invisibles:</strong> Elimina espacios de ancho cero y otros caracteres de control que pueden causar errores de sintaxis en programación.',
        '<strong>Espaciado inconsistente:</strong> Normaliza espacios dobles y corrige el espaciado alrededor de los signos de puntuación.',
      ],
    },
    {
      type: 'title',
      text: 'Funcionalidades para Desarrolladores',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Limpieza de JSON:</strong> Útil para limpiar logs o respuestas de API que han sido formateadas incorrectamente al copiarse.',
      ],
    },
    {
      type: 'title',
      text: 'Escenarios de Uso',
      level: 2,
    },
    {
      type: 'card',
      title: 'Recuperación de Texto de PDFs',
      html: '<p>Al copiar texto de un PDF, a menudo se insertan saltos de línea al final de cada renglón visual. Nuestra herramienta analiza el contexto para determinar si un salto de línea es estructural (párrafo nuevo) o visual, uniéndolos correctamente.</p>',
    },
  ],
  ui: {
    labelChars: 'Caracteres',
    labelWords: 'Palabras',
    btnUppercase: 'MAYÚSCULAS',
    btnLowercase: 'minúsculas',
    btnCopy: 'Copiar',
    placeholder: 'Pega aquí el texto con formato que quieras limpiar...',
    toastCopied: '¡Copiado!',
    toastCleaned: 'Formato eliminado al pegar',
  },
};
