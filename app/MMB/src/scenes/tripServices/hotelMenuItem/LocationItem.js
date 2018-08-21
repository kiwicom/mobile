// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import LocationPopupButton from '../LocationPopupButton';
import type { LocationItem as LocationItemType } from './__generated__/LocationItem.graphql';

type Props = {|
  +data: LocationItemType,
  +onPress: (cityId: string, cityName: string) => void,
|};

class LocationItem extends React.Component<Props> {
  onPress = () => {
    const cityId = idx(this.props.data, _ => _.hotelCity.id) || '';
    const cityName = idx(this.props.data, _ => _.hotelCity.name) || '';
    this.props.onPress(cityId, cityName);
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
