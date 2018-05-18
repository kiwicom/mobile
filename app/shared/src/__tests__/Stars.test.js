// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Stars from '../Stars';

const renderer = new ShallowRenderer();

it('works with failed rating prop', () => {
  expect(renderer.render(<Stars />)).toMatchSnapshot();
  expect(renderer.render(<Stars rating={null} />)).toMatchSnapshot();
});

it('works with rating prop', () => {
  expect(renderer.render(<Stars rating={3} />)).toMatchSnapshot();
  expect(renderer.render(<Stars rating={10} />)).toMatchSnapshot();
});
