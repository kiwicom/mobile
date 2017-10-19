// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import GoogleLogin from '../GoogleLogin';

jest.mock('../../../src/authentication/Google', () => ({
  signIn: () => true,
}));

let renderer;
beforeEach(() => {
  renderer = new ShallowRenderer();
});

it('calls Google sing-in service successfully', async () => {
  expect.assertions(1);
  renderer.render(<GoogleLogin onSuccess={() => expect(true).toBe(true)} />);
  await renderer.getRenderOutput().props.onPress();
});
