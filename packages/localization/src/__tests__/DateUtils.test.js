// @flow strict

import DateUtils from '../DateUtils';

it('adds days correctly', () => {
  expect(DateUtils(new Date('2018-12-24')).addDays(1)).toEqual(
    new Date('2018-12-25'),
  );
  expect(DateUtils(new Date('2018-12-24')).addDays(9)).toEqual(
    new Date('2019-01-02'),
  );
});

it('removes days correctly', () => {
  expect(DateUtils(new Date('2018-12-24')).addDays(-1)).toEqual(
    new Date('2018-12-23'),
  );
  expect(DateUtils(new Date('2018-12-24')).addDays(-389)).toEqual(
    new Date('2017-11-30'),
  );
});

it('returns correct diff in days', () => {
  expect(
    DateUtils.diffInDays(new Date('2018-12-24'), new Date('2018-12-24')),
  ).toBe(0);
  expect(
    DateUtils.diffInDays(new Date('2018-12-24'), new Date('2018-12-12')),
  ).toBe(12);
  expect(
    DateUtils.diffInDays(new Date('2018-12-24'), new Date('2018-12-30')),
  ).toBe(-6);
});
