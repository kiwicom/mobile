// @flow

import * as React from 'react';
import {
  NewHotelsStandAlonePackage,
  type RoomConfigurationType,
} from '@kiwicom/react-native-app-hotels';
import { type NavigationType } from '@kiwicom/mobile-navigation';
import { type DimensionType } from '@kiwicom/mobile-shared';

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
  +currency: string,
|};

export default class HotelsPackageWrapper extends React.Component<Props> {
  static navigationOptions = {
    header: null,
  };

  goToHomepage = () => this.props.navigation.goBack();

  render() {
    return (
      <NewHotelsStandAlonePackage
        language="en"
        currency={this.props.currency}
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
  }
}
