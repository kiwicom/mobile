// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import { SearchResultsWithoutData } from '../SearchResults';
import ReactNavigation from './__mocks__/ReactNavigation';

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
        navigation={ReactNavigation}
      />,
    )
    .toJSON();
  expect(rendered).toBeTruthy();
});
