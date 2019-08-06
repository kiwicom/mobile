// @flow

import * as React from 'react';
import { WithNativeNavigation } from '@kiwicom/mobile-shared';

import RootComponent from './RootComponent';
import SingleHotelStack from '../navigation/singleHotel/SingleHotelStack';
import type { RoomsConfiguration } from '../singleHotel/AvailableHotelSearchInput';

type Props = {
  +dataSaverEnabled: boolean,
  +hotelId: string,
  +checkin: string,
  +checkout: string,
  +roomsConfiguration: RoomsConfiguration,
  +currency: string,
  +language: string,
  +onNavigationStateChange: () => void,
  +onBackClicked: () => void,
  +version: string,
  +lastNavigationMode?: string,
  ...
};

class SingleHotelStandAlonePackage extends React.Component<Props> {
  render() {
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
        dataSaverEnabled={this.props.dataSaverEnabled}
        version={this.props.version}
        currency={this.props.currency}
        checkin={this.props.checkin}
        checkout={this.props.checkout}
        roomsConfiguration={this.props.roomsConfiguration}
        hotelId={this.props.hotelId}
        apiProvider="booking" // Not sure if this is in use by native team, but for now, just support booking.com
        lastNavigationMode={this.props.lastNavigationMode}
        onBackClicked={this.props.onBackClicked}
      >
        <SingleHotelStack
          screenProps={screenProps}
          onBackClicked={this.props.onBackClicked}
          onNavigationStateChange={this.props.onNavigationStateChange}
        />
      </RootComponent>
    );
  }
}

export default WithNativeNavigation(SingleHotelStandAlonePackage, 'SingleHotel');
