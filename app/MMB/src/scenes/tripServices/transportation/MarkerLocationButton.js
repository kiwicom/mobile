// @flow

import * as React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Text, StyleSheet, TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import FormattedAddress from './FormattedAddress';

type Coordinate = {|
  +latitude: number,
  +longitude: number,
|};

type Props = {|
  +onPress: () => void,
  +coordinate: ?Coordinate,
|};

export default function MarkerLocationButton(props: Props) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={props.onPress}>
        <View style={styles.locationButton}>
          <TextIcon code="B" style={styles.icon} />
          <Text
            numberOfLines={1}
            style={
              props.coordinate ? styles.locationText : styles.placeholderText
            }
          >
            {props.coordinate != null ? (
              <FormattedAddress coordinate={props.coordinate} />
            ) : (
              <Translation id="mmb.trip_services.transportation.map.marker_location_button" />
            )}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultTokens.paletteWhite,
    padding: 10,
  },
  locationButton: {
    flexDirection: 'row',
    backgroundColor: defaultTokens.backgroundInputDisabled,
    alignItems: 'center',
    android: {
      borderRadius: 2,
      elevation: 1,
      height: 48,
    },
    ios: {
      height: 47,
      borderRadius: 6,
    },
  },
  placeholderText: {
    color: defaultTokens.paletteInkLight,
    flex: 1,
  },
  locationText: {
    color: defaultTokens.paletteInkDark,
    flex: 1,
  },
  icon: {
    marginHorizontal: 10,
    alignSelf: 'center',
    color: defaultTokens.paletteInkLight,
  },
});
