// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import SimpleCard from '../SimpleCard';

it('renders as expected', () => {
  const rendered = renderer.create(<SimpleCard>CHILDREN</SimpleCard>).toJSON();
  expect(rendered).toMatchSnapshot();
});

it('renders as expected with onPress callback', () => {
  const rendered = renderer
    .create(<SimpleCard onPress={() => {}}>CHILDREN</SimpleCard>)
    .toJSON();
  expect(rendered).toMatchSnapshot();
});
