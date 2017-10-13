// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import GoogleLoginButton from '../GoogleLogin';

it('renders as expected', () => {
  const rendered = renderer.create(<GoogleLoginButton />).toJSON();
  expect(rendered).toMatchSnapshot();
});
