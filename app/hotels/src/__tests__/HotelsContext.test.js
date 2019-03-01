// @flow strict

import * as React from 'react';
import { DateUtils, DateFormatter } from '@kiwicom/mobile-localization';
import renderer from 'react-test-renderer';

import HotelsContext, { getAsUtcDate } from '../HotelsContext';

describe('getAsUtcDate', () => {
  it('should return null for invalid date string', () => {
    expect(getAsUtcDate('١٨-٠١-٠ذ')).toBeNull();
    expect(getAsUtcDate('2018-lol-01')).toBeNull();
  });

  it('should return the utc date for valid dates', () => {
    expect(getAsUtcDate('2018-01-01')).toEqual(new Date(Date.UTC(2018, 0, 1)));
  });
});
const props = {
  checkin: DateFormatter(DateUtils().addDays(30)).formatForMachine(),
  checkout: DateFormatter(DateUtils().addDays(37)).formatForMachine(),
};
const getInstance = () =>
  renderer
    .create(
      <>
        {/*  $FlowExpectedError: Just passing props needed for test to pass */}
        <HotelsContext.Provider {...props}>{null}</HotelsContext.Provider>
      </>,
    )
    .getInstance();

// In the end this is how this date is used, so it makes sense to pass it through this format for asserting results
const formatForMachine = (date: Date) => DateFormatter(date).formatForMachine();

describe('HotelsContext', () => {
  describe('setCheckinDate', () => {
    it('should set checkinDate', () => {
      const wrapper = getInstance();

      const checkin = DateUtils().addDays(32);
      wrapper.setCheckinDate(checkin);

      expect(formatForMachine(wrapper.state.checkin)).toEqual(
        formatForMachine(checkin),
      );
      expect(formatForMachine(wrapper.state.checkout)).toEqual(props.checkout);
    });

    it('should set checkout date = checkin + 30 days when diff in days > 30', () => {
      const wrapper = getInstance();

      const checkin = DateUtils().addDays(-5);
      const expectedCheckout = formatForMachine(DateUtils(checkin).addDays(30));
      wrapper.setCheckinDate(checkin);

      expect(formatForMachine(wrapper.state.checkin)).toEqual(
        formatForMachine(checkin),
      );
      expect(formatForMachine(wrapper.state.checkout)).toEqual(
        expectedCheckout,
      );
    });

    it('should set checkout date = checkin + 1 if diff in days <= 0', () => {
      const wrapper = getInstance();
      const checkin = DateUtils().addDays(40);
      const expectedCheckout = formatForMachine(DateUtils(checkin).addDays(1));

      wrapper.setCheckinDate(checkin);

      expect(formatForMachine(wrapper.state.checkin)).toEqual(
        formatForMachine(checkin),
      );
      expect(formatForMachine(wrapper.state.checkout)).toEqual(
        expectedCheckout,
      );
    });
  });

  describe('setCheckoutDate', () => {
    it('sets checkout date', () => {
      const wrapper = getInstance();

      const checkout = DateUtils(new Date(props.checkout)).addDays(2);
      wrapper.setCheckoutDate(checkout);

      expect(formatForMachine(wrapper.state.checkout)).toEqual(
        formatForMachine(checkout),
      );
      expect(formatForMachine(wrapper.state.checkin)).toEqual(props.checkin);
    });

    it('sets checkin date to checkout - 30 if diff is more than 30 days', () => {
      const wrapper = getInstance();
      const checkout = DateUtils(new Date(props.checkout)).addDays(30);
      const expectedCheckinDate = formatForMachine(
        DateUtils(checkout).addDays(-30),
      );

      wrapper.setCheckoutDate(checkout);

      expect(formatForMachine(wrapper.state.checkout)).toEqual(
        formatForMachine(checkout),
      );
      expect(formatForMachine(wrapper.state.checkin)).toEqual(
        expectedCheckinDate,
      );
    });

    it('sets checkin to checkout - 1 if diff in days is <= 0', () => {
      const wrapper = getInstance();
      const checkout = DateUtils(new Date(props.checkout)).addDays(-30);
      const expectedCheckinDate = formatForMachine(
        DateUtils(checkout).addDays(-1),
      );

      wrapper.setCheckoutDate(checkout);

      expect(formatForMachine(wrapper.state.checkout)).toEqual(
        formatForMachine(checkout),
      );
      expect(formatForMachine(wrapper.state.checkin)).toEqual(
        expectedCheckinDate,
      );
    });
  });
});
