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

describe('isSameDay', () => {
  it('returns the right answer', () => {
    expect(
      DateUtils.isSameDay(new Date('2018-12-24'), new Date('2018-12-24')),
    ).toBe(true);
    expect(
      DateUtils.isSameDay(
        new Date('2018-12-24T00:00:00.000+02:00'),
        new Date('2018-12-23T23:00:00.000Z'),
      ),
    ).toBe(true);
    expect(
      DateUtils.isSameDay(
        new Date('2019-01-01T00:00:00.000+02:00'),
        new Date('2018-12-31T23:00:00.000Z'),
      ),
    ).toBe(true);
    expect(
      DateUtils.isSameDay(new Date('2018-12-24'), new Date('2018-12-23')),
    ).toBe(false);
  });

  describe('isAfterDate', () => {
    it('returns right answer', () => {
      expect(
        DateUtils.isAfterDate(new Date('2018-12-24'), new Date('2018-12-23')),
      ).toBe(true);
      expect(
        DateUtils.isAfterDate(new Date('2018-12-23'), new Date('2018-12-24')),
      ).toBe(false);

      expect(
        DateUtils.isAfterDate(new Date('2019-12-24'), new Date('2018-12-24')),
      ).toBe(true);
      expect(
        DateUtils.isAfterDate(new Date('2018-12-24'), new Date('2019-12-24')),
      ).toBe(false);

      expect(
        DateUtils.isAfterDate(new Date('2018-12-24'), new Date('2018-11-24')),
      ).toBe(true);
      expect(
        DateUtils.isAfterDate(new Date('2018-11-24'), new Date('2019-12-24')),
      ).toBe(false);

      expect(
        DateUtils.isAfterDate(new Date('2018-12-24'), new Date('2018-12-24')),
      ).toBe(false);
    });
  });

  describe('isBeforeDate', () => {
    it('returns right answer', () => {
      expect(
        DateUtils.isBeforeDate(new Date('2018-12-24'), new Date('2018-12-23')),
      ).toBe(false);
      expect(
        DateUtils.isBeforeDate(new Date('2018-12-23'), new Date('2018-12-24')),
      ).toBe(true);

      expect(
        DateUtils.isBeforeDate(new Date('2019-12-24'), new Date('2018-12-24')),
      ).toBe(false);
      expect(
        DateUtils.isBeforeDate(new Date('2018-12-24'), new Date('2019-12-24')),
      ).toBe(true);

      expect(
        DateUtils.isBeforeDate(new Date('2018-12-24'), new Date('2018-11-24')),
      ).toBe(false);
      expect(
        DateUtils.isBeforeDate(new Date('2018-11-24'), new Date('2019-12-24')),
      ).toBe(true);

      expect(
        DateUtils.isBeforeDate(new Date('2018-12-24'), new Date('2018-12-24')),
      ).toBe(false);
    });
  });
});
