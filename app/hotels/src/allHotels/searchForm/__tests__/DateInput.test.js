// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import { DateUtils } from '@kiwicom/mobile-localization';

import DateInput from '../DateInput';

jest.mock('DatePickerIOS');

const checkin = new Date();
const checkout = DateUtils().addDays(6);

const getInstance = (onChange: Function) => {
  return renderer
    .create(
      <DateInput checkin={checkin} checkout={checkout} onChange={onChange} />,
    )
    .getInstance();
};

/**
 * Scenarios:
 *
 * - checkin is later than checkout => checkout = checkin + 1
 * - checkout is later than 30 days from checkin => checkin = checkout - 30 days
 * - checkin is earlier that 30 days from checkout => checkout = checkin + 30 days
 * - checkout is before checkin => checkin = checkout - 1
 * - checkout is less than 30 days from checkin => nothing is happening
 * - checkin is less than 30 days from checkout => nothing is happening
 * - checkin is set to be equal to checkout => checkout = checkin + 1
 * - checkout is set to be equal to checkin => checkin = checkout - 1
 */
describe('DateInput', () => {
  describe('Handle checkin change', () => {
    it('should change checkin date only if checkin date is before checkout date', () => {
      const onChange = jest.fn();
      const newCheckinDate = DateUtils(checkout).addDays(-2);

      getInstance(onChange).handleCheckinChange(newCheckinDate);

      expect(onChange).toHaveBeenCalledWith({
        checkin: newCheckinDate,
        checkout,
      });
    });

    it('should set checkout date = checkin date + 30 days if checkin date is more than 30 days before checkout date', () => {
      const onChange = jest.fn();
      const newCheckinDate = DateUtils(checkout).addDays(-31);

      getInstance(onChange).handleCheckinChange(newCheckinDate);

      expect(onChange).toHaveBeenCalledWith({
        checkin: newCheckinDate,
        checkout: DateUtils(newCheckinDate).addDays(30),
      });
    });

    it('should set checkout date 1 day after checkin date if checkin is later than checkout', () => {
      const onChange = jest.fn();
      const newCheckinDate = DateUtils(checkin).addDays(30);

      getInstance(onChange).handleCheckinChange(newCheckinDate);

      expect(onChange).toHaveBeenCalledWith({
        checkin: newCheckinDate,
        checkout: DateUtils(newCheckinDate).addDays(1),
      });
    });

    it('should set checkout date 1 day after checkin date if checkin is equal to checkout', () => {
      const onChange = jest.fn();
      const newCheckinDate = checkout;

      getInstance(onChange).handleCheckinChange(newCheckinDate);

      expect(onChange).toHaveBeenCalledWith({
        checkin: newCheckinDate,
        checkout: DateUtils(newCheckinDate).addDays(1),
      });
    });
  });

  describe('Handle checkout change', () => {
    it('should change checkout date only if checkout date is 1 - 30 days greater than checkin date', () => {
      const onChange = jest.fn();
      const newCheckoutDate = DateUtils(checkin).addDays(30);

      getInstance(onChange).handleCheckoutChange(newCheckoutDate);

      expect(onChange).toHaveBeenCalledWith({
        checkin,
        checkout: newCheckoutDate,
      });
    });

    it('should set checkin date = checkout date - 30 days if checkout is more that 30 days from checkin date', () => {
      const onChange = jest.fn();
      const newCheckoutDate = DateUtils(checkin).addDays(31);

      getInstance(onChange).handleCheckoutChange(newCheckoutDate);

      expect(onChange).toHaveBeenCalledWith({
        checkin: DateUtils(newCheckoutDate).addDays(-30),
        checkout: newCheckoutDate,
      });
    });

    it('should set checkin date = checkout date - 1 if checkout is set to be before checkin', () => {
      const onChange = jest.fn();
      const newCheckoutDate = DateUtils(checkin).addDays(-1);

      getInstance(onChange).handleCheckoutChange(newCheckoutDate);

      expect(onChange).toHaveBeenCalledWith({
        checkin: DateUtils(newCheckoutDate).addDays(-1),
        checkout: newCheckoutDate,
      });
    });

    it('should set checkin date = checkout date - 1 if checkout is set to be equal to checkin date', () => {
      const onChange = jest.fn();
      const newCheckoutDate = checkin;

      getInstance(onChange).handleCheckoutChange(newCheckoutDate);

      expect(onChange).toHaveBeenCalledWith({
        checkin: DateUtils(newCheckoutDate).addDays(-1),
        checkout: newCheckoutDate,
      });
    });
  });
});
