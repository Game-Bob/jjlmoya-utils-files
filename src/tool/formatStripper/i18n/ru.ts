import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FormatStripperUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'udalit-formatirovanie-teksta';
const title = 'Удалить форматирование текста онлайн бесплатно: очистка стилей';
const description =
  'Удаляйте жирный шрифт, курсив, ссылки и цвета из любого текста. Мгновенно конвертируйте HTML или Word в обычный текст (txt) с помощью нашего профессионального инструмента.';

const faqData = [
  {
    question: 'Как удалить жирный шрифт и курсив из текста?',
    answer:
      'Просто вставьте текст в наш инструмент. Система автоматически обнаружит стили и удалит их, оставив только чистые символы без какого-либо оформления.'
  },
  {
    question: 'Совместимо ли это с текстом из Microsoft Word или Google Docs?',
    answer:
      'Да, инструмент специально разработан для этого. При копировании из Word или Docs переносится много "мусорного" кода. Наш очиститель удаляет все скрытые стили, позволяя вставлять чистый текст в другие приложения.'
  },
  {
    question: 'Могу ли я конвертировать HTML в обычный текст?',
    answer:
      'Именно так. Если вы вставите фрагмент HTML, наш инструмент удалит все теги (такие как <div>, <a>, <strong>) и вернет только читаемое текстовое содержимое.'
  },
  {
    question: 'Безопасно ли вставлять конфиденциальную информацию?',
    answer:
      'Абсолютно безопасно. Вся обработка выполняется на 100% в вашем браузере. Данные не отправляются на наши серверы, что гарантирует приватность вашего текста.'
  },
];

const howToData = [
  {
    name: 'Скопируйте текст',
    text: 'Скопируйте текст с форматированием из Word, с веб-сайта или из письма.'
  },
  {
    name: 'Вставьте в очиститель',
    text: 'Вставьте содержимое в поле ввода. Удаление стилей происходит автоматически.'
  },
  {
    name: 'Скопируйте результат',
    text: 'Ваш текст теперь стал обычным и чистым. Скопируйте его и используйте где угодно.'
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

export const content: ToolLocaleContent<FormatStripperUI> = {
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
      text: 'Что значит "очистить форматирование" и зачем это нужно?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Очистка форматирования: это процесс <strong>преобразования форматированного текста в обычный текст</strong> (Plain Text). Когда мы копируем информацию с сайта или документа Word, этот текст несет "скрытый багаж": шрифты, размеры, цвета, ссылки и стили CSS. Наш инструмент служит фильтром, удаляющим этот цифровой мусор.'
    },
    {
      type: 'title',
      text: 'Преимущества использования текстового очистителя',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Универсальная совместимость:</strong> Обычный текст работает в любой программе, от старой почты до современных CMS, таких как WordPress.',
        '<strong>Чистый код:</strong> Идеально для разработчиков, которым нужно вставить текст в код без лишних HTML-тегов.',
        '<strong>SEO и читаемость:</strong> Удаляя лишние форматы, вы обеспечиваете визуальную согласованность контента на вашем сайте.',
        '<strong>Полная приватность:</strong> Процесс локальный. Ваш текст никогда не покидает браузер.',
      ]
    },
    {
      type: 'title',
      text: 'Очистка форматирования vs обычное копирование-вставка',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Часто простое <code>Ctrl + V</code> переносит нежелательные форматы, которые ломают дизайн вашего документа. Использование онлайн-<strong>инструмента удаления форматирования</strong> гарантирует, что вы сохраните только суть сообщения.'
    },
  ],
  ui: {
    labelInput: 'Исходный текст (с форматом)',
    labelOutput: 'Обычный текст (чистый)',
    placeholderInput: 'Вставьте сюда текст из Word, веба или PDF...',
    placeholderOutput: 'Чистый текст появится здесь...',
    btnCopy: 'Скопировать результат',
    btnClear: 'Очистить всё',
    toastCopied: 'Чистый текст скопирован!'
  }
};
