import { describe, it, expect } from 'vitest';
import { formatTimeSaved } from './ai-meta';

describe('formatTimeSaved', () => {
  it('returns the raw string when present', () => {
    expect(formatTimeSaved('~3 hours vs ~8 hours')).toBe('~3 hours vs ~8 hours');
  });

  it('returns "Not measured" when undefined', () => {
    expect(formatTimeSaved(undefined)).toBe('Not measured');
  });
});
