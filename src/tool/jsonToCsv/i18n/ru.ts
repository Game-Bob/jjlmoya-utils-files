import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonToCsvUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'konverter-json-v-csv';
const title = 'Конвертер JSON в CSV онлайн бесплатно: Экспорт в Excel';
const description =
  'Преобразуйте ваши JSON-файлы в таблицы CSV быстро и легко. Идеально подходит для аналитиков данных, которым нужно открывать JSON-файлы в Excel или Google Sheets.';

const faqData = [
  {
    question: 'Как конвертировать JSON в CSV для Excel?',
    answer:
      'Просто вставьте ваш JSON-код или загрузите файл в наш инструмент. Система автоматически обработает структуру данных и создаст CSV-файл, который вы сможете скачать и открыть напрямую в Microsoft Excel или Google Sheets.'
  },
  {
    question: 'Безопасно ли конвертировать мои данные на этом сайте?',
    answer:
      'Да, на 100% безопасно. Конвертация выполняется полностью в вашем браузере с помощью JavaScript. Данные не отправляются на наши серверы, что гарантирует приватность вашей информации.'
  },
  {
    question: 'Что произойдет, если мой JSON содержит вложенные объекты?',
    answer:
      'Наш базовый конвертер оптимизирован для массивов объектов. Если у вас очень глубокая вложенность, инструмент попытается «развернуть» первый уровень свойств для обеспечения читаемости таблицы в Excel.'
  },
  {
    question: 'Могу ли я скопировать CSV напрямую вместо скачивания?',
    answer:
      'Конечно. Помимо кнопки «Скачать CSV», у вас есть опция «Копировать результат», чтобы вставить содержимое в любой текстовый редактор или таблицу.'
  },
];

const howToData = [
  {
    name: 'Вставьте ваш JSON',
    text: 'Введите JSON-код или загрузите .json файл в поле ввода.'
  },
  {
    name: 'Обработайте данные',
    text: 'Инструмент автоматически определит поля и структуру для организации их в строки и столбцы.'
  },
  {
    name: 'Скачайте или скопируйте',
    text: 'Нажмите «Скачать CSV», чтобы сохранить файл, или «Копировать результат», чтобы использовать его мгновенно.'
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

export const content: ToolLocaleContent<JsonToCsvUI> = {
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
      text: 'Зачем конвертировать JSON в CSV для анализа данных?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'JSON: это стандартный формат для современных API, но его не всегда легко анализировать человеку. <strong>Конвертер JSON в CSV</strong> позволяет превратить сложные структуры в строки и столбцы, облегчая работу в таких мощных инструментах, как <strong>Microsoft Excel</strong>, Numbers или Google Sheets.'
    },
    {
      type: 'title',
      text: 'Полная приватность: Конвертация без загрузки файлов на сервер',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Большинство онлайн-конвертеров загружают ваши данные на сервер. Наш инструмент работает иначе: <strong>конвертация на 100% локальная</strong>. Благодаря использованию JavaScript в вашем браузере данные никогда не покидают ваш компьютер. Это критически важно, если вы работаете с конфиденциальной информацией, списками клиентов или внутренними отчетами компании.'
    },
    {
      type: 'title',
      text: 'Технические советы для идеальной конвертации',
      level: 3
    },
    {
      type: 'list',
      items: [
        'Убедитесь, что ваш JSON представляет собой <strong>массив объектов</strong> (например, [{}, {}]).',
        'Проверьте, чтобы у всех объектов были схожие свойства для сохранения структуры столбцов CSV.',
        'Если у вас есть специальные символы, наш CSV экспортируется в кодировке <strong>UTF-8</strong>, чтобы избежать проблем в Excel.',
      ]
    },
  ],
  ui: {
    statusWaiting: 'Ожидание корректного JSON',
    statusValid: 'Корректный JSON',
    statusInvalid: 'Некорректный JSON',
    labelFlatten: 'Развернуть объекты',
    zoneLabel: 'Вставьте JSON сюда или перетащите файл',
    placeholderJson: '[{"id": 1, "name": "John", "details": {"age": 30}}]',
    btnCopyCsv: 'Скопировать CSV',
    btnDownloadCsv: 'Скачать Excel (CSV)',
    copyFeedback: 'Скопировано!'
  }
};
