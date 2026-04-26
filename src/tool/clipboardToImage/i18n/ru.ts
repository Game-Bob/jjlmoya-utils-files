import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClipboardToImageUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'buffer-v-png';
const title = 'Буфер обмена в PNG: Скачать скриншоты и изображения';
const description =
  'Онлайн-инструмент для преобразования содержимого буфера обмена (скриншоты, изображения) в загружаемый файл PNG. 100% приватный и быстрый процесс.';

const faqData = [
  {
    question: 'Безопасно ли вставлять сюда мои скриншоты?',
    answer:
      'Да, это абсолютно безопасно. Этот инструмент работает на 100% локально в вашем браузере. Данные вашего буфера обмена никогда не отправляются на сервер, что гарантирует вашу полную конфиденциальность.'
  },
  {
    question: 'Какие типы контента я могу конвертировать?',
    answer:
      'Вы можете вставлять скопированные изображения (скриншоты, фотографии), текст, который будет преобразован в файл .txt, или даже HTML-элементы. Самое частое использование: сохранение быстрых скриншотов в формате PNG.'
  },
  {
    question: 'Почему не работает кнопка вставки?',
    answer:
      'Из-за ограничений безопасности браузеров кнопка "Вставить" иногда требует явных разрешений. Если она не работает, вы всегда можете использовать стандартное сочетание клавиш: Ctrl+V (Windows) или Cmd+V (Mac).'
  },
  {
    question: 'Работает ли это на мобильных устройствах?',
    answer:
      'Да, вы можете использовать функцию вставки на мобильном телефоне для просмотра содержимого, хотя работа с инструментом оптимизирована для быстрого управления скриншотами на компьютере.'
  },
];

const howToData = [
  {
    name: 'Скопируйте контент',
    text: 'Сделайте скриншот или скопируйте изображение/текст из любого приложения.'
  },
  {
    name: 'Вставьте в область',
    text: 'Нажмите на область вставки или используйте сочетание клавиш Ctrl+V / Cmd+V, чтобы загрузить контент.'
  },
  {
    name: 'Предпросмотр',
    text: 'Убедитесь, что контент корректен, в области предпросмотра, которая появится мгновенно.'
  },
  {
    name: 'Скачайте файл',
    text: 'Нажмите кнопку загрузки, чтобы сохранить контент в виде реального файла на вашем компьютере.'
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'RUB' },
  inLanguage: 'ru'
};

export const content: ToolLocaleContent<ClipboardToImageUI> = {
  slug,
  title,
  description,
  bibliography,
  faq: faqData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Как сохранить изображение из буфера обмена в виде файла',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Этот бесплатный онлайн-инструмент позволяет мгновенно <strong>преобразовать содержимое вашего буфера обмена в файл изображения</strong> (PNG). Это идеальное решение, когда вы сделали скриншот (Windows + Shift + S) или скопировали изображение с веб-сайта и вам нужно сохранить его на своем компьютере, не открывая тяжелые редакторы, такие как Photoshop или Paint.'
    },
    {
      type: 'title',
      text: 'Почему стоит использовать этот конвертер буфера обмена?',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Скорость:</strong> Просто нажмите <code>Ctrl + V</code> и скачайте. Без промежуточных шагов.',
        '<strong>Приватность:</strong> Весь процесс выполняется в вашем браузере. Ваши изображения <strong>никогда не загружаются на сервер</strong>.',
        '<strong>Оригинальное качество:</strong> Мы получаем необработанные данные из буфера обмена, гарантируя, что загруженное изображение сохраняет максимально возможное качество.',
        '<strong>Автоматическая организация:</strong> Файлы скачиваются с именем, основанным на точной дате и времени, что облегчает организацию ваших скриншотов.',
      ]
    },
    {
      type: 'title',
      text: 'Часто задаваемые вопросы',
      level: 2
    },
    {
      type: 'title',
      text: 'Работает ли это со скриншотами?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Да, это идеально подходит для быстрого сохранения скриншотов, сделанных с помощью инструмента "Ножницы" в Windows или на Mac.'
    },
    {
      type: 'title',
      text: 'Какие форматы поддерживаются?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'В настоящее время инструмент автоматически обнаруживает и преобразует любое изображение в буфере обмена в формат PNG для обеспечения совместимости и прозрачности.'
    },
  ],
  ui: {
    labelCtrlV: 'Нажмите Ctrl + V в любом месте',
    labelClickPaste: 'или нажмите здесь, чтобы вставить',
    btnClear: 'Очистить',
    btnDownload: 'Скачать',
    privacyMsg: 'Весь процесс на 100% локальный. Ваши изображения никогда не покидают браузер.'
  }
};
