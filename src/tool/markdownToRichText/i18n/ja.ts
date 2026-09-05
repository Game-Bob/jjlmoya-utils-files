import { createMarkdownToRichTextContent } from '../content';
import { getBibliography } from '../bibliography';

export const content = createMarkdownToRichTextContent({
  locale: 'ja', slug: 'markdown-to-rich-text', title: 'Markdownをリッチテキストに変換：書式付きHTMLをコピー', description: 'Markdownをライブプレビュー付きのリッチテキストに変換します。貼り付け用HTMLもブラウザ内で作成できます。', bibliography: getBibliography('ja'),
  faq: [
    { question: 'このMarkdownリッチテキスト変換ツールで何ができますか？', answer: '対応しているMarkdownを意味のあるリッチテキストに変換し、エディター、メール、文書、CMSへ貼り付けられる形で確認できます。' },
    { question: '対応しているMarkdownの機能は何ですか？', answer: '見出し、段落、強調、リンク、画像、引用、番号付き・箇条書き、インラインコード、コードブロック、水平線に対応しています。' },
    { question: 'Markdownではなくリッチテキストを使う理由は何ですか？', answer: '多くのエディターは貼り付け時の書式を受け取れますが、Markdown記法は解釈しません。このツールで両方の形式をつなげられます。' },
    { question: '貼り付けた書式はどのアプリでも同じですか？', answer: 'リッチテキストエディターは独自のスタイルと異なるHTML対応範囲を持つため、アプリによって見た目が少し変わることがあります。' },
  ],
  howTo: [{ name: 'Markdownを貼り付ける', text: 'Markdown文書を入力パネルに貼り付けます。' }, { name: 'プレビューを確認する', text: '変換されたリッチテキストと構造を確認します。' }, { name: 'リッチテキストをコピーする', text: '書式付きの結果をコピーし、文書、メール、CMS、エディターに貼り付けます。' }],
  seoTitle: 'Markdownを貼り付け可能なリッチテキストに変換', seoIntro: 'Markdownは執筆やバージョン管理に便利ですが、多くのメール作成画面、文書エディター、CMSはリッチテキストを想定しています。このツールはMarkdownから意味のあるHTMLを作成します。', seoWorkflowTitle: 'シンプルな変換手順', seoWorkflow: 'Markdownを貼り付け、文書プレビューを確認して、書式付きの結果をコピーします。見出し、段落、リスト、リンク、引用、コード、強調をアカウントなしで処理できます。', seoFeatures: ['<strong>リッチな出力：</strong>プレーンテキストの代替情報と一緒にHTMLをコピーできます。', '<strong>明確な対応範囲：</strong>対応するMarkdown記法を明示します。', '<strong>ローカル処理：</strong>下書きはブラウザ内に留まります。', '<strong>再開しやすい：</strong>最後の下書きを戻せます。'],
  ui: { labelKicker: 'Markdownデスク', labelInput: 'Markdown入力', labelPreview: 'リッチテキストプレビュー', placeholderInput: 'ここにMarkdownを貼り付け...', btnExample: '例を読み込む', btnClear: 'クリア', btnCopy: 'リッチテキストをコピー', toastCopied: 'リッチテキストをコピーしました！', toastCopyError: 'コピーがブロックされました。プレビューを選択して手動でコピーしてください。', toastRestored: '最後の下書きを復元しました。', emptyPreview: '書式付きの文書がここに表示されます。', labelHint: '一般的なMarkdown構造に対応しています。安全でないHTMLはエスケープされ、すべての処理はブラウザ内で行われます。', labelBlocks: 'ブロック', labelWords: '単語', labelWarnings: '警告', warningMessage: '一部の内容をエスケープしたか、安全なリンクとして扱えませんでした。', exampleMarkdown: '# リリースノート\n\n[プロジェクトリンク](https://example.com)を含む**フォーカスした**更新です。\n\n- 高速なローカル変換\n- リッチなクリップボード出力\n\n> 結果をエディターに貼り付けます。\n\n```js\nconst ready = true;\n```' },
});
