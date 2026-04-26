import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FormatStripperUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'format-stripper';
const title = '텍스트 서식 지우기 온라인 무료 도구 — 스타일 클리너';
const description =
  '어떤 텍스트에서든 굵게, 기울임꼴, 링크 및 색상을 제거합니다. HTML이나 Word를 즉시 일반 텍스트(txt)로 변환하는 전문 스타일 클리너입니다.';

const faqData = [
  {
    question: '텍스트에서 굵게 및 기울임꼴을 어떻게 제거하나요?',
    answer:
      '텍스트를 도구에 붙여넣기만 하면 됩니다. 시스템이 자동으로 스타일을 감지하고 제거하여, 장식 없는 순수한 일반 텍스트만 남겨줍니다.'},
  {
    question: 'Microsoft Word나 Google Docs 텍스트와 호환되나요?',
    answer:
      '네, 특별히 그 용도로 설계되었습니다. Word나 Docs에서 복사할 때 많은 "쓰레기" 코드가 함께 따라옵니다. 당사의 클리너는 이러한 숨겨진 스타일을 모두 제거하여 다른 앱에 깔끔한 텍스트를 붙여넣을 수 있게 해줍니다.'},
  {
    question: 'HTML을 일반 텍스트로 변환할 수 있나요?',
    answer:
      '정확합니다. HTML 코드 조각을 붙여넣으면 도구가 모든 태그(<div>, <a>, <strong> 등)를 제거하고 읽을 수 있는 텍스트 내용만 반환해 줍니다.'},
  {
    question: '비밀 정보를 붙여넣어도 안전한가요?',
    answer:
      '매우 안전합니다. 모든 처리는 브라우저 내에서 100% 로컬로 이루어집니다. 데이터가 서버로 전송되지 않으므로 텍스트의 개인정보가 완벽하게 보호됩니다.'},
];

const howToData = [
  {
    name: '텍스트 복사',
    text: 'Word, 웹사이트 또는 이메일에서 서식이 있는 텍스트를 복사하세요.'},
  {
    name: '클리너에 붙여넣기',
    text: '입력 영역에 콘텐츠를 넣으세요. 스타일 제거는 자동으로 수행됩니다.'},
  {
    name: '결과 복사',
    text: '텍스트가 이제 단순하고 깨끗해졌습니다. 복사해서 서식 문제 없이 원하는 곳에 사용하세요.'},
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }}))};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text}))};

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

export const content: ToolLocaleContent<FormatStripperUI> = {
  slug,
  title,
  description,
  bibliography,
  faq: faqData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '"서식 지우기"란 무엇이며 왜 필요한가요?',
      level: 2},
    {
      type: 'paragraph',
      html: '서식 지우기란 <strong>리치 텍스트를 일반 텍스트(Plain Text)로 변환</strong>하는 과정입니다. 웹사이트, eBook 또는 Word 문서에서 정보를 복사할 때 해당 텍스트는 폰트 종류, 크기, 색상, 링크 및 CSS 스타일과 같은 "숨겨진 짐"을 수반합니다. 당사의 도구는 이러한 디지털 쓰레기를 제거하는 필터 역할을 합니다.'},
    {
      type: 'title',
      text: '텍스트 클리너 사용의 장점',
      level: 2},
    {
      type: 'list',
      items: [
        '<strong>범용적 호환성:</strong> 일반 텍스트는 오래된 이메일부터 WordPress 같은 최신 CMS까지 모든 프로그램에서 작동합니다.',
        '<strong>깔끔한 코드:</strong> HTML 태그나 RTF 스타일을 가져오지 않고 코드에 텍스트를 붙여넣어야 하는 개발자에게 이상적입니다.',
        '<strong>SEO 및 가독성:</strong> 불규칙한 서식을 제거하여 콘텐츠가 웹사이트의 시각적 일관성을 유지하도록 합니다.',
        '<strong>완벽한 개인정보 보호:</strong> 처리는 로컬에서 이루어집니다. 텍스트가 브라우저를 벗어나지 않습니다.',
      ]},
    {
      type: 'title',
      text: '서식 지우기 vs 단순 복사-붙여넣기',
      level: 2},
    {
      type: 'paragraph',
      html: '단순한 <code>Ctrl + V</code>는 붙여넣을 대상 문서의 디자인을 깨뜨리는 불필요한 서식을 가져오는 경우가 많습니다. 온라인 <strong>서식 제거기</strong>를 사용하면 메시지의 본질만 유지할 수 있어 기술적 간섭 없이 나만의 스타일을 처음부터 적용할 수 있습니다.'},
  ],
  ui: {
    labelInput: '원본 텍스트 (서식 포함)',
    labelOutput: '일반 텍스트 (깨끗함)',
    placeholderInput: 'Word, 웹 또는 PDF의 텍스트를 여기에 붙여넣으세요...',
    placeholderOutput: '깨끗한 텍스트가 여기에 나타납니다...',
    btnCopy: '결과 복사',
    btnClear: '모두 지우기',
    toastCopied: '깨끗한 텍스트가 복사되었습니다!'}};
