// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import OfflineScreen from '../OfflineScreen';

it('renders', () => {
  PlaygroundRenderer.render(
    <OfflineScreen onClose={jest.fn()} onTryAgain={jest.fn()} />,
  );
});
