import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonToCsvUI } from '../ui';

const slug = 'conversor-json-a-excel-csv';
const title = 'Conversor de JSON a Excel y CSV Online - 100% Local y Seguro';
const description =
  'Transforma archivos JSON complejos en hojas de cálculo de Excel o CSV de forma instantánea. Con aplanamiento automático de objetos y total privacidad local.';

const faqData = [
  {
    question: '¿Es seguro subir mis datos JSON aquí?',
    answer:
      'Esta herramienta es 100% segura y local. El procesamiento de tu JSON ocurre exclusivamente en la memoria de tu navegador (Client-Side). Tus datos nunca se envían a ningún servidor ni se almacenan en la nube.',
  },
  {
    question: '¿Cómo maneja la herramienta los objetos anidados?',
    answer:
      "Utilizamos una técnica de 'Flattening' o aplanamiento recursivo. Si tienes un objeto dentro de otro, el conversor creará columnas con nombres compuestos (ej: 'usuario.id', 'usuario.nombre'), permitiendo que toda la jerarquía de datos sea legible en Excel.",
  },
  {
    question: '¿Hay un límite de tamaño para el archivo JSON?',
    answer:
      'El límite depende de la memoria RAM de tu dispositivo, pero en general, archivos de hasta 10MB se procesan de forma fluida. Para archivos gigantísticos, recomendamos fragmentar la información.',
  },
  {
    question: '¿Puedo importar un archivo desde mi ordenador?',
    answer:
      'Sí, la herramienta soporta la función de arrastrar y soltar (Drag and Drop). Simplemente arrastra tu archivo .json a la zona punteada y el contenido se cargará automáticamente.',
  },
  {
    question: '¿Cómo se manejan las fechas en la conversión?',
    answer:
      'La herramienta respeta el formato original del JSON. Si el JSON tiene fechas en formato ISO (2026-03-07), aparecerán así en el Excel. Excel suele reconocer estas cadenas automáticamente y permite formatearlas como fechas con un solo clic.',
  },
  {
    question: '¿El archivo descargado es compatible con Excel?',
    answer:
      "Sí. Generamos un archivo CSV optimizado con un 'Byte Order Mark' (BOM) de UTF-8. Esto garantiza que al abrirlo en Microsoft Excel, Google Sheets o Numbers, todos los caracteres especiales (ñ, tildes) se visualicen correctamente sin necesidad de importar manualmente.",
  },
  {
    question: '¿Por qué mi Excel muestra caracteres extraños?',
    answer:
      'Si usas otro conversor mediocre, podrías ver símbolos raros. Nosotros incluimos el BOM de UTF-8 en el archivo CSV para que Excel detecte la codificación correcta desde el primer doble clic.',
  },
  {
    question: '¿Puedo convertir un JSON con formato incorrecto?',
    answer:
      'La herramienta detecta automáticamente si el JSON es válido. Si hay errores de sintaxis (como comas sobrantes o falta de llaves), el indicador de estado se pondrá en rojo y no permitirá la exportación hasta que se corrija.',
  },
];

