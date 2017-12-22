// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { RouteStopWithoutData } from './RouteStop';

const renderer = new ShallowRenderer();

it('renders without crashing', () => {
  renderer.render(
    <RouteStopWithoutData
      data={{
        airport: {},
      }}
    />,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
