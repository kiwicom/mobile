// @flow strict

import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { HeaderButton, type NavigationType } from '@kiwicom/mobile-navigation';
import {
  TextIcon,
  Text,
  StyleSheet,
  Touchable,
  withGeolocationContext,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import memoize from 'memoize-one';

import { getAddress } from '../helpers/fetchGeocodeData';
import { withGoogleMapsContext } from '../context/GoogleMapsContext';
import AddressLocationInput from '../scenes/tripServices/transportation/AddressLocationInput';
import Addresses from '../scenes/tripServices/transportation/Addresses';

type Coordinate = {|
  +latitude: number,
  +longitude: number,
|};

type Props = {|
  +navigation: NavigationType,
  +googleMapsAPIKey: string,
  +lat: number | null,
  +lng: number | null,
  +canGetUserLocation: boolean,
  +updateGeolocation: (
    dealWithLocation?: (coordinate: Coordinate) => void,
    onError?: () => void,
  ) => void,
|};

type State = {|
  formattedAddress: string,
  searchText: string,
|};

export class AddressPickerScreen extends React.Component<Props, State> {
  static navigationOptions = (props: Props) => {
    function goBack() {
      props.navigation.goBack();
    }

    function onChangeText(searchText) {
      props.navigation.setParams({ searchText });
    }

    return {
      headerLeft: (
        <HeaderButton.CloseModal
          onPress={goBack}
          text={
            <Translation id="mmb.trip_services.transportation.address_picker.cancel_button" />
          }
        />
      ),
      headerTitle: (
        <AddressLocationInput autoFocus={true} onChangeText={onChangeText} />
      ),
    };
  };

  state = {
    formattedAddress: '',
    searchText: '',
  };

  componentDidMount() {
    this.props.updateGeolocation();
    const coordinate = this.getCoordinate();
    this.updateFormattedAddress(coordinate);
  }

  componentDidUpdate() {
    const coordinate = this.getCoordinate();
    this.updateFormattedAddress(coordinate);
  }

  getCoordinate = () =>
    this.props.lat != null && this.props.lng != null
      ? {
          latitude: this.props.lat,
          longitude: this.props.lng,
        }
      : null;

  updateFormattedAddress = memoize(async (coordinate: ?Coordinate) => {
    const formattedAddress = await getAddress(
      coordinate,
      this.props.googleMapsAPIKey,
    );
    if (formattedAddress != this.state.formattedAddress) {
      this.setState({ formattedAddress });
    }
  });

  setLocationToCurrentLocation = () => {
    const location = this.getCoordinate();
    if (location != null) {
      this.props.navigation.state.params.setLocation(location);
    }
  };

  render() {
    const searchText = this.props.navigation.state.params.searchText ?? '';
    const region = this.props.navigation.state.params.region;
    return (
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
      >
        {this.state.formattedAddress !== '' && (
          <Touchable onPress={this.setLocationToCurrentLocation}>
            <View style={styles.currentLocationContainer}>
              <TextIcon code="&quot;" style={styles.currentLocationIcon} />
              <View>
                <Text numberOfLines={1} style={styles.currentLocationTitle}>
                  <Translation id="mmb.trip_service.transportation.address_picker.current_location_title" />
                </Text>
                <Text numberOfLines={1} style={styles.currentLocationAddress}>
                  <Translation passThrough={this.state.formattedAddress} />
                </Text>
              </View>
            </View>
          </Touchable>
        )}
        {region != null && (
          <Addresses
            setLocation={this.props.navigation.state.params.setLocation}
            searchText={searchText}
            region={region}
          />
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  currentLocationContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: defaultTokens.paletteWhite,
    paddingHorizontal: 7,
    paddingVertical: 20,
  },
  currentLocationIcon: {
    color: defaultTokens.paletteProductLight,
    fontSize: 20,
    paddingEnd: 10,
  },
  currentLocationTitle: {
    fontWeight: '600',
    flex: 1,
    marginBottom: 5,
  },
  currentLocationAddress: {
    flex: 1,
    ios: {
      flex: 1,
      color: defaultTokens.paletteInkLight,
      fontSize: 12,
    },
  },
});

export default withGoogleMapsContext(
  withGeolocationContext(AddressPickerScreen),
);
