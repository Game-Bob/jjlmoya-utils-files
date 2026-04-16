import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextToMarkdownUI } from '../ui';

const slug = 'text-to-markdown-converter';
const title = '텍스트 Markdown 변환기 온라인 무료 도구 — 문서 서식 지정';
const description =
  '기본 텍스트를 Markdown 코드로 빠르게 변환하세요. 단락, 헤더 및 목록을 GitHub, Reddit 및 MD 편집기와 호환되는 형식으로 바꿔줍니다.';

const faqData = [
  {
    question: 'Markdown이란 무엇이며 어디에 사용되나요?',
    answer:
      'Markdown은 일반 텍스트 문법을 사용하여 텍스트 서식을 지정하는 경량 마크업 언어입니다. 읽고 쓰기가 쉽기 때문에 GitHub, Reddit, Slack과 같은 플랫폼 및 정적 사이트 생성기에서 널리 사용됩니다.',
  },
  {
    question: '변환 중에 내 텍스트는 안전한가요?',
    answer:
      '네, 100% 안전합니다. 변환은 JavaScript를 사용하여 브라우저에서 완전히 이루어집니다. 어떤 정보도 당사 서버로 전송되지 않으므로 문서의 비밀이 유지됩니다.',
  },
  {
    question: '제목과 목록은 어떻게 변환되나요?',
    answer:
      '당사의 도구는 텍스트의 기본 구조를 식별합니다. 단락 앞에 단일 행이 있는 경우 이를 헤더로 처리할 수 있습니다. 대시나 숫자로 시작하는 행은 표준 Markdown 목록으로 서식이 지정됩니다.',
  },
  {
    question: '복잡한 표나 코드에도 사용할 수 있나요?',
    answer:
      '이 도구는 기본 텍스트 서식(단락, 목록, 굵게, 기울임꼴)을 위해 설계되었습니다. 다중 열 표와 같은 매우 복잡한 구조의 경우 생성된 Markdown에서 수동 조정이 필요할 수 있습니다.',
  },
];

const howToData = [
  {
    name: '텍스트 붙여넣기',
    text: '서식을 지정하려는 일반 텍스트를 원본 필드에 넣으세요.',
  },
  {
    name: '자동 변환',
    text: '도구가 텍스트를 처리하고 식별된 다양한 요소에 Markdown 문법을 적용합니다.',
  },
  {
    name: '복사 또는 다운로드',
    text: '"결과 복사" 또는 ".md 다운로드"를 클릭하여 서식이 지정된 파일을 받으세요.',
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

export const content: ToolLocaleContent<TextToMarkdownUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '출처 및 참고문헌',
  bibliography: [
    { name: 'CommonMark: 표준 Markdown 사양', url: 'https://commonmark.org/' },
    { name: 'Daring Fireball: 원본 Markdown 프로젝트', url: 'https://daringfireball.net/projects/markdown/' },
    { name: 'GitHub Flavored Markdown (GFM)', url: 'https://github.github.com/gfm/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '왜 텍스트를 Markdown으로 변환해야 하나요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '개발자, 블로거 또는 기술 작가라면 아마 매일 <strong>Markdown</strong>을 사용하고 있을 것입니다. <strong>일반 텍스트를 Markdown으로</strong> 변환하면 HTML, PDF 또는 WordPress 및 정적 사이트 생성기와 같은 플랫폼으로 쉽게 내보낼 수 있는 깨끗한 구조를 유지할 수 있습니다.',
    },
    {
      type: 'title',
      text: '완벽한 개인정보 보호: 100% 로컬 변환',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '대부분의 온라인 변환기는 서버에서 텍스트를 처리합니다. 당사의 <strong>텍스트-Markdown 변환기</strong>는 브라우저에서 완전히 실행됩니다. 데이터가 컴퓨터를 벗어나지 않으므로 내부 문서, 회의록 또는 개인적인 아이디어를 초안으로 작성하는 데 이상적입니다.',
    },
    {
      type: 'title',
      text: '주요 특징',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>헤더 및 제목</strong> 자동 식별.',
        '<strong>글머리 기호 및 번호 매기기 목록</strong> 변환.',
        '<strong>굵게 및 기울임꼴</strong>과 같은 기본 서식 지원.',
        '즉시 <strong>.md 파일</strong>로 내보내기.',
      ],
    },
  ],
  ui: {
    labelInput: '일반 텍스트',
    labelOutput: '서식 지정된 Markdown',
    placeholderInput: '여기에 텍스트를 붙여넣으세요...',
    placeholderOutput: '생성된 Markdown 코드가 여기에 나타납니다...',
    btnConvert: 'Markdown으로 변환',
    btnDownload: '.md 다운로드',
    btnCopy: '결과 복사',
    btnClear: '모두 지우기',
    toastCopied: 'Markdown 코드가 복사되었습니다!',
    toastDownloaded: '.md 파일을 다운로드 중...',
  },
};
