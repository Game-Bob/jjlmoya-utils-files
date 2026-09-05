export const validationEvidence = {
  reviewedAt: '2026-09-05',
  methodology: 'Checked delimiter resolution, trimming, duplicate removal, empty-item cleanup and numbering.',
  sources: ['https://www.unicode.org/reports/tr44/'],
  referenceCases: [
    'Comma-separated values become one output line per item while configured cleanup options remain deterministic.',
  ],
  limitations: ['A delimiter is treated literally and the tool does not parse quoted CSV syntax.'],
};
