// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import SearchForm from '../SearchForm';
import { TextInput, DatePicker } from '@kiwicom/react-native-app-common';
import MockDate from 'mockdate';

beforeEach(() => {
  MockDate.set('2018-01-01');
});

afterEach(() => {
  MockDate.reset();
});

describe('SearchForm', () => {
  it('Destination change triggers onChange', async () => {
    expect.assertions(1);

    const onChange = jest.fn();
    const testRenderer = renderer.create(<SearchForm onChange={onChange} />);
    const testInstance = testRenderer.root;
    await testInstance.findByType(TextInput).props.onChangeText('Prague');

    expect(onChange).toBeCalled();
  });

  it('Checkin change triggers onChange', async () => {
    expect.assertions(1);

    const onChange = jest.fn();
    const testRenderer = renderer.create(<SearchForm onChange={onChange} />);
    const testInstance = testRenderer.root;
    await testInstance
      .findAllByType(DatePicker)[0]
      .props.onDateChange('2018-01-01');

    expect(onChange).toBeCalled();
  });

  it('Checkout change triggers onChange', async () => {
    expect.assertions(1);

    const onChange = jest.fn();
    const testRenderer = renderer.create(<SearchForm onChange={onChange} />);
    const testInstance = testRenderer.root;
    await testInstance
      .findAllByType(DatePicker)[1]
      .props.onDateChange('2018-01-02');

    expect(onChange).toBeCalled();
  });

  it('Render all inputs', async () => {
    const renderer = new ShallowRenderer();
    renderer.render(<SearchForm onChange={jest.fn()} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
