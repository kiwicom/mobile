// @flow
import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Facilities } from '../Facilities';

const renderer = new ShallowRenderer();

it('renders without crashing', () => {
  const props = {
    facilities: {
      edges: [
        {
          node: {
            id: 'x',
            name: 'y',
          },
        },
      ],
    },
  };

  renderer.render(<Facilities {...props} />);
});

it('renders without crashing with missing data', () => {
  const props = {
    facilities: undefined,
  };

  renderer.render(<Facilities {...props} />);
});
