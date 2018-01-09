// @flow

import * as React from 'react';
import { Text, ScrollView } from 'react-native';
import { createPaginationContainer, graphql } from 'react-relay';
import { Button } from '@kiwicom/react-native-app-common';

import SearchResultRow from './SearchResultRow';
import type { SearchResults_flights } from './__generated__/SearchResults_flights.graphql';
import type { Navigation } from '../../types/Navigation';

type Props = {|
  navigation: Navigation,
  flights: SearchResults_flights,
  relay: Object, // FIXME
|};

type State = {|
  loading: boolean,
|};

export class SearchResultsWithoutData extends React.Component<Props, State> {
  state: State = {
    loading: false,
  };

  loadMore = () => {
    this.setState({ loading: true });
    const { relay } = this.props;
    if (!relay.hasMore() || relay.isLoading()) {
      return;
    }

    this.props.relay.loadMore(25, () => {
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
              return (
                <SearchResultRow
                  node={node}
                  key={cursor}
                  navigation={this.props.navigation}
                />
              );
            } else {
              return <SearchResultRow navigation={this.props.navigation} />;
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
            <Button title="Loading..." />
          ) : (
            <Button onPress={this.loadMore} title="Load more!" />
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
