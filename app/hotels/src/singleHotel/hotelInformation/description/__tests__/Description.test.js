// @flow
import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Description } from '../Description';

const renderer = new ShallowRenderer();

it('renders without crashing', () => {
  const props = {
    hotel: {
      summary: 'Hotel description',
      facilities: {},
    },
  };

  renderer.render(<Description {...props} />);
});

it('renders without crashing with missing data', () => {
  const props = {
    hotel: undefined,
  };

  renderer.render(<Description {...props} />);
});
