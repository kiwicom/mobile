// @flow

import * as React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import MapView from 'react-native-maps';
import {
  StyleSheet,
  StretchedImage,
  DropMarker,
  Text,
} from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import gradient from './white-to-alpha-horizontal.png';
import type { Location_hotel } from './__generated__/Location_hotel.graphql';
import SingleHotelContext from '../../../navigation/singleHotel/SingleHotelContext';
import HotelsContext, {
  type RoomConfigurationType,
} from '../../../HotelsContext';

type ContainerProps = {|
  +hotel: any,
  +isWide: boolean,
|};

type PropsWithContext = {|
  ...Props,
  +hotelId: string,
  +checkin: Date,
  +checkout: Date,
  +roomsConfiguration: $ReadOnlyArray<RoomConfigurationType>,
  +currency: string,
|};

export class Location extends React.Component<PropsWithContext> {
  goToMap = () => {
    this.props.navigation.navigate('SingleHotelMap', {
      hotelId: this.props.hotelId,
      checkin: this.props.checkin,
      checkout: this.props.checkout,
      roomsConfiguration: this.props.roomsConfiguration,
      currency: this.props.currency,
    });
  };

  render = () => {
    const { hotel, isWide } = this.props;
    const address = idx(hotel, _ => _.address);
    const coordinates = idx(hotel, _ => _.coordinates);
    const latitude = idx(coordinates, _ => _.lat);
    const longitude = idx(coordinates, _ => _.lng);
    return (
      <View style={[styles.background, isWide ? styles.wideContainer : null]}>
        <TouchableWithoutFeedback onPress={this.goToMap}>
          <View style={styles.container}>
            <View style={styles.leftColumn}>
              <Text style={[styles.addressLine, styles.streetLine]}>
                <Translation passThrough={idx(address, _ => _.street)} />
              </Text>
              <Text style={[styles.addressLine, styles.cityLine]}>
                <Translation passThrough={idx(address, _ => _.city)} />
              </Text>
            </View>
            <View style={styles.rightColumn}>
              {typeof latitude === 'number' &&
                typeof longitude === 'number' && (
                  <MapView
                    region={{
                      latitude: latitude,
                      longitude: longitude - 0.005, // move center little bit right
                      latitudeDelta: 0.01,
                      longitudeDelta: 0.01,
                    }}
                    scrollEnabled={false}
                    style={[StyleSheet.absoluteFillObject, styles.mapBottom]}
                  >
                    <MapView.Marker
                      coordinate={{
                        latitude,
                        longitude,
                      }}
                    >
                      <DropMarker size={30} />
                    </MapView.Marker>
                  </MapView>
                )}
              <StretchedImage source={gradient} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };
}

type Props = {|
  ...ContainerProps,
  +hotel: ?Location_hotel,
  +navigation: NavigationType,
|};

const LocationWithContext = (props: Props) => {
  return (
    <HotelsContext.Consumer>
      {({ currency }) => (
        <SingleHotelContext.Consumer>
          {({ hotelId, checkin, checkout, roomsConfiguration }) => (
            <Location
              {...props}
              hotelId={hotelId}
              checkin={checkin}
              checkout={checkout}
              currency={currency}
              roomsConfiguration={roomsConfiguration}
            />
          )}
        </SingleHotelContext.Consumer>
      )}
    </HotelsContext.Consumer>
  );
};

export default (createFragmentContainer(
  withNavigation(LocationWithContext),
  graphql`
    fragment Location_hotel on Hotel {
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
): React.ComponentType<ContainerProps>);

const styles = StyleSheet.create({
  background: {
    backgroundColor: defaultTokens.paletteWhite,
  },
  wideContainer: {
    borderRadius: 2,
  },
  container: {
    height: 100,
    flexDirection: 'row',
  },
  leftColumn: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
  rightColumn: {
    flex: 1,
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
});
