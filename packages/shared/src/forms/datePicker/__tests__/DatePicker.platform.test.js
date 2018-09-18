// @flow

import * as React from 'react';
import MockDate from 'mockdate';
import renderer from 'react-test-renderer';

import IOSDatePicker from '../DatePicker.ios';
import AndroidDatePicker from '../DatePicker.android';

jest.mock('DatePickerIOS');
jest.mock('DatePickerAndroid', () => ({
  dismissedAction: 0,
  open: async () => ({
    action: 1,
    year: 2018,
    month: 1,
    day: 1,
  }),
}));

const getIOSComponent = (onDateChange: Function = jest.fn()) =>
  renderer.create(
    <IOSDatePicker date={new Date(1)} onDateChange={onDateChange} />,
  );

const getAndroidComponent = (onDateChange: Function = jest.fn()) =>
  renderer.create(
    <AndroidDatePicker date={new Date(1)} onDateChange={onDateChange} />,
  );

beforeEach(() => {
  MockDate.set('2018-01-01');
});

afterEach(() => {
  MockDate.reset();
});

// TODO needs to be fixed
describe.skip('DatePicker ios', () => {
  it('handles on change with date object', () => {
    const wrapper = getIOSComponent();
    const instance = wrapper.getInstance();
    const date = new Date(Date.UTC(2018, 1, 1));

    instance.onDateChange(date);
    expect(instance.state.date).toEqual(date);
  });

  it('handles on change with ISO string', () => {
    const wrapper = getIOSComponent();
    const instance = wrapper.getInstance();
    const date = new Date(Date.UTC(2018, 1, 1));

    instance.onDateChange(date.toISOString());
    expect(instance.state.date).toEqual(date);
  });

  it('returns the UTC date', () => {
    const wrapper = getIOSComponent();
    const instance = wrapper.getInstance();

    instance.onDateChange(new Date(2018, 1, 1));
    expect(instance.state.date.getUTCFullYear()).toEqual(2018);
    expect(instance.state.date.getUTCMonth()).toEqual(1);
    expect(instance.state.date.getUTCDate()).toEqual(1);
  });
});

describe('Datepicker android', () => {
  it('returns the UTC date', async () => {
    const onDateChange = jest.fn();
    const wrapper = getAndroidComponent(onDateChange);
    const instance = wrapper.getInstance();

    await instance.showDatePicker();
    expect(onDateChange).toHaveBeenCalledWith(new Date(Date.UTC(2018, 1, 1)));
  });
});
