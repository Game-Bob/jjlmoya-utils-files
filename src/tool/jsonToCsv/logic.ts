export function flattenObject(
  obj: Record<string, unknown>,
  prefix = '',
): Record<string, unknown> {
  return Object.keys(obj).reduce(
    (acc: Record<string, unknown>, k) => {
      const pre = prefix.length ? prefix + '.' : '';
      const value = obj[k];
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        Object.assign(acc, flattenObject(value as Record<string, unknown>, pre + k));
      } else {
        acc[pre + k] = value;
      }
      return acc;
    },
    {},
  );
}

export function generateCSV(data: Record<string, unknown>[]): string {
  if (data.length === 0) return '';
  const headers = Object.keys(data[0]);
  const csvRows: string[] = [];

  csvRows.push(headers.map((h) => `"${h.replace(/"/g, '""')}"`).join(','));

  for (const row of data) {
    const values = headers.map((header) => {
      const val = row[header] === null || row[header] === undefined ? '' : String(row[header]);
      return `"${val.replace(/"/g, '""')}"`;
    });
    csvRows.push(values.join(','));
  }

  return '\uFEFF' + csvRows.join('\n');
}
