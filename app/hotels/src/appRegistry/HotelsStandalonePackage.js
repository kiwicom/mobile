// @flow

import * as React from 'react';
import { WithNativeNavigation } from '@kiwicom/mobile-shared';

import RootComponent from './RootComponent';
import HotelsStack from '../navigation/NavigationStack';
import type { Coordinates } from '../CoordinatesType';

type Props = {
  bookingComAffiliate: string,
  language: string,
  currency: string,
  dataSaverEnabled: boolean,
  coordinates: Coordinates | null,
  checkin?: string,
  checkout?: string,
  onNavigationStateChange: () => void,
  onBackClicked: () => void,
};

class HotelsStandalonePackage extends React.Component<Props> {
  renderInnerComponent = () => {
    const checkin = this.props.checkin ? new Date(this.props.checkin) : null;
    const checkout = this.props.checkout ? new Date(this.props.checkout) : null;
    const screenProps = {
      ...this.props,
      checkin,
      checkout,
    };

    return (
      <HotelsStack
        screenProps={screenProps}
        onBackClicked={this.props.onBackClicked}
        onNavigationStateChange={this.props.onNavigationStateChange}
      />
    );
  };

  render = () => {
    return (
      <RootComponent dataSaverEnabled={this.props.dataSaverEnabled}>
        {this.renderInnerComponent()}
      </RootComponent>
    );
  };
}

export default WithNativeNavigation(HotelsStandalonePackage);
