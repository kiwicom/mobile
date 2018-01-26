// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { HotelSwipeItem } from '../HotelSwipeItem';

describe('HotelSwipeItem', () => {
  let renderer;
  beforeEach(() => {
    renderer = new ShallowRenderer();
  });

  it('renders review', () => {
    const props = {
      onPress: jest.fn(),
      width: 250,
      data: {
        price: {
          amount: 140,
          currency: 'EUR',
        },
        hotel: {
          id: 'id-123',
          name: 'Hotel v Olomouci',
          mainPhoto: {
            thumbnailUrl: 'http://example.com/image.jpg',
          },
          rating: {
            stars: 3,
          },
          review: {
            score: 8,
            description: 'Very Good',
            count: 2,
          },
        },
      },
    };
    renderer.render(<HotelSwipeItem {...props} />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it('renders "no reviews" when no reviews are available', () => {
    const props = {
      onPress: jest.fn(),
      width: 250,
      data: {
        price: {
          amount: 140,
          currency: 'EUR',
        },
        hotel: {
          id: 'id-123',
          name: 'Hotel v Olomouci',
          mainPhoto: {
            thumbnailUrl: 'http://example.com/image.jpg',
          },
          rating: {
            stars: 3,
          },
          review: {
            score: null,
            description: null,
            count: null,
          },
        },
      },
    };
    renderer.render(<HotelSwipeItem {...props} />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
