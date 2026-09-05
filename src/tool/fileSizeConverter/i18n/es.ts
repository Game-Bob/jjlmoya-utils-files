import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FileSizeConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'convertidor-tamano-archivo';
const title = 'Convertidor y Visualizador de Tamaño de Archivos: Binario y Decimal';
const description =
  'Convierte unidades de tamaño de archivos al instante. Calcula cuánto tardan las descargas y visualiza el uso de almacenamiento. Procesamiento 100% local.';

const faqData = [
  {
    question: '¿Cuál es la diferencia entre el sistema decimal (KB) y el binario (KiB)?',
    answer:
      'El sistema decimal utiliza potencias de 1000 (KB, MB, GB), mientras que el binario usa potencias de 1024 (KiB, MiB, GiB). Por eso un disco de "1GB" parece más pequeño en tu ordenador: los fabricantes usan decimal, pero los sistemas operativos suelen usar binario.',
  },
  {
    question: '¿Están seguros mis datos al usar esta herramienta?',
    answer:
      'Totalmente. Todos los cálculos se realizan íntegramente en tu navegador mediante JavaScript. No se envía ningún dato a nuestros servidores. Tus archivos y valores nunca salen de tu equipo.',
  },
  {
    question: '¿Puedo subir archivos para ver su tamaño?',
    answer:
      '¡Sí! Puedes arrastrar y soltar un archivo directamente en el área de entrada, y la herramienta leerá su tamaño automáticamente. El archivo nunca se sube; solo se utiliza su tamaño de forma local.',
  },
  {
    question: '¿Por qué mi disco externo de 1TB muestra menos espacio en mi PC?',
    answer:
      'Los discos externos se comercializan usando el sistema decimal (1TB = 1.000.000.000.000 bytes), pero el sistema operativo los muestra en binario (1TiB = 1.099.511.627.776 bytes). Esta herramienta te ayuda a entender ambas perspectivas.',
  },
  {
    question: '¿Qué tan exacto es el cálculo del tiempo de descarga?',
    answer:
      'El cálculo se basa en velocidades de red ideales. Las velocidades reales varían según la congestión de la red, la distancia y el hardware. Úsalos como estimaciones aproximadas, no como garantías.',
  },
];

const howToData = [
  {
    name: 'Introduce un tamaño de archivo',
    text: 'Escribe un número en el campo de entrada (ej. "500" o "1.5") y selecciona la unidad (KB, MB, GB, etc.).',
  },
  {
    name: 'Elige tu estándar',
    text: 'Cambia entre Decimal (estándar comercial) y Binario (estándar informático) para ver cómo cambia el valor.',
  },
  {
    name: 'Mira las conversiones al instante',
    text: 'Todas las unidades, desde Bytes hasta Petabytes, aparecen al momento. Haz clic en cualquier bloque para copiar su valor al portapapeles.',
  },
  {
    name: 'Visualiza el contexto',
    text: 'Debajo de las conversiones, comprueba cuánto tardarían las descargas en diferentes redes y cuánto espacio ocuparía el archivo en distintos dispositivos.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<FileSizeConverterUI> = {
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
      text: '¿Por qué convertir tamaños de archivo? Decimal vs. Binario',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cuando compras un disco de <strong>"1TB"</strong>, los fabricantes lo miden en decimal (1.000 GB). Pero tu sistema operativo lo muestra en binario (1.024 GiB = ~931 GB). Esta diferencia suele confundir a los usuarios. Un <strong>convertidor de tamaño de archivos</strong> cierra esa brecha, mostrándote exactamente qué significan tus archivos en cualquier unidad.',
    },
    {
      type: 'title',
      text: 'Contexto real: Descargas y almacenamiento',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Saber que un archivo ocupa "50MB" no sirve de mucho sin contexto. ¿Cuánto tarda en descargarse con 4G? ¿Cuánto espacio ocupa en un iPhone? Nuestra herramienta responde a esto al instante con cálculos en tiempo real para redes y dispositivos reales.',
    },
    {
      type: 'title',
      text: 'El coste oculto: La matemática del almacenamiento',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Un disco externo de "1 TB" tiene en realidad <strong>~931 GiB</strong> (el truco de los fabricantes)',
        'Una película 4K (~100GB) tarda <strong>4 segundos</strong> en fibra pero <strong>13 minutos</strong> en 4G',
        'Un iPhone de "256GB" almacena menos porque el sistema operativo ocupa espacio y el cálculo binario acentúa la diferencia',
      ],
    },
    {
      type: 'title',
      text: 'Precisión técnica en la que puedes confiar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Todas las conversiones siguen los <strong>estándares NIST</strong>: el sistema decimal (SI) usa base 1000, el binario (IEC) usa 1024. Los cálculos se realizan <strong>100% localmente</strong>: sin subidas, sin servidores, con total privacidad.',
    },
  ],
  ui: {
    inputPlaceholder: 'Introduce un número (ej. 1.5 o 500)',
    selectUnit: 'Unidad',
    standardLabel: 'Estándar:',
    decimalOption: 'Decimal',
    binaryOption: 'Binario',
    conversionTitle: 'Conversiones',
    networkSpeedsTitle: 'Tiempos de Descarga',
    deviceStorageTitle: 'Impacto en Almacenamiento',
    copyFeedback: '¡Copiado!',
    dragDropText: 'Suelta un archivo aquí para leer su tamaño',
  },
};
