import React from 'react';
import renderer from 'react-test-renderer';

import SearchResults from '../SearchResults';

const navigation = {
  navigate: () => {},
};

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
