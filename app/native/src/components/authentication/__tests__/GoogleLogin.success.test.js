// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import GoogleLogin from '../GoogleLoginForm';

jest.mock('../../../services/authentication/Google', () => ({
  signIn: () => 'fake mocked access token from Google service',
}));

let renderer;
beforeEach(() => {
  renderer = new ShallowRenderer();

  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: function() {
        return {
          token: 'fake mocked access token from Kiwi service',
          user_id: '21',
        };
      },
    }),
  );
});

it('calls Google sing-in service successfully', async () => {
  expect.assertions(1);
  renderer.render(
    <GoogleLogin
      onSuccess={accessToken =>
        expect(accessToken).toBe('fake mocked access token from Kiwi service')
      }
    />,
  );
  await renderer.getRenderOutput().props.onPress();
});
