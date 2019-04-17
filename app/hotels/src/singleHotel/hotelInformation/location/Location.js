// @flow

import * as React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import {
  StyleSheet,
  StretchedImage,
  DropMarker,
  Text,
  TouchableWithoutFeedback,
  Logger,
  Translation,
} from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import gradient from './white-to-alpha-horizontal.png';
import type { Location_hotel as HotelType } from './__generated__/Location_hotel.graphql';
import { type HotelsContextState, HotelsContext } from '../../../HotelsContext';

type Props = {|
  +hotel: ?HotelType,
  +navigation: NavigationType,
|};

export function Location(props: Props) {
  const {
    currency,
    hotelId,
    checkin,
    checkout,
    roomsConfiguration,
  }: HotelsContextState = React.useContext(HotelsContext);

  function goToMap() {
    props.navigation.navigate('SingleHotelMap', {
      hotelId,
      checkin,
      checkout,
      roomsConfiguration,
      currency,
    });
    Logger.hotelsDetailMapOpened();
  }

  const address = props.hotel?.address;
  const latitude = props.hotel?.coordinates?.lat;
  const longitude = props.hotel?.coordinates?.lng;

  return (
    <View style={styles.background}>
      <TouchableWithoutFeedback onPress={goToMap}>
        <View style={styles.container}>
          <View style={styles.leftColumn}>
            <Text style={[styles.addressLine, styles.streetLine]}>
              <Translation passThrough={address?.street} />
            </Text>
            <Text style={[styles.addressLine, styles.cityLine]}>
              <Translation passThrough={address?.city} />
            </Text>
          </View>
          {typeof latitude === 'number' && typeof longitude === 'number' && (
            <MapView
              region={{
                latitude: latitude + 0.001, // move center little bit bottom
                longitude: longitude - 0.025, // move center little bit right
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
              scrollEnabled={false}
              style={[StyleSheet.absoluteFillObject, styles.mapBottom]}
            />
          )}

          <View style={styles.overlayMarker}>
            <DropMarker />
          </View>
          <StretchedImage source={gradient} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default createFragmentContainer(withNavigation(Location), {
  hotel: graphql`
    fragment Location_hotel on HotelInterface {
      address {
        street
        city
      }
      coordinates {
        lat
        lng
      }
    }
  `,
});

const styles = StyleSheet.create({
  background: {
    backgroundColor: defaultTokens.paletteWhite,
  },
  container: {
    height: 80,
    flexDirection: 'row',
  },
  leftColumn: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
    zIndex: Number(defaultTokens.zIndexSticky),
  },
  addressLine: {
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: -0.15,
  },
  streetLine: {
    color: defaultTokens.colorTextAttention,
  },
  cityLine: {
    color: defaultTokens.colorTextSecondary,
  },
  mapBottom: {
    android: {
      bottom: -25,
    },
  },
  overlayMarker: {
    marginVertical: 20,
    marginEnd: 20,
    height: 40,
    width: 40,
    zIndex: Number(defaultTokens.zIndexSticky),
  },
});
