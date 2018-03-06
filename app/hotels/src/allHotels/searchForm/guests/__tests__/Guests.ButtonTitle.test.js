// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { ButtonTitle } from '../Guests';

const renderer = new ShallowRenderer();

it('renders correctly with one adult and zero children', () => {
  expect(
    renderer.render(<ButtonTitle adultsCount={1} childrenCount={0} />),
  ).toMatchSnapshot();
});

it('renders correctly with one child and zero adults', () => {
  expect(
    renderer.render(<ButtonTitle adultsCount={0} childrenCount={1} />),
  ).toMatchSnapshot();
});

it('renders correctly with more adults', () => {
  expect(
    renderer.render(<ButtonTitle adultsCount={5} childrenCount={0} />),
  ).toMatchSnapshot();
});

it('renders correctly with more adults and children', () => {
  expect(
    renderer.render(<ButtonTitle adultsCount={5} childrenCount={3} />),
  ).toMatchSnapshot();
});
