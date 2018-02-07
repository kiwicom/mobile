// @flow
import * as React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment';

import DateInput, {
  DISPLAY_DATE_FORMAT,
  checkinAndCheckoutToDate,
} from '../DateInput';

const checkin = moment()
  .startOf('day')
  .toDate();
const checkout = moment()
  .startOf('day')
  .add(6, 'days')
  .toDate();

const renderDateInput = (onChange: Function) =>
  renderer.create(
    <DateInput checkin={checkin} checkout={checkout} onChange={onChange} />,
  );

describe('DateInput', () => {
  describe('Handle checkin change', () => {
    it('should change checkin date only if checkin date is before checkout date', () => {
      const onChange = jest.fn();
      const wrapper = renderDateInput(onChange);
      const newCheckinDate = moment(checkout).subtract(2, 'days');

      wrapper.root.instance.handleCheckinChange(
        newCheckinDate.format(DISPLAY_DATE_FORMAT),
      );
      expect(onChange).toHaveBeenCalledWith(
        checkinAndCheckoutToDate(moment(newCheckinDate), moment(checkout)),
      );
    });

    it('should set checkout date = checkin date + 30 days if checkin date is more than 30 days before checkout date', () => {
      const onChange = jest.fn();
      const wrapper = renderDateInput(onChange);
      const newCheckinDate = moment(checkout).subtract(31, 'days');
      wrapper.root.instance.handleCheckinChange(
        newCheckinDate.format(DISPLAY_DATE_FORMAT),
      );
      expect(onChange).toHaveBeenCalledWith(
        checkinAndCheckoutToDate(
          newCheckinDate,
          moment(newCheckinDate).add(30, 'days'),
        ),
      );
    });

    it('should set checkout date one day after checkin date if checkin is later than checkout', () => {
      const onChange = jest.fn();
      const wrapper = renderDateInput(onChange);
      const newCheckinDate = moment(checkin).add(30, 'days');
      wrapper.root.instance.handleCheckinChange(
        newCheckinDate.format(DISPLAY_DATE_FORMAT),
      );
      expect(onChange).toHaveBeenCalledWith(
        checkinAndCheckoutToDate(
          newCheckinDate,
          moment(newCheckinDate).add(1, 'days'),
        ),
      );
    });

    it('should set checkout date one day after checkin date if checkin is equal to checkout', () => {
      const onChange = jest.fn();
      const wrapper = renderDateInput(onChange);
      const newCheckinDate = moment(checkout);
      wrapper.root.instance.handleCheckinChange(
        newCheckinDate.format(DISPLAY_DATE_FORMAT),
      );
      expect(onChange).toHaveBeenCalledWith(
        checkinAndCheckoutToDate(
          newCheckinDate,
          moment(newCheckinDate).add(1, 'days'),
        ),
      );
    });
  });

  describe('Handle checkout change', () => {
    it('should change checkout date only if checkout date is 1 - 30 days greater than checkin date', () => {
      const onChange = jest.fn();
      const wrapper = renderDateInput(onChange);
      const newCheckoutDate = moment(checkin).add(30, 'days');
      wrapper.root.instance.handleCheckoutChange(
        newCheckoutDate.format(DISPLAY_DATE_FORMAT),
      );
      expect(onChange).toHaveBeenCalledWith(
        checkinAndCheckoutToDate(moment(checkin), moment(newCheckoutDate)),
      );
    });

    it('should set checkin date = checkout date - 30 days if checkout is more that 30 days from checkin date', () => {
      const onChange = jest.fn();
      const wrapper = renderDateInput(onChange);
      const newCheckoutDate = moment(checkin).add(31, 'days');
      wrapper.root.instance.handleCheckoutChange(
        newCheckoutDate.format(DISPLAY_DATE_FORMAT),
      );
      expect(onChange).toHaveBeenCalledWith(
        checkinAndCheckoutToDate(
          moment(newCheckoutDate).subtract(30, 'days'),
          moment(newCheckoutDate),
        ),
      );
    });

    it('should set checkin date = checkout date - 1 if checkout is set to be before checkin', () => {
      const onChange = jest.fn();
      const wrapper = renderDateInput(onChange);
      const newCheckoutDate = moment(checkin).subtract(1, 'days');
      wrapper.root.instance.handleCheckoutChange(
        newCheckoutDate.format(DISPLAY_DATE_FORMAT),
      );
      expect(onChange).toHaveBeenCalledWith(
        checkinAndCheckoutToDate(
          moment(newCheckoutDate).subtract(1, 'days'),
          moment(newCheckoutDate),
        ),
      );
    });

    it('should set checkin date = checkout date - 1 if checkout is set to be equal to checkin date', () => {
      const onChange = jest.fn();
      const wrapper = renderDateInput(onChange);
      const newCheckoutDate = moment(checkin);
      wrapper.root.instance.handleCheckoutChange(
        newCheckoutDate.format(DISPLAY_DATE_FORMAT),
      );
      expect(onChange).toHaveBeenCalledWith(
        checkinAndCheckoutToDate(
          moment(newCheckoutDate).subtract(1, 'days'),
          moment(newCheckoutDate),
        ),
      );
    });
  });
});
