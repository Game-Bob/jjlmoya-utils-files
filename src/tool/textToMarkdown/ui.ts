export interface TextToMarkdownUI extends Record<string, string> {
  labelInput: string;
  labelOutput: string;
  placeholderInput: string;
  placeholderOutput: string;
  btnClear: string;
  btnCopy: string;
  toastCopied: string;
  labelHint: string;
}
