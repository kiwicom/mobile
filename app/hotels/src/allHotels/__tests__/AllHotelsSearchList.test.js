// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { AllHotelsSearchList } from '../AllHotelsSearchList';

const renderer = new ShallowRenderer();
const voidCallback = () => {};

const relay = {
  hasMore: jest.fn(),
  loadMore: jest.fn(),
  isLoading: jest.fn(),
  refetchConnection: jest.fn(),
};

it('renders found hotels', () => {
  const data = {
    allAvailableHotels: {
      edges: [
        {
          node: {
            id: 'hotel1',
          },
        },
        {
          node: {
            id: 'hotel2',
          },
        },
      ],
      stats: {
        priceMax: 9000,
        priceMin: 200,
      },
    },
  };

  renderer.render(
    <AllHotelsSearchList
      data={data}
      openSingleHotel={voidCallback}
      setCurrentSearchStats={jest.fn()}
      relay={relay}
    />,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('renders a "not found" message when no hotel is found', () => {
  const data = {
    edges: [],
    stats: {
      priceMax: 0,
      priceMin: 0,
    },
  };

  renderer.render(
    <AllHotelsSearchList
      data={data}
      openSingleHotel={voidCallback}
      setCurrentSearchStats={jest.fn()}
      relay={relay}
    />,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('renders a "not found" message when data is missing', () => {
  const data = {
    edges: null,
    stats: {
      priceMax: 9000,
      priceMin: 200,
    },
  };

  renderer.render(
    <AllHotelsSearchList
      data={data}
      openSingleHotel={voidCallback}
      setCurrentSearchStats={jest.fn()}
      relay={relay}
    />,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
