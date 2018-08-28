// @flow

import * as React from 'react';
import {
  WithNativeNavigation,
  type DimensionType,
} from '@kiwicom/mobile-shared';

import RootComponent from './RootComponent';
import SingleHotelStack from '../navigation/singleHotel/SingleHotelStack';
import type { RoomsConfiguration } from '../singleHotel/AvailableHotelSearchInput';

type Props = {
  +dataSaverEnabled: boolean,
  +hotelId: string,
  +checkin: string,
  +checkout: string,
  +roomsConfiguration: RoomsConfiguration,
  +bookingComAffiliate: string,
  +currency: string,
  +language: string,
  +onNavigationStateChange: () => void,
  +onBackClicked: () => void,
  +dimensions: DimensionType,
  +version: string,
};

class SingleHotelStandAlonePackage extends React.Component<Props> {
  render = () => {
    const screenProps = {
      ...this.props,
      // Better to pass strings than date object from native,
      // format YYYY-MM-DD
      checkin: new Date(this.props.checkin),
      checkout: new Date(this.props.checkout),
      isStandAlonePackage: true,
    };
    return (
      <RootComponent
        dimensions={this.props.dimensions}
        dataSaverEnabled={this.props.dataSaverEnabled}
        version={this.props.version}
        currency={this.props.currency}
      >
        <SingleHotelStack
          screenProps={screenProps}
          onBackClicked={this.props.onBackClicked}
          onNavigationStateChange={this.props.onNavigationStateChange}
        />
      </RootComponent>
    );
  };
}

export default WithNativeNavigation(
  SingleHotelStandAlonePackage,
  'SingleHotel',
);
