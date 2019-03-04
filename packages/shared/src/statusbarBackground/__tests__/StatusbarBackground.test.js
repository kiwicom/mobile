// @flow strict

import * as React from 'react';
import renderer from 'react-test-renderer';
import { Platform } from 'react-native';

import StatusbarBackground from '../StatusbarBackground';

let originalPlatform;

beforeEach(() => (originalPlatform = Platform.OS));
afterEach(() => (Platform.OS = originalPlatform));

it('renders on ios', () => {
  Platform.OS = 'ios';
  expect(renderer.create(<StatusbarBackground />)).toMatchInlineSnapshot(`
<View
  style={
    Array [
      Object {
        "end": 0,
        "height": 20,
        "position": "absolute",
        "start": 0,
        "top": 0,
        "zIndex": 100,
      },
      undefined,
    ]
  }
/>
`);
});

it('renders null on android', () => {
  Platform.OS = 'android';
  expect(renderer.create(<StatusbarBackground />).toJSON()).toBeNull();
});
