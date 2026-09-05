export const validationEvidence = {
  reviewedAt: '2026-09-05',
  methodology: 'Checked SHA-256 compression output against the standard empty string and ASCII test vectors.',
  sources: ['https://csrc.nist.gov/pubs/fips/180-4/upd1/final'],
  referenceCases: [
    'The SHA-256 digest of the empty byte sequence is the published FIPS 180-4 test vector.',
  ],
  limitations: ['The browser implementation verifies SHA-256 only; it does not establish provenance of a published digest.'],
};
