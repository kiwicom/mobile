// @flow

import * as React from 'react';
import { withMappedNavigationAndConfigProps } from 'react-navigation-props-mapper';
import { HeaderBackButton } from 'react-navigation';
import { Color } from '@kiwicom/mobile-shared';

import SingleHotel from '../../singleHotel';
import type { NavigationProps } from '../NavigationStack';
import type { AvailableHotelSearchInput } from '../../singleHotel/AvailableHotelSearchInput';
import WithBackbuttonListener from '../WithBackButtonListener';

type Props = {
  ...NavigationProps,
  ...AvailableHotelSearchInput,
  onBackClicked: () => void,
  isStandAlonePackage?: boolean,
};

class SingleHotelNavigationScreen extends React.Component<Props> {
  static navigationOptions = (props: Props) => {
    function goBack() {
      props.navigation.state.params.goBack();
    }

    return {
      headerLeft: <HeaderBackButton tintColor={Color.brand} onPress={goBack} />,
    };
  };

  static defaultProps = {
    isStandAlonePackage: false,
  };

  componentDidMount = () => {
    this.props.navigation.setParams({ goBack: this.goBack });
  };

  onAndroidBackButtonClick = () => {
    this.props.onBackClicked();
    return true;
  };

  goBack = () => {
    if (this.props.isStandAlonePackage) {
      // onBackClick is passed down, even from `KiwiHotelsPackage`
      // so we need the isStandAlone boolean to know which action to take
      this.props.onBackClicked();
    } else {
      // Go back does nothing without null as a parameter
      this.props.navigation.goBack(null);
    }
  };

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
      <WithBackbuttonListener
        extraCondition={this.props.isStandAlonePackage}
        onClick={this.onAndroidBackButtonClick}
      >
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
      </WithBackbuttonListener>
    );
  }
}

export default withMappedNavigationAndConfigProps(SingleHotelNavigationScreen);
