// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import { BookNow } from '../BookNow';

it('renders without crashing', () => {
  const props = {
    onGoToPayment() {},
    selected: {
      a: 1,
    },
    availableRooms: [
      // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
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
    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    hotel: {
      originalId: 'abc',
    },
    personCount: 2,
    numberOfRooms: 1,
  };

  PlaygroundRenderer.render(<BookNow {...props} />);
});

it('renders without crashing with missing data', () => {
  const props = {
    onGoToPayment() {},
    selected: {},
    availableRooms: undefined,
    hotel: undefined,
    personCount: 2,
    numberOfRooms: 1,
  };

  PlaygroundRenderer.render(<BookNow {...props} />);
});
