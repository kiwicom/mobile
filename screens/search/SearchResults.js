import React from 'react';
import { Text, View, Button } from 'react-native';
import { createPaginationContainer, graphql } from 'react-relay';

import Styles from '../../src/Styles';

class SearchResults extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

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
      <View style={Styles.container}>
        {/* FIXME: Flight type doesn't have ID (for node key) - bad API design */}
        {this.props.flights.allFlights.edges.map(({ node, cursor }) => (
          <Text key={cursor}>
            {node.price.amount} {node.price.currency} from{' '}
            {node.departure.airport.locationId} to{' '}
            {node.arrival.airport.locationId}
          </Text>
        ))}
        {this.props.relay.hasMore() &&
          (this.state.loading ? (
            <Button onPress={() => {}} title="Loading..." />
          ) : (
            <Button onPress={this._loadMore} title="Load more!" />
          ))}
      </View>
    );
  };
}

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
