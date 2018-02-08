// @flow

import * as React from 'react';

import { BookNow } from '../BookNow';
import PlaygroundRenderer from '../../../../../PlaygroundRenderer';

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

  PlaygroundRenderer.render(<BookNow {...props} />);
});

it('renders without crashing with missing data', () => {
  const props = {
    onGoToPayment() {},
    selected: {},
    availableRooms: undefined,
    hotel: undefined,
  };

  PlaygroundRenderer.render(<BookNow {...props} />);
});
