// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import SimpleLoading from '../SimpleLoading';

jest.useFakeTimers();

it('renders loading indicator correctly over the time', () => {
  const rendered = renderer.create(<SimpleLoading />);
  expect(rendered.toJSON()).toMatchSnapshot(); // Loading

  jest.runTimersToTime(100);
  expect(rendered.toJSON()).toMatchSnapshot(); // Loading.

  jest.runTimersToTime(100);
  expect(rendered.toJSON()).toMatchSnapshot(); // Loading..

  jest.runTimersToTime(100);
  expect(rendered.toJSON()).toMatchSnapshot(); // Loading...

  jest.runTimersToTime(100);
  expect(rendered.toJSON()).toMatchSnapshot(); // Loading
});
