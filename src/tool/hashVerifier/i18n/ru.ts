import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashVerifierUI } from '../ui';

const slug = 'verifikatsiya-hash-fayla';
const title = 'Проверка хэша онлайн — SHA 256, MD5 и SHA 1';
const description =
  'Рассчитайте и проверьте целостность ваших файлов, сравнив их цифровые подписи SHA256, MD5 или SHA1. Убедитесь, что ваши загрузки не были изменены.';

const faqData = [
  {
    question: 'Как проверить, был ли файл изменен?',
    answer:
      'Самый надежный способ — сравнить его хэш. Хэш — это уникальный цифровой отпечаток. Если изменится хотя бы один бит файла, хэш будет совершенно другим. Сравнив полученный хэш с тем, который предоставил автор, вы можете гарантировать его целостность.',
  },
  {
    question: 'Какой алгоритм лучше: MD5 или SHA-256?',
    answer:
      'MD5 очень быстрый, но считается менее защищенным от преднамеренных атак. SHA-256 — это современный стандарт безопасности, и его гораздо сложнее «подделать». Для большинства проверок целостности рекомендуется использовать SHA-256.',
  },
  {
    question: 'Почему хэш меняется, если я переименую файл?',
    answer:
      'На самом деле, переименование файла НЕ меняет его хэш-значение. Хэш рассчитывается на основе внутреннего содержимого (байтов) файла, а не его имени или даты создания. Если хэш изменился, значит, были изменены внутренние данные.',
  },
  {
    question: 'Загружается ли мой файл на сервер для расчета хэша?',
    answer:
      'Нет. Наш инструмент использует Web Crypto API, что означает, что все расчеты выполняются локально в вашем браузере. Ваш файл никогда не покидает ваш компьютер, что гарантирует 100% приватность и работает гораздо быстрее, так как не требуется загрузка.',
  },
];

const howToData = [
  {
    name: 'Выберите файл',
    text: 'Перетащите или выберите файл, который хотите проверить в инструменте.',
  },
  {
    name: 'Выберите алгоритм',
    text: 'Выберите SHA-256, MD5 или SHA-1 в зависимости от подписи, которая у вас есть.',
  },
  {
    name: 'Сравните результаты',
    text: 'Вставьте ожидаемый хэш, и система мгновенно сообщит вам, совпадают ли они (Успех) или различаются (Ошибка).',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'RUB' },
  inLanguage: 'ru',
};

export const content: ToolLocaleContent<HashVerifierUI> = {
  slug,
  title,
  description,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Источники и ссылки',
  bibliography: [
    {
      name: 'NIST: Стандарт функций хэширования',
      url: 'https://csrc.nist.gov/projects/hash-functions',
    },
    {
      name: 'MDN: Web Crypto API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API',
    },
    {
      name: 'Википедия: Криптографическая хэш-функция',
      url: 'https://ru.wikipedia.org/wiki/Криптографическая_хеш-функция',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Что такое хэш файла и почему он жизненно важен для вашей безопасности?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Хэш — это <strong>цифровой отпечаток</strong>, уникальный для каждого файла. Это буквенно-цифровая строка, сгенерированная математическим алгоритмом (например, SHA-256). Его главная особенность — «односторонность»: вы можете получить хэш из файла, но не можете восстановить файл из хэша.',
    },
    {
      type: 'paragraph',
      html: 'Использование <strong>онлайн-проверки хэша</strong> необходимо при загрузке программного обеспечения, ISO-образов или конфиденциальных документов. Авторы обычно публикуют MD5 или SHA256 своих файлов, чтобы вы могли убедиться, что загруженное вами в точности соответствует оригиналу, без повреждений или вредоносных вставок.',
    },
    {
      type: 'title',
      text: 'SHA-256 против MD5: что использовать?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Алгоритм <strong>MD5</strong> был популярен долгие годы благодаря скорости, но сегодня он считается криптографически небезопасным, так как подвержен «коллизиям». Тем не менее, он все еще используется для простых проверок целостности (поврежденные загрузки).',
    },
    {
      type: 'paragraph',
      html: 'Если вам нужна максимальная защита, <strong>SHA-256</strong> (часть семейства SHA-2) — это стандарт, рекомендованный агентствами безопасности по всему миру. Практически невозможно, чтобы два разных файла имели одинаковый хэш SHA-256.',
    },
    {
      type: 'title',
      text: 'Полная приватность: расчет 100% в вашем браузере',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Загрузка не требуется',
      html: '<p>Наш инструмент использует мощность вашего компьютера для обработки файла. Благодаря <strong>Web Crypto API</strong> нам не нужно загружать файл ни на какой сервер. Это значит, что вы можете проверить файлы размером в несколько гигабайт за секунды, не расходуя интернет-трафик и будучи уверенными, что содержимое ваших файлов никогда не покидает ваше устройство.</p>',
    },
  ],
  ui: {
    labelTitle: "Локальный верификатор хэша",
    labelSubtitle: "Перетащите файл, чтобы мгновенно создать его подпись <strong class=\"hv-accent\">SHA-256</strong>.",
    btnSelect: "Выбрать файл",
    labelPrivacy: "Файлы никогда не покидают ваше устройство.",
    labelCalculating: "Вычисление подписи...",
    labelSuccess: "Вычисление выполнено успешно",
    btnAnother: "Проверить другой",
    labelHash: "Хэш SHA-256",
    btnCopyTitle: "Скопировать хэш",
    labelCompare: "Сравнить с оригиналом",
    placeholderCompare: "Вставьте ожидаемый хэш здесь...",
    labelCompareNote: "* Сравнение игнорирует регистр и пробелы.",
    statusVerified: "ПРОВЕРЕНО",
    statusCorrupt: "ПОВРЕЖДЁН / ОШИБКА",
  },
};
