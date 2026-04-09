import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'archivos-y-texto',
  title: 'Herramientas para Archivos y Texto',
  description: 'Herramientas online gratuitas para trabajar con archivos y texto directamente en el navegador. Convierte el portapapeles en imágenes descargables, sin instalaciones y con total privacidad.',
  seo: [
    {
      type: 'title',
      text: '¿Por qué gestionar archivos desde el navegador?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Las tareas cotidianas con archivos y texto —guardar una captura de pantalla, convertir un formato, extraer texto— suelen requerir instalar software pesado o recurrir a servicios online que suben tus datos a servidores externos. Estas herramientas funcionan de forma <strong>100% local en tu navegador</strong>: ningún dato tuyo sale de tu dispositivo.',
    },
    {
      type: 'paragraph',
      html: 'El navegador moderno tiene acceso nativo a la API del portapapeles, al sistema de archivos local y a motores de procesamiento de imagen. Eso permite replicar las funciones más habituales de aplicaciones de escritorio sin instalar nada, sin registrarse y sin publicidad.',
    },
    {
      type: 'title',
      text: 'Portapapeles: del copiar-pegar al archivo real',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cuando haces una captura de pantalla con <strong>Windows + Shift + S</strong> o <strong>Cmd + Shift + 4</strong>, la imagen queda en el portapapeles pero no se guarda como archivo. Para obtenerla necesitas abrir Paint, Photoshop u otro editor, pegar y exportar. Con la herramienta de portapapeles a imagen, el proceso se reduce a <strong>Ctrl+V y un clic</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Los archivos se descargan con un nombre basado en la fecha y hora exactas, lo que facilita organizar capturas cronológicamente sin tener que renombrarlas manualmente. El formato de salida es PNG, que preserva la calidad original sin pérdidas.',
    },
    {
      type: 'title',
      text: 'Privacidad por diseño',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Toda esta categoría de herramientas está construida con un principio único: <strong>los datos nunca salen del navegador</strong>. No hay peticiones a servidores externos, no hay almacenamiento en la nube, no hay registro de actividad. Lo que pegas en la herramienta se procesa en memoria y se descarga directamente a tu disco, sin intermediarios.',
    },
    {
      type: 'list',
      items: [
        '<strong>Sin instalación:</strong> Funcionan directamente en el navegador, en cualquier sistema operativo.',
        '<strong>Privacidad total:</strong> Ningún archivo ni texto se envía a ningún servidor.',
        '<strong>Gratuitas:</strong> Sin límites de uso, sin suscripciones, sin marcas de agua.',
        '<strong>Rápidas:</strong> El procesamiento es local, por lo que la velocidad depende de tu dispositivo, no de una conexión.',
      ],
    },
    {
      type: 'title',
      text: 'El futuro de las herramientas de productividad',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Las APIs web modernas (Clipboard API, File System Access API, Canvas API) han cerrado la brecha entre lo que puede hacer una aplicación nativa y lo que puede hacer el navegador. Cada nueva herramienta de esta categoría aprovecha estas capacidades para ofrecer <strong>funcionalidad de escritorio con la accesibilidad de una URL</strong>.',
    },
  ],
};
