import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonToCsvUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'json-to-excel-csv-converter';
const title = 'JSON CSV 변환기 온라인 무료: Excel로 내보내기';
const description =
  'JSON 파일을 빠르고 쉽게 CSV 테이블로 변환하세요. JSON 파일을 Excel이나 Google Sheets에서 열어야 하는 데이터 분석가에게 이상적입니다.';

const faqData = [
  {
    question: 'Excel용 JSON을 CSV로 어떻게 변환하나요?',
    answer:
      'JSON 코드를 붙여넣거나 파일을 도구에 업로드하기만 하면 됩니다. 시스템이 자동으로 데이터 구조를 처리하고 Microsoft Excel이나 Google Sheets에서 직접 열 수 있는 CSV 파일을 생성합니다.'
  },
  {
    question: '이 웹사이트에서 데이터를 변환하는 것이 안전한가요?',
    answer:
      '네, 100% 안전합니다. 변환은 JavaScript를 사용하여 브라우저에서 완전히 이루어집니다. 어떤 데이터도 당사 서버로 전송되지 않으므로 정보는 비공개로 안전하게 유지됩니다.'
  },
  {
    question: 'JSON이 중첩(nested)된 경우 어떻게 되나요?',
    answer:
      '당사의 기본 변환기는 객체 배열에 최적화되어 있습니다. 매우 깊은 중첩이 있는 경우, 도구는 Excel에서 읽을 수 있는 표를 보장하기 위해 첫 번째 수준의 속성을 평면화하려고 시도합니다.'
  },
  {
    question: '다운로드 대신 CSV를 직접 복사할 수 있나요?',
    answer:
      '물론입니다. "CSV 다운로드" 버튼 외에도 "결과 복사" 옵션이 있어 내용을 텍스트 편집기나 스프레드시트에 직접 붙여넣을 수 있습니다.'
  },
];

const howToData = [
  {
    name: 'JSON 붙여넣기',
    text: '입력 영역에 JSON 코드를 입력하거나 .json 파일을 업로드하세요.'
  },
  {
    name: '데이터 처리',
    text: '도구가 필드와 구조를 자동으로 식별하여 행과 열로 정리합니다.'
  },
  {
    name: '다운로드 또는 복사',
    text: '"CSV 다운로드"를 클릭하여 파일을 저장하거나 "결과 복사"를 클릭하여 즉시 사용하세요.'
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  inLanguage: 'ko'
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
      text: '데이터 분석을 위해 왜 JSON을 CSV로 변환해야 하나요?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'JSON은 현대 API의 표준 형식이지만 사람이 직접 분석하기에는 쉽지 않습니다. <strong>JSON-CSV 변환기</strong>를 사용하면 복잡한 구조를 행과 열로 바꾸어 <strong>Microsoft Excel</strong>, Numbers 또는 Google Sheets와 같은 강력한 도구에서 데이터를 쉽게 조작할 수 있습니다.'
    },
    {
      type: 'title',
      text: '완벽한 개인정보 보호: 파일 업로드 없이 변환',
      level: 2
    },
    {
      type: 'paragraph',
      html: '대부분의 온라인 변환기는 데이터를 서버로 업로드합니다. 당사의 도구는 다릅니다. <strong>변환이 100% 로컬</strong>로 이루어집니다. 브라우저에서 JavaScript를 사용하므로 데이터가 컴퓨터를 벗어나지 않습니다. 이는 민감한 정보, 고객 목록 또는 회사 내부 보고서를 다룰 때 매우 중요합니다.'
    },
    {
      type: 'title',
      text: '완벽한 변환을 위한 기술 팁',
      level: 3
    },
    {
      type: 'list',
      items: [
        'JSON이 <strong>객체 배열</strong>(예: [{}, {}])인지 확인하세요.',
        'CSV 열의 일관성을 유지하기 위해 모든 객체가 유사한 속성을 가지고 있는지 확인하세요.',
        '특수 문자가 있는 경우 Excel에서의 문제를 방지하기 위해 CSV가 <strong>UTF-8</strong>로 내보내집니다.',
      ]
    },
  ],
  ui: {
    statusWaiting: '유효한 JSON 대기 중',
    statusValid: '유효한 JSON',
    statusInvalid: '유효하지 않은 JSON',
    labelFlatten: '객체 평탄화',
    zoneLabel: 'JSON을 여기에 붙여넣거나 파일을 드래그하세요',
    placeholderJson: '[{"id": 1, "name": "John", "details": {"age": 30}}]',
    btnCopyCsv: 'CSV 복사',
    btnDownloadCsv: 'Excel 다운로드 (CSV)',
    copyFeedback: '복사됨!'
  }
};
