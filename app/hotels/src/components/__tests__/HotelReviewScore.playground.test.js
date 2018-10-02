// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import HotelReviewScore from '../HotelReviewScore';

it('renders with red value', () => {
  PlaygroundRenderer.render(<HotelReviewScore score={1.2} />);
});

it('renders with yellow value', () => {
  PlaygroundRenderer.render(<HotelReviewScore score={5.8} />);
});

it('renders with green value', () => {
  PlaygroundRenderer.render(<HotelReviewScore score={9.2} />);
});
