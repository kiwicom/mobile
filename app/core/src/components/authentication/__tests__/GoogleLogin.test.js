// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import GoogleLogin from '../GoogleLoginForm';

function onSuccessCallback() {}

it('renders without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<GoogleLogin onSuccess={onSuccessCallback} />);
  expect(renderer.getRenderOutput()).toBeTruthy();
});
