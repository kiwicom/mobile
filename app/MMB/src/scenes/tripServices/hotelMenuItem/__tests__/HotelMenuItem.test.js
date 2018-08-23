// @flow

import MockDate from 'mockdate';

import { HotelMenuItem } from '../HotelMenuItem';

MockDate.set('2018-01-01');

describe('HotelMenuItem', () => {
  it('santizes dates correctly when both dates are null', () => {
    // $FlowExpectedError: Props not needed for this test
    const Component = new HotelMenuItem({});

    expect(Component.sanitizeDates({ checkin: null, checkout: null })).toEqual({
      checkin: '2018-01-01',
      checkout: '2018-01-02',
    });
  });

  it('santizes dates correctly when checkin null', () => {
    // $FlowExpectedError: Props not needed for this test
    const Component = new HotelMenuItem({});

    expect(
      Component.sanitizeDates({
        checkin: null,
        checkout: '2018-01-02',
      }),
    ).toEqual({
      checkin: '2018-01-01',
      checkout: '2018-01-02',
    });
  });

  it('santizes dates correctly when checkout is null', () => {
    // $FlowExpectedError: Props not needed for this test
    const Component = new HotelMenuItem({});

    expect(
      Component.sanitizeDates({
        checkin: '2018-01-01',
        checkout: null,
      }),
    ).toEqual({
      checkin: '2018-01-01',
      checkout: '2018-01-02',
    });
  });

  it('santizes dates correctly when neither date is null', () => {
    // $FlowExpectedError: Props not needed for this test
    const Component = new HotelMenuItem({});

    expect(
      Component.sanitizeDates({
        checkin: '2018-01-01',
        checkout: '2018-05-01',
      }),
    ).toEqual({
      checkin: '2018-01-01',
      checkout: '2018-05-01',
    });
  });
});
