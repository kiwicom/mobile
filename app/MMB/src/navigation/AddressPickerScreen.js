// @flow

import * as React from 'react';
import { View, ScrollView } from 'react-native';
import isEqual from 'react-fast-compare';
import { Translation } from '@kiwicom/mobile-localization';
import { HeaderButton, type NavigationType } from '@kiwicom/mobile-navigation';
import {
  TextIcon,
  Text,
  StyleSheet,
  withGeolocationContext,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import FormattedAddress from '../scenes/tripServices/transportation/FormattedAddress';
import AddressLocationInput from '../scenes/tripServices/transportation/AddressLocationInput';

type Props = {|
  +navigation: NavigationType,
  +lat: number | null,
  +lng: number | null,
  +canGetUserLocation: boolean,
  +updateGeolocation: (failSilently: boolean) => void,
|};

export class AddressPickerScreen extends React.Component<Props> {
  static navigationOptions = (props: Props) => {
    function goBack() {
      props.navigation.goBack();
    }

    function todo() {
      console.warn('todo');
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
      headerTitle: <AddressLocationInput onChangeText={todo} />,
      headerStyle: { paddingBottom: 5 },
    };
  };

  componentDidMount() {
    this.props.updateGeolocation(true);
  }

  shouldComponentUpdate = (nextProps: Props) => {
    const isPropsEqual = isEqual(nextProps, this.props);

    return !isPropsEqual;
  };

  render() {
    let currentLocation = null;
    if (this.props.lat != null && this.props.lng != null) {
      currentLocation = { latitude: this.props.lat, longitude: this.props.lng };
    }
    return (
      <ScrollView>
        {currentLocation != null && (
          <View style={styles.currentLocationContainer}>
            <TextIcon code="&quot;" style={styles.currentLocationIcon} />
            <View>
              <Text style={styles.currentLocationTitle}>
                <Translation id="mmb.trip_service.transportation.address_picker.current_location_title" />
              </Text>
              <Text style={styles.currentLocationAddress}>
                <FormattedAddress coordinate={currentLocation} />
              </Text>
            </View>
          </View>
        )}
        {/* TODO Add first 10 results of search bar */}
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
  },
  currentLocationAddress: {
    color: defaultTokens.paletteInkLight,
    fontSize: 12,
    paddingTop: 4,
  },
});

export default withGeolocationContext(AddressPickerScreen);
