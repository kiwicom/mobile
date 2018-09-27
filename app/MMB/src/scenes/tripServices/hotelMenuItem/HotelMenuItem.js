// @flow strict

import * as React from 'react';
import {
  Translation,
  DeviceInfo,
  DateUtils,
  DateFormatter,
} from '@kiwicom/mobile-localization';
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
import HotelsContext from '../../../context/HotelsContext';

type State = {|
  isPopupVisible: boolean,
|};

type PropsWithContext = {|
  ...Props,
  +currency: string,
  +dimensions: DimensionType,
  +bookingComAffiliate: string,
  +dataSaverEnabled: boolean,
  +version: string,
  +onNavigationStateChange: () => void,
|};

export type HotelData = {|
  +cityId: string,
  +cityName: string,
  +checkin: string | null,
  +checkout: string | null,
|};

export class HotelMenuItem extends React.Component<PropsWithContext, State> {
  state = {
    isPopupVisible: false,
  };

  goBack = () => {
    this.props.navigation.navigate('MMBMainSwitchStack');
  };

  sanitizeDates = (dates: {|
    +checkin: string | null,
    +checkout: string | null,
  |}) => {
    const checkin =
      dates.checkin === null
        ? DateFormatter(DateUtils.getUTCToday()).formatForMachine()
        : dates.checkin;
    const checkout =
      dates.checkout === null
        ? DateFormatter(
            DateUtils(new Date(checkin)).addDays(1),
          ).formatForMachine()
        : dates.checkout;
    return {
      checkin,
      checkout,
    };
  };

  openHotelsModal = ({ cityId, cityName, checkin, checkout }: HotelData) => {
    const roomsConfiguration =
      idx(this.props.data, _ => _.hotel.roomsConfiguration) || null;
    const sanitizedDates = this.sanitizeDates({ checkin, checkout });

    this.props.navigation.navigate('MMBHotelsStack', {
      bookingComAffiliate: this.props.bookingComAffiliate,
      language: DeviceInfo.getLanguage(),
      currency: this.props.currency,
      dataSaverEnabled: this.props.dataSaverEnabled,
      checkin: sanitizedDates.checkin,
      checkout: sanitizedDates.checkout,
      onNavigationStateChange: this.props.onNavigationStateChange,
      onBackClicked: this.goBack,
      dimensions: this.props.dimensions,
      version: this.props.version,
      cityName,
      cityId,
      roomsConfiguration:
        roomsConfiguration === null ? [] : [roomsConfiguration],
    });
  };

  menuItemOnPress = () => {
    const relevantLocations =
      idx(this.props.data, _ => _.hotel.relevantLocations) || [];

    if (relevantLocations.length === 1) {
      const cityId = idx(relevantLocations, _ => _[0].hotelCity.id) || '';
      const cityName = idx(relevantLocations, _ => _[0].hotelCity.name) || '';
      const checkin = idx(relevantLocations, _ => _[0].checkin) || null;
      const checkout = idx(relevantLocations, _ => _[0].checkout) || null;
      this.openHotelsModal({
        cityId,
        cityName,
        checkin,
        checkout,
      });
    } else {
      this.togglePopup();
    }
  };

  onLocationPress = (hotelData: HotelData) => {
    this.setState({ isPopupVisible: false });
    this.openHotelsModal(hotelData);
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
          icon={<TextIcon code="&#xe085;" orbit={true} />}
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
  <HotelsContext.Consumer>
    {state => (
      <Dimensions.Consumer>
        {dimensions => (
          <BookingDetailContext.Consumer>
            {({ currency }) => (
              <HotelMenuItem
                {...props}
                currency={currency}
                dimensions={dimensions}
                {...state}
              />
            )}
          </BookingDetailContext.Consumer>
        )}
      </Dimensions.Consumer>
    )}
  </HotelsContext.Consumer>
);

export default createFragmentContainer(
  withNavigation(HotelMenuItemWithContext),
  graphql`
    fragment HotelMenuItem on WhitelabeledServices {
      hotel {
        roomsConfiguration {
          adultsCount
          children {
            age
          }
        }
        relevantLocations {
          ...LocationItem
          checkin
          checkout
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
