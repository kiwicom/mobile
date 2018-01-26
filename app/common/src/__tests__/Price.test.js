// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Price from '../Price';

const renderer = new ShallowRenderer();

it('renders zeros correctly', () => {
  expect(
    renderer.render(<Price amount={0} currency="CZK" />),
  ).toMatchSnapshot();
});

it('renders null values correctly', () => {
  expect(
    renderer.render(<Price amount={null} currency={null} />),
  ).toMatchSnapshot();
});
