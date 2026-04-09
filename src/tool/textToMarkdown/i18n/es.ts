import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextToMarkdownUI } from '../ui';

const slug = 'texto-a-markdown';
const title = 'Convertidor de Texto Enriquecido a Markdown Online';
const description =
  'Limpia el código de Word, Google Docs o sitios Web y conviértelo instantáneamente a Markdown puro sin basura técnica.';

const faqData = [
  {
    question: '¿Se pierden las imágenes al convertir?',
    answer:
      'Markdown referencia imágenes mediante una ruta. El convertidor detecta la estructura, pero las imágenes deben subirse a un servidor para que funcionen.',
  },
  {
    question: '¿Es seguro pegar mis datos privados?',
    answer:
      'Sí. Todo el proceso ocurre en tu propio navegador mediante JavaScript local. Tus textos nunca viajan a ningún servidor externo.',
  },
  {
    question: '¿Puedo usar el resultado en GitHub?',
    answer:
      'Absolutamente. El formato generado sigue el estándar CommonMark, compatible con GitHub, GitLab y la mayoría de plataformas.',
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
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<TextToMarkdownUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias',
  bibliography: [
    {
      name: 'Markdown Guide - Getting Started',
      url: 'https://www.markdownguide.org/getting-started/',
    },
    {
      name: 'CommonMark Spec',
      url: 'https://commonmark.org/help/',
    },
  ],
  howTo: [],
  schemas: [faqSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '¿Por qué convertir Texto Enriquecido a Markdown es esencial hoy en día?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Markdown se ha convertido en el lenguaje de marcado preferido por desarrolladores, escritores técnicos y creadores de contenido en todo el mundo. A diferencia del contenido que copias directamente de Microsoft Word o Google Docs, que arrastra cientos de líneas de código basura y estilos ocultos, el Markdown es texto plano, ligero y universal. Nuestra herramienta de <strong>Convertidor de Texto Enriquecido a Markdown</strong> extrae la esencia de tu mensaje y lo formatea instantáneamente para que sea compatible con GitHub, Obsidian, Notion y la mayoría de los sistemas de gestión de contenidos (CMS) modernos.',
    },
    {
      type: 'paragraph',
      html: 'El gran problema del "Copiar y Pegar" tradicional es la contaminación del código web. Cuando pegas un fragmento de Word en un editor HTML, estás inyectando clases de CSS obsoletas y etiquetas XML que hinchan tu página y confunden a los motores de búsqueda. Al utilizar esta herramienta, limpias toda esa paja técnica y dejas un código semántico perfecto, lo que mejora drásticamente el SEO de tu blog o sitio web al reducir el tiempo de carga y mejorar la jerarquía del contenido.',
    },
    {
      type: 'card',
      title: 'El fin del código basura',
      html: '<p>Un documento de Word de 500 palabras puede contener hasta 50KB de estilos ocultos innecesarios. Al pasarlo a Markdown, el peso real es de apenas 2KB. Multiplica esto por cientos de artículos y verás por qué la velocidad de tu web agradecerá este pequeño paso.</p>',
    },
    {
      type: 'title',
      text: 'Ventajas de usar Markdown frente a Word o HTML',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si aún te preguntas por qué deberías adoptar el flujo de trabajo basado en Markdown, aquí tienes las razones técnicas y estratégicas de mayor peso:',
    },
    {
      type: 'list',
      items: [
        '<strong>Legibilidad Humana:</strong> El Markdown se lee perfectamente incluso sin ser procesado. Ves un <code>#</code> y sabes que es un título; ves <code>**</code> y sabes que es negrita.',
        '<strong>Control de Versiones:</strong> Al ser texto plano, es ideal para usar con Git. Puedes ver exactamente qué palabra cambió en un archivo de 20 páginas sin interfaces complejas.',
        '<strong>Portabilidad Extrema:</strong> Tu contenido no depende de una aplicación propietaria. Hoy usas Obsidian, mañana Notion y pasado mañana publicas directamente en un blog estático con Astro o Jekyll.',
        '<strong>Enfoque en la Escritura:</strong> Te ayuda a centrarte en la estructura y el mensaje en lugar de perder tiempo ajustando fuentes, márgenes o colores mientras redactas.',
      ],
    },
    {
      type: 'title',
      text: 'Cómo pasar de Word a Markdown sin morir en el intento',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Muchos usuarios se sienten intimidados por la sintaxis de Markdown, pero con nuestro convertidor interactivo, el proceso es transparente. Solo tienes que seleccionar tu texto en tu procesador habitual (con sus negritas, listas y encabezados), pegarlo en el panel izquierdo de nuestra utilidad, y verás cómo en el panel derecho aparece la versión limpia lista para usar.',
    },
    {
      type: 'paragraph',
      html: 'Nuestra herramienta maneja automáticamente:',
    },
    {
      type: 'list',
      items: [
        'Conversión de encabezados (H1, H2, H3).',
        'Detección de listas con viñetas y numeradas.',
        'Transformación de enlaces con sus respectivos títulos y URLs.',
        'Estilización de negritas y cursivas.',
        'Limpieza de saltos de línea redundantes.',
      ],
    },
    {
      type: 'title',
      text: 'Markdown y el Futuro del SEO de Contenidos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Google y otros buscadores valoran la semántica. Un documento bien estructurado con etiquetas <code>h1</code>, <code>h2</code> y <code>p</code> adecuadas es mucho más fácil de indexar que una maraña de estilos inyectados. Al usar Markdown, obligas a tu contenido a seguir una jerarquía lógica, lo cual es la base de un buen SEO On-Page.',
    },
    {
      type: 'paragraph',
      html: 'Además, la tendencia de la "Web Estática" (JAMstack) se apoya fuertemente en archivos Markdown. Si quieres una web que cargue en milisegundos y obtenga una puntuación perfecta en Core Web Vitals, el primer paso es que tus contenidos estén en un formato que el navegador pueda digerir rápidamente sin procesos de renderizado pesados en el servidor. Nuestra herramienta gratuita te facilita este puente, eliminando la barrera técnica y permitiéndote disfrutar de las ventajas de la web moderna desde el primer segundo.',
    },
  ],
  ui: {
    labelInput: 'Entrada HTML',
    labelOutput: 'Salida Markdown',
    placeholderInput: 'Pega HTML aquí, o pega texto copiado de cualquier web...',
    placeholderOutput: 'El Markdown aparecerá aquí...',
    btnClear: 'Limpiar',
    btnCopy: 'Copiar Markdown',
    toastCopied: '¡Copiado!',
    labelHint: '* Al pegar texto de una web (Ctrl+V), el HTML se extrae automáticamente del portapapeles.',
  },
};
