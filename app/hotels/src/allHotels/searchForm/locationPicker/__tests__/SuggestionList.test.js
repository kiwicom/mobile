// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/react-native-app-playground';

import { SuggestionList } from '../SuggestionList';

const data = {
  hotelCities: {
    edges: [],
  },
};

for (let i = 1; i < 21; i++) {
  data.hotelCities.edges.push({
    node: {
      id: `${i}`,
      name: `City mock ${i}`,
    },
  });
}

function noop() {}

describe('SuggestionList', () => {
  it('renders', () => {
    PlaygroundRenderer.render(
      <SuggestionList
        data={data}
        search=""
        onCitySelected={noop}
        storeFirstLocation={noop}
      />,
    );
  });

  it('stores the first location if there is one', () => {
    const storeFirstLocation = jest.fn();
    const Component = new SuggestionList({
      data,
      search: '',
      onCitySelected: jest.fn(),
      storeFirstLocation,
    });

    Component.componentDidMount();
    expect(storeFirstLocation).toHaveBeenCalledWith('1', 'City mock 1');
  });

  it('does not call storeFirstLocation if there is not one', () => {
    let undefinedCities;
    const storeFirstLocation = jest.fn();
    const Component = new SuggestionList({
      data: {
        hotelCities: undefinedCities,
      },
      search: '',
      onCitySelected: jest.fn(),
      storeFirstLocation,
    });

    Component.componentDidMount();
    expect(storeFirstLocation).not.toHaveBeenCalled();
  });
});
