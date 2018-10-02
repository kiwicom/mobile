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
  render() {
    return (
      <React.Fragment>
        <SingleHotelMap
          search={{
            hotelId: this.props.hotelId,
            checkin: this.props.checkin,
            checkout: this.props.checkout,
            roomsConfiguration: this.props.roomsConfiguration,
          }}
          currency={this.props.currency}
        />
        <StatusBar barStyle="dark-content" />
      </React.Fragment>
    );
  }
}

export default withMappedNavigationAndConfigProps(
  SingleHotelMapNavigationScreen,
);
