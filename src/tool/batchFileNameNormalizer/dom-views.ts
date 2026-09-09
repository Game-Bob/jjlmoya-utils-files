import type { BatchFileNameNormalizerUI } from './ui';
import type { PlanEvaluation } from './evaluator';
import type { RenamePlan } from './logic';

function createTextCell(value: string, className: string): HTMLTableCellElement {
  const cell = document.createElement('td');
  cell.className = className;
  cell.textContent = value;
  return cell;
}

function createStatusCell(item: RenamePlan, ui: BatchFileNameNormalizerUI): HTMLTableCellElement {
  const cell = document.createElement('td');
  cell.className = `bfn-status bfn-status-${item.status}`;
  const label = getStatusLabel(item, ui);
  cell.textContent = label;
  if (item.reason) cell.title = item.reason;
  return cell;
}

function getStatusLabel(item: RenamePlan, ui: BatchFileNameNormalizerUI): string {
  if (item.status === 'ready') return ui.ready;
  if (item.status === 'unchanged') return ui.unchanged;
  if (item.status === 'invalid') return ui.invalid;
  return ui.collision;
}

export function renderFileList(list: HTMLElement, files: File[], ui: BatchFileNameNormalizerUI): void {
  list.replaceChildren();
  if (files.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'bfn-file-empty';
    empty.textContent = ui.noFiles;
    list.append(empty);
    return;
  }
  files.forEach((file) => {
    const item = document.createElement('li');
    item.className = 'bfn-file-item';
    const name = document.createElement('span');
    name.textContent = file.name;
    const size = document.createElement('small');
    size.textContent = `${Math.max(1, Math.round(file.size / 1024))} KB`;
    item.append(name, size);
    list.append(item);
  });
}

export function renderPlan(table: HTMLElement, plan: RenamePlan[], ui: BatchFileNameNormalizerUI): void {
  table.replaceChildren();
  if (plan.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'bfn-preview-empty';
    empty.textContent = ui.emptyPreview;
    const hint = document.createElement('span');
    hint.textContent = ui.emptyPreviewHint;
    empty.append(document.createElement('br'), hint);
    table.append(empty);
    return;
  }
  const tableElement = document.createElement('table');
  tableElement.append(createTableHead(ui), createTableBody(plan, ui));
  table.append(tableElement);
}

function createTableHead(ui: BatchFileNameNormalizerUI): HTMLTableSectionElement {
  const head = document.createElement('thead');
  const headRow = document.createElement('tr');
  [ui.originalName, ui.newName, ui.status].forEach((label) => {
    const cell = document.createElement('th');
    cell.scope = 'col';
    cell.textContent = label;
    headRow.append(cell);
  });
  head.append(headRow);
  return head;
}

function createTableBody(plan: RenamePlan[], ui: BatchFileNameNormalizerUI): HTMLTableSectionElement {
  const body = document.createElement('tbody');
  plan.forEach((item) => {
    const row = document.createElement('tr');
    row.className = `bfn-row-${item.status}`;
    row.append(createTextCell(item.originalName, 'bfn-name-original'), createTextCell(item.newName, 'bfn-name-new'), createStatusCell(item, ui));
    body.append(row);
  });
  return body;
}

export function renderSummary(summary: HTMLElement, evaluation: PlanEvaluation, ui: BatchFileNameNormalizerUI): void {
  summary.replaceChildren();
  const values = [
    `${evaluation.summary.total} ${ui.selectedFiles.toLowerCase()}`,
    `${evaluation.summary.ready} ${ui.summaryReady}`,
    `${evaluation.summary.unchanged} ${ui.unchanged}`,
    `${evaluation.summary.issues} ${ui.summaryIssues}`,
  ];
  values.forEach((value) => {
    const item = document.createElement('span');
    item.textContent = value;
    summary.append(item);
  });
  summary.dataset.tone = evaluation.tone;
}
