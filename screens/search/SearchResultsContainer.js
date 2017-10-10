import React from 'react';
import { createPaginationContainer, graphql } from 'react-relay';

import SearchResults from './SearchResults';

export default createPaginationContainer(
  SearchResults,
  {
    flights: graphql`
      fragment SearchResults_flights on RootQuery {
        # <FileName>_<propName>
        allFlights(search: $search, first: $count, after: $after)
          @connection(key: "SearchResults_allFlights") {
          edges {
            cursor
            node {
              price {
                amount
                currency
              }
              departure {
                airport {
                  locationId
                }
              }
              arrival {
                airport {
                  locationId
                }
              }
            }
          }
        }
      }
    `,
  },
  {
    // FIXME: this is why we need to implement `node` query:
    query: graphql`
      query SearchResultsQuery(
        $search: FlightsSearchInput!
        $count: Int!
        $after: String
      ) {
        ...SearchResults_flights
      }
    `,
    getVariables: (props, { count, cursor }, fragmentVariables) => ({
      ...fragmentVariables,
      count,
      after: cursor,
    }),
  },
);
