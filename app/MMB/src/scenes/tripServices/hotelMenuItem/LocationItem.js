// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import LocationPopupButton from '../LocationPopupButton';
import type { LocationItem as LocationItemType } from './__generated__/LocationItem.graphql';
import type { HotelData } from './HotelMenuItem';

type Props = {|
  +data: LocationItemType,
  +onPress: (hotelData: HotelData) => void,
|};

class LocationItem extends React.Component<Props> {
  onPress = () => {
    const { data } = this.props;
    const cityId = data.hotelCity?.id ?? '';
    const cityName = data.hotelCity?.name ?? '';
    const checkin = data.checkin ?? null;
    const checkout = data.checkout ?? null;

    this.props.onPress({
      cityId,
      cityName,
      checkin,
      checkout,
    });
  };

  render() {
    const location = this.props.data.location;
    if (!location) {
      return null;
    }

    return (
      <LocationPopupButton
        data={location}
        onPress={this.onPress}
        displayIata={false}
      />
    );
  }
}

export default createFragmentContainer(
  LocationItem,
  graphql`
    fragment LocationItem on HotelServiceRelevantLocation {
      checkin
      checkout
      hotelCity {
        id
        name
      }
      location {
        ...LocationPopupButton
      }
    }
  `,
);
