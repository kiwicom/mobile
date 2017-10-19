// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import GoogleLogin from '../GoogleLogin';

jest.mock('../../../src/authentication/Google', () => ({
  signIn: () => false,
}));

let renderer;
beforeEach(() => {
  renderer = new ShallowRenderer();
});

it('calls Google sing-in service unsuccessfully', async () => {
  expect.assertions(0);
  renderer.render(<GoogleLogin onSuccess={() => expect(true).toBe(false)} />);
  await renderer.getRenderOutput().props.onPress();
});
