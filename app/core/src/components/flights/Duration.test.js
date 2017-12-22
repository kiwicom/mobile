// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import Duration from './Duration';

it('works as expected', () => {
  expect(renderer.create(<Duration minutes={-1} />)).toMatchSnapshot();
  expect(renderer.create(<Duration minutes={0} />)).toMatchSnapshot();
  expect(renderer.create(<Duration minutes={1} />)).toMatchSnapshot();
  expect(renderer.create(<Duration minutes={59} />)).toMatchSnapshot();
  expect(renderer.create(<Duration minutes={60} />)).toMatchSnapshot();
  expect(renderer.create(<Duration minutes={121} />)).toMatchSnapshot();
  expect(renderer.create(<Duration minutes={10080} />)).toMatchSnapshot();
});

it('works as with falsey values', () => {
  expect(renderer.create(<Duration minutes={null} />)).toMatchSnapshot();
  expect(renderer.create(<Duration minutes={undefined} />)).toMatchSnapshot();
});
