// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  ButtonPopup,
  Checkbox,
  StyleSheet,
  Text,
  TextIcon,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { SeparatorTrimmed } from '@kiwicom/mobile-navigation';
import { SafeAreaView } from 'react-navigation';

type Props = {|
  +amenities: string[],
  +onClose: () => void,
  +onSave: (string[]) => void,
  +isVisible: boolean,
|};

type State = {|
  facilities: string[],
|};

const amenitiesList = {
  airportShuttle: {
    text: (
      <Translation id="hotels_search.filter.hotel_facilities_filter.airport_shuttle" />
    ),
    icon: '<',
  },
  familyRooms: {
    text: (
      <Translation id="hotels_search.filter.hotel_facilities_filter.family_rooms" />
    ),
    icon: '\ue05d',
  },
  facilitiesForDisabled: {
    text: (
      <Translation id="hotels_search.filter.hotel_facilities_filter.facilities_for_disabled" />
    ),
    icon: '\uE088',
  },
  fitnessCenter: {
    text: (
      <Translation id="hotels_search.filter.hotel_facilities_filter.fitness_center" />
    ),
    icon: '\uE089',
  },
  parking: {
    text: (
      <Translation id="hotels_search.filter.hotel_facilities_filter.parking" />
    ),
    icon: '\uE03E',
  },
  freeParking: {
    text: (
      <Translation id="hotels_search.filter.hotel_facilities_filter.free_parking" />
    ),
    icon: '\uE03E',
  },
  valetParking: {
    text: (
      <Translation id="hotels_search.filter.hotel_facilities_filter.valet_parking" />
    ),
    icon: '\uE03E',
  },
  indoorPool: {
    text: (
      <Translation id="hotels_search.filter.hotel_facilities_filter.indoor_pool" />
    ),
    icon: '\uE123',
  },
  petsAllowed: {
    text: (
      <Translation id="hotels_search.filter.hotel_facilities_filter.pets_allowed" />
    ),
    icon: '\uE043',
  },
  spa: {
    text: <Translation id="hotels_search.filter.hotel_facilities_filter.spa" />,
    icon: '\uE04A',
  },
  wifi: {
    text: (
      <Translation id="hotels_search.filter.hotel_facilities_filter.wifi" />
    ),
    icon: '\uE062',
  },
};

export default class HotelAmenitiesPopup extends React.Component<Props, State> {
  state = {
    facilities: this.props.amenities,
  };

  static getDerivedStateFromProps = ({ amenities, isVisible }: Props) => {
    return isVisible ? null : amenities;
  };

  handleCheckboxOnPress = (option: string) => () =>
    this.setState(state => {
      let facilities = [...state.facilities];
      if (facilities.includes(option)) {
        facilities = facilities.filter(facility => facility !== option);
      } else {
        facilities.push(option);
      }
      return { facilities };
    });

  onSave = () => this.props.onSave(this.state.facilities);

  renderCheckboxes = (facilities: string[]) => {
    const checkboxes = [];
    const facilitiesListKeys = Object.keys(amenitiesList);
    const facilitiesListLength = facilitiesListKeys.length;
    facilitiesListKeys.forEach((key, i) => {
      const facility = amenitiesList[key];
      const isFacilityChecked = facilities.includes(key);
      const isNotLastRow = i < facilitiesListLength - 1;
      checkboxes.push(
        <React.Fragment key={i}>
          <Checkbox
            isChecked={isFacilityChecked}
            onPress={this.handleCheckboxOnPress(key)}
          >
            <View style={styles.checkbox}>
              <TextIcon code={facility.icon} style={styles.facilityIcon} />
              {facility.text}
            </View>
          </Checkbox>
          {isNotLastRow && (
            <View style={styles.separatorEnd}>
              <SeparatorTrimmed
                gapSizeStart={31}
                color={defaultTokens.paletteInkLighter}
                height={0.5}
              />
            </View>
          )}
        </React.Fragment>,
      );
    });
    return checkboxes;
  };

  render() {
    const { facilities } = this.state;
    return (
      <SafeAreaView>
        <ButtonPopup
          buttonTitle={
            <Translation id="hotels_search.filter.hotel_facilities_popup.save" />
          }
          buttonCloseTitle={
            <Translation id="hotels_search.filter.hotel_facilities_popup.close" />
          }
          onSave={this.onSave}
          onClose={this.props.onClose}
          isVisible={this.props.isVisible}
        >
          <Text style={styles.title}>
            <Translation id="hotels_search.filter.hotel_facilities_popup.title" />
          </Text>
          {this.renderCheckboxes(facilities)}
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
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  facilityIcon: {
    marginEnd: 10,
  },
  separatorEnd: {
    marginEnd: -15,
  },
});
