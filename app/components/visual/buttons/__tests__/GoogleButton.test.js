// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import GoogleButton from '../GoogleButton';

it('renders as expected', () => {
  const rendered = renderer
    .create(<GoogleButton loading={false} onPress={() => Promise.resolve()} />)
    .toJSON();
  expect(rendered).toMatchSnapshot();
});

it('renders as expected while loading', () => {
  const rendered = renderer
    .create(<GoogleButton loading={true} onPress={() => Promise.resolve()} />)
    .toJSON();
  expect(rendered).toMatchSnapshot();
});
