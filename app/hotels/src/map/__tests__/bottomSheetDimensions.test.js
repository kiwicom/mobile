// @flow

import { getWidth } from '../bottomSheetDimensions';

it('returns 55% for tablet', () => {
  expect(getWidth(1000, true)).toBe(550);
  expect(getWidth(500, true)).toBe(275);
});

it('returns 668 on large non-tablet', () => {
  expect(getWidth(1000, false)).toBe(668);
});

it('returns the screen width on a small non-tablet', () => {
  expect(getWidth(500, false)).toBe(500);
});
