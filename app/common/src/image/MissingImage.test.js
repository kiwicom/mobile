// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import MissingImage from './MissingImage';

const renderer = new ShallowRenderer();

it('passes props to the original Image component', () => {
  renderer.render(
    <MissingImage
      style={{ width: 50, height: 75, borderRadius: 2 }}
      resizeMode="cover"
      source={{ uri: 'http://missing' }}
    />,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
