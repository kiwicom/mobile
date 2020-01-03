// @flow strict

import DateFormatter from '../DateFormatter';

it('formats date correctly', () => {
  expect(DateFormatter(new Date('2018-12-24')).formatToDate()).toBe('Mon, 12/24');
  expect(DateFormatter(new Date('2018-12-24T00:00:00Z')).formatToDate()).toBe('Mon, 12/24');
});

it('formats for machine correctly', () => {
  expect(DateFormatter(new Date('2018-12-24')).formatForMachine()).toBe('2018-12-24');
  expect(DateFormatter(new Date('2018-01-01T01:00:00Z')).formatForMachine()).toBe('2018-01-01');
});

it('always returns UTC', () => {
  expect(DateFormatter(new Date('2018-12-24T00:00:00+02:00')).formatToDate()).toBe('Sun, 12/23');
});
