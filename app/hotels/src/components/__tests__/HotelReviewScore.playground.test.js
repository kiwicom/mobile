// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import { HotelReviewScore } from '../HotelReviewScore';

const $refType: any = null;
const getProps = (score: number = 1.2) => ({
  review: {
    score,
  },
  $refType,
});

it('renders with red value', () => {
  PlaygroundRenderer.render(<HotelReviewScore hotel={getProps()} />);
});

it('renders with yellow value', () => {
  PlaygroundRenderer.render(<HotelReviewScore hotel={getProps(5.8)} />);
});

it('renders with green value', () => {
  PlaygroundRenderer.render(<HotelReviewScore hotel={getProps(9.2)} />);
});
