// @flow

import * as React from 'react';
import { Text, View } from 'react-native';
import { withMappedNavigationAndConfigProps } from 'react-navigation-props-mapper';

import type { AvailableHotelSearchInput } from '../singleHotel/AvailableHotelSearchInput';

type Props = {
  ...AvailableHotelSearchInput,
};

class SingleHotelMapNavigationScreen extends React.Component<Props> {
  render() {
    return (
      <View>
        <Text>Tady bude mapa</Text>
        <Text>Hotel ID: {this.props.hotelId}</Text>
        <Text>Checkin: {this.props.checkin.toString()}</Text>
        <Text>Checkout: {this.props.checkout.toString()}</Text>
      </View>
    );
  }
}

export default withMappedNavigationAndConfigProps(
  SingleHotelMapNavigationScreen,
);
