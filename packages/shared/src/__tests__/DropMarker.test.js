// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import DropMarker from '../dropMarker/DropMarker';

const renderer = new ShallowRenderer();

it('matches', () => {
  expect(renderer.render(<DropMarker />)).toMatchSnapshot();
});
