import type { ToolDefinition } from './types';
import { CLIPBOARD_TO_IMAGE_TOOL } from './tool/clipboardToImage/index';
import { FORMAT_STRIPPER_TOOL } from './tool/formatStripper/index';
import { CHARACTER_COUNTER_TOOL } from './tool/characterCounter/index';
import { HASH_VERIFIER_TOOL } from './tool/hashVerifier/index';
import { TEXT_TO_MARKDOWN_TOOL } from './tool/textToMarkdown/index';
import { EMOJI_SPACE_CLEANER_TOOL } from './tool/emojiSpaceCleaner/index';
import { TEXT_SPLITTER_TOOL } from './tool/textSplitter/index';
import { JSON_TO_CSV_TOOL } from './tool/jsonToCsv/index';

export const ALL_TOOLS: ToolDefinition[] = [CLIPBOARD_TO_IMAGE_TOOL, FORMAT_STRIPPER_TOOL, CHARACTER_COUNTER_TOOL, HASH_VERIFIER_TOOL, TEXT_TO_MARKDOWN_TOOL, EMOJI_SPACE_CLEANER_TOOL, TEXT_SPLITTER_TOOL, JSON_TO_CSV_TOOL];

