// @flow

import * as React from 'react';
import { Text, Button, ScrollView } from 'react-native';
import { createPaginationContainer, graphql } from 'react-relay';

import SearchResultRow from './SearchResultRow';

import type { SearchResultsContainer_flights } from './__generated__/SearchResults_flights.graphql';

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
    return (
      <ScrollView>
        {this.props.flights.allFlights &&
        this.props.flights.allFlights.edges ? (
          this.props.flights.allFlights.edges.map(edge => {
            if (edge) {
              const { node, cursor } = edge;
              if (node) {
                return <SearchResultRow node={node} key={cursor} />;
              } else {
                return <Text>Couldn&apos;t load the graph node.</Text>;
              }
            } else {
              return <Text>Couldn&apos;t load the graph edge.</Text>;
            }
          })
        ) : (
          <Text>No results.</Text>
        )}
        {this.props.relay.hasMore() &&
          (this.state.loading ? (
            <Button onPress={() => {}} title="Loading..." />
          ) : (
            <Button onPress={this._loadMore} title="Load more!" />
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
