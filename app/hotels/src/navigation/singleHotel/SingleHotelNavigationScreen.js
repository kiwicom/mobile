// @flow

import * as React from 'react';
import { withMappedNavigationAndConfigProps } from 'react-navigation-props-mapper';
import { WithStandaloneScreen } from '@kiwicom/mobile-shared';

import SingleHotel from '../../singleHotel/SingleHotelContainer';
import type { NavigationProps } from '../NavigationStack';
import type { AvailableHotelSearchInput } from '../../singleHotel/AvailableHotelSearchInput';
import SingleHotelContext from './SingleHotelContext';

type Props = {
  ...NavigationProps,
  ...AvailableHotelSearchInput,
  onBackClicked: () => void,
  isStandAlonePackage?: boolean,
};

class SingleHotelNavigationScreen extends React.Component<Props> {
  static defaultProps = {
    isStandAlonePackage: false,
  };

  componentDidMount = () => {
    this.props.navigation.setParams({
      goBack: this.goBack,
      isStandAlonePackage: this.props.isStandAlonePackage,
    });
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
      <SingleHotelContext.Provider
        hotelId={this.props.hotelId}
        checkin={this.props.checkin}
        checkout={this.props.checkout}
        roomsConfiguration={this.props.roomsConfiguration}
        bookingComAffiliate={this.props.bookingComAffiliate}
      >
        <SingleHotel onGoToMap={this.goToMap} />
      </SingleHotelContext.Provider>
    );
  }
}

export default withMappedNavigationAndConfigProps(
  WithStandaloneScreen(SingleHotelNavigationScreen, 'SingleHotel'),
);
