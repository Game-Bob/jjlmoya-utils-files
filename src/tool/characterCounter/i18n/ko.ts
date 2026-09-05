import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CharacterCounterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'character-counter';
const title = '글자 수 세기 및 단어 수 세기 온라인 도구';
const description =
  '글자 수, 단어 수, 줄 수, 단락 수를 실시간으로 계산하는 온라인 도구입니다. 예상 읽기 시간과 말하기 시간을 확인하세요. SEO와 SNS 최적화에 완벽합니다.';

const faqData = [
  {
    question: 'SEO에서 글자 수 세기가 왜 중요한가요?',
    answer:
      '검색 엔진은 권장 제한 사항이 있습니다. 제목은 약 60자, 메타 설명은 155~160자입니다. 이 제한을 초과하면 검색 결과에서 콘텐츠가 잘릴 수 있습니다.'},
  {
    question: '글자 수 세기에 공백이 포함되나요?',
    answer:
      '네, 기본적으로 공백을 포함한 모든 입력을 계산합니다. 하지만 저희 도구는 필요에 따라 공백 포함 및 공백 제외 수치를 모두 상세히 제공합니다.'},
  {
    question: '읽기 시간은 어떻게 계산되나요?',
    answer:
      '읽기 시간은 성인 평균 읽기 속도(분당 약 400~600자)를 기준으로 합니다. 말하기 시간은 분당 약 300자 정도로 계산되어 원고 작성이나 발표 자료에 적합합니다.'},
  {
    question: '긴 텍스트를 여기서 분석해도 안전한가요?',
    answer:
      '물론입니다. 분석은 브라우저 내에서 로컬로 실행됩니다. 텍스트가 서버로 전송되지 않으므로 기사 전문이나 문서를 안심하고 처리할 수 있습니다.'},
];

const howToData = [
  {
    name: '텍스트 입력',
    text: '분석하려는 텍스트를 메인 영역에 직접 입력하거나 붙여넣으세요.'},
  {
    name: '통계 확인',
    text: '단어 수, 글자 수, 줄 수, 단락 수가 실시간으로 업데이트되는 것을 확인하세요.'},
  {
    name: '시간 분석',
    text: '콘텐츠의 예상 읽기 시간과 말하기 시간 표시기를 확인하세요.'},
  {
    name: '길이 최적화',
    text: 'SNS나 SEO(제목, 설명) 권장 제한에 맞춰 텍스트를 조정하세요.'},
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
  inLanguage: 'ko'};

export const content: ToolLocaleContent<CharacterCounterUI> = {
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
      text: '디지털 텍스트에서 "정확성"의 중요성',
      level: 2},
    {
      type: 'paragraph',
      html: '현대 디지털 세계에서 "단어의 경제성"은 필수적입니다. 우리는 더 이상 인간에게만 읽히기 위해 쓰는 것이 아니라, 알고리즘에 의해 처리되기 위해서도 씁니다. 구글은 제목을 약 60자에서 자릅니다. 트위터(현 X)는 280자로 제한합니다. 효과적인 판매 이메일은 30초 이내에 읽을 수 있어야 합니다.'},
    {
      type: 'paragraph',
      html: '이 <strong>글자 수 및 단어 수 세기 도구</strong>는 단순히 수치를 제공하는 것을 넘어 커뮤니케이션을 최적화하는 데 도움을 주도록 설계되었습니다. <em>읽기 시간</em>이나 <em>단어 밀도</em>와 같은 지표를 계산함으로써 "텍스트 쓰기"에서 "콘텐츠 디자인"으로 나아갈 수 있습니다.'},
    {
      type: 'title',
      text: 'SEO 최적화',
      level: 3},
    {
      type: 'paragraph',
      html: '검색 엔진의 제한은 엄격합니다. 제한을 초과하면 메시지가 생략(...)되어 CTR(클릭률)이 급격히 떨어집니다.'},
    {
      type: 'table',
      headers: ['항목', '권장 제한'],
      rows: [
        ['메타 제목', '50: 60자'],
        ['메타 설명', '150: 160자'],
        ['구글 광고(제목)', '30자'],
      ]},
    {
      type: 'title',
      text: '소셜 미디어',
      level: 3},
    {
      type: 'paragraph',
      html: '각 플랫폼은 고유한 언어와 이상적인 길이를 가지고 있습니다. 제한 수치가 높더라도 참여도가 가장 높은 "스위트 스폿"은 대개 더 짧습니다.'},
    {
      type: 'table',
      headers: ['플랫폼', '제한'],
      rows: [
        ['트위터 (X)', '280자 (성공 포인트: 70-100)'],
        ['인스타그램 프로필', '150자'],
        ['링크드인 포스트', '약 3000자 (권장: 약 1200)'],
      ]},
    {
      type: 'title',
      text: '계산에 관한 자주 묻는 질문',
      level: 2},
    {
      type: 'title',
      text: '공백도 글자 수에 포함되나요?',
      level: 3},
    {
      type: 'paragraph',
      html: '네. 공백을 글자로 잊어버리는 것은 흔한 실수입니다. 컴퓨터에게 공백은 "A"라는 글자와 똑같은 1바이트의 정보입니다. 트위터나 SMS, 데이터베이스 등에서는 공백도 제한을 소비합니다. 저희 도구는 "공백 포함"과 "공백 제외" 데이터를 모두 제공합니다.'},
    {
      type: 'title',
      text: '읽기 시간은 어떻게 계산되나요?',
      level: 3},
    {
      type: 'paragraph',
      html: '성인 평균 읽기 표준인 <strong>분당 약 400~600자</strong>(묵독)를 기준으로 합니다. 말하기 시간(낭독)은 <strong>분당 약 300자</strong>로 계산하며, 이는 자연스러운 대화나 차분한 내레이션의 속도입니다.'},
    {
      type: 'title',
      text: '개인정보 보호: 내가 입력한 텍스트는 어디로 가나요?',
      level: 3},
    {
      type: 'paragraph',
      html: '어디로도 전송되지 않습니다. 모든 처리는 <strong>클라이언트 사이드 JavaScript</strong>를 사용하여 브라우저 내에서 수행됩니다. 인터넷 연결을 끊어도 도구는 계속 작동합니다. 서버로 데이터가 전송되는 일은 전혀 없습니다.'},
  ],
  ui: {
    labelChars: '글자 수',
    labelWords: '단어 수',
    labelLines: '줄 수',
    labelParagraphs: '단락 수',
    labelNoSpaces: '공백 제외',
    labelBytes: '바이트',
    labelReading: '읽기 시간',
    labelSpeaking: '말하기',
    labelUpload: '파일 업로드',
    btnCopyTitle: '텍스트 복사',
    btnClearTitle: '지우기',
    placeholder: '여기에 텍스트를 입력하거나 붙여넣으세요...',
    unitSec: '초',
    unitMin: '분',
    numberLocale: 'ko-KR'}};