const howToData = [
  {
    name: 'Carga de Datos',
    text: 'Pega tu código JSON en el área de texto o arrastra un archivo .json directamente desde tu ordenador al área punteada.',
  },
  {
    name: 'Aplanamiento Automático',
    text: "Marca la opción 'Aplanar Objetos' si tu JSON tiene estructuras anidadas y quieres verlas como columnas individuales en la hoja de cálculo.",
  },
  {
    name: 'Validación Visual',
    text: 'Observa la tabla de previsualización que aparecerá debajo. Te mostrará las primeras filas para confirmar que la conversión es correcta.',
  },
  {
    name: 'Descarga Final',
    text: "Haz clic en 'Descargar Excel (CSV)' para obtener el archivo listo para usar o usa 'Copiar CSV' para pegarlo directamente en tu hoja de cálculo abierta.",
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

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
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

export const content: ToolLocaleContent<JsonToCsvUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Estándares de Intercambio de Datos',
  bibliography: [
    {
      name: 'ECMA-404: The JSON Data Interchange Format',
      url: 'https://ecma-international.org/wp-content/uploads/ECMA-404_2nd_edition_december_2017.pdf',
    },
    {
      name: 'RFC 4180: Common Format and MIME Type for CSV',
      url: 'https://datatracker.ietf.org/doc/html/rfc4180',
    },
    {
      name: 'W3C: CSV on the Web (Standardization for Tabular Data)',
      url: 'https://www.w3.org/TR/tabular-data-model/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guía: Conversión de JSON a Excel y CSV: Optimización de Datos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En el ecosistema digital moderno, el formato JSON (JavaScript Object Notation) se ha consolidado como el estándar de facto para el intercambio de datos entre servidores y aplicaciones web. Sin embargo, su estructura jerárquica y técnica a menudo presenta barreras para el análisis de negocios, la contabilidad o la gestión administrativa tradicional. Aquí es donde nuestro <strong>Conversor de JSON a Excel</strong> se convierte en una herramienta indispensable.',
    },
    {
      type: 'paragraph',
      html: 'Nuestra utilidad permite transformar archivos JSON crudos en hojas de cálculo estructuradas y legibles en cuestión de milisegundos. Ya sea que trabajes con APIs de comercio electrónico, bases de datos NoSQL como MongoDB o logs de aplicaciones, la capacidad de aplanar datos anidados y exportarlos a CSV o Excel facilita enormemente la toma de decisiones basada en datos.',
    },
    {
      type: 'title',
      text: 'Proceso: ¿Cómo funciona el aplanamiento de JSON?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uno de los mayores desafíos al pasar de JSON a una tabla es la multidimensionalidad. JSON permite objetos dentro de objetos y arrays de datos. Un conversor básico simplemente ignoraría estos campos o los mostraría como "[object Object]", lo cual es inútil para el usuario final.',
    },
    {
      type: 'tip',
      title: 'Aplanamiento recursivo',
      html: '<p>Nuestra herramienta utiliza un algoritmo de <strong>aplanamiento recursivo</strong> (Flattening). Esto significa que una estructura como "usuario.domicilio.calle" se convertirá automáticamente en una columna individual con ese nombre, preservando toda la información original sin importar cuán profundo esté el dato.</p>',
    },
    {
      type: 'title',
      text: 'Ventajas: Beneficios de usar nuestro conversor online',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Gratis e Instantáneo',
          html: '<p>Sin registros ni descargas de software pesado. Todo el procesamiento ocurre en tu navegador, garantizando privacidad total ya que tus datos nunca abandonan tu equipo.</p>',
        },
        {
          type: 'card',
          title: 'Compatibilidad Excel',
          html: '<p>Generamos archivos CSV con BOM (Byte Order Mark), asegurando que Excel reconozca correctamente los caracteres especiales como tildes y eñes.</p>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Técnico: Estructura de salida y parámetros',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Al exportar tus datos, la herramienta sigue un protocolo estricto para garantizar la integridad de la información. A continuación detallamos cómo se mapean los diferentes tipos de datos de JSON a las celdas de tu hoja de cálculo:',
    },
    {
      type: 'table',
      headers: ['Tipo JSON', 'Representación en Excel/CSV', 'Observación'],
      rows: [
        ['String', 'Texto Plano', 'Se escapan comillas dobles automáticamente.'],
        ['Number', 'Numérico', 'Mantiene la precisión decimal original.'],
        ['Boolean', 'TRUE / FALSE', 'Convertido a mayúsculas para mejor filtrado.'],
        ['Null', 'Celda Vacía', 'Representación estándar para datos faltantes.'],
        ['Nested Object', 'Columna Separada', 'Aplanado mediante notación de punto.'],
      ],
    },
    {
      type: 'title',
      text: 'Uso: Casos de uso comunes para este conversor',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Analistas de Marketing: Exportación de leads de plataformas como Facebook o LinkedIn que entregan datos en JSON.',
        'Contabilidad: Transformación de facturas electrónicas de sistemas ERP modernos a hojas de cálculo para conciliación.',
        'Desarrolladores: Visualización rápida de respuestas de API para debugear estructuras de datos complejas sin abrir el editor de código.',
        'Gestores de Inventario: Carga masiva de productos desde ecommerce hacia herramientas de gestión de stock tradicional.',
        'Investigadores: Procesamiento de grandes conjuntos de datos públicos (Open Data) que suelen publicarse en formatos no tabulares.',
      ],
    },
    {
      type: 'title',
      text: '¿Por qué Excel sigue siendo el Rey del Análisis de Datos?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A pesar del auge de herramientas de Business Intelligence y Big Data, el 90% de las empresas siguen utilizando hojas de cálculo para su operativa diaria. La flexibilidad de Excel para realizar tablas dinámicas, filtros rápidos y gráficos inmediatos es insuperable. Sin embargo, la mayoría de los sistemas modernos (SaaS) exportan su información en JSON. El problema surge cuando el usuario administrativo se encuentra con un archivo indescifrable lleno de llaves y corchetes.',
    },
    {
      type: 'paragraph',
      html: 'Nuestro conversor actúa como el puente necesario entre el mundo del desarrollo de software y el mundo de la administración de empresas. Al transformar un JSON en un CSV legible, devolvemos el poder del análisis a las personas que conocen el negocio, permitiéndoles importar los datos en Google Sheets, Microsoft Excel o Zoho Sheet de forma transparente.',
    },
    {
      type: 'title',
      text: 'Análisis Profundo del Formato CSV frente a XLSX',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mucha gente se pregunta por qué exportar a CSV en lugar de directamente a un archivo .xlsx. La respuesta técnica reside en la <strong>interoperabilidad</strong>. Un archivo CSV (Comma-Separated Values) es texto plano universal. Puede ser abierto por cualquier programa de base de datos, cualquier editor de texto y cualquier hoja de cálculo del planeta, sin importar la versión o el sistema operativo.',
    },
    {
      type: 'paragraph',
      html: 'Al utilizar un CSV bien formado con codificación UTF-8 y BOM, eliminamos el riesgo de corrupción de archivos que a veces ocurre con las librerías que generan archivos de Excel binarios en el lado del cliente. Es la forma más limpia, rápida y segura de mover datos masivos sin pérdida de información.',
    },
    {
      type: 'title',
      text: 'Seguridad: Privacidad y Seguridad de tus Datos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A diferencia de otros conversores online que suben tus archivos JSON a sus servidores externos, nuestra utilidad es <strong>Client-Side Only</strong>. Esto significa que el código JavaScript que realiza la conversión se descarga en tu navegador y procesa el texto localmente. Tus datos confidenciales, ya sean financieros, personales o corporativos, están seguros porque nunca cruzan la red hacia ningún servidor de terceros.',
    },
    {
      type: 'paragraph',
      html: 'En un entorno corporativo donde el cumplimiento de la GDPR y la protección de datos es mandatario, utilizar herramientas que procesan la información localmente no es un lujo, sino una necesidad. Puedes desconectar tu conexión a internet después de cargar la página y la herramienta seguirá funcionando perfectamente, demostrando que nada se envía al exterior.',
    },
    {
      type: 'title',
      text: 'Tips: Consejos para un JSON Perfecto',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Antes de realizar la conversión, asegúrate de que tu JSON sea un array de objetos. Si tienes un objeto único, la herramienta creará una sola fila. Si tienes una lista de objetos, obtendrás una tabla completa. Recuerda que las claves de los objetos se convertirán en los encabezados de las columnas de tu Excel.',
    },
    {
      type: 'paragraph',
      html: 'Si tu JSON tiene arrays internos (listas dentro de objetos), el aplanador intentará representarlos de la mejor manera posible, pero para análisis complejos, siempre es mejor que el JSON original sea lo más plano posible. Si detectas que faltan datos, revisa que no tengas estructuras excesivamente profundas o circulares.',
    },
    {
      type: 'title',
      text: 'La importancia de la Limpieza de Datos JSON',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A menudo, los datos que vienen de sistemas externos traen "ruido": campos internos del sistema, IDs de base de datos irrelevantes o timestamps técnicos. Al convertir a Excel, te resultará mucho más fácil identificar estas columnas y eliminarlas para quedarte solo con la información de negocio que realmente importa.',
    },
    {
      type: 'paragraph',
      html: 'Nuestra herramienta está pensada para ser el primer paso en tu flujo de limpieza de datos (Data Wrangling). Primero conviertes, luego importas en Excel, y allí aplicas tu magia con Power Query o simplemente con filtros manuales. La eficiencia que ganas al no tener que escribir scripts de Python o Node solo para ver el contenido de un JSON es enorme.',
    },
    {
      type: 'paragraph',
      html: 'Optimiza tus flujos de trabajo profesionales hoy mismo utilizando esta herramienta diseñada para la eficiencia y el rigor técnico. Sin publicidad intrusiva, sin emojis innecesarios y con una precisión matemática absoluta. Confía en la tecnología local y mantén el control total sobre tus activos más valiosos: tus datos.',
    },
    {
      type: 'paragraph',
      html: 'En resumen, si buscas una forma rápida de auditar un log técnico, preparar un reporte de ventas desde una API o simplemente curiosidad por ver qué hay dentro de ese archivo .json que te han enviado, este conversor es tu mejor aliado. Rápido, seguro y profesional.',
    },
  ],
  ui: {
    statusWaiting: 'Esperando JSON Válido',
    statusValid: 'JSON Válido',
    statusInvalid: 'JSON Inválido',
    labelFlatten: 'Aplanar Objetos',
    zoneLabel: 'Pega tu JSON aquí o arrastra un archivo',
    placeholderJson: '[{"id": 1, "nombre": "Juan", "detalles": {"edad": 30}}]',
    btnCopyCsv: 'Copiar CSV',
    btnDownloadCsv: 'Descargar Excel (CSV)',
    copyFeedback: '¡Copiado!',
  },
};
