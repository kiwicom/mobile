// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import GoogleButton from '../GoogleButton';

let renderer;
beforeEach(() => {
  renderer = new ShallowRenderer();
});

const voidOperation = () => Promise.resolve();

it('renders as expected', () => {
  renderer.render(<GoogleButton loading={false} onPress={voidOperation} />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('renders as expected while loading', () => {
  renderer.render(<GoogleButton loading={true} onPress={voidOperation} />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
