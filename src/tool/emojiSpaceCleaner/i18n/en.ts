import type { WithContext, FAQPage, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EmojiSpaceCleanerUI } from '../ui';

const slug = 'emoji-space-cleaner';
const title = 'Free Online Emoji and Double Space Remover';
const description =
  'Clean your texts instantly: remove WhatsApp emojis, normalize multiple spaces, and delete invisible characters for a professional, polished result.';

const faqData = [
  {
    question: 'How do I remove emojis from text online in bulk?',
    answer:
      'Simply paste your content into the tool and make sure the "Remove Emojis" option is enabled. The system will automatically detect all pictographic icons and WhatsApp or social media symbols and delete them instantly, leaving you with pure text.',
  },
  {
    question: 'Why do double spaces appear in my texts and how do I remove them?',
    answer:
      'Double spaces usually appear when copying text from websites, PDFs, or by accidentally pressing the spacebar twice. Our space normalization utility scans the text and replaces any sequence of two or more consecutive spaces with a single one, improving the aesthetics and readability of your documents.',
  },
  {
    question: 'What are invisible characters and why is it important to clean them?',
    answer:
      'Invisible characters are Unicode codes (such as zero-width spaces or control characters) that are not visible to the naked eye but are present in the text. They can cause errors in databases, break web page layouts, or cause failures in form validations. Cleaning them guarantees a "clean" and compatible text.',
  },
  {
    question: 'Is it safe to process my confidential texts on this site?',
    answer:
      'Absolutely. Our tool works entirely on the client side (Client-Side). This means your text never leaves your browser or is sent to any external server. Processing is done in your own RAM, guaranteeing absolute privacy for your data.',
  },
  {
    question: 'Can I use it to clean texts from apps like WhatsApp or Telegram?',
    answer:
      'Yes, it is ideal for that. When copying messages from these apps, they often bring along emojis and invisible formats. Pasting the message here and using the cleaning options will give you a version ready for a professional report, email, or official Word document.',
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

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<EmojiSpaceCleanerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Sources and References',
  bibliography: [
    {
      name: 'Unicode Standard: Emojis and Pictographic Symbols',
      url: 'https://unicode.org/emoji/charts/full-emoji-list.html',
    },
    {
      name: 'MDN: Regular Expressions in JavaScript (RegExp)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions',
    },
    {
      name: 'W3C: White Space Handling on the Web',
      url: 'https://www.w3.org/TR/CSS2/text.html#white-space-prop',
    },
  ],
  howTo: [],
  schemas: [faqSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Why Removing Emojis and Cleaning Spaces Is Vital for Professional Texts',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In the era of instant digital communication, how we present information is as important as the message itself. A text saturated with distracting visual elements like emojis, or with technical flaws like double and triple spaces, projects an unprofessional and careless image. Our <strong>online text cleaner</strong> has been developed to help writers, copywriters, developers, and administrators purify their content instantly.',
    },
    {
      type: 'paragraph',
      html: 'When you <strong>remove emojis from text online</strong>, you are not just deleting drawings; you are normalizing your document\'s encoding. Many content management systems (CMS), legacy databases, or word processors like Microsoft Word can behave erratically when they encounter certain Unicode symbols. Cleaning the text guarantees full compatibility and optimal readability on any device or platform.',
    },
    {
      type: 'paragraph',
      html: 'Visual saturation in corporate emails or performance reports is a growing problem. Icons that work in informal messaging apps like WhatsApp or Telegram have no place in a serious business environment. Using an automatic <strong>emoji remover</strong> lets you focus the reader\'s attention on data and arguments, eliminating the visual noise that slows down message comprehension.',
    },
    {
      type: 'title',
      text: 'How to Remove Double Spaces and Normalize Your Content',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'One of the most common writing errors is accidentally pressing the spacebar twice. Although it may seem like a minor detail, <strong>removing double spaces</strong> dramatically improves the aesthetics of your paragraphs. In modern web design, typography depends on uniform spacing to maintain reading rhythm. An extra "gap" can break text justification or cause unexpected line breaks.',
    },
    {
      type: 'tip',
      title: 'Maximum Privacy: 100% Browser-Side Processing',
      html: '<p>Unlike other converters that send your data to remote servers, our utility works entirely on the <strong>client side (Client-Side)</strong>. The text you paste never leaves your computer. All emoji removal and space cleaning happens in your own RAM, ensuring that your confidential or work-related information remains completely private.</p>',
    },
    {
      type: 'paragraph',
      html: 'Our <strong>remove extra spaces online</strong> feature scans every character in your text and applies normalization logic. This means any sequence of two, three, or ten consecutive spaces is automatically converted into a single clean space. It is the perfect solution for preparing manuscripts, blog articles, or technical reports before final publication.',
    },
    {
      type: 'title',
      text: 'How to Remove WhatsApp and Telegram Emojis in Bulk',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'If you use messaging apps to manage your workflow, you know that messages inevitably fill up with icons. To transfer those chats to a formal environment, you need to <strong>remove WhatsApp emojis</strong> in bulk. Doing it manually in a multi-page text is a titanic and error-prone task.',
    },
    {
      type: 'paragraph',
      html: 'Our tool uses state-of-the-art regular expressions (RegExp) that cover the full spectrum of the Unicode specification. This includes everything from classic smileys to new pictographic symbols, skin tone variations, and combined emojis. With a single click, you will get a completely "de-emojified" text ready to paste into an official document.',
    },
    {
      type: 'title',
      text: 'The Importance of Cleaning Invisible Characters and Digital Junk',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Universal Compatibility:</strong> Text ready for WordPress, SQL, Excel, and Word without hidden characters that break the code.',
        '<strong>Time Savings:</strong> Processes thousands of words in less than a second, eliminating the need for manual correction.',
        '<strong>SEO Optimization:</strong> Google prefers content with a clean text structure and high-quality normalized characters.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Have you ever pasted a text and found that the cursor behaves strangely or that squares appear where spaces should be? That is caused by <strong>invisible characters</strong>. These elements, such as the <em>Zero Width Space</em> (ZWS) or the <em>Non-Breaking Space</em> (NBSP), are remnants of web formatting or special encodings that can "dirty" your code or database.',
    },
    {
      type: 'tip',
      title: 'The Difference Between Minifying and Cleaning Text',
      html: '<p>While a minifier seeks to reduce file size by removing everything unnecessary for the computer, our <strong>text cleaner for humans</strong> prioritizes readability. We do not join all words together; we respect grammatical structure while eliminating visual junk. It is the perfect intermediate tool between raw text and final editorial content.</p>',
    },
  ],
  ui: {
    labelToggleEmojis: 'Remove Emojis',
    labelToggleSpaces: 'Double Spaces',
    labelInput: 'Input text',
    labelOutput: 'Clean text',
    placeholderInput: 'Paste text with emojis or extra spaces here...',
    placeholderOutput: 'Clean text will appear here...',
    btnCopy: 'Copy',
    btnClear: 'Clear',
    toastCopied: 'Copied!',
    statEmojis: 'emojis removed',
    statSpaces: 'extra spaces removed',
    statNone: 'No changes detected',
  },
};
