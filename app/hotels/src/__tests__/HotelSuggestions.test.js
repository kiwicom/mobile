// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import HotelSuggestions from '../HotelSuggestions';

let renderer;
beforeEach(() => {
  renderer = new ShallowRenderer();
});

it('renders without crashing', () => {
  renderer.render(<HotelSuggestions />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
