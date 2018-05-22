// @flow

import * as React from 'react';
import { GestureController } from '@kiwicom/mobile-shared';

import RootComponent from './RootComponent';
import HotelsStack from '../navigation/NavigationStack';
import type { Coordinates } from '../CoordinatesType';

type Props = {|
  bookingComAffiliate: string,
  language: string,
  currency: string,
  dataSaverEnabled: boolean,
  onBackClicked: () => void,
  coordinates: Coordinates | null,
  checkin?: string,
  checkout?: string,
|};

type NavigationState = {|
  key: string,
  isTransitioning: boolean,
  index: number,
  routes: mixed[],
|};

export default class HotelsStandalonePackage extends React.Component<Props> {
  onNavigationStateChange = (
    previousState: NavigationState,
    currentState: NavigationState,
  ) => {
    if (currentState.index === 0) {
      GestureController.enableGestures('KiwiHotels');
    } else if (currentState.index > 0) {
      GestureController.disableGestures('KiwiHotels');
    }
  };

  renderInnerComponent = (onBackClicked: () => void) => {
    const checkin = this.props.checkin ? new Date(this.props.checkin) : null;
    const checkout = this.props.checkout ? new Date(this.props.checkout) : null;
    const screenProps = {
      ...this.props,
      onBackClicked,
      checkin,
      checkout,
    };

    return (
      <HotelsStack
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
