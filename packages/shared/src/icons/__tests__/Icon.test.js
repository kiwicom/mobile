// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Icon from '../Icon';

const shallow = new ShallowRenderer();

it('renders', () => {
  expect(shallow.render(<Icon name="map" />)).toMatchSnapshot();
});
