import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'files-and-text',
  title: '파일 및 텍스트 도구',
  description: '브라우저에서 직접 파일과 텍스트를 작업하는 무료 온라인 도구. 클립보드를 다운로드 가능한 이미지로 변환, 설치 없이 완전한 개인정보 보호.',
  seo: [
    {
      type: 'title',
      text: '왜 브라우저에서 파일을 관리하는가?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '스크린샷 저장, 형식 변환, 텍스트 추출 등 일상적인 파일 및 텍스트 작업은 보통 무거운 소프트웨어를 설치하거나 데이터를 외부 서버에 업로드하는 온라인 서비스를 사용해야 합니다. 이 도구들은 <strong>브라우저에서 100% 로컬로</strong> 작동합니다: 귀하의 데이터는 절대 기기를 떠나지 않습니다.',
    },
    {
      type: 'paragraph',
      html: '현대 브라우저는 Clipboard API, 로컬 파일 시스템 및 이미지 처리 엔진에 기본 접근이 가능합니다. 이를 통해 아무것도 설치하지 않고, 가입하지 않으며, 광고를 보지 않고 가장 일반적인 데스크톱 애플리케이션 기능을 복제할 수 있습니다.',
    },
    {
      type: 'title',
      text: '클립보드: 복사-붙여넣기에서 실제 파일로',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Windows + Shift + S</strong> 또는 <strong>Cmd + Shift + 4</strong>로 스크린샷을 찍으면 이미지가 클립보드에 저장되지만 파일로는 저장되지 않습니다. 이를 얻으려면 보통 Paint, Photoshop 또는 다른 편집기를 열고 붙여넣기 후 내보내야 합니다. 클립보드-이미지 도구를 사용하면 전체 과정이 <strong>Ctrl+V와 클릭 한 번</strong>으로 줄어듭니다.',
    },
    {
      type: 'paragraph',
      html: '파일은 정확한 날짜와 시간을 기반으로 한 이름으로 다운로드되어 수동으로 이름을 바꾸지 않고도 스크린샷을 시간순으로 정리하기 쉽습니다. 출력 형식은 PNG로, 손실 없이 원본 품질을 보존합니다.',
    },
    {
      type: 'title',
      text: '설계에 의한 개인정보 보호',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이 카테고리의 모든 도구는 단 하나의 원칙 위에 구축되어 있습니다: <strong>데이터는 절대 브라우저를 떠나지 않습니다</strong>. 외부 서버에 대한 요청 없음, 클라우드 저장 없음, 활동 로깅 없음. 도구에 붙여넣은 것은 메모리에서 처리되어 중간자 없이 디스크에 직접 다운로드됩니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>설치 불필요:</strong> 모든 운영 체제의 브라우저에서 직접 작동합니다.',
        '<strong>완전한 개인정보 보호:</strong> 어떤 서버에도 파일이나 텍스트가 전송되지 않습니다.',
        '<strong>무료:</strong> 사용 제한 없음, 구독 없음, 워터마크 없음.',
        '<strong>빠름:</strong> 처리가 로컬이므로 속도는 연결이 아닌 기기에 따라 달라집니다.',
      ],
    },
    {
      type: 'title',
      text: '생산성 도구의 미래',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '현대 웹 API(Clipboard API, File System Access API, Canvas API)는 네이티브 애플리케이션과 브라우저가 할 수 있는 것 사이의 격차를 줄였습니다. 이 카테고리의 각 새 도구는 이러한 기능을 활용하여 <strong>URL의 접근성으로 데스크톱 수준의 기능</strong>을 제공합니다.',
    },
  ],
};
