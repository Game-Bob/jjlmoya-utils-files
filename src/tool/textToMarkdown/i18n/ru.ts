import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextToMarkdownUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'konverter-teksta-v-markdown';
const title = 'Онлайн конвертер текста в Markdown: форматирование документов';
const description =
  'Быстро преобразуйте обычный текст в код Markdown. Конвертируйте абзацы, заголовки и списки в формат, совместимый с GitHub, Reddit и MD-редакторами.';

const faqData = [
  {
    question: 'Что такое Markdown и для чего он нужен?',
    answer:
      'Markdown: это облегченный язык разметки, используемый для форматирования текста с использованием синтаксиса простого текста. Он широко используется на таких платформах, как GitHub, Reddit, Slack, а также в генераторах статических сайтов, потому что его легко читать и писать.'
  },
  {
    question: 'Безопасен ли мой текст во время конвертации?',
    answer:
      'Да, на 100% безопасно. Конвертация выполняется полностью в вашем браузере с помощью JavaScript. Никакая информация не отправляется на наши серверы, что гарантирует приватность ваших документов.'
  },
  {
    question: 'Как конвертируются заголовки и списки?',
    answer:
      'Наш инструмент определяет базовую структуру текста. Если он обнаруживает отдельные строки перед абзацами, он может рассматривать их как заголовки. Строки, начинающиеся с тире или цифр, форматируются как стандартные списки Markdown.'
  },
  {
    question: 'Могу ли я использовать это для сложных таблиц или кода?',
    answer:
      'Этот инструмент предназначен для базового форматирования текста (абзацы, списки, жирный шрифт, курсив). Для очень сложных структур, таких как многоколоночные таблицы, может потребоваться ручная настройка в сгенерированном Markdown.'
  },
];

const howToData = [
  {
    name: 'Вставьте ваш текст',
    text: 'Введите обычный текст, который вы хотите отформатировать, в исходное поле.'
  },
  {
    name: 'Автоматическая конвертация',
    text: 'Инструмент обрабатывает текст и применяет синтаксис Markdown к различным идентифицированным элементам.'
  },
  {
    name: 'Скопируйте или скачайте',
    text: 'Нажмите \"Копировать результат\" или \"Скачать .md\", чтобы получить отформатированный файл.'
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

export const content: ToolLocaleContent<TextToMarkdownUI> = {
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
      text: 'Зачем конвертировать текст в Markdown?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Если вы разработчик, блогер или технический писатель, вы, вероятно, используете <strong>Markdown</strong> каждый день. Конвертация <strong>простого текста в Markdown</strong> позволяет сохранить чистую структуру, которую легко экспортировать в HTML, PDF или напрямую на такие платформы, как WordPress и генераторы статических сайтов.'
    },
    {
      type: 'title',
      text: 'Полная приватность: 100% локальная конвертация',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Большинство онлайн-конвертеров обрабатывают ваш текст на своих серверах. Наш <strong>конвертер текста в Markdown</strong> работает полностью в вашем браузере. Ваши данные никогда не покидают ваш компьютер, что делает его идеальным для черновиков внутренних документов, заметок со встреч или личных идей.'
    },
    {
      type: 'title',
      text: 'Основные возможности',
      level: 3
    },
    {
      type: 'list',
      items: [
        'Автоматическое определение <strong>заголовков</strong>.',
        'Конвертация <strong>маркированных и нумерованных списков</strong>.',
        'Поддержка базового форматирования, такого как <strong>жирный шрифт и курсив</strong>.',
        'Мгновенный экспорт в <strong>файл .md</strong>.',
      ]
    },
  ],
  ui: {
    labelInput: 'Обычный текст',
    labelOutput: 'Отформатированный Markdown',
    placeholderInput: 'Вставьте ваш текст здесь...',
    placeholderOutput: 'Сгенерированный код Markdown появится здесь...',
    btnConvert: 'Конвертировать в Markdown',
    btnDownload: 'Скачать .md',
    btnCopy: 'Копировать результат',
    btnClear: 'Очистить всё',
    toastCopied: 'Код Markdown скопирован!',
    toastDownloaded: 'Скачивание .md файла...'
  }
};
