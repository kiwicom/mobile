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
    const date = new Date(Date.UTC(2018, 1, 1));

    instance.onDateChange(date);
    expect(instance.state.date).toEqual(date);
  });

  it('handles on change with ISO string', () => {
    const wrapper = getComponent();
    const instance = wrapper.getInstance();
    const date = new Date(Date.UTC(2018, 2, 2));

    instance.onDateChange(date.toISOString());
    expect(instance.state.date).toEqual(date);
  });

  it('handles UTC', () => {
    const wrapper = getComponent();
    const instance = wrapper.getInstance();
    const date = new Date('Wed Jun 27 2018 00:00:00 GMT+0200 (CEST)');

    instance.onDateChange(date);
    expect(instance.state.date).toEqual(new Date(Date.UTC(2018, 5, 27)));
  });
});
