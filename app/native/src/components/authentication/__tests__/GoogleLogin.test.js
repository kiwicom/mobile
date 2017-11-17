// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import GoogleLogin from '../GoogleLoginForm';

let renderer;
beforeEach(() => {
  renderer = new ShallowRenderer();
});

it('renders without crashing', () => {
  renderer.render(<GoogleLogin onSuccess={() => {}} />);
  expect(renderer.getRenderOutput()).toBeTruthy();
});
