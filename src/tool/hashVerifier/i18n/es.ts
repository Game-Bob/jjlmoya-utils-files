import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashVerifierUI } from '../ui';

const slug = 'verificador-hash';
const title = 'Verificador de Hash SHA-256 Online - Seguridad Local';
const description =
  'Verifica la integridad de tus archivos calculando su firma SHA-256 de forma 100% local y segura. Compara checksums de ISOs y descargas.';

const faqData = [
  {
    question: '¿Qué es un Hash SHA-256?',
    answer:
      'Es una huella digital única para un archivo. No importa el tamaño del archivo, el hash siempre tiene 64 caracteres. Si cambias un solo bit del archivo, el hash cambiará completamente, lo que permite verificar su integridad.',
  },
  {
    question: '¿Es seguro subir mis archivos privados aquí?',
    answer:
      'No subes nada. Esta herramienta utiliza la API de Web Crypto de tu navegador para calcular el hash localmente. El archivo nunca sale de tu ordenador ni se transmite por internet.',
  },
  {
    question: '¿Para qué sirve verificar el Hash de una descarga?',
    answer:
      'Sirve para estar seguro de que el archivo no ha sido modificado por un atacante o dañado durante la descarga. Muchos sitios de software (como distribuciones Linux) publican el hash oficial para que puedas compararlo.',
  },
  {
    question: '¿Puede procesar archivos muy grandes?',
    answer:
      'Sí. Nuestra calculadora procesa el archivo por bloques (streaming) para que puedas verificar ISOs o instaladores de varios gigabytes sin bloquear tu navegador ni agotar la memoria RAM.',
  },
];

