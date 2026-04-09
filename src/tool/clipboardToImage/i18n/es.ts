import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClipboardToImageUI } from '../ui';

const slug = 'clipboard';
const title = 'Portapapeles a PNG: Descargar Capturas de Pantalla';
const description =
  'Herramienta online para convertir el contenido del portapapeles (capturas, imágenes) en un archivo PNG descargable al instante. Proceso 100% privado y rápido.';

const faqData = [
  {
    question: '¿Es seguro pegar mis capturas de pantalla aquí?',
    answer:
      'Sí, es totalmente seguro. Esta herramienta funciona de forma 100% local en tu navegador. Los datos de tu portapapeles nunca se envían a ningún servidor, garantizando tu privacidad total.',
  },
  {
    question: '¿Qué tipos de contenido puedo convertir?',
    answer:
      'Puedes pegar imágenes copiadas (capturas de pantalla, fotos), texto que se convertirá en un archivo .txt, o incluso elementos HTML. El uso más común es guardar capturas de pantalla rápidas como archivos PNG.',
  },
  {
    question: '¿Por qué no funciona el botón de pegar?',
    answer:
      'Debido a restricciones de seguridad de los navegadores, a veces el botón "Pegar" requiere permisos explícitos. Si no funciona, siempre puedes usar el atajo de teclado estándar: Ctrl+V (Windows) o Cmd+V (Mac).',
  },
  {
    question: '¿Funciona en dispositivos móviles?',
    answer:
      'Sí, puedes usar la función de pegar de tu móvil para visualizar contenidos, aunque la experiencia está optimizada para la gestión rápida de capturas de pantalla en escritorio.',
  },
];

const howToData = [
  {
    name: 'Copiar contenido',
    text: 'Realiza una captura de pantalla o copia una imagen/texto de cualquier aplicación.',
  },
  {
    name: 'Pegar en la zona',
    text: 'Haz clic en el área de pegado o usa el atajo Ctrl+V / Cmd+V para cargar el contenido.',
  },
  {
    name: 'Previsualizar',
    text: 'Verifica que el contenido es el correcto en la zona de previsualización que aparecerá al instante.',
  },
  {
    name: 'Descargar archivo',
    text: 'Pulsa el botón de descarga para guardar el contenido como un archivo real en tu ordenador.',
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

export const content: ToolLocaleContent<ClipboardToImageUI> = {
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
      text: 'Cómo guardar una imagen del portapapeles como archivo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta herramienta online gratuita te permite <strong>convertir el contenido de tu portapapeles en un archivo de imagen</strong> (PNG) de forma instantánea. Es la solución perfecta cuando has hecho una captura de pantalla (Windows + Shift + S) o has copiado una imagen de una web y necesitas guardarla en tu ordenador sin abrir editores pesados como Photoshop o Paint.',
    },
    {
      type: 'title',
      text: '¿Por qué usar este conversor de portapapeles?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Rapidez:</strong> Solo tienes que pulsar <code>Ctrl + V</code> y descargar. Sin pasos intermedios.',
        '<strong>Privacidad:</strong> Todo el proceso se realiza en tu navegador. Tus imágenes <strong>nunca se suben a ningún servidor</strong>.',
        '<strong>Calidad original:</strong> Obtenemos los datos crudos del portapapeles, asegurando que la imagen descargada mantiene la máxima calidad posible.',
        '<strong>Organización automática:</strong> Los archivos se descargan con un nombre basado en la fecha y hora exacta, facilitando la organización de tus capturas.',
      ],
    },
    {
      type: 'title',
      text: 'Preguntas frecuentes',
      level: 2,
    },
    {
      type: 'title',
      text: '¿Funciona con capturas de pantalla?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sí, es ideal para guardar rápidamente capturas de pantalla hechas con la herramienta de recortes de Windows o Mac.',
    },
    {
      type: 'title',
      text: '¿Qué formatos soporta?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Actualmente la herramienta detecta y convierte automáticamente cualquier imagen en el portapapeles a formato PNG para garantizar la compatibilidad y transparencia.',
    },
  ],
  ui: {
    labelCtrlV: 'Presiona Ctrl + V en cualquier lugar',
    labelClickPaste: 'o haz clic aquí para pegar',
    btnClear: 'Limpiar',
    btnDownload: 'Descargar',
    privacyMsg: 'Todo el proceso es 100% local. Tus imágenes nunca salen de tu navegador.',
  },
};
