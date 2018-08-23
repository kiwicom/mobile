// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import LocationPopupButton from '../LocationPopupButton';
import type { LocationItem as LocationItemType } from './__generated__/LocationItem.graphql';
import type { HotelData } from './HotelMenuItem';

type Props = {|
  +data: LocationItemType,
  +onPress: (hotelData: HotelData) => void,
|};

class LocationItem extends React.Component<Props> {
  onPress = () => {
    const cityId = idx(this.props.data, _ => _.hotelCity.id) || '';
    const cityName = idx(this.props.data, _ => _.hotelCity.name) || '';
    const checkin = idx(this.props.data, _ => _.checkin) || null;
    const checkout = idx(this.props.data, _ => _.checkout) || null;

    this.props.onPress({
      cityId,
      cityName,
      checkin,
      checkout,
    });
  };

  render = () => {
    const location = idx(this.props.data, _ => _.location);
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
  };
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
