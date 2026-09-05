export const validationEvidence = {
  reviewedAt: '2026-09-05',
  methodology: 'Manual Unicode examples plus deterministic checks for pictographic symbols, repeated spaces and line preservation.',
  sources: ['https://unicode.org/reports/tr51/'],
  referenceCases: [
    'Emoji removal keeps surrounding text and counts each pictographic sequence once.',
  ],
  limitations: ['Unicode rendering and newly assigned emoji sequences can vary by browser version.'],
};
