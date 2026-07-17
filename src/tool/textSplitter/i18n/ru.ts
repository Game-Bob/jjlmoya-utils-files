import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextSplitterUI } from '../ui';

const slug = 'razdelitel-teksta';
const title = 'Разделитель текста онлайн: разбить по абзацам, предложениям или длине';
const description =
  'Автоматически разбивайте длинные тексты на более мелкие части. Выбирайте разделение по количеству слов, символов, абзацев или предложений.';

const faqData = [
  {
    question: 'Как разделить текст для ChatGPT или ИИ?',
    answer:
      'У многих ИИ есть ограничения по количеству символов в одном сообщении. С помощью нашего инструмента вы можете разделить длинный промпт на части (например, по 2000 символов), чтобы отправлять их последовательно без потери информации.'
  },
  {
    question: 'Безопасно ли вставлять личные тексты в разделитель?',
    answer:
      'Абсолютно безопасно. Логика разделения работает на 100% в вашем браузере с помощью JavaScript. Текст не отправляется на наши серверы, что гарантирует приватность ваших данных.'
  },
  {
    question: 'Есть ли предел размера текста, который я могу разделить?',
    answer:
      'Мы не устанавливаем строгих ограничений, так как обработка происходит локально. Вы можете разделить несколько мегабайт текста за секунды, хотя производительность зависит от памяти вашего компьютера.'
  },
  {
    question: 'Добавляет ли он нумерацию частей?',
    answer:
      'На данный момент инструмент выдает отдельные блоки. Вы можете копировать их по одному. Многие пользователи считают это удобным для сохранения ручного контроля при отправке сегментов в другие приложения.'
  },
];

const howToData = [
  {
    name: 'Вставьте ваш текст',
    text: 'Введите длинный текст, который вы хотите разделить, в основное поле ввода.'
  },
  {
    name: 'Настройте разделение',
    text: 'Выберите метод (символы, слова, предложения или абзацы) и установите максимальное значение для каждой части.'
  },
  {
    name: 'Скопируйте части',
    text: 'Инструмент покажет вам созданные блоки. Скопируйте нужный и используйте его где угодно.'
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

export const content: ToolLocaleContent<TextSplitterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Зачем нужен онлайн-разделитель текста?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Работа с очень длинными текстами может быть сложной в цифровую эпоху. Будь вы программистом, которому нужно разбить код на модули, писателем, адаптирующим контент для соцсетей, или пользователем, взаимодействующим с <strong>большими языковыми моделями (LLM)</strong>, такими как ChatGPT, <strong>разделитель текста</strong>: это незаменимый инструмент.'
    },
    {
      type: 'title',
      text: 'Интеллектуальные методы разделения',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>По символам:</strong> Точно для строгого соблюдения технических лимитов.',
        '<strong>По словам:</strong> Идеально для статей и блогов, где важна длина для SEO или читаемости.',
        '<strong>По предложениям:</strong> Гарантирует, что мысли не будут оборваны на полуслове, сохраняя контекст каждого блока.',
        '<strong>По абзацам:</strong> Лучший вариант для сохранения логической структуры сложного документа.',
      ]
    },
    {
      type: 'title',
      text: 'Приватность и скорость: Локальная обработка',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Наш <strong>онлайн-разделитель текста</strong> не \"загружает\" ваш контент на сервер. Все обрабатывается мгновенно в вашем браузере. Это значит, что вы можете работать с конфиденциальными документами, контрактами или личной почтой с абсолютной уверенностью в их безопасности.'
    },
  ],
  ui: {
    labelInput: 'Текст для разделения',
    labelOutput: 'Результат (один элемент на строку)',
    placeholderInput: 'Вставьте сюда список, разделённый запятыми, пробелами или другим разделителем...',
    placeholderOutput: 'Список появится здесь...',
    labelDelimiter: 'Разделитель',
    optComma: 'Запятая (,)',
    optSemicolon: 'Точка с запятой (;)',
    optSpace: 'Пробел',
    optCustom: 'Пользовательский',
    labelCustom: 'Пользовательский разделитель',
    placeholderCustom: 'Введите разделитель...',
    optTrim: 'Убрать пробелы',
    optUnique: 'Удалить дубликаты',
    optClean: 'Удалить пустые',
    optNumbered: 'Нумеровать строки',
    statLines: 'Строк в результате',
    statChars: 'Символы',
    btnCopy: 'Копировать список',
    btnClear: 'Очистить',
    toastCopied: 'Скопировано в буфер обмена!'
  }
};
