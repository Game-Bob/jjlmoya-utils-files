export const validationEvidence = {
  reviewedAt: '2026-09-05',
  methodology: 'Checked headings, paragraphs, lists, inline emphasis, links, images and escaped HTML with browser DOM parsing.',
  sources: ['https://spec.commonmark.org/current/'],
  referenceCases: [
    'A level-two heading becomes two hash characters followed by a space and its text.',
  ],
  limitations: ['Images remain references and require usable source URLs after conversion.'],
};
