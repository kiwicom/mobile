// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/react-native-app-playground';

import { SuggestionList } from '../SuggestionList';

const data = {
  hotelCities: {
    edges: [],
  },
};

for (let i = 1; i < 51; i++) {
  data.hotelCities.edges.push({
    node: {
      id: `${i}`,
      name: `City mock ${i}`,
    },
  });
}

describe('SuggestionList', () => {
  it('renders', () => {
    PlaygroundRenderer.render(
      <SuggestionList
        data={data}
        search=""
        onCitySelected={jest.fn()}
        storeFirstLocation={jest.fn()}
      />,
    );
  });

  it('calls storeFirstLocation if city is defined', () => {
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

  it('does not call storeFirstLocation if city is undefined', () => {
    const storeFirstLocation = jest.fn();
    // $FlowExpectedError: Intenionaly testing with data that does not match flow type
    const Component = new SuggestionList({
      data: {
        hotelCitites: [],
      },
      search: '',
      onCitySelected: jest.fn(),
      storeFirstLocation,
    });

    Component.componentDidMount();
    expect(storeFirstLocation).not.toHaveBeenCalled();
  });
});
