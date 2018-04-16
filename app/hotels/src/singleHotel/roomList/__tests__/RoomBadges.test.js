// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import { RoomBadges } from '../RoomBadges';

describe('RoomBadges', () => {
  it('renders', () => {
    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    const availableRoom = {
      isBreakfastIncluded: true,
      isRefundable: true,
    };
    PlaygroundRenderer.render(<RoomBadges availableRoom={availableRoom} />);
  });
});
