// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import NetworkImage from './NetworkImage';

const renderer = new ShallowRenderer();

it('passes props to the original Image component', () => {
  renderer.render(
    <NetworkImage
      style={{ width: 50, height: 75, borderRadius: 2 }}
      resizeMode="cover"
      source={{ uri: 'http://image.png' }}
    />,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('returns MissingImage component for invalid URI', () => {
  renderer.render(<NetworkImage source={{ uri: null }} />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();

  renderer.render(<NetworkImage source={{ uri: undefined }} />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
