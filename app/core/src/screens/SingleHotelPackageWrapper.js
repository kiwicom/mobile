// @flow

import * as React from 'react';
import { SingleHotelStandalonePackage } from '@kiwicom/react-native-app-hotels';
import { type NavigationType } from '@kiwicom/react-native-app-navigation';
import { DateFormatter } from '@kiwicom/react-native-app-translations';

import Config from '../../config/application';

type Props = {|
  navigation: NavigationType,
|};

export default class SingleHotelPackageWrapper extends React.Component<Props> {
  goToHomepage = () => this.props.navigation.goBack();

  render = () => {
    const affiliate = String(Config.affiliate.bookingCom);
    const dateFormat = 'YYYY-MM-DD';
    return (
      <SingleHotelStandalonePackage
        bookingComAffiliate={affiliate}
        language="en"
        currency="EUR" // Only EUR is now fully supported as PriceFilter can't handle anything but EUR
        onBackClicked={this.goToHomepage}
        dataSaverEnabled={false}
        checkin={DateFormatter()
          .add(1, 'day')
          .format(dateFormat)}
        checkout={DateFormatter()
          .add(7, 'days')
          .format(dateFormat)}
        hotelId="aG90ZWw6ODAyMDQ="
        roomsConfiguration={[{ adultsCount: 1, children: [] }]}
      />
    );
  };
}
