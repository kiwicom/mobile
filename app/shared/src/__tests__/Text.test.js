// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Text from '../Text';

const renderer = new ShallowRenderer();

it('renders with the default properties for iOS', () => {
  expect(renderer.render(<Text>IOS</Text>)).toMatchSnapshot();
});

it('renders with additional style properties', () => {
  expect(
    renderer.render(<Text style={{ fontWeight: 'bold' }}>IOS</Text>),
  ).toMatchSnapshot();
});
