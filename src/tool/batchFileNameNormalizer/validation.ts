export const validation = {
  reviewedAt: '2026-09-08',
  methodology: 'The planner treats each selected File.name as a leaf name, applies explicit user rules, preserves the final extension when requested, and blocks invalid or duplicate outputs before ZIP creation.',
  sources: [
    'https://learn.microsoft.com/th-th/windows/win32/fileio/naming-a-file',
    'https://support.apple.com/es-es/guide/mac-help/mchlp1144/mac',
  ],
  referenceCases: [
    { input: 'draft.txt with find draft and replace final', output: 'final.txt' },
    { input: 'photo.JPG with suffix numbering from 7', output: 'photo-008.JPG' },
  ],
  limitations: 'The browser receives only selected file names and bytes. The planner does not modify source folders, inspect filesystem-specific policies, or certify that a destination accepts every name.',
} as const;
