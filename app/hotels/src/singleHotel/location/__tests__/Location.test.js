// @flow
import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Location } from '../Location';

const renderer = new ShallowRenderer();

it('renders without crashing', () => {
  const props = {
    openGallery() {},
    onGoToMap() {},
    hotel: ({
      hotel: 'asdf',
    }: Object),
  };

  renderer.render(<Location {...props} />);
});

it('renders without crashing with missing data', () => {
  const props = {
    openGallery() {},
    onGoToMap() {},
    hotel: undefined,
  };

  renderer.render(<Location {...props} />);
});
