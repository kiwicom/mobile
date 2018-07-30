// @flow

import * as React from 'react';
import { SingleHotelStandalonePackage } from '@kiwicom/react-native-app-hotels';
import { type NavigationType } from '@kiwicom/mobile-navigation';
import { DateFormatter, DateUtils } from '@kiwicom/mobile-localization';
import { type DimensionType } from '@kiwicom/mobile-shared';

import Config from '../../config/application';

type Props = {|
  +navigation: NavigationType,
  +dimensions: DimensionType,
|};

export default class SingleHotelPackageWrapper extends React.Component<Props> {
  goToHomepage = () => this.props.navigation.goBack();

  render = () => {
    const affiliate = String(Config.affiliate.bookingCom);
    return (
      <SingleHotelStandalonePackage
        bookingComAffiliate={affiliate}
        language="en"
        currency="EUR" // Only EUR is now fully supported as PriceFilter can't handle anything but EUR
        onBackClicked={this.goToHomepage}
        dataSaverEnabled={false}
        checkin={DateFormatter(DateUtils().addDays(1)).formatForMachine()}
        checkout={DateFormatter(DateUtils().addDays(7)).formatForMachine()}
        hotelId="aG90ZWw6ODAyMDQ="
        roomsConfiguration={[{ adultsCount: 1, children: [] }]}
        dimensions={this.props.dimensions}
        version="rn-development"
      />
    );
  };
}
