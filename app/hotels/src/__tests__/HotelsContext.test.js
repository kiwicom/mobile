// @flow strict

import { getAsUtcDate } from '../HotelsContext';

describe('getAsUtcDate', () => {
  it('should return null for invalid date string', () => {
    expect(getAsUtcDate('١٨-٠١-٠ذ')).toBe(null);
    expect(getAsUtcDate('2018-lol-01')).toBe(null);
  });

  it('should return the utc date for valid dates', () => {
    expect(getAsUtcDate('2018-01-01')).toEqual(new Date(Date.UTC(2018, 0, 1)));
  });
});
