// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import { SearchResultsWithoutData } from '../SearchResults';

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
      />,
    )
    .toJSON();
  expect(rendered).toBeTruthy();
});
