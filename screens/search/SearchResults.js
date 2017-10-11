// @flow

import * as React from 'react';
import { Text, View, Button } from 'react-native';

import Styles from '../../src/Styles';

import type { SearchResultsContainer_flights } from './__generated__/SearchResultsContainer_flights.graphql';

type Props = {
  flights: SearchResultsContainer_flights,
  relay: Object, // FIXME
};

type State = {
  loading: boolean,
};

export default class SearchResults extends React.Component<void, Props, State> {
  state: State;

  constructor(props: Props) {
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
        {this.props.flights.allFlights &&
          this.props.flights.allFlights.edges ? (
            this.props.flights.allFlights.edges.map(edge => {
              if (edge) {
                const { node, cursor } = edge;
                if (node) {
                  const { price, departure, arrival } = node;
                  return (
                    <Text key={cursor}>
                      {price && price.amount} {price && price.currency} from{' '}
                      {departure &&
                      departure.airport &&
                      departure.airport.locationId}{' '}
                    to{' '}
                      {arrival && arrival.airport && arrival.airport.locationId}
                    </Text>
                  );
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
      </View>
    );
  };
}
