// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import GoogleButton from '../GoogleButton';

it('renders as expected', () => {
  const rendered = renderer.create(<GoogleButton />).toJSON();
  expect(rendered).toMatchSnapshot();
});
