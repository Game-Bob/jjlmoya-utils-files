import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashVerifierUI } from '../ui';

const slug = 'verify-file-hash';
const title = '온라인 해시 확인 도구 — SHA 256, MD5 및 SHA 1';
const description =
  '파일의 SHA256, MD5 또는 SHA1 디지털 서명을 비교하여 무결성을 계산하고 확인하세요. 다운로드한 파일이 변조되지 않았는지 확인할 수 있습니다.';

const faqData = [
  {
    question: '파일이 수정되었는지 어떻게 확인하나요?',
    answer:
      '가장 안전한 방법은 해시(Hash) 값을 비교하는 것입니다. 해시는 고유한 디지털 지문과 같습니다. 파일의 단 1비트만 바뀌어도 해시 값은 완전히 달라집니다. 가져온 해시 값과 작성자가 제공한 값을 비교하여 무결성을 보장할 수 있습니다.',
  },
  {
    question: '어떤 알고리즘이 더 좋나요: MD5 또는 SHA-256?',
    answer:
      'MD5는 매우 빠르지만 의도적인 공격에 대해 보안성이 낮은 것으로 간주됩니다. SHA-256은 현재의 보안 표준이며 "위조"하기가 훨씬 더 어렵습니다. 대부분의 파일 무결성 체크에는 SHA-256을 사용하는 것이 권장됩니다.',
  },
  {
    question: '파일 이름을 바꾸면 해시 값이 변하나요?',
    answer:
      '사실, 파일 이름을 바꾸는 것은 해시 값을 변경하지 않습니다. 해시는 파일의 이름이나 생성 날짜가 아니라 내부 콘텐츠(바이트)를 기반으로 계산됩니다. 해시가 변한다면 그것은 내부 데이터가 수정되었기 때문입니다.',
  },
  {
    question: '해시 계산을 위해 내 파일이 서버로 업로드되나요?',
    answer:
      '아니요. 당사의 도구는 Web Crypto API를 사용하므로 모든 계산이 브라우저 내에서 로컬로 이루어집니다. 파일이 컴퓨터를 떠나지 않으므로 100% 개인정보가 보호되며, 업로드가 필요 없어 계산 속도도 훨씬 빠릅니다.',
  },
];

const howToData = [
  {
    name: '파일 선택',
    text: '확인하려는 파일을 도구로 드래그하거나 선택하세요.',
  },
  {
    name: '알고리즘 선택',
    text: '가지고 있는 서식에 따라 SHA-256, MD5 또는 SHA-1 중 하나를 선택하세요.',
  },
  {
    name: '결과 비교',
    text: '예상 해시 값을 붙여넣으면 시스템이 즉시 일치(성공) 또는 불일치(오류) 여부를 알려줍니다.',
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

export const content: ToolLocaleContent<HashVerifierUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '출처 및 참고문헌',
  bibliography: [
    {
      name: 'NIST: 해시 함수 표준',
      url: 'https://csrc.nist.gov/projects/hash-functions',
    },
    {
      name: 'MDN: Web Crypto API',
      url: 'https://developer.mozilla.org/ko/docs/Web/API/Web_Crypto_API',
    },
    {
      name: '위키백과: 암호화 해시 함수',
      url: 'https://ko.wikipedia.org/wiki/암호_해시_함수',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '파일 해시란 무엇이며 왜 보안에 필수적인가요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '해시는 각 파일에 대해 고유한 <strong>디지털 지문</strong>입니다. 이는 수학적 알고리즘(SHA-256 등)에 의해 생성된 영숫자 문자열입니다. 주요 특징은 "단방향성"입니다. 파일에서 해시를 얻을 수는 있지만 해시에서 파일을 재구성할 수는 없습니다.',
    },
    {
      type: 'paragraph',
      html: '소프트웨어, ISO 이미지 또는 민감한 문서를 다운로드할 때 <strong>온라인 해시 확인 도구</strong>를 사용하는 것은 매우 중요합니다. 작성자는 일반적으로 파일의 MD5 또는 SHA256을 공개하므로, 다운로드한 파일이 손상이나 악의적인 주입 없이 업로드된 것과 정확히 일치하는지 확인할 수 있습니다.',
    },
    {
      type: 'title',
      text: 'SHA-256 vs MD5: 어떤 것을 사용해야 하나요?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>MD5</strong> 알고리즘은 빠른 속도 덕분에 수년간 인기가 있었지만, 오늘날에는 "충돌"에 취약하여 암호학적으로 안전하지 않은 것으로 간주됩니다. 하지만 여전히 단순한 무결성 체크(다운로드 손상 여부 등) 용도로 사용됩니다.',
    },
    {
      type: 'paragraph',
      html: '최상의 보안을 원하신다면 <strong>SHA-256</strong>(SHA-2 제품군 중 일부)이 전 세계 보안 기관이 권장하는 표준입니다. 두 개의 서로 다른 파일이 동일한 SHA-256 해시를 생성하는 것은 사실상 불가능합니다.',
    },
    {
      type: 'title',
      text: '완벽한 개인정보 보호: 브라우저 내 100% 계산',
      level: 3,
    },
    {
      type: 'tip',
      title: '업로드 불필요',
      html: '<p>당사의 도구는 사용자의 컴퓨터 성능을 사용하여 파일을 처리합니다. <strong>Web Crypto API</strong>를 사용함으로써 파일을 서버에 "업로드"할 필요가 없습니다. 즉, 몇 기가바이트의 파일도 수초 만에 확인할 수 있으며 인터넷 대역폭을 소모하지 않고 파일의 내용이 기기 밖으로 나가는 일도 없습니다.</p>',
    },
  ],
  ui: {
    labelFile: '파일 선택 또는 드래그',
    labelAlgorithm: '알고리즘 선택',
    labelExpectedHash: '예상 해시 (선택 사항)',
    labelStatus: '비교 상태',
    placeholderHash: '작성자가 제공한 해시를 여기에 붙여넣으세요...',
    btnCompare: '무결성 확인',
    btnClear: '모두 지우기',
    toastCopied: '계산된 해시가 복사되었습니다!',
    statusMatch: '해시가 일치합니다! 파일이 신뢰할 수 있는 상태입니다.',
    statusMismatch: '해시가 일치하지 않습니다. 파일이 손상되었거나 변조되었을 수 있습니다.',
    statusWaiting: '비교할 해시 입력을 대기 중...',
  },
};
