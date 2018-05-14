// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import FlightServices from '../FlightServices';

it('renders', () => {
  PlaygroundRenderer.render(<FlightServices />);
});
