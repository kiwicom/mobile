// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import { SearchResultsWithoutData } from '../SearchResults';

const navigation = {
  navigate: (screen: string, parameters?: Object) => {}, // eslint-disable-line no-unused-vars
  state: { params: {} },
};

it('renders without crashing', () => {
  const rendered = renderer
    .create(
      <SearchResultsWithoutData
        flights={{
          allFlights: { edges: [] },
        }}
        relay={{
          hasMore: () => {},
        }}
        navigation={navigation}
      />,
    )
    .toJSON();
  expect(rendered).toBeTruthy();
});
