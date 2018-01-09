// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import SimpleCard from '../SimpleCard';

const renderer = new ShallowRenderer();
function onPressVoidCallback() {}

it('renders as expected', () => {
  expect(renderer.render(<SimpleCard>CHILDREN</SimpleCard>)).toMatchSnapshot();
});

it('renders as expected with onPress callback', () => {
  expect(
    renderer.render(
      <SimpleCard onPress={onPressVoidCallback}>CHILDREN</SimpleCard>,
    ),
  ).toMatchSnapshot();
});

it('renders airy density', () => {
  expect(
    renderer.render(<SimpleCard density="airy">CHILDREN</SimpleCard>),
  ).toMatchSnapshot();
});

it('renders without separator', () => {
  expect(
    renderer.render(<SimpleCard separator={false}>CHILDREN</SimpleCard>),
  ).toMatchSnapshot();
});
