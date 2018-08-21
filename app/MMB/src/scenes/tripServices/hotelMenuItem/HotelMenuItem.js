// @flow strict

import * as React from 'react';
import { Translation, DeviceInfo } from '@kiwicom/mobile-localization';
import {
  TextIcon,
  Dimensions,
  type DimensionType,
} from '@kiwicom/mobile-shared';
import {
  MenuItem,
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import LocationItem from './LocationItem';
import LocationsPopup from '../LocationsPopup';
import type { HotelMenuItem as HotelMenuItemType } from './__generated__/HotelMenuItem.graphql';
import BookingDetailContext from '../../../context/BookingDetailContext';

type State = {|
  isPopupVisible: boolean,
|};

type PropsWithContext = {|
  ...Props,
  +currency: string,
  +dimensions: DimensionType,
|};

class HotelMenuItem extends React.Component<PropsWithContext, State> {
  state = {
    isPopupVisible: false,
  };

  navigateToHotels = (cityId: string, cityName: string) => {
    this.props.navigation.navigate('MMBHotelsStack', {
      bookingComAffiliate: '', // TODO
      language: DeviceInfo.getLanguage(),
      currency: this.props.currency,
      dataSaverEnabled: false, // TODO
      checkin: '2018-09-10', // TODO
      checkout: '2018-09-27', // TODO
      onNavigationStateChange: () => {}, // TODO
      onBackClicked: null, // TODO:
      dimensions: this.props.dimensions,
      version: 'rn-development', // TODO
      cityName,
      cityId,
      roomsConfiguration: [{ adultsCount: 1, children: [] }], // TODO
    });
  };

  menuItemOnPress = () => {
    const relevantLocations =
      idx(this.props.data, _ => _.hotel.relevantLocations) || [];

    if (relevantLocations.length === 1) {
      const cityId = idx(relevantLocations, _ => _[0].hotelCity.id) || '';
      const cityName = idx(relevantLocations, _ => _[0].hotelCity.name) || '';
      this.navigateToHotels(cityId, cityName);
    } else {
      this.togglePopup();
    }
  };

  onLocationPress = (cityId: string, cityName: string) => {
    this.togglePopup();
    this.navigateToHotels(cityId, cityName);
  };

  togglePopup = () => {
    this.setState(state => ({
      isPopupVisible: !state.isPopupVisible,
    }));
  };

  render = () => {
    const relevantLocations =
      idx(this.props.data, _ => _.hotel.relevantLocations) || [];

    return (
      <React.Fragment>
        <LocationsPopup
          isVisible={this.state.isPopupVisible}
          onClose={this.togglePopup}
        >
          {relevantLocations.map((relevantLocation, index) => {
            return (
              <LocationItem
                key={`${idx(relevantLocation, _ => _.location.id) ||
                  ''}-${index}`}
                data={relevantLocation}
                onPress={this.onLocationPress}
              />
            );
          })}
        </LocationsPopup>
        <MenuItem
          title={<Translation id="mmb.trip_services.local_services.hotel" />}
          onPress={this.menuItemOnPress}
          icon={<TextIcon code="&#xe03a;" />}
        />
      </React.Fragment>
    );
  };
}

type Props = {|
  +data: HotelMenuItemType,
  +navigation: NavigationType,
|};

const HotelMenuItemWithContext = (props: Props) => (
  <Dimensions.Consumer>
    {dimensions => (
      <BookingDetailContext.Consumer>
        {({ currency }) => (
          <HotelMenuItem
            {...props}
            currency={currency}
            dimensions={dimensions}
          />
        )}
      </BookingDetailContext.Consumer>
    )}
  </Dimensions.Consumer>
);

export default createFragmentContainer(
  withNavigation(HotelMenuItemWithContext),
  graphql`
    fragment HotelMenuItem on WhitelabeledServices {
      hotel {
        relevantLocations {
          ...LocationItem
          location {
            id
          }
          hotelCity {
            id
            name
          }
        }
      }
    }
  `,
);
