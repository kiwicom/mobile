// @flow strict

import * as React from 'react';
import {
  WithNativeNavigation,
  type DimensionType,
} from '@kiwicom/mobile-shared';

import RootComponent from './RootComponent';
import HotelsStack from '../navigation/HotelsNavigationStack';
import type { Coordinates } from '../CoordinatesType';
import type { RoomConfigurationType } from '../HotelsContext';

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
  +cityName: string,
  +cityId: string,
  +checkin: string,
  +checkout: string,
  +roomsConfiguration: RoomConfigurationType,
};

class NewHotelsStandalonePackage extends React.Component<Props> {
  render = () => (
    <RootComponent
      dimensions={this.props.dimensions}
      dataSaverEnabled={this.props.dataSaverEnabled}
      version={this.props.version}
      cityId={this.props.cityId}
      checkin={this.props.checkin}
      checkout={this.props.checkout}
      currency={this.props.currency}
      roomsConfiguration={this.props.roomsConfiguration}
      cityName={this.props.cityName}
    >
      <HotelsStack
        screenProps={this.props}
        onBackClicked={this.props.onBackClicked}
        onNavigationStateChange={this.props.onNavigationStateChange}
      />
    </RootComponent>
  );
}

export default WithNativeNavigation(
  NewHotelsStandalonePackage,
  'NewKiwiHotels',
);
