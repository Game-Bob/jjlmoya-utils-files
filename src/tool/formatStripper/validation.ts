export const validationEvidence = {
  reviewedAt: '2026-09-05',
  methodology: 'Checked format removal, whitespace normalization and case conversion with deterministic browser-side examples.',
  sources: ['https://html.spec.whatwg.org/multipage/dom.html#the-innerhtml-mixin'],
  referenceCases: ['Pasted markup loses presentation styles while its readable text remains available.'],
  limitations: ['Plain text conversion intentionally does not preserve rich formatting.'],
};
