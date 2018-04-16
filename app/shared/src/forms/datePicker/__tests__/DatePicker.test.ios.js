// @flow

import * as React from 'react';
import MockDate from 'mockdate';
import renderer from 'react-test-renderer';

import DatePicker from '../DatePicker.ios';

jest.mock('DatePickerIOS');

const getComponent = (onDateChange: Function = jest.fn()) =>
  renderer.create(
    <DatePicker date={new Date(1)} onDateChange={onDateChange} />,
  );

beforeEach(() => {
  MockDate.set('2018-01-01');
});

afterEach(() => {
  MockDate.reset();
});

describe('DatePicker ios', () => {
  it('handles on change with date object', () => {
    const wrapper = getComponent();
    const instance = wrapper.getInstance();
    const date = new Date(2);

    instance.onDateChange(date);
    expect(instance.state.date).toEqual(date);
  });

  it('handles on change with ISO string', () => {
    const wrapper = getComponent();
    const instance = wrapper.getInstance();
    const date = new Date(2);

    instance.onDateChange(date.toISOString());
    expect(instance.state.date).toEqual(date);
  });
});
