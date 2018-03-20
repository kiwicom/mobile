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
    this.props.navigation.navigate({
      routeName: 'GalleryGrid',
      key: 'key-GalleryGrid',
      params: {
        hotelName,
        images,
      },
    });
  };
  goToPayment = (parameters: Object) => {
    this.props.navigation.navigate({
      routeName: 'Payment',
      key: 'key-Payment',
      params: {
        ...parameters,
        checkin: this.props.checkin,
        checkout: this.props.checkout,
        affiliateId: this.props.bookingComAffiliate,
        language: this.props.language,
        currency: this.props.currency,
      },
    });
  };
  goToMap = () => {
    this.props.navigation.navigate({
      routeName: 'SingleHotelMap',
      key: 'key-SingleHotelMap',
      params: {
        hotelId: this.props.hotelId,
        checkin: this.props.checkin,
        checkout: this.props.checkout,
        roomsConfiguration: this.props.roomsConfiguration,
        currency: this.props.currency,
      },
    });
  };
  render() {
    return (
      <SingleHotel
        onGoToHotelGallery={this.goToGalleryGrid}
        onGoToPayment={this.goToPayment}
        onGoToMap={this.goToMap}
        currency={this.props.currency}
        language={this.props.language}
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
