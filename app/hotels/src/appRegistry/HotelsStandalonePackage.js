// @flow

import * as React from 'react';
import { NativeModules } from 'react-native';

import RootComponent from './RootComponent';
import HotelsStack from '../navigation/NavigationStack';
import type { Coordinates } from '../CoordinatesType';
import GestureController from '../../../shared/src/GestureController';

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

type State = {
  key: string,
  isTransitioning: boolean,
  index: number,
  routes: mixed[],
};

export default class HotelsStandalonePackage extends React.Component<Props> {
  navigationController = (previousState: State, currentState: State) => {
    GestureController(previousState, currentState, 'KiwiHotels');
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
        onNavigationStateChange={this.navigationController}
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
