import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClipboardToImageUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'clipboard-to-image';
const title = '클립보드를 PNG로 변환: 스크린샷 및 이미지 다운로드';
const description =
  '클립보드 내용(스크린샷, 이미지)을 즉시 다운로드 가능한 PNG 파일로 변환하는 온라인 도구입니다. 100% 비공개 및 빠른 프로세스.';

const faqData = [
  {
    question: '스크린샷을 여기에 붙여넣어도 안전한가요?',
    answer:
      '네, 완전히 안전합니다. 이 도구는 브라우저 내에서 100% 로컬로 작동합니다. 클립보드 데이터는 서버로 전송되지 않으므로 개인정보가 완벽하게 보호됩니다.'},
  {
    question: '어떤 유형의 콘텐츠를 변환할 수 있나요?',
    answer:
      '복사된 이미지(스크린샷, 사진), .txt 파일로 변환될 텍스트, 또는 HTML 요소도 붙여넣을 수 있습니다. 가장 일반적인 용도는 빠른 스크린샷을 PNG 파일로 저장하는 것입니다.'},
  {
    question: '붙여넣기 버튼이 작동하지 않는 이유는 무엇인가요?',
    answer:
      '브라우저 보안 제한으로 인해 "붙여넣기" 버튼에 명시적인 권한이 필요한 경우가 있습니다. 작동하지 않으면 표준 키보드 단축키(Windows: Ctrl+V, Mac: Cmd+V)를 언제든지 사용할 수 있습니다.'},
  {
    question: '모바일 기기에서도 작동하나요?',
    answer:
      '네, 모바일의 붙여넣기 기능을 사용하여 내용을 볼 수 있지만, 데스크톱에서 빠른 스크린샷 관리를 수행하는 데 최적화되어 있습니다.'},
];

const howToData = [
  {
    name: '콘텐츠 복사',
    text: '스크린샷을 찍거나 앱에서 이미지/텍스트를 복사하세요.'},
  {
    name: '영역에 붙여넣기',
    text: '붙여넣기 영역을 클릭하거나 Ctrl+V / Cmd+V 단축키를 사용하여 콘텐츠를 불러오세요.'},
  {
    name: '미리보기',
    text: '즉시 나타나는 미리보기 영역에서 내용이 올바른지 확인하세요.'},
  {
    name: '파일 다운로드',
    text: '다운로드 버튼을 눌러 콘텐츠를 컴퓨터에 실제 파일로 저장하세요.'},
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

export const content: ToolLocaleContent<ClipboardToImageUI> = {
  slug,
  title,
  description,
  bibliography,
  faq: faqData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '클립보드 이미지를 파일로 저장하는 방법',
      level: 2},
    {
      type: 'paragraph',
      html: '이 무료 온라인 도구는 <strong>클립보드 내용을 즉시 이미지 파일(PNG)로 변환</strong>해 줍니다. 스크린샷(Windows + Shift + S)을 찍었거나 웹에서 이미지를 복사한 후 포토샵이나 그림판 같은 무거운 프로그램을 열지 않고 컴퓨터에 저장하고 싶을 때 완벽한 해결책입니다.'},
    {
      type: 'title',
      text: '왜 이 클립보드 컨버터를 사용해야 하나요?',
      level: 2},
    {
      type: 'list',
      items: [
        '<strong>신속함:</strong> <code>Ctrl + V</code>를 누르고 다운로드하면 끝입니다. 중간 단계가 없습니다.',
        '<strong>개인정보 보호:</strong> 모든 프로세스는 브라우저 내에서 수행됩니다. 이미지는 <strong>서버에 업로드되지 않습니다</strong>.',
        '<strong>원본 품질:</strong> 클립보드에서 원본 데이터를 가져오므로 다운로드된 이미지가 최상의 품질을 유지합니다.',
        '<strong>자동 정리:</strong> 파일은 정확한 날짜와 시간을 기반으로 한 이름으로 다운로드되어 캡처 정리가 쉽습니다.',
      ]},
    {
      type: 'title',
      text: '자주 묻는 질문',
      level: 2},
    {
      type: 'title',
      text: '스크린샷도 지원하나요?',
      level: 3},
    {
      type: 'paragraph',
      html: '네, 윈도우나 맥의 캡처 도구로 만든 스크린샷을 빠르게 저장하는 데 이상적입니다.'},
    {
      type: 'title',
      text: '어떤 형식을 지원하나요?',
      level: 3},
    {
      type: 'paragraph',
      html: '현재 이 도구는 호환성과 투명성을 보장하기 위해 클립보드의 모든 이미지를 자동으로 감지하여 PNG 형식으로 변환합니다.'},
  ],
  ui: {
    labelCtrlV: '아무 곳에서나 Ctrl + V를 누르세요',
    labelClickPaste: '또는 여기를 클릭하여 붙여넣기',
    btnClear: '지우기',
    btnDownload: '다운로드',
    privacyMsg: '모든 프로세스는 100% 로컬에서 진행됩니다. 이미지는 브라우저를 벗어나지 않습니다.'}};
