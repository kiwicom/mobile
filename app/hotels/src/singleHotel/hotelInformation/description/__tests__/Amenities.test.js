// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Amenities } from '../Amenities';

const renderer = new ShallowRenderer();
const $refType: any = null;

it('renders without crashing', () => {
  const props = {
    amenities: [
      {
        id: 'x',
        name: 'y',
      },
    ],
    $refType,
  };

  renderer.render(<Amenities data={props} />);
});

it('renders without crashing with missing data', () => {
  const props = {
    data: undefined,
  };

  renderer.render(<Amenities {...props} />);
});
