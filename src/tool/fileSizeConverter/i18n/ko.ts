import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FileSizeConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'file-size-converter-korean';
const title = '파일 크기 변환기 및 시각화 도구 - 이진수 및 십진수';
const description =
  '파일 크기 단위를 즉시 변환하세요. 다운로드 소요 시간을 확인하고 기기별 저장 공간 사용량을 시각화합니다. 100% 로컬 처리.';

const faqData = [
  {
    question: '십진수(KB)와 이진수(KiB)의 차이점은 무엇인가요?',
    answer:
      '십진수는 1000의 거듭제곱(KB, MB, GB)을 사용하고, 이진수는 1024의 거듭제곱(KiB, MiB, GiB)을 사용합니다. 이것이 바로 "1GB" 드라이브가 컴퓨터에서 더 작게 표시되는 이유입니다. 제조사는 십진수를 사용하지만 운영 체제는 이진수를 사용하기 때문입니다.',
  },
  {
    question: '이 도구를 사용할 때 내 데이터는 안전한가요?',
    answer:
      '물론입니다. 모든 계산은 JavaScript를 사용하여 브라우저 내에서 완전히 이루어집니다. 어떤 데이터도 서버로 전송되지 않습니다. 귀하의 파일과 값은 귀하의 컴퓨터를 절대 떠나지 않습니다.',
  },
  {
    question: '파일을 업로드하여 크기를 확인할 수 있나요?',
    answer:
      '네! 파일을 입력 영역에 직접 드래그 앤 드롭하면 도구가 자동으로 크기를 읽습니다. 파일 자체는 절대 업로드되지 않으며 크기 정보만 로컬에서 사용됩니다.',
  },
  {
    question: '왜 1TB 외장 드라이브가 컴퓨터에서는 용량이 적게 표시되나요?',
    answer:
      '외장 드라이브는 십진수(1TB = 1,000,000,000,000바이트)를 기준으로 판매되지만, 운영 체제는 이를 이진수(1TiB = 1,099,511,627,776바이트)로 표시합니다. 이 도구는 두 가지 관점을 모두 이해하는 데 도움이 됩니다.',
  },
  {
    question: '다운로드 시간 계산은 얼마나 정확한가요?',
    answer:
      '계산은 이상적인 네트워크 속도를 기준으로 합니다. 실제 속도는 네트워크 혼잡도, 거리 및 하드웨어에 따라 달라질 수 있습니다. 이를 보증이 아닌 대략적인 추정치로 활용해 주세요.',
  },
];

const howToData = [
  {
    name: '파일 크기 입력',
    text: '입력 필드에 숫자(예: "500" 또는 "1.5")를 입력하고 단위(KB, MB, GB 등)를 선택하세요.',
  },
  {
    name: '표준 선택',
    text: '십진수(마케팅 표준)와 이진수(컴퓨팅 표준) 사이를 전환하여 값이 어떻게 변하는지 확인하세요.',
  },
  {
    name: '즉각적인 변환 확인',
    text: '바이트부터 페타바이트까지 모든 단위가 즉시 표시됩니다. 아무 블록이나 클릭하면 해당 값이 클립보드에 복사됩니다.',
  },
  {
    name: '문맥 시각화',
    text: '변환 결과 아래에서 다양한 네트워크에서의 다운로드 소요 시간과 파일이 여러 기기에서 차지하는 공간을 확인하세요.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<FileSizeConverterUI> = {
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
      text: '왜 파일 크기를 변환해야 할까요? 십진수와 이진수의 이해',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>"1TB"</strong> 드라이브를 구매하면 제조사는 이를 십진수(1,000 GB)로 측정합니다. 하지만 운영 체제는 이를 이진수(1,024 GiB = 약 931 GB)로 표시합니다. 이러한 차이는 사용자를 혼란스럽게 합니다. <strong>파일 크기 변환기</strong>는 이 간극을 메워주며, 어떤 단위에서든 파일이 정확히 무엇을 의미하는지 보여줍니다.',
    },
    {
      type: 'title',
      text: '실제 활용 문맥: 다운로드 및 저장 공간',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '파일이 "50MB"라는 사실만으로는 문맥 없이는 큰 의미가 없습니다. 4G에서 다운로드하는 데 얼마나 걸릴까요? iPhone에서는 어느 정도의 공간을 차지할까요? 저희 도구는 실제 네트워크와 기기에 대한 실시간 계산을 통해 즉각적인 답변을 제공합니다.',
    },
    {
      type: 'title',
      text: '숨겨진 비용: 저장 공간의 수학',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '외장 "1 TB" 드라이브는 실제로는 <strong>약 931 GiB</strong>입니다 (제조사의 마케팅 기법)',
        '4K 영화(약 100GB)는 광랜에서 <strong>4초</strong>면 되지만 4G에서는 <strong>13분</strong>이 소요됩니다',
        '「256GB」 iPhone은 OS가 공간을 차지하고 이진법 계산이 차이를 증폭시키기 때문에 표시된 것보다 적게 저장됩니다',
      ],
    },
    {
      type: 'title',
      text: '믿을 수 있는 기술적 정밀함',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '모든 변환은 <strong>NIST 표준</strong>을 따릅니다. 십진수(SI)는 1000을 밑으로 사용하고 이진수(IEC)는 1024를 밑으로 사용합니다. 모든 계산은 <strong>100% 로컬</strong>에서 이루어지므로 업로드나 서버 전송 없이 완전한 개인 정보 보호가 보장됩니다.',
    },
  ],
  ui: {
    inputPlaceholder: '숫자를 입력하세요 (예: 1.5 또는 500)',
    selectUnit: '단위',
    standardLabel: '표준:',
    decimalOption: '십진수',
    binaryOption: '이진수',
    conversionTitle: '변환 결과',
    networkSpeedsTitle: '다운로드 시간',
    deviceStorageTitle: '기기 저장 공간 영향',
    copyFeedback: '복사되었습니다!',
    dragDropText: '파일을 여기에 놓아 크기를 읽으세요',
    fileTooBig: '파일이 너무 큽니다',
  },
};
