// @flow strict

import { getAsUtcDate } from '../HotelsContext';

describe('getAsUtcDate', () => {
  it('should return null for invalid date string', () => {
    expect(getAsUtcDate('١٨-٠١-٠ذ')).toBeNull();
    expect(getAsUtcDate('2018-lol-01')).toBeNull();
  });

  it('should return the utc date for valid dates', () => {
    expect(getAsUtcDate('2018-01-01')).toEqual(new Date(Date.UTC(2018, 0, 1)));
  });
});
