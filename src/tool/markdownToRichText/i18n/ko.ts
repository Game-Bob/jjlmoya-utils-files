import { createMarkdownToRichTextContent } from '../content';
import { getBibliography } from '../bibliography';

export const content = createMarkdownToRichTextContent({
  locale: 'ko', slug: 'markdown-to-rich-text', title: 'Markdown을 서식 있는 텍스트로 변환: 서식 HTML 복사', description: 'Markdown을 실시간 미리보기와 붙여넣기용 HTML이 포함된 서식 있는 텍스트로 변환합니다. 모든 처리는 브라우저에서 이루어집니다.', bibliography: getBibliography('ko'),
  faq: [
    { question: '이 Markdown 변환기는 무엇을 만들어 주나요?', answer: '지원되는 Markdown을 의미 있는 서식 있는 텍스트로 변환하여 편집기, 이메일, 문서 또는 CMS에 붙여넣기 전에 확인할 수 있습니다.' },
    { question: '어떤 Markdown 기능을 지원하나요?', answer: '제목, 단락, 강조, 링크, 이미지, 인용문, 순서 있는 목록과 순서 없는 목록, 인라인 코드, 코드 블록, 가로줄을 지원합니다.' },
    { question: 'Markdown 대신 서식 있는 텍스트를 사용하는 이유는 무엇인가요?', answer: '많은 편집기는 붙여넣을 때 서식을 유지하지만 Markdown 문법은 해석하지 않습니다. 이 도구가 두 형식 사이를 연결합니다.' },
    { question: '붙여넣은 서식이 모든 앱에서 같나요?', answer: '서식 있는 텍스트 편집기는 자체 스타일과 HTML 지원 범위가 다릅니다. 앱에 따라 약간의 시각적 차이가 생길 수 있습니다.' },
  ],
  howTo: [{ name: 'Markdown 붙여넣기', text: 'Markdown 문서를 입력 패널에 붙여넣습니다.' }, { name: '미리보기 확인', text: '변환된 서식 있는 문서와 구조를 확인합니다.' }, { name: '서식 있는 텍스트 복사', text: '서식이 적용된 결과를 복사하여 문서, 이메일, CMS 또는 편집기에 붙여넣습니다.' }],
  seoTitle: '붙여넣기 좋은 서식 있는 텍스트로 Markdown 변환', seoIntro: 'Markdown은 작성과 버전 관리에 좋지만 이메일 작성기, 문서 편집기, CMS는 서식 있는 텍스트를 요구하는 경우가 많습니다. 이 도구는 Markdown에서 의미 있는 HTML을 만듭니다.', seoWorkflowTitle: '간단한 변환 흐름', seoWorkflow: 'Markdown을 붙여넣고 문서 미리보기를 확인한 뒤 서식이 적용된 결과를 복사합니다. 계정이나 업로드 없이 제목, 단락, 목록, 링크, 인용문, 코드와 강조를 처리합니다.', seoFeatures: ['<strong>서식 출력:</strong> 일반 텍스트 대체 정보와 함께 HTML을 복사합니다.', '<strong>명확한 범위:</strong> 지원되는 Markdown 문법을 문서화합니다.', '<strong>로컬 처리:</strong> 작성 내용은 브라우저에 남습니다.', '<strong>간편한 재개:</strong> 마지막 초안을 복원합니다.'],
  ui: { labelKicker: 'Markdown 데스크', labelInput: 'Markdown 입력', labelPreview: '서식 있는 텍스트 미리보기', placeholderInput: '여기에 Markdown을 붙여넣으세요...', btnExample: '예제 불러오기', btnClear: '지우기', btnCopy: '서식 있는 텍스트 복사', toastCopied: '서식 있는 텍스트를 복사했습니다!', toastCopyError: '복사가 차단되었습니다. 미리보기를 선택한 뒤 직접 복사하세요.', toastRestored: '마지막 초안을 복원했습니다.', emptyPreview: '서식이 적용된 문서가 여기에 표시됩니다.', labelHint: '일반적인 Markdown 구조를 지원합니다. 안전하지 않은 HTML은 이스케이프되며 모든 처리는 브라우저에서 이루어집니다.', labelBlocks: '블록', labelWords: '단어', labelWarnings: '경고', warningMessage: '일부 내용이 이스케이프되었거나 안전한 링크로 처리되지 않았습니다.', exampleMarkdown: '# 릴리스 노트\n\n[프로젝트 링크](https://example.com)가 포함된 **집중된** 업데이트입니다.\n\n- 빠른 로컬 변환\n- 서식 있는 클립보드 출력\n\n> 결과를 편집기에 붙여넣으세요.\n\n```js\nconst ready = true;\n```' },
});
