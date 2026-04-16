const fs = require('fs');
const path = require('path');

function getFiles(dir, ext) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results.push(...getFiles(fullPath, ext));
    } else if (ext.some((e) => file.endsWith(e))) {
      results.push(fullPath);
    }
  }
  return results;
}

const SRC_DIR = path.join(process.cwd(), 'src');
const files = [
  ...getFiles(path.join(SRC_DIR, 'tool'), ['.ts']),
  ...getFiles(path.join(SRC_DIR, 'category'), ['.ts']),
].filter(f => f.includes('i18n'));

const titlePatterns = [
  /const\s+title\s*=\s*['"]([^'"]+)['"]/g,
  /title\s*:\s*['"]([^'"]+)['"]/g,
];

files.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relativePath = path.relative(process.cwd(), filePath);
  const findings = [];

  for (const pattern of titlePatterns) {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const title = match[1];
      if (title.includes('|') || title.includes('-')) {
        findings.push(title);
      }
    }
  }

  if (findings.length > 0) {
    console.log(`${relativePath}:`, JSON.stringify(findings));
  }
});
