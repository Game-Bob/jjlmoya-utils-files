export interface CleanResult {
  text: string;
  emojisRemoved: number;
  spacesNormalized: number;
}

export function removeEmojis(text: string): { text: string; count: number } {
  let count = 0;
  const result = text.replace(/\p{Extended_Pictographic}[\p{Emoji_Modifier}\uFE0F\u20E3]*/gu, () => {
    count++;
    return '';
  });
  return { text: result, count };
}

export function normalizeSpaces(text: string): { text: string; count: number } {
  let count = 0;
  const result = text.replace(/[^\S\n]{2,}/g, (match) => {
    count += match.length - 1;
    return ' ';
  });
  return { text: result, count };
}

export function cleanText(text: string, emojis: boolean, spaces: boolean): CleanResult {
  let current = text;
  let emojisRemoved = 0;
  let spacesNormalized = 0;
  if (emojis) {
    const r = removeEmojis(current);
    current = r.text;
    emojisRemoved = r.count;
  }
  if (spaces) {
    const r = normalizeSpaces(current);
    current = r.text;
    spacesNormalized = r.count;
  }
  return { text: current, emojisRemoved, spacesNormalized };
}
