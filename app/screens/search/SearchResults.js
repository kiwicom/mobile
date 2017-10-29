// @flow

import * as React from 'react';
import { Text, Button, ScrollView } from 'react-native';
import { createPaginationContainer, graphql } from 'react-relay';

import SearchResultRow from './SearchResultRow';

import type { SearchResultsContainer_flights } from './__generated__/SearchResults_flights.graphql';
import { button } from '../../styles/colors';

type Props = {
  flights: SearchResultsContainer_flights,
  relay: Object, // FIXME
};

type State = {
  loading: boolean,
};

export class SearchResultsWithoutData extends React.Component<Props, State> {
  state: State = {
    loading: false,
  };

  _loadMore = () => {
    this.setState({ loading: true });
    const { relay } = this.props;
    if (!relay.hasMore() || relay.isLoading()) {
      return;
    }

    this.props.relay.loadMore(5, () => {
      this.setState({ loading: false });
    });
  };

  render = () => {
    const { allFlights } = this.props.flights;
    return (
      <ScrollView>
        {allFlights && allFlights.edges ? (
          allFlights.edges.map(edge => {
            if (edge) {
              const { node, cursor } = edge;
              return <SearchResultRow node={node} key={cursor} />;
            } else {
              return <SearchResultRow />;
            }
          })
        ) : (
          <Text>
            We couldn&apos;t find the right flights. Try to adjust the search a
            little bit.
          </Text>
        )}
        {this.props.relay.hasMore() &&
          (this.state.loading ? (
            <Button onPress={() => {}} title="Loading..." color={button} />
          ) : (
            <Button
              onPress={this._loadMore}
              title="Load more!"
              color={button}
            />
          ))}
      </ScrollView>
    );
  };
}

export default createPaginationContainer(
  SearchResultsWithoutData,
  {
    flights: graphql`
      fragment SearchResults_flights on RootQuery {
        allFlights(search: $search, first: $count, after: $after)
          @connection(key: "SearchResultsContainer_allFlights") {
          edges {
            cursor
            node {
              ...SearchResultRow_node
            }
          }
        }
      }
    `,
  },
  {
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
