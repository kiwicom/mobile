// @flow strict

import { DateUtils } from '@kiwicom/mobile-localization';

import { getAsUtcDate, validateInput } from '../HotelsContext';

describe('getAsUtcDate', () => {
  it('should return null for invalid date string', () => {
    expect(getAsUtcDate('١٨-٠١-٠ذ')).toBeNull();
    expect(getAsUtcDate('2018-lol-01')).toBeNull();
  });

  it('should return the utc date for valid dates', () => {
    expect(getAsUtcDate('2018-01-01')).toEqual(new Date(Date.UTC(2018, 0, 1)));
  });
});

type Input = {|
  +cityId?: string | number,
  +checkin?: Date,
  +checkout?: Date,
|};

const getValidateProps = ({ cityId, checkin, checkout }: Input) => ({
  checkin: checkin ?? DateUtils().addDays(1),
  checkout: checkout ?? DateUtils().addDays(5),
  cityId: cityId ?? '1',
});

describe('validateInput', () => {
  it('validates correctly when there is no error', () => {
    // $FlowExpectedError: Ok for testing
    const errors = validateInput(getValidateProps({}));
    expect(errors).toEqual({});
  });

  it('gives error for cityId -1', () => {
    const errors1 = validateInput(getValidateProps({ cityId: '-1' }));

    const errors2 = validateInput(getValidateProps({ cityId: -1 }));

    expect(errors1).toEqual({ invalidCityId: true });
    expect(errors2).toEqual({ invalidCityId: true });
  });

  it('gives error for checkin date before today', () => {
    const errors = validateInput(
      getValidateProps({ checkin: DateUtils().addDays(-10) }),
    );
    expect(errors).toEqual({
      beforeToday: true,
    });
  });

  it('gives error for checkout too far in the future', () => {
    const errors = validateInput(
      getValidateProps({
        checkin: DateUtils().addDays(360),
        checkout: DateUtils().addDays(366),
      }),
    );

    expect(errors).toEqual({ tooFarFuture: true });
  });

  it('gives error for invalid interval', () => {
    const errors1 = validateInput(
      getValidateProps({
        checkin: DateUtils().addDays(3),
        checkout: DateUtils().addDays(1),
      }),
    );
    const errors2 = validateInput(
      getValidateProps({
        checkin: DateUtils().addDays(1),
        checkout: DateUtils().addDays(1),
      }),
    );
    const errors3 = validateInput(
      getValidateProps({
        checkin: DateUtils().addDays(1),
        checkout: DateUtils().addDays(32),
      }),
    );

    expect(errors1).toEqual({
      interval: -2,
    });
    expect(errors2).toEqual({
      interval: 0,
    });
    expect(errors3).toEqual({
      interval: 31,
    });
  });

  it('gives error for missing dates', () => {
    const errors = validateInput({
      checkin: null,
      checkout: null,
      cityId: '2',
    });
    expect(errors).toEqual({ missingDates: true });
  });
});
