// @flow

import * as React from 'react';
import { HotelsStandalonePackage } from '@kiwicom/react-native-app-hotels';
import { type NavigationType } from '@kiwicom/mobile-navigation';

import Config from '../../config/application';

type Props = {|
  navigation: NavigationType,
  coordinates: null | {|
    latitude: number,
    longitude: number,
  |},
  checkin?: string,
  checkout?: string,
|};

export default class HotelsPackageWrapper extends React.Component<Props> {
  render = () => {
    const affiliate = String(Config.affiliate.bookingCom);
    const coordinates = this.props.coordinates;

    return (
      <HotelsStandalonePackage
        bookingComAffiliate={affiliate}
        language="en"
        currency="EUR" // Only EUR is now fully supported as PriceFilter can't handle anything but EUR
        dataSaverEnabled={false}
        coordinates={coordinates}
        checkin={this.props.checkin}
        checkout={this.props.checkout}
      />
    );
  };
}
