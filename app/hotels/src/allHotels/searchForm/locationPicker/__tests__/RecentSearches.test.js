// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/react-native-app-playground';

import RecentSearches from '../RecentSearches';

const locations = [
  {
    id: '1',
    name: 'Rome',
  },
  {
    id: '2',
    name: 'Oslo',
  },
];

describe('RecentSearches', () => {
  it('renders', () => {
    PlaygroundRenderer.render(
      <RecentSearches locations={locations} onCitySelected={jest.fn()} />,
    );
  });

  it('renders correctly with no locations', () => {
    PlaygroundRenderer.render(
      <RecentSearches locations={[]} onCitySelected={jest.fn()} />,
    );
  });
});
