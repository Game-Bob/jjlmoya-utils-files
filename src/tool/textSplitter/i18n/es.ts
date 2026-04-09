import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextSplitterUI } from '../ui';

const slug = 'separador-de-texto';
const title = 'Separador de Texto Online | Convertidor de Listas a Líneas';
const description =
  'Divide listas separadas por comas, espacios o puntos en líneas individuales al instante. Herramienta gratuita para limpiar y organizar datos online.';

const faqData = [
  {
    question: '¿Cómo separar una lista por comas online?',
    answer:
      'Pega tu lista en el cuadro de texto, selecciona la opción "Coma (,)" como delimitador y obtendrás automáticamente un elemento por línea en el área de resultados.',
  },
  {
    question: '¿Qué es un convertidor de comas a saltos de línea?',
    answer:
      'Es una herramienta digital que transforma cadenas de texto separadas por signos de puntuación en listados verticales organizados, facilitando el procesamiento de datos en hojas de cálculo o bases de datos.',
  },
  {
    question: '¿Puedo separar texto por otros caracteres?',
    answer:
      'Sí, la utilidad permite utilizar punto y coma, espacios en blanco o cualquier otro carácter personalizado que definas manualmente.',
  },
  {
    question: '¿Es seguro procesar listados de correos electrónicos?',
    answer:
      'Totalmente. Al ser una herramienta client-side, todo el procesamiento ocurre localmente en tu navegador. Tus datos e información privada nunca son enviados a ningún servidor externo.',
  },
  {
    question: '¿La herramienta permite eliminar elementos duplicados?',
    answer:
      'Sí, cuenta con una opción específica para limpiar la lista final de cualquier elemento repetido, asegurando que cada línea sea única.',
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

export const content: ToolLocaleContent<TextSplitterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Fuentes y Referencias',
  bibliography: [
    {
      name: 'MDN: String.prototype.split()',
      url: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split',
    },
    {
      name: 'Guía de formatos CSV y delimitadores comunes',
      url: 'https://es.wikipedia.org/wiki/Valores_separados_por_comas',
    },
    {
      name: 'Gestión de listas y duplicados en JavaScript',
      url: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set',
    },
  ],
  howTo: [],
  schemas: [faqSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Separador de Texto: Cómo Dividir Listas y Comas en Líneas de Forma Rápida',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '¿Alguna vez te has encontrado con una lista interminable de correos electrónicos, nombres o códigos de productos separados por comas y has necesitado poner cada uno en una línea diferente? El trabajo manual de pulsar "Enter" cientos de veces es tedioso, propenso a errores y, sinceramente, una pérdida de tiempo. Nuestra herramienta de <strong>separador de texto online</strong> ha sido diseñada precisamente para resolver este problema en cuestión de milisegundos.',
    },
    {
      type: 'title',
      text: '¿Por qué utilizar un separador de listas online?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En el mundo del marketing digital, la programación y la gestión de datos, es común recibir información en formatos "sucios". Puede que exportes una lista de una base de datos y obtengas algo como <code>item1, item2, item3</code>. Para importar eso en una hoja de cálculo como Excel o Google Sheets, o para procesarlo en un script, a menudo necesitas que cada elemento ocupe su propia fila.',
    },
    {
      type: 'paragraph',
      html: 'Al usar un <strong>convertidor de comas a saltos de línea</strong>, eliminas la carga de trabajo manual. No importa si tienes 10 o 10.000 elementos; la lógica client-side procesa la información localmente en tu navegador, garantizando que tus datos nunca salgan de tu ordenador, ofreciendo máxima privacidad y velocidad instantánea.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Separar por comas (CSV)',
          html: '<p>Es el caso de uso más común. Ideal para listas de contactos, etiquetas ID de WordPress o parámetros de configuración que vienen agrupados en una sola cadena de texto.</p>',
        },
        {
          type: 'card',
          title: 'Separar por punto y coma',
          html: '<p>Muy habitual en exportaciones de Outlook o bases de datos antiguas. Nuestra utilidad detecta el separador y divide el bloque de texto instantáneamente.</p>',
        },
        {
          type: 'card',
          title: 'Delimitadores personalizados',
          html: '<p>Si tus datos están separados por un carácter especial o incluso una palabra específica, puedes usar la opción de "Personalizado" para partir el texto exactamente donde necesites.</p>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Beneficios de automatizar la limpieza de texto',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'No se trata solo de <strong>pasar de comas a líneas</strong>. Nuestra herramienta incluye funciones avanzadas que la convierten en una navaja suiza para la productividad:',
    },
    {
      type: 'list',
      items: [
        '<strong>Eliminación de duplicados:</strong> Si tu lista original tiene elementos repetidos, puedes marcarlos para que solo aparezcan una vez en el resultado final. Ideal para limpiar bases de datos de emails.',
        '<strong>Recorte de espacios (Trim):</strong> Elimina automáticamente los espacios en blanco que suelen quedar antes o después del delimitador, dejando un resultado limpio y profesional.',
        '<strong>Numeración automática:</strong> Transforma una lista simple en una lista numerada lista para copiar en un documento de Word o un correo electrónico.',
        '<strong>Filtrado de líneas vacías:</strong> Evita esos molestos huecos en blanco que aparecen cuando hay delimiters consecutivos (ej: <code>item1,,item2</code>).',
      ],
    },
    {
      type: 'title',
      text: 'Casos de uso comunes para el separador de texto',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Muchos profesionales utilizan nuestra utilidad a diario. Aquí tienes algunos ejemplos prácticos de cómo puede ayudarte:',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Marketing y SEO',
          html: '<p>Cuando trabajas con herramientas como Ahrefs o SEMrush, a menudo exportas listas de palabras clave separadas por comas. Para analizarlas individualmente o pasarlas a un planificador de contenidos, necesitas <strong>separar el texto por líneas</strong>. Nuestra herramienta lo hace en un clic.</p>',
        },
        {
          type: 'card',
          title: 'Programación y Desarrollo Web',
          html: '<p>Los desarrolladores solemos trabajar con arrays o configuraciones JSON. Si tienes una lista de constantes o variables en una sola línea y quieres formatearlas para que el código sea legible (cumpliendo con las normas de linting), esta utilidad te ahorra minutos de formateo manual.</p>',
        },
        {
          type: 'card',
          title: 'Gestión de Inventarios',
          html: '<p>Si recibes códigos de barras o SKUs en un formato plano desde una pistola de escaneo, puedes usar el <strong>separador de texto por espacio</strong> o tabulación para organizar el inventario en una columna vertical fácil de auditar.</p>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Privacidad y Seguridad: Tus datos están a salvo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A diferencia de otras webs que envían el texto a un servidor para procesarlo, nuestra arquitectura es 100% <strong>client-side</strong>. Esto significa que el procesamiento ocurre dentro de tu memoria RAM. Nada se guarda en bases de datos externas, lo que hace que sea la herramienta ideal para manejar información sensible como correos de clientes o listados confidenciales.',
    },
    {
      type: 'title',
      text: 'Preguntas Frecuentes sobre la separación de texto',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '¿Es gratis? Sí, totalmente gratis y sin anuncios intrusivos. ¿Hay un límite de palabras? El límite lo pone la memoria de tu navegador, pero hemos probado con listas de más de 50.000 filas sin problemas de rendimiento. ¿Funciona en móviles? Absolutamente, la interfaz es responsiva y puedes copiar el resultado al portapapeles de tu smartphone con un solo toque.',
    },
    {
      type: 'tip',
      title: 'Nota final',
      html: '<p>Si buscas un <strong>separador de texto gratuito</strong>, rápido y seguro, has llegado al lugar indicado. Optimiza tu flujo de trabajo y deja que el navegador haga el trabajo sucio por ti.</p>',
    },
  ],
  ui: {
    labelInput: 'Texto a Separar',
    labelOutput: 'Resultado (un elemento por línea)',
    placeholderInput: 'Pega aquí tu lista separada por comas, espacios o cualquier delimitador...',
    placeholderOutput: 'El listado aparecerá aquí...',
    labelDelimiter: 'Delimitador',
    optComma: 'Coma (,)',
    optSemicolon: 'Punto y coma (;)',
    optSpace: 'Espacio',
    optCustom: 'Personalizado',
    labelCustom: 'Delimitador personalizado',
    placeholderCustom: 'Introduce el delimitador...',
    optTrim: 'Recortar espacios',
    optUnique: 'Eliminar duplicados',
    optClean: 'Quitar vacíos',
    optNumbered: 'Numerar líneas',
    statLines: 'Líneas resultantes',
    statChars: 'Caracteres',
    btnCopy: 'Copiar Lista',
    btnClear: 'Limpiar',
    toastCopied: '¡Copiado al portapapeles!',
  },
};
