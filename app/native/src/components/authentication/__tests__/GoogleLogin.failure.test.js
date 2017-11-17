// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import GoogleLogin from '../GoogleLoginForm';

jest.mock('../../../services/authentication/Google', () => ({
  signIn: () => false,
}));

let renderer;
beforeEach(() => {
  renderer = new ShallowRenderer();
});

it('calls Google sing-in service unsuccessfully', async () => {
  expect.assertions(0);
  // onSuccess event should not be called!
  renderer.render(<GoogleLogin onSuccess={() => expect(true).toBe(false)} />);
  await renderer.getRenderOutput().props.onPress();
});
