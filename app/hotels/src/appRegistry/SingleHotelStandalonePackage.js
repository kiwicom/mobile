// @flow

import * as React from 'react';
import { GestureController } from '@kiwicom/mobile-shared';

import RootComponent from './RootComponent';
import SingleHotelStack from '../navigation/singleHotel/SingleHotelStack';
import type { RoomsConfiguration } from '../singleHotel/AvailableHotelSearchInput';

type Props = {|
  dataSaverEnabled: boolean,
  onBackClicked: () => void,
  hotelId: string,
  checkin: string,
  checkout: string,
  roomsConfiguration: RoomsConfiguration,
  bookingComAffiliate: string,
  currency: string,
  language: string,
|};

type NavigationState = {|
  key: string,
  isTransitioning: boolean,
  index: number,
  routes: mixed[],
|};

export default class SingleHotelStandAlonePackage extends React.Component<
  Props,
> {
  onNavigationStateChange = (
    previousState: NavigationState,
    currentState: NavigationState,
  ) => {
    if (currentState.index === 0) {
      GestureController.enableGestures('SingleHotel');
    } else if (currentState.index > 0) {
      GestureController.disableGestures('SingleHotel');
    }
  };

  renderInnerComponent = (onBackClicked: () => void) => {
    const screenProps = {
      ...this.props,
      // Better to pass strings than date object from native,
      // format YYYY-MM-DD
      checkin: new Date(this.props.checkin),
      checkout: new Date(this.props.checkout),
      onBackClicked,
      isStandAlonePackage: true,
    };
    return (
      <SingleHotelStack
        screenProps={screenProps}
        onNavigationStateChange={this.onNavigationStateChange}
      />
    );
  };

  render = () => {
    return (
      <RootComponent
        render={this.renderInnerComponent}
        onBackClicked={this.props.onBackClicked}
        dataSaverEnabled={this.props.dataSaverEnabled}
      />
    );
  };
}
