// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/react-native-app-playground';

import { RoomBadges } from '../RoomBadges';

describe('RoomBadges', () => {
  it('renders', () => {
    const availableRoom = {
      isBreakfastIncluded: true,
      isRefundable: true,
    };
    PlaygroundRenderer.render(<RoomBadges availableRoom={availableRoom} />);
  });
});
