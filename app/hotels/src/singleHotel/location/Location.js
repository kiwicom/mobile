// @flow

import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView from 'react-native-maps';
import { StretchedImage, DropMarker } from '@kiwicom/react-native-app-shared';
import idx from 'idx';
import { createFragmentContainer, graphql } from 'react-relay';

import gradient from './white-to-alpha-horizontal.png';
import type { Location_hotel } from './__generated__/Location_hotel.graphql';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ffffff',
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
  mapOverlay: StyleSheet.absoluteFillObject,
  addressLine: {
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: -0.15,
  },
  streetLine: {
    color: '#30363d',
  },
  cityLine: {
    color: '#79818a',
  },
});

type ContainerProps = {|
  hotel: any,
  onGoToMap: () => void,
|};

type Props = {
  ...ContainerProps,
  hotel: ?Location_hotel,
};

export function Location({ hotel, onGoToMap }: Props) {
  const address = idx(hotel, _ => _.address);
  const coordinates = idx(hotel, _ => _.coordinates);
  const latitude = idx(coordinates, _ => _.lat);
  const longitude = idx(coordinates, _ => _.lng);
  return (
    <View style={styles.background}>
      <TouchableOpacity style={styles.container} onPress={onGoToMap}>
        <View style={styles.leftColumn}>
          <Text style={[styles.addressLine, styles.streetLine]}>
            {idx(address, _ => _.street)}
          </Text>
          <Text style={[styles.addressLine, styles.cityLine]}>
            {idx(address, _ => _.city)}
          </Text>
        </View>
        <View style={styles.rightColumn}>
          {typeof latitude === 'number' &&
            typeof longitude === 'number' && (
              <MapView
                region={{
                  latitude: latitude + 0.001, // move center little bit down
                  longitude: longitude - 0.005, // move center little bit right
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
                style={[StyleSheet.absoluteFillObject, { bottom: -25 }]}
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
      </TouchableOpacity>
    </View>
  );
}

export default (createFragmentContainer(
  Location,
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
