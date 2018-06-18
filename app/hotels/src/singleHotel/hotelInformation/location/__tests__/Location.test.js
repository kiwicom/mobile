// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Location } from '../Location';

const renderer = new ShallowRenderer();

it('renders without crashing', () => {
  const props = {
    onGoToMap: () => {},
    isWide: false,
    hotel: ({
      hotel: 'asdf',
    }: Object),
  };

  renderer.render(<Location {...props} />);
});

it('renders without crashing with missing data', () => {
  const props = {
    onGoToMap: () => {},
    isWide: false,
    hotel: undefined,
  };

  renderer.render(<Location {...props} />);
});
