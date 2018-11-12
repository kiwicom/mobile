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
} from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import gradient from './white-to-alpha-horizontal.png';
import type { Location_hotel } from './__generated__/Location_hotel.graphql';
import SingleHotelContext from '../../../navigation/singleHotel/SingleHotelContext';
import {
  type RoomConfigurationType,
  withHotelsContext,
} from '../../../HotelsContext';

type ContainerProps = {|
  +hotel: any,
|};

type PropsWithContext = {|
  ...Props,
  +hotelId: string,
  +checkin: Date,
  +checkout: Date,
  +roomsConfiguration: RoomConfigurationType,
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
    const { hotel } = this.props;
    const address = hotel?.address;
    const coordinates = hotel?.coordinates;
    const latitude = coordinates?.lat;
    const longitude = coordinates?.lng;
    return (
      <View style={styles.background}>
        <TouchableWithoutFeedback onPress={this.goToMap}>
          <View style={styles.container}>
            <View style={styles.leftColumn}>
              <Text style={[styles.addressLine, styles.streetLine]}>
                <Translation passThrough={address?.street} />
              </Text>
              <Text style={[styles.addressLine, styles.cityLine]}>
                <Translation passThrough={address?.city} />
              </Text>
            </View>
            {typeof latitude === 'number' &&
              typeof longitude === 'number' && (
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
  };
}

type Props = {|
  ...ContainerProps,
  +hotel: ?Location_hotel,
  +navigation: NavigationType,
  +currency: string,
|};

class LocationWithContext extends React.Component<Props> {
  renderInner = ({ hotelId, checkin, checkout, roomsConfiguration }) => (
    <Location
      {...this.props}
      hotelId={hotelId}
      checkin={checkin}
      checkout={checkout}
      roomsConfiguration={roomsConfiguration}
    />
  );

  render() {
    return (
      <SingleHotelContext.Consumer>
        {this.renderInner}
      </SingleHotelContext.Consumer>
    );
  }
}

const select = ({ currency }) => ({ currency });

export default (createFragmentContainer(
  withHotelsContext(select)(withNavigation(LocationWithContext)),
  graphql`
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
): React.ComponentType<ContainerProps>);

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
    position: 'absolute',
    top: 48,
    end: 39,
    zIndex: Number(defaultTokens.zIndexSticky),
  },
});
