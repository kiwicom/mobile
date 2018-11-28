// @flow strict

import * as React from 'react';
import {
  WithNativeNavigation,
  type DimensionType,
  AdaptableLayout,
} from '@kiwicom/mobile-shared';

import RootComponent from './RootComponent';
import HotelsStack from '../navigation/HotelsNavigationStack';
import HotelsTabletStack from '../navigation/HotelsTabletStack';
import type { Coordinates } from '../CoordinatesType';
import type { RoomConfigurationType } from '../HotelsContext';

type Props = {
  +language: string,
  +currency: string,
  +dataSaverEnabled: boolean,
  +coordinates: Coordinates | null,
  +checkin?: string,
  +checkout?: string,
  +onNavigationStateChange: () => void,
  +onBackClicked: () => void,
  +lastNavigationMode?: string,
  +dimensions: DimensionType,
  +version: string,
  +cityName: string,
  +cityId: string,
  +checkin: string,
  +checkout: string,
  +roomsConfiguration: RoomConfigurationType,
};

class NewHotelsStandalonePackage extends React.Component<Props> {
  static navigationOptions = {
    tabBarVisible: false,
  };

  render() {
    const props = {
      screenProps: this.props,
      onBackClicked: this.props.onBackClicked,
      onNavigationStateChange: this.props.onNavigationStateChange,
    };
    return (
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
        coordinates={this.props.coordinates}
        // Stay 22 only supports searching with gps coordinates, if we get passed a cityId from native
        // we are using booking.com, if we don't get cityId, we should have coordinates, and we are using stay22 provider
        apiProvider={this.props.cityId == null ? 'stay22' : 'booking'}
        onBackClicked={this.props.onBackClicked}
        lastNavigationMode={this.props.lastNavigationMode}
      >
        <AdaptableLayout
          renderOnNarrow={<HotelsStack {...props} />}
          renderOnWide={<HotelsTabletStack {...props} />}
        />
      </RootComponent>
    );
  }
}

export default WithNativeNavigation(
  NewHotelsStandalonePackage,
  'NewKiwiHotels',
);
