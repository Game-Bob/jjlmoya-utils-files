export interface TextSplitterUI extends Record<string, string> {
  labelInput: string;
  labelOutput: string;
  placeholderInput: string;
  placeholderOutput: string;
  labelDelimiter: string;
  optComma: string;
  optSemicolon: string;
  optSpace: string;
  optCustom: string;
  labelCustom: string;
  placeholderCustom: string;
  optTrim: string;
  optUnique: string;
  optClean: string;
  optNumbered: string;
  statLines: string;
  statChars: string;
  btnCopy: string;
  btnClear: string;
  toastCopied: string;
}
