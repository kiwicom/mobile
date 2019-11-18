// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import StyleSheet from '../PlatformStyleSheet';

export default function SliderMarker() {
  return (
    // $FlowFixMe Errors after moving rn modules from untyped to declarations
    <View style={styles.marker}>
      {/* $FlowFixMe Errors after moving rn modules from untyped to
       * declarations */}
      <View style={styles.innerMarker} />
    </View>
  );
}

const styles = StyleSheet.create({
  marker: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: defaultTokens.paletteWhite,
    borderWidth: 0.5,
    borderColor: defaultTokens.paletteInkLighter,
    shadowColor: defaultTokens.paletteInkNormal,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    margin: 3, // necessary to see the Android elevation properly
    android: {
      elevation: 1,
    },
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerMarker: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: defaultTokens.paletteBlueNormal,
  },
});
