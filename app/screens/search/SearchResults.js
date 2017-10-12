// @flow

import * as React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';

import Styles from '../../src/Styles';

import type { SearchResultsContainer_flights } from './__generated__/SearchResultsContainer_flights.graphql';

type Props = {
  flights: SearchResultsContainer_flights,
  relay: Object, // FIXME
};

type State = {
  loading: boolean,
};

const AirportDetails = ({ airport }) => {
  if (!airport) {
    return;
  }
  return <Text>
    {airport.city && airport.city.name} ({airport.locationId})
  </Text>;
};

const SearchResultRow = ({ node }) => {
  const { price, departure, arrival } = node;
  return (
    <View>
      <Text>
        {departure && departure.airport && <AirportDetails airport={departure.airport} />}
        &rarr; {arrival && arrival.airport && <AirportDetails airport={arrival.airport} />}
      </Text>
      <Text>
        {departure && departure.localTime} &rarr; {arrival && arrival.localTime}
      </Text>
      <Text>
        {price && price.amount} {price && price.currency}
      </Text>
      <Button title="Choose" onPress={() => {}} />
      <Text>-----</Text>
    </View>
  );
};

export default class SearchResults extends React.Component<Props, State> {
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
      <ScrollView style={Styles.container}>
        {/* FIXME: Flight type doesn't have ID (for node key) - bad API design */}
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
