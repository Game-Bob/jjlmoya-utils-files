export const validationEvidence = {
  reviewedAt: '2026-09-05',
  methodology: 'Checked nested object flattening, CSV quoting and empty input through deterministic examples.',
  sources: ['https://www.rfc-editor.org/rfc/rfc4180'],
  referenceCases: [
    'Quotes inside CSV fields are escaped by doubling them and fields remain quoted.',
  ],
  limitations: ['CSV does not preserve JSON types or nested structure beyond the generated column names.'],
};
