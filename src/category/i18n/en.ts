import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'files-and-text',
  title: 'File and Text Tools',
  description: 'Free online tools for working with files and text directly in your browser. Convert your clipboard to downloadable images, with no installation and total privacy.',
  seo: [
    {
      type: 'title',
      text: 'Why manage files from the browser?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Everyday file and text tasks — saving a screenshot, converting a format, extracting text — usually require installing heavy software or using online services that upload your data to external servers. These tools work <strong>100% locally in your browser</strong>: none of your data ever leaves your device.',
    },
    {
      type: 'paragraph',
      html: 'The modern browser has native access to the Clipboard API, the local file system, and image-processing engines. That makes it possible to replicate the most common desktop application functions without installing anything, signing up for anything, or seeing any ads.',
    },
    {
      type: 'title',
      text: 'Clipboard: from copy-paste to a real file',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'When you take a screenshot with <strong>Windows + Shift + S</strong> or <strong>Cmd + Shift + 4</strong>, the image lands in the clipboard but is not saved as a file. To get it you would normally have to open Paint, Photoshop, or another editor, paste, and export. With the clipboard-to-image tool, the whole process is reduced to <strong>Ctrl+V and one click</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Files are downloaded with a name based on the exact date and time, making it easy to organise screenshots chronologically without renaming them manually. The output format is PNG, which preserves the original quality without any loss.',
    },
    {
      type: 'title',
      text: 'Privacy by design',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Every tool in this category is built on a single principle: <strong>data never leaves the browser</strong>. There are no requests to external servers, no cloud storage, no activity logging. Whatever you paste into the tool is processed in memory and downloaded directly to your disk, with no intermediaries.',
    },
    {
      type: 'list',
      items: [
        '<strong>No installation:</strong> Works directly in the browser on any operating system.',
        '<strong>Total privacy:</strong> No file or text is ever sent to any server.',
        '<strong>Free:</strong> No usage limits, no subscriptions, no watermarks.',
        '<strong>Fast:</strong> Processing is local, so speed depends on your device, not a connection.',
      ],
    },
    {
      type: 'title',
      text: 'The future of productivity tools',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Modern web APIs (Clipboard API, File System Access API, Canvas API) have closed the gap between what a native application can do and what the browser can do. Each new tool in this category leverages these capabilities to deliver <strong>desktop-class functionality with the accessibility of a URL</strong>.',
    },
  ],
};
