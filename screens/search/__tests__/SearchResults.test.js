// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import SearchResults from '../SearchResults';

it('renders without crashing', () => {
  const rendered = renderer
    .create(
      <SearchResults
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
