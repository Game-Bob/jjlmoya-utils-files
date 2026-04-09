import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { filesCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 4 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(8);
    });

    it('filesCategory should be defined', () => {
      expect(filesCategory).toBeDefined();
      expect(filesCategory.i18n).toBeDefined();
    });
  });
});

