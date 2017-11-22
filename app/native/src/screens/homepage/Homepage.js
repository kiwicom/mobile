// @flow

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { HotelSuggestionsStripe } from '@kiwicom/native-hotels';

import FlightsSearchOverlay from './search/FlightsSearchOverlay';

import type { Navigation } from '../../types/Navigation';

type Props = {|
  navigation: Navigation,
|};

const HotelSuggestionsStripeContainer = ({ children }) => (
  <View style={{ marginLeft: 5 }}>{children}</View>
);

export default class Homepage extends React.Component<Props, {}> {
  render = () => {
    return (
      <View style={styles.container}>
        <FlightsSearchOverlay navigation={this.props.navigation} />

        <HotelSuggestionsStripeContainer>
          <HotelSuggestionsStripe />
        </HotelSuggestionsStripeContainer>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
  },
});
