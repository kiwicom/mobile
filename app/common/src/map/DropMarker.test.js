// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import DropMarker from './DropMarker';

const renderer = new ShallowRenderer();

it('calculates the offsets base on icon size', () => {
  expect(renderer.render(<DropMarker />)).toMatchSnapshot();
  expect(renderer.render(<DropMarker size={100} />)).toMatchSnapshot();
});
