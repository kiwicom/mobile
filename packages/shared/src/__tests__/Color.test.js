// @flow strict

import { hexToRgba } from '../Color';

it('converts correctly', () => {
  expect(hexToRgba('#30363d', 0.5)).toEqual('rgba(48, 54, 61, 0.5)');
  expect(hexToRgba('#c80164', 0.2)).toEqual('rgba(200, 1, 100, 0.2)');
  expect(hexToRgba('#20d535', 0.9)).toEqual('rgba(32, 213, 53, 0.9)');
  expect(hexToRgba('#fff', 0.15)).toEqual('rgba(255, 255, 255, 0.15)');
});
