// @flow

import * as React from 'react';
import {
  ButtonPopup,
  StyleSheet,
  Text,
  Translation,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { SafeAreaView } from 'react-navigation';

import HotelAmenities from './HotelAmenities';

type Props = {|
  +amenities: string[],
  +onClose: () => void,
  +onSave: (string[]) => void,
  +isVisible: boolean,
|};

type State = {|
  amenities: string[],
|};

const amenitiesList = [
  {
    text: (
      <Translation id="hotels_search.filter.hotel_facilities_filter.airport_shuttle" />
    ),
    icon: 'bus',
    amenityName: 'airportShuttle',
  },
  {
    text: (
      <Translation id="hotels_search.filter.hotel_facilities_filter.family_rooms" />
    ),
    icon: 'child-friendly',
    amenityName: 'familyRooms',
  },
  {
    text: (
      <Translation id="hotels_search.filter.hotel_facilities_filter.facilities_for_disabled" />
    ),
    icon: 'wheelchair',
    amenityName: 'facilitiesForDisabled',
  },
  {
    text: (
      <Translation id="hotels_search.filter.hotel_facilities_filter.fitness_center" />
    ),
    icon: 'gym',
    amenityName: 'fitnessCenter',
  },
  {
    text: (
      <Translation id="hotels_search.filter.hotel_facilities_filter.parking" />
    ),
    icon: 'parking',
    amenityName: 'parking',
  },
  {
    text: (
      <Translation id="hotels_search.filter.hotel_facilities_filter.free_parking" />
    ),
    icon: 'parking',
    amenityName: 'freeParking',
  },
  {
    text: (
      <Translation id="hotels_search.filter.hotel_facilities_filter.valet_parking" />
    ),
    icon: 'parking',
    amenityName: 'valetParking',
  },
  {
    text: (
      <Translation id="hotels_search.filter.hotel_facilities_filter.indoor_pool" />
    ),
    icon: 'pool',
    amenityName: 'indoorPool',
  },
  {
    text: (
      <Translation id="hotels_search.filter.hotel_facilities_filter.pets_allowed" />
    ),
    icon: 'pet',
    amenityName: 'petsAllowed',
  },
  {
    text: <Translation id="hotels_search.filter.hotel_facilities_filter.spa" />,
    icon: 'spa',
    amenityName: 'spa',
  },
  {
    text: (
      <Translation id="hotels_search.filter.hotel_facilities_filter.wifi" />
    ),
    icon: 'wifi',
    amenityName: 'wifi',
  },
];

export default class HotelAmenitiesPopup extends React.Component<Props, State> {
  state = {
    amenities: this.props.amenities,
  };

  static getDerivedStateFromProps = ({ amenities, isVisible }: Props) => {
    return isVisible ? null : amenities;
  };

  handleCheckboxOnPress = (option: string) => {
    this.setState(state => {
      if (state.amenities.includes(option)) {
        return {
          amenities: state.amenities.filter(amenity => amenity !== option),
        };
      }
      return {
        amenities: [...state.amenities, option],
      };
    });
  };

  onSave = () => this.props.onSave(this.state.amenities);

  render() {
    return (
      <SafeAreaView>
        <ButtonPopup
          buttonTitle={
            <Translation id="hotels_search.filter.hotel_facilities_popup.save" />
          }
          onSave={this.onSave}
          onClose={this.props.onClose}
          isVisible={this.props.isVisible}
        >
          <Text style={styles.title}>
            <Translation id="hotels_search.filter.hotel_facilities_popup.title" />
          </Text>
          <HotelAmenities
            onPress={this.handleCheckboxOnPress}
            amenities={amenitiesList}
            selectedAmenities={this.state.amenities}
          />
        </ButtonPopup>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: defaultTokens.colorHeading,
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 15,
    paddingBottom: 10,
  },
});
