// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import FlightServices from '../FlightServices';

const navigation = {
  navigate: () => {},
  state: { params: {} },
  setParams: () => {},
  goBack: () => {},
};

it('renders', () => {
  PlaygroundRenderer.render(
    <FlightServices bookingId="123" navigation={navigation} />,
  );
});
