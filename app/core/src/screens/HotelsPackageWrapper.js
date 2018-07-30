// @flow

import * as React from 'react';
import { HotelsStandalonePackage } from '@kiwicom/react-native-app-hotels';
import { type NavigationType } from '@kiwicom/mobile-navigation';
import { type DimensionType } from '@kiwicom/mobile-shared';

import Config from '../../config/application';

type Props = {|
  +navigation: NavigationType,
  +coordinates: null | {|
    +latitude: number,
    +longitude: number,
  |},
  +checkin?: string,
  +checkout?: string,
  +dimensions: DimensionType,
|};

export default class HotelsPackageWrapper extends React.Component<Props> {
  goToHomepage = () => this.props.navigation.goBack();

  render = () => {
    const affiliate = String(Config.affiliate.bookingCom);

    return (
      <HotelsStandalonePackage
        bookingComAffiliate={affiliate}
        language="en"
        currency="EUR" // Only EUR is now fully supported as PriceFilter can't handle anything but EUR
        onBackClicked={this.goToHomepage}
        dataSaverEnabled={false}
        coordinates={this.props.coordinates}
        checkin={this.props.checkin}
        checkout={this.props.checkout}
        dimensions={this.props.dimensions}
        version="rn-development"
      />
    );
  };
}
