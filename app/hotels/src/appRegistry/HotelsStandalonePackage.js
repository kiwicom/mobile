// @flow

import * as React from 'react';
import {
  WithNativeNavigation,
  type DimensionType,
} from '@kiwicom/mobile-shared';

import RootComponent from './RootComponent';
import HotelsStack from '../navigation/NavigationStack';
import type { Coordinates } from '../CoordinatesType';

type Props = {
  +bookingComAffiliate: string,
  +language: string,
  +currency: string,
  +dataSaverEnabled: boolean,
  +coordinates: Coordinates | null,
  +checkin?: string,
  +checkout?: string,
  +onNavigationStateChange: () => void,
  +onBackClicked: () => void,
  +dimensions: DimensionType,
  +version: string,
};

class HotelsStandalonePackage extends React.Component<Props> {
  render = () => {
    const checkin = this.props.checkin ? new Date(this.props.checkin) : null;
    const checkout = this.props.checkout ? new Date(this.props.checkout) : null;
    const screenProps = {
      ...this.props,
      checkin,
      checkout,
    };
    return (
      <RootComponent
        dimensions={this.props.dimensions}
        dataSaverEnabled={this.props.dataSaverEnabled}
        version={this.props.version}
        currency={this.props.currency}
      >
        <HotelsStack
          screenProps={screenProps}
          onBackClicked={this.props.onBackClicked}
          onNavigationStateChange={this.props.onNavigationStateChange}
        />
      </RootComponent>
    );
  };
}

export default WithNativeNavigation(HotelsStandalonePackage, 'KiwiHotels');
