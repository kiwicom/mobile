// @flow

import { getDistanceText } from '../HotelDistance';

const cityCenterRadius = 1.5;

it('Distance should be in the city center', () => {
  expect(getDistanceText(1.3, cityCenterRadius)).toBe('In the city center');
});

it('Distance should be in meters and rounded up to 100', () => {
  expect(getDistanceText(1.81, cityCenterRadius)).toBe('400m from center');
  expect(getDistanceText(1.89, cityCenterRadius)).toBe('400m from center');
});

it('Distance should be in km', () => {
  expect(getDistanceText(4.81, cityCenterRadius)).toBe('3.3km from center');
});
