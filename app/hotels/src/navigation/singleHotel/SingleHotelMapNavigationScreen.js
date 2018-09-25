// @flow

import * as React from 'react';
import { StatusBar } from 'react-native';
import { withMappedNavigationAndConfigProps } from 'react-navigation-props-mapper';

import type { AvailableHotelSearchInput } from '../../singleHotel/AvailableHotelSearchInput';
import SingleHotelMap from '../../map/singleHotel/SingleHotelMapScreen';

type Props = {
  ...AvailableHotelSearchInput,
  currency: string,
};

class SingleHotelMapNavigationScreen extends React.Component<Props> {
  componentDidMount = () => {
    StatusBar.setBarStyle('dark-content');
  };

  componentWillUnmount = () => {
    StatusBar.setBarStyle('default');
  };

  render() {
    return (
      <SingleHotelMap
        search={{
          hotelId: this.props.hotelId,
          checkin: this.props.checkin,
          checkout: this.props.checkout,
          roomsConfiguration: this.props.roomsConfiguration,
        }}
        currency={this.props.currency}
      />
    );
  }
}

export default withMappedNavigationAndConfigProps(
  SingleHotelMapNavigationScreen,
);
