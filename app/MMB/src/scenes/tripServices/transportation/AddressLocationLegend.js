// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, TextIcon, Color, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

export default function AddressLocationLegend() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>
          <Translation id="mmb.trip_service.transportation.map.legend.long_tap" />
        </Text>
        <TextIcon code="j" style={[styles.icon, styles.markerA]} />
        <Text style={styles.text}>
          <Translation id="mmb.trip_service.transportation.map.legend.markerA" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>
          <Translation id="mmb.trip_service.transportation.map.legend.tap" />
        </Text>
        <TextIcon code="k" style={[styles.icon, styles.markerB]} />
        <Text style={styles.text}>
          <Translation id="mmb.trip_service.transportation.map.legend.markerB" />
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: defaultTokens.paletteInkLight,
    fontSize: 16,
  },
  markerA: {
    color: defaultTokens.paletteProductNormal,
  },
  markerB: {
    color: defaultTokens.colorAlertIconWarning,
  },
  row: {
    flexDirection: 'row',
  },
  container: {
    height: 40,
    borderColor: defaultTokens.paletteWhite,
    flexDirection: 'row',
    borderRadius: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: defaultTokens.paletteWhite,
    position: 'absolute',
    bottom: 20,
    start: 0,
    end: 0,
    marginHorizontal: 45,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowColor: Color.black, //TODO
    shadowOffset: { height: 0, width: 0 },
  },
  icon: {
    fontSize: 17,
    alignSelf: 'center',
    paddingHorizontal: 5,
  },
});
