import type { BibliographyEntry, KnownLocale } from '../../types';

const commonMarkUrl = 'https://spec.commonmark.org/current/';
const htmlContentUrl = 'https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories';

const bibliographyByLocale: Record<KnownLocale, BibliographyEntry[]> = {
  de: [
    { name: 'CommonMark-Spezifikation: Markdown-Syntax', url: commonMarkUrl },
    { name: 'MDN: HTML-Inhaltselemente', url: htmlContentUrl },
  ],
  en: [
    { name: 'CommonMark Spec: Markdown Syntax', url: commonMarkUrl },
    { name: 'MDN: HTML Content Elements', url: htmlContentUrl },
  ],
  es: [
    { name: 'Especificación CommonMark: sintaxis Markdown', url: commonMarkUrl },
    { name: 'MDN: elementos de contenido HTML', url: htmlContentUrl },
  ],
  fr: [
    { name: 'Spécification CommonMark: syntaxe Markdown', url: commonMarkUrl },
    { name: 'MDN: éléments de contenu HTML', url: htmlContentUrl },
  ],
  id: [
    { name: 'Spesifikasi CommonMark: Sintaks Markdown', url: commonMarkUrl },
    { name: 'MDN: Elemen Konten HTML', url: htmlContentUrl },
  ],
  it: [
    { name: 'Specifiche CommonMark: sintassi Markdown', url: commonMarkUrl },
    { name: 'MDN: elementi di contenuto HTML', url: htmlContentUrl },
  ],
  ja: [
    { name: 'CommonMark仕様: Markdown構文', url: commonMarkUrl },
    { name: 'MDN: HTMLコンテンツ要素', url: htmlContentUrl },
  ],
  ko: [
    { name: 'CommonMark 사양: Markdown 구문', url: commonMarkUrl },
    { name: 'MDN: HTML 콘텐츠 요소', url: htmlContentUrl },
  ],
  nl: [
    { name: 'CommonMark-specificatie: Markdown-syntaxis', url: commonMarkUrl },
    { name: 'MDN: HTML-inhoudselementen', url: htmlContentUrl },
  ],
  pl: [
    { name: 'Specyfikacja CommonMark: składnia Markdown', url: commonMarkUrl },
    { name: 'MDN: elementy treści HTML', url: htmlContentUrl },
  ],
  pt: [
    { name: 'Especificação CommonMark: sintaxe Markdown', url: commonMarkUrl },
    { name: 'MDN: elementos de conteúdo HTML', url: htmlContentUrl },
  ],
  ru: [
    { name: 'Спецификация CommonMark: синтаксис Markdown', url: commonMarkUrl },
    { name: 'MDN: элементы содержимого HTML', url: htmlContentUrl },
  ],
  sv: [
    { name: 'CommonMark-specifikationen: Markdown-syntax', url: commonMarkUrl },
    { name: 'MDN: HTML-innehållselement', url: htmlContentUrl },
  ],
  tr: [
    { name: 'CommonMark Belirtimi: Markdown Sözdizimi', url: commonMarkUrl },
    { name: 'MDN: HTML İçerik Öğeleri', url: htmlContentUrl },
  ],
  zh: [
    { name: 'CommonMark 规范：Markdown 语法', url: commonMarkUrl },
    { name: 'MDN：HTML 内容元素', url: htmlContentUrl },
  ],
};

export function getBibliography(locale: KnownLocale): BibliographyEntry[] {
  return bibliographyByLocale[locale];
}
