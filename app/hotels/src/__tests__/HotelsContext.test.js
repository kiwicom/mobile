// @flow strict

import * as React from 'react';
import renderer from 'react-test-renderer';

import HotelsContext, {
  getAsUtcDate,
  type RoomConfigurationType,
} from '../HotelsContext';

const props = {
  version: 'test',
  currency: 'EUR',
  latitude: null,
  longitude: null,
  checkin: null,
  checkout: null,
  cityId: null,
  cityName: null,
};

const Child = () => null;

const getWrapper = (roomsConfiguration: ?RoomConfigurationType) =>
  renderer
    .create(
      <HotelsContext.Provider
        {...props}
        roomsConfiguration={roomsConfiguration}
      >
        <Child />
      </HotelsContext.Provider>,
    )
    .getInstance();

describe('getAsUtcDate', () => {
  it('should return null for invalid date string', () => {
    expect(getAsUtcDate('١٨-٠١-٠ذ')).toBe(null);
    expect(getAsUtcDate('2018-lol-01')).toBe(null);
  });

  it('should return the utc date for valid dates', () => {
    expect(getAsUtcDate('2018-01-01')).toEqual(new Date(Date.UTC(2018, 0, 1)));
  });
});

describe('HotelsContext', () => {
  it('calculates number of guests correctly with undefined roomsConfig', () => {
    const wrapper = getWrapper();
    expect(wrapper.getGuestCount()).toBe(0);
  });

  it('calculates number of guests correctly', () => {
    const wrapper = getWrapper([
      { adultsCount: 2, children: [] },
      { adultsCount: 1 },
      { adultsCount: 1, children: [{ age: 0 }, { age: 2 }, { age: 17 }] },
    ]);
    expect(wrapper.getGuestCount()).toBe(7);
  });
});
