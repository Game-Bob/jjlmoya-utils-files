import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashVerifierUI } from '../ui';

const slug = 'hash-verifier';
const title = 'SHA-256 Hash Verifier';
const description =
  'Verify the integrity of your files by computing their SHA-256 signature 100% locally and securely. Compare checksums for ISOs, installers, and downloads without uploading anything to any server.';

const faqData = [
  {
    question: 'What is a SHA-256 hash?',
    answer:
      'It is a unique digital fingerprint for a file. Regardless of size, the hash always produces exactly 64 hexadecimal characters. If even a single bit of the file changes, the hash changes completely, making it the most reliable integrity check available.',
  },
  {
    question: 'Is it safe to use this tool with private files?',
    answer:
      'Completely. It uses your browser\'s Web Crypto API to compute the hash locally using streaming chunks. The file never leaves your device.',
  },
  {
    question: 'What is the point of verifying a download\'s hash?',
    answer:
      'To make sure the file has not been modified by an attacker or corrupted during the download. Linux distributions, security software, and many other programs publish their official hash so you can compare it.',
  },
  {
    question: 'Can it handle very large files?',
    answer:
      'Yes. The tool processes the file in 2 MB chunks (streaming) so you can verify ISOs or multi-gigabyte installers without freezing the browser or exhausting RAM.',
  },
];

const howToData = [
  {
    name: 'Select the file',
    text: 'Drag the file you want to verify onto the drop zone, or browse for it with the file picker.',
  },
  {
    name: 'Wait for the computation',
    text: 'The progress bar shows the advance. Large files may take a few seconds.',
  },
  {
    name: 'Copy or note the hash',
    text: 'The computed SHA-256 hash is shown on screen. Copy it with the button on the right.',
  },
  {
    name: 'Compare with the official hash',
    text: 'Paste the hash published by the software author. Green = intact. Red = corrupted or tampered.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<HashVerifierUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Standards and References',
  bibliography: [
    {
      name: 'NIST FIPS 180-4: Secure Hash Standard (SHS)',
      url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final',
    },
    {
      name: 'RFC 6234: US Secure Hash Algorithms (SHA and SHA-based HMAC and HKDF)',
      url: 'https://datatracker.ietf.org/doc/html/rfc6234',
    },
    {
      name: 'SHAttered: first real-world collision attack on SHA-1',
      url: 'https://shattered.io/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'What Is a Hash and Why Should You Verify It',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A cryptographic hash is like a fingerprint for a file. <strong>SHA-256</strong> always produces exactly 64 hexadecimal characters regardless of whether the file weighs 1 KB or 50 GB. If anyone modifies even a single bit of the file, the resulting hash is completely different. This makes the hash the most reliable integrity-verification mechanism available.',
    },
    {
      type: 'stats',
      items: [
        { value: '256', label: 'Security bits', icon: 'mdi:shield-lock' },
        { value: '64', label: 'Hex characters', icon: 'mdi:pound' },
        { value: '100%', label: 'Private & Local', icon: 'mdi:incognito' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Use Cases: When to Verify the Hash',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Situations where verification matters',
      items: [
        'Downloads of Linux distributions (Ubuntu, Debian, Fedora publish their SHA-256 checksums).',
        'Security software, VPNs, and password managers that publish official hashes.',
        'Critical backups: confirm that the backup file has not been corrupted.',
        'Files sent over untrusted networks where integrity may be compromised.',
        'Software audits: confirm that an executable has not been modified since publication.',
      ],
    },
  ],
  ui: {
    labelTitle: 'Local Hash Verifier',
    labelSubtitle: 'Drop any file to generate its <strong class="hv-accent">SHA-256</strong> signature instantly.',
    btnSelect: 'Select File',
    labelPrivacy: 'Files never leave your device.',
    labelCalculating: 'Computing Signature...',
    labelSuccess: 'Computation Successful',
    btnAnother: 'Verify another',
    labelHash: 'SHA-256 Hash',
    btnCopyTitle: 'Copy hash',
    labelCompare: 'Compare with Original',
    placeholderCompare: 'Paste the expected hash here...',
    labelCompareNote: '* Comparison ignores case and whitespace.',
    statusVerified: 'VERIFIED',
    statusCorrupt: 'CORRUPT / ERROR',
  },
};
