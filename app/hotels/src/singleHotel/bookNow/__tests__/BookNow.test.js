// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { BookNow } from '../BookNow';

const renderer = new ShallowRenderer();

it('renders without crashing', () => {
  const props = {
    onGoToPayment() {},
    selected: {
      a: 1,
    },
    availableRooms: [
      {
        originalId: 'a',
        incrementalPrice: [
          {
            amount: 100,
            currency: 'EUR',
          },
        ],
      },
    ],
    hotel: {
      originalId: 'abc',
    },
  };

  renderer.render(<BookNow {...props} />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('renders without crashing with missing data', () => {
  const props = {
    onGoToPayment() {},
    selected: {},
    availableRooms: undefined,
    hotel: undefined,
  };

  renderer.render(<BookNow {...props} />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
