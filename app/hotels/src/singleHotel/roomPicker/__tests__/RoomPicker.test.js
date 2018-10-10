// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import RoomPicker from '../RoomPicker';

const VoidAction = () => {};

it('renders as expected', () => {
  PlaygroundRenderer.render(
    <RoomPicker
      price={{ amount: 100, currency: 'CZK' }}
      selectedCount={0}
      selectableCount={1}
      increment={VoidAction}
      decrement={VoidAction}
    />,
  );

  PlaygroundRenderer.render(
    <RoomPicker
      price={{ amount: 100, currency: 'CZK' }}
      selectedCount={1}
      selectableCount={2}
      increment={VoidAction}
      decrement={VoidAction}
    />,
  );

  PlaygroundRenderer.render(
    <RoomPicker
      price={{ amount: 100, currency: 'CZK' }}
      selectedCount={2}
      selectableCount={2}
      increment={VoidAction}
      decrement={VoidAction}
    />,
  );
});
