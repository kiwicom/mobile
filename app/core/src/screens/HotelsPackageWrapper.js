// @flow

import * as React from 'react';
import HotelsStandalonePackage from '@kiwicom/react-native-app-hotels';
import { type NavigationType } from '@kiwicom/react-native-app-navigation';

import Config from '../../config/application';

type Props = {|
  navigation: NavigationType,
  coordinates: null | {|
    latitude: number,
    longitude: number,
  |},
|};

export default class HotelsPackageWrapper extends React.Component<Props> {
  goToHomepage = () => this.props.navigation.goBack();

  render = () => {
    const affiliate = String(Config.affiliate.bookingCom);
    const coordinates = this.props.coordinates;

    return (
      <HotelsStandalonePackage
        bookingComAffiliate={affiliate}
        language="en"
        currency="EUR" // Only EUR is now fully supported as PriceFilter can't handle anything but EUR
        onBackClicked={this.goToHomepage}
        dataSaverEnabled={false}
        coordinates={coordinates}
      />
    );
  };
}
