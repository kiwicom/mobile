import React from 'react';
import { Text, View, Button } from 'react-native';

import Styles from '../../src/Styles';

export default class SearchResults extends React.PureComponent {
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
