export type NumberingMode = 'none' | 'prefix' | 'suffix';

export interface RenameOptions {
  findText: string;
  replaceText: string;
  prefix: string;
  suffix: string;
  numberingMode: NumberingMode;
  numberStart: number;
  numberPadding: number;
  numberSeparator: string;
  preserveExtension: boolean;
}

export interface RenameInput {
  name: string;
  index: number;
}

export type RenameStatus = 'ready' | 'unchanged' | 'invalid' | 'collision';

export interface RenamePlan {
  originalName: string;
  newName: string;
  status: RenameStatus;
  reason: string;
  index: number;
}

export interface PlanSummary {
  total: number;
  ready: number;
  unchanged: number;
  issues: number;
}

const WINDOWS_RESERVED_NAMES = /^(?:CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(?:\..*)?$/iu;
const INVALID_FILENAME_CHARACTERS = /[<>:"/\\|?*\u0000-\u001f]/u;

export const DEFAULT_RENAME_OPTIONS: RenameOptions = {
  findText: '',
  replaceText: '',
  prefix: '',
  suffix: '',
  numberingMode: 'none',
  numberStart: 1,
  numberPadding: 2,
  numberSeparator: '_',
  preserveExtension: true,
};

interface NameParts {
  base: string;
  extension: string;
}

function splitName(name: string): NameParts {
  const lastDot = name.lastIndexOf('.');
  if (lastDot <= 0 || lastDot === name.length - 1) return { base: name, extension: '' };
  return { base: name.slice(0, lastDot), extension: name.slice(lastDot) };
}

function replaceAll(value: string, findText: string, replaceText: string): string {
  if (!findText) return value;
  return value.split(findText).join(replaceText);
}

function formatNumber(value: number, padding: number): string {
  return String(Math.max(0, Math.trunc(value))).padStart(Math.max(1, Math.trunc(padding)), '0');
}

function buildNumber(options: RenameOptions, index: number): string {
  if (options.numberingMode === 'none') return '';
  const value = options.numberStart + index;
  const number = formatNumber(value, options.numberPadding);
  return options.numberingMode === 'prefix'
    ? `${number}${options.numberSeparator}`
    : `${options.numberSeparator}${number}`;
}

export function validateFilename(name: string): string {
  if (!name.trim()) return 'The new name is empty.';
  if (name === '.' || name === '..') return 'Dot path components are not valid file names.';
  if (INVALID_FILENAME_CHARACTERS.test(name)) return 'The name contains a reserved file name character.';
  if (/[. ]$/u.test(name)) return 'A file name cannot end with a space or period.';
  if (WINDOWS_RESERVED_NAMES.test(name)) return 'The name is reserved by common desktop file systems.';
  if (name.length > 255) return 'The name is longer than 255 characters.';
  return '';
}

export function createNewName(input: RenameInput, options: RenameOptions): string {
  const parts = options.preserveExtension ? splitName(input.name) : { base: input.name, extension: '' };
  const replaced = replaceAll(parts.base, options.findText, options.replaceText);
  const numbered = buildNumber(options, input.index);
  const renamed = options.numberingMode === 'prefix'
    ? `${numbered}${options.prefix}${replaced}${options.suffix}`
    : `${options.prefix}${replaced}${options.suffix}${numbered}`;
  return `${renamed}${parts.extension}`;
}

function normalizeForCollision(name: string): string {
  return name.normalize('NFC').toLocaleLowerCase('en-US');
}

function getStatus(newName: string, originalName: string, collisions: Set<string>): RenameStatus {
  const reason = validateFilename(newName);
  if (reason) return 'invalid';
  if (collisions.has(normalizeForCollision(newName))) return 'collision';
  return newName === originalName ? 'unchanged' : 'ready';
}

function getReason(status: RenameStatus, newName: string): string {
  if (status === 'invalid') return validateFilename(newName);
  if (status === 'collision') return 'Two or more selected files would use this name.';
  return '';
}

export function planRenames(inputs: RenameInput[], options: RenameOptions): RenamePlan[] {
  const names = inputs.map((input) => createNewName(input, options));
  const counts = new Map<string, number>();
  names.forEach((name) => {
    const key = normalizeForCollision(name);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  });
  const collisions = new Set([...counts.entries()].filter(([, count]) => count > 1).map(([key]) => key));
  return inputs.map((input, index) => {
    const newName = names[index] ?? input.name;
    const status = getStatus(newName, input.name, collisions);
    return { originalName: input.name, newName, status, reason: getReason(status, newName), index };
  });
}

export function summarizePlan(plan: RenamePlan[]): PlanSummary {
  return plan.reduce<PlanSummary>((summary, item) => {
    summary.total += 1;
    if (item.status === 'ready') summary.ready += 1;
    if (item.status === 'unchanged') summary.unchanged += 1;
    if (item.status === 'invalid' || item.status === 'collision') summary.issues += 1;
    return summary;
  }, { total: 0, ready: 0, unchanged: 0, issues: 0 });
}

export function canDownload(plan: RenamePlan[]): boolean {
  return plan.length > 0 && plan.every((item) => item.status === 'ready' || item.status === 'unchanged');
}
