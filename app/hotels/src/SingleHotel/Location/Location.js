// @flow
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MapView } from 'expo';
import { StretchedImage } from '@kiwicom/react-native-app-common';
import gradient from './white-to-alpha-horizontal.png';

import type { LocationContainer_address } from './LocationContainer';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
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

type Props = {
  address: LocationContainer_address,
};

export default function Location({ address }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Text style={[styles.addressLine, styles.streetLine]}>
          {address.streetLine}
        </Text>
        <Text style={[styles.addressLine, styles.cityLine]}>
          {address.city}
        </Text>
      </View>
      <View style={styles.rightColumn}>
        <MapView
          region={{
            latitude: address.coordinates.lat,
            longitude: address.coordinates.lng - 0.004,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          style={StyleSheet.absoluteFillObject}
        >
          <MapView.Marker
            coordinate={{
              latitude: address.coordinates.lat,
              longitude: address.coordinates.lng,
            }}
          />
        </MapView>
        <StretchedImage source={gradient} />
        <TouchableOpacity style={styles.mapOverlay} />
      </View>
    </View>
  );
}
