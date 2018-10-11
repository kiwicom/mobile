// @flow

import * as React from 'react';
import { NewHotelsStandAlonePackage } from '@kiwicom/react-native-app-hotels';
import { type NavigationType } from '@kiwicom/mobile-navigation';
import { type DimensionType } from '@kiwicom/mobile-shared';

import type { RoomConfigurationType } from '../../../../hotels/src/HotelsContext';

type Props = {|
  +navigation: NavigationType,
  +coordinates: null | {|
    +latitude: number,
    +longitude: number,
  |},
  +checkin: string,
  +checkout: string,
  +dimensions: DimensionType,
  +cityId: string,
  +cityName: string,
  +roomsConfiguration: RoomConfigurationType,
|};

export default class HotelsPackageWrapper extends React.Component<Props> {
  static navigationOptions = {
    header: null,
  };

  goToHomepage = () => this.props.navigation.goBack();

  render = () => {
    return (
      <NewHotelsStandAlonePackage
        language="en"
        currency="EUR" // Only EUR is now fully supported as PriceFilter can't handle anything but EUR
        onBackClicked={this.goToHomepage}
        dataSaverEnabled={false}
        coordinates={this.props.coordinates}
        checkin={this.props.checkin}
        checkout={this.props.checkout}
        dimensions={this.props.dimensions}
        cityId={this.props.cityId}
        cityName={this.props.cityName}
        roomsConfiguration={this.props.roomsConfiguration}
        version="rn-development"
      />
    );
  };
}
