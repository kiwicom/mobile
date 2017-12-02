// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import GoogleButton from '../GoogleButton';

const voidOperation = () => Promise.resolve();

it('renders as expected', () => {
  const rendered = renderer
    .create(<GoogleButton loading={false} onPress={voidOperation} />)
    .toJSON();
  expect(rendered).toMatchSnapshot();
});

it('renders as expected while loading', () => {
  const rendered = renderer
    .create(<GoogleButton loading={true} onPress={voidOperation} />)
    .toJSON();
  expect(rendered).toMatchSnapshot();
});
