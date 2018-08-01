// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import { DatePicker } from '@kiwicom/mobile-shared';

import { ExpiryDatePicker } from '../ExpiryDatePicker';

jest.mock('DatePickerIOS');

const ref: any = null;
const data = {
  legs: [
    { departure: { time: new Date('2017-01-01') } },
    { departure: { time: new Date('2019-01-01') } },
    { departure: { time: new Date('2018-01-01') } },
  ],
  $refType: ref,
};
describe('ExpiryDatePicker', () => {
  it('should set min date correctly', () => {
    const instance = renderer.create(
      <ExpiryDatePicker
        noExpiry={false}
        expiryDate={new Date()}
        onDateChange={jest.fn()}
        onNoExpiryChange={jest.fn()}
        data={data}
      />,
    );

    const picker = instance.root.findByType(DatePicker);
    expect(picker.props.minDate).toEqual(new Date('2019-01-01'));
  });
});
