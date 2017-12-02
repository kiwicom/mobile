// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import GoogleLogin from '../GoogleLoginForm';

jest.mock('../../../services/authentication/Google', () => ({
  signIn: () => false,
}));

function onSuccessCallback() {
  throw new Error('Should not be called');
}

it('calls Google sing-in service unsuccessfully', async () => {
  expect.assertions(0);
  const renderer = new ShallowRenderer();
  renderer.render(<GoogleLogin onSuccess={onSuccessCallback} />); // onSuccess event should not be called!
  await renderer.getRenderOutput().props.onPress();
});
