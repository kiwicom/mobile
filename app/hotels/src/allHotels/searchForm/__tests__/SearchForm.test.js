// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import { DatePicker } from '@kiwicom/react-native-app-shared';
import MockDate from 'mockdate';

import SearchForm from '../SearchForm';

beforeEach(() => {
  MockDate.set('2018-01-01');
});

afterEach(() => {
  MockDate.reset();
});

const searchParams = {
  checkin: new Date(1),
  checkout: new Date(2),
  roomsConfiguration: {
    adultsCount: 1,
    children: [],
  },
};
const defaultProps = {
  location: 'Pra',
  search: searchParams,
  onChange: jest.fn(),
  openLocationPicker: jest.fn(),
};

describe('SearchForm', () => {
  it('Checkin change triggers onChange', async () => {
    expect.assertions(1);

    const onChange = jest.fn();
    const testRenderer = renderer.create(
      // $FlowIssue: https://github.com/facebook/flow/issues/2405
      <SearchForm {...defaultProps} onChange={onChange} />,
    );
    const testInstance = testRenderer.root;
    await testInstance
      .findAllByType(DatePicker)[0]
      .props.onDateChange('2018-01-01');

    expect(onChange).toBeCalled();
  });

  it('Checkout change triggers onChange', async () => {
    expect.assertions(1);

    const onChange = jest.fn();
    const testRenderer = renderer.create(
      // $FlowIssue: https://github.com/facebook/flow/issues/2405
      <SearchForm {...defaultProps} onChange={onChange} />,
    );
    const testInstance = testRenderer.root;
    await testInstance
      .findAllByType(DatePicker)[1]
      .props.onDateChange('2018-01-02');

    expect(onChange).toBeCalled();
  });

  it('Render all inputs', async () => {
    const renderer = new ShallowRenderer();
    // $FlowIssue: https://github.com/facebook/flow/issues/2405
    expect(renderer.render(<SearchForm {...defaultProps} />)).toMatchSnapshot();
  });
});
