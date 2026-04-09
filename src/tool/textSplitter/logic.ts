export interface SplitOptions {
  trim: boolean;
  unique: boolean;
  clean: boolean;
  numbered: boolean;
}

function delimiterFromValue(value: string): string {
  if (value === 'semicolon') return ';';
  if (value === 'space') return ' ';
  return ',';
}

export function resolveDelimiter(value: string, customValue: string): string {
  if (value === 'custom') return customValue || ',';
  return delimiterFromValue(value);
}

export function splitText(raw: string, delimiter: string, opts: SplitOptions): string {
  if (!raw.trim()) return '';
  let items = raw.split(delimiter);
  if (opts.trim) items = items.map((i) => i.trim());
  if (opts.clean) items = items.filter((i) => i.length > 0);
  if (opts.unique) items = [...new Set(items)];
  if (opts.numbered) items = items.map((i, idx) => `${idx + 1}. ${i}`);
  return items.join('\n');
}