const howToData = [
  {
    name: 'Seleccionar el archivo',
    text: 'Arrastra el archivo que quieras verificar o búscalo en tu explorador de archivos local.',
  },
  {
    name: 'Esperar al cálculo',
    text: 'El navegador calculará la firma criptográfica (checksum). Verás una barra de progreso si el archivo es grande.',
  },
  {
    name: 'Introducir hash esperado',
    text: 'Pega el hash oficial proporcionado por el autor del software en el campo de comparación.',
  },
  {
    name: 'Verificar integridad',
    text: 'La herramienta te indicará con un código visual verde si los hashes coinciden exactamente o rojo si hay diferencias.',
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
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<HashVerifierUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Fundamentos Científicos y Estándares',
  bibliography: [
    {
      name: 'NIST FIPS 180-4: Secure Hash Standard (SHS)',
      url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final',
    },
    {
      name: 'RFC 6234: US Secure Hash Algorithms (SHA and SHA-based HMAC and HKDF)',
      url: 'https://datatracker.ietf.org/doc/html/rfc6234',
    },
    {
      name: 'SHAttered: The first real-world collision attack on SHA-1 (Comparative Study)',
      url: 'https://shattered.io/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '¿Cómo verificar la integridad de un archivo? La ciencia del Checksum SHA-256',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En la era digital, la confianza es un recurso escaso. Cuando descargas una imagen ISO de Linux, un instalador de software crítico o un monedero de criptomonedas, ¿cómo puedes estar seguro de que lo que tienes en tu disco duro es exactamente lo que el desarrollador publicó? Aquí es donde entra en juego el <strong>verificador de hash SHA-256</strong>.',
    },
    {
      type: 'paragraph',
      html: 'La <strong>integridad de archivos</strong> no se trata solo de evitar virus o malware; también se trata de detectar corrupciones accidentales durante la descarga. Un solo bit erróneo en un archivo de varios gigabytes puede hacer que un sistema operativo sea inestable o que una transacción financiera sea inválida. El hash SHA-256 actúa como una <strong>huella digital criptográfica</strong>: única, inmutable y extremadamente difícil de falsificar.',
    },
    {
      type: 'title',
      text: 'Por qué SHA-256 es el estándar (SHA-2 vs MD5 y SHA-1)',
      level: 2,
    },
    {
      type: 'title',
      text: 'El riesgo de MD5 y SHA-1',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Antiguamente, MD5 y SHA-1 eran los algoritmos estándar. Sin embargo, ambos han sido víctimas de lo que en criptografía llamamos <strong>colisiones</strong>. Una colisión ocurre cuando dos archivos distintos producen el mismo hash. En 2017, Google demostró una colisión práctica en SHA-1 (ataque SHAttered), lo que invalidó su uso para seguridad crítica.',
    },
    {
      type: 'title',
      text: 'La robustez de SHA-256',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'SHA-256 pertenece a la familia SHA-2 y genera una cadena de 256 bits (64 caracteres hexadecimales). Con <strong>2<sup>256</sup></strong> combinaciones posibles, la probabilidad de encontrar una colisión accidental es menor que la de que te caiga un meteorito mientras ganas la lotería. Es el algoritmo utilizado por Bitcoin para asegurar su blockchain y por gobiernos para proteger información clasificada.',
    },
    {
      type: 'title',
      text: '¿Cómo se calcula un Hash SHA-256 localmente?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Muchos usuarios se preguntan si es seguro subir archivos a un verificador online. La respuesta es simple: <strong>no debería ser necesario subir nada</strong>. Nuestra herramienta utiliza la API <code>FileReader</code> de JavaScript para leer el archivo directamente en tu navegador.',
    },
    {
      type: 'summary',
      title: 'El proceso paso a paso',
      items: [
        'Fragmentación (Chunking): El archivo se divide en bloques (pedazos) pequeños para no colapsar la memoria RAM de tu equipo.',
        'Transformación Matemática: Cada bloque se somete a operaciones bit a bit: rotaciones, XOR y constantes lógicas complejas.',
        'Firma Acumulada: El resultado de cada bloque se "encadena" con el siguiente, creando un resultado final único para todo el archivo.',
      ],
    },
    {
      type: 'title',
      text: 'Casos de uso: Cuándo DEBES verificar un Checksum',
      level: 2,
    },
    {
      type: 'summary',
      title: 'Situaciones críticas de verificación',
      items: [
        'Distribuciones de Software y ISOs: Al descargar una ISO de Ubuntu o Debian, el sitio oficial siempre proporciona un archivo SHA256SUMS. Un hash incorrecto suele ser señal de un error en el disco o de una descarga incompleta.',
        'Criptomonedas y Seguridad Extrema: Si instalas un software como Ledger Live o un nodo de Bitcoin, verificar el binario es vital. Un atacante podría interceptar tu conexión (ataque Man-in-the-Middle) y servirte una versión modificada.',
        'Copias de Seguridad (Backups): Para almacenamiento a largo plazo, guardar el hash SHA-256 junto a tus archivos te permite detectar la "degradación de bits" (Bit Rot), asegurando que tus fotos y documentos sigan intactos años después.',
      ],
    },
    {
      type: 'tip',
      title: 'Guía: ¿Qué hacer si el Hash no coincide?',
      html: '<p>Si después de comparar el hash generado con el valor esperado recibes un aviso de "CORRUPTO" o "ERROR", sigue estos pasos inmediatamente:</p><ul><li><strong>Borra el archivo:</strong> No intentes abrirlo, ejecutarlo o instalarlo bajo ninguna circunstancia.</li><li><strong>Limpia la caché:</strong> A veces los servidores proxy guardan versiones corruptas.</li><li><strong>Usa una conexión segura:</strong> Asegúrate de estar navegando por HTTPS y evita redes Wi-Fi públicas sin VPN.</li><li><strong>Descarga de una fuente alternativa:</strong> Usa un "mirror" oficial o torrent si el sitio lo permite.</li></ul>',
    },
    {
      type: 'title',
      text: 'Preguntas frecuentes sobre SHA-256',
      level: 2,
    },
    {
      type: 'title',
      text: '¿Es el algoritmo SHA-256 reversible?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'No. Es una función unidireccional. No existe una operación matemática que permita obtener el archivo original a partir de su hash de 64 caracteres. La única forma es mediante ataques de fuerza bruta, los cuales son computacionalmente imposibles en la actualidad.',
    },
    {
      type: 'title',
      text: '¿Afecta el nombre del archivo al hash?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'No. El hash se calcula exclusivamente basándose en el contenido binario del archivo. Si cambias el nombre de <code>foto.webp</code> a <code>imagen.webp</code>, el hash seguirá siendo idéntico.',
    },
    {
      type: 'title',
      text: '¿Pueden dos archivos diferentes tener el mismo SHA-256?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Teóricamente sí (paradoja del cumpleaños), pero en la práctica, las posibilidades son astronómicamente bajas. Hasta la fecha, no se ha descubierto ninguna colisión real para SHA-256 producida por el hombre o la naturaleza.',
    },
    {
      type: 'title',
      text: '¿Es seguro procesar archivos grandes en el navegador?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sí. Gracias al procesamiento por "bloques" que implementamos en esta herramienta, puedes procesar archivos de 10GB o más sin saturar la RAM de tu navegador, ya que el archivo nunca se carga por completo en memoria.',
    },
  ],
  ui: {
    labelTitle: 'Verificador de Hash Local',
    labelSubtitle: 'Suelta cualquier archivo para generar su firma <strong class="hv-accent">SHA-256</strong> al instante.',
    btnSelect: 'Seleccionar Archivo',
    labelPrivacy: 'Los archivos nunca salen de tu dispositivo.',
    labelCalculating: 'Calculando Firma...',
    labelSuccess: 'Cómputo Exitoso',
    btnAnother: 'Verificar otro',
    labelHash: 'Hash SHA-256',
    btnCopyTitle: 'Copiar hash',
    labelCompare: 'Comparar con Original',
    placeholderCompare: 'Pega aquí el hash esperado...',
    labelCompareNote: '* La comparación ignora mayúsculas y espacios en blanco.',
    statusVerified: 'VERIFICADO',
    statusCorrupt: 'CORRUPTO / ERROR',
  },
};
