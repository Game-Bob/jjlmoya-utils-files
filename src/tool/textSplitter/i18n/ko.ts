import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextSplitterUI } from '../ui';

const slug = 'text-splitter';
const title = '텍스트 나누기 온라인 무료 도구 — 단락, 문장 또는 길이별 분할';
const description =
  '긴 텍스트를 자동으로 작은 부분으로 나눕니다. 단어 수, 글자 수, 단락 또는 문장별 분할 방법 중에서 선택하세요.';

const faqData = [
  {
    question: 'ChatGPT나 AI를 위해 텍스트를 어떻게 나누나요?',
    answer:
      '많은 AI 시스템은 메시지당 글자 수 제한이 있습니다. 당사의 도구를 사용하면 긴 프롬프트를 작은 부분(예: 2000자마다)으로 나누어 정보 손실 없이 순차적으로 보낼 수 있습니다.',
  },
  {
    question: '비공개 텍스트를 분할기에 붙여넣어도 안전한가요?',
    answer:
      '매우 안전합니다. 분할 로직은 JavaScript를 사용하여 브라우저에서 100% 실행됩니다. 어떤 텍스트도 당사 서버로 전송되지 않으므로 데이터는 기기 내에서 비공개로 유지됩니다.',
  },
  {
    question: '분할할 수 있는 텍스트 크기에 제한이 있나요?',
    answer:
      '처리가 로컬에서 이루어지기 때문에 엄격한 제한을 두지 않습니다. 수 메가바이트의 텍스트도 수초 만에 나눌 수 있지만, 성능은 컴퓨터 메모리에 따라 달라질 수 있습니다.',
  },
  {
    question: '나누어진 부분에 번호가 추가되나요?',
    answer:
      '현재 도구는 분리된 블록을 반환합니다. 이를 하나씩 복사할 수 있습니다. 많은 사용자가 각 세그먼트를 다른 앱으로 보내는 방식을 수동으로 제어하기 위해 이 형식을 선호합니다.',
  },
];

const howToData = [
  {
    name: '텍스트 붙여넣기',
    text: '나누려는 긴 텍스트를 기본 입력 영역에 붙여넣으세요.',
  },
  {
    name: '분할 설정',
    text: '방법(글자, 단어, 문장 또는 단락)을 선택하고 각 부분의 최대값을 설정하세요.',
  },
  {
    name: '부분 복사',
    text: '생성된 블록이 표시됩니다. 필요한 부분을 복사하여 원하는 곳에 사용하세요.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<TextSplitterUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '출처 및 참고문헌',
  bibliography: [
    { name: 'Unicode 줄 바꿈 알고리즘', url: 'https://unicode.org/reports/tr14/' },
    { name: 'NLP: 문장 분할 기술', url: 'https://ko.wikipedia.org/wiki/%EB%AC%B8%EC%9E%A5_%EA%B2%BD%EA%B3%84_%EC%A4%91%EC%96%B5_ED%95%B4%EC%86%8C' },
    { name: 'LLM 컨텍스트 윈도우 한계', url: 'https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '왜 온라인 텍스트 분할기가 필요한가요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '디지털 시대에 매우 긴 텍스트를 다루는 것은 어려울 수 있습니다. 코드를 모듈로 나누어야 하는 프로그래머, 소셜 미디어용 콘텐츠를 조정하는 작가, 또는 ChatGPT와 같은 <strong>대규모 언어 모델(LLM)</strong>을 활용하는 사용자에게 <strong>텍스트 분할기</strong>는 필수적인 도구입니다.',
    },
    {
      type: 'title',
      text: '지능형 분할 방법',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>글자 수 기준:</strong> 기술적 제한을 엄격히 준수하기 위해 정확합니다.',
        '<strong>단어 수 기준:</strong> SEO나 가독성을 위해 특정 길이를 목표로 하는 기사나 블로그에 이상적입니다.',
        '<strong>문장 기준:</strong> 각 블록의 문맥을 유지하면서 생각이 중간에 끊기지 않도록 보장합니다.',
        '<strong>단락 기준:</strong> 복잡한 문서의 논리적 구조를 유지하는 데 가장 좋은 옵션입니다.',
      ],
    },
    {
      type: 'title',
      text: '개인정보 보호 및 속도: 로컬 처리',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '당사의 <strong>온라인 텍스트 분할기</strong>는 콘텐츠를 서버로 "업로드"하지 않습니다. 모든 것이 브라우저에서 즉시 처리됩니다. 즉, 민감한 문서, 계약서 또는 개인 이메일을 아무도 볼 수 없다는 확신을 가지고 안심하고 작업할 수 있습니다.',
    },
  ],
  ui: {
    labelInput: '분할할 텍스트',
    labelOutput: '결과 (한 줄에 하나씩)',
    placeholderInput: '쉼표, 공백 또는 기타 구분자로 구분된 목록을 여기에 붙여넣으세요...',
    placeholderOutput: '목록이 여기에 나타납니다...',
    labelDelimiter: '구분자',
    optComma: '쉼표 (,)',
    optSemicolon: '세미콜론 (;)',
    optSpace: '공백',
    optCustom: '사용자 정의',
    labelCustom: '사용자 정의 구분자',
    placeholderCustom: '구분자를 입력하세요...',
    optTrim: '공백 제거',
    optUnique: '중복 제거',
    optClean: '빈 항목 제거',
    optNumbered: '줄 번호 추가',
    statLines: '결과 줄 수',
    statChars: '문자 수',
    btnCopy: '목록 복사',
    btnClear: '지우기',
    toastCopied: '클립보드에 복사되었습니다!',
  },
};
