// @flow
import formatRating from './formatRating';

describe('formatRating', () => {
  it('concats stars, review score and review description', () => {
    expect(formatRating(3, 8.6, 'Good Enough')).toBe('★★★ - 8.6 Good Enough');
  });

  it('omits the dash when stars are missing', () => {
    expect(formatRating(null, 8.6, 'Good Enough')).toBe('8.6 Good Enough');
  });

  it('omits the dash when review is missing', () => {
    expect(formatRating(5, null, null)).toBe('★★★★★');
  });
});
