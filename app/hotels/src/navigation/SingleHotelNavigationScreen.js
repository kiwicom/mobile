// @flow

import * as React from 'react';
import { withMappedNavigationAndConfigProps } from 'react-navigation-props-mapper';

import SingleHotel from '../singleHotel';
import type { NavigationProps } from './NavigationStack';
import type { AvailableHotelSearchInput } from '../singleHotel/AvailableHotelSearchInput';

type Props = {
  ...NavigationProps,
  ...AvailableHotelSearchInput,
};

class SingleHotelNavigationScreen extends React.Component<Props> {
  goToGalleryGrid = (hotelName: string, images: any) => {
    this.props.navigation.navigate('GalleryGrid', {
      hotelName,
      images,
    });
  };
  goToPayment = (parameters: Object) => {
    this.props.navigation.navigate('Payment', {
      ...parameters,
      checkin: this.props.checkin,
      checkout: this.props.checkout,
      affiliateId: this.props.bookingComAffiliate,
      language: this.props.language,
      currency: this.props.currency,
    });
  };
  goToMap = () => {
    this.props.navigation.navigate('SingleHotelMap', {
      hotelId: this.props.hotelId,
      checkin: this.props.checkin,
      checkout: this.props.checkout,
      roomsConfiguration: this.props.roomsConfiguration,
      currency: this.props.currency,
    });
  };
  render() {
    return (
      <SingleHotel
        onGoToHotelGallery={this.goToGalleryGrid}
        onGoToPayment={this.goToPayment}
        onGoToMap={this.goToMap}
        currency={this.props.currency}
        search={{
          hotelId: this.props.hotelId,
          checkin: this.props.checkin,
          checkout: this.props.checkout,
          roomsConfiguration: this.props.roomsConfiguration,
        }}
      />
    );
  }
}

export default withMappedNavigationAndConfigProps(SingleHotelNavigationScreen);
