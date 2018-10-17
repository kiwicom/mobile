// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import StyleSheet from './PlatformStyleSheet';
import TextIcon from './icons/TextIcon';

/**
 * This drop marker is always pointing to the (0,0) coordinate. It's because
 * the marker itself is always absolutely shifted to the left-top corner as
 * shown on the following picture:
 *
 *  .-.
 *  \O/
 *   v
 *   .-------.
 *   |       |
 *   |   x   |
 *   |       |
 *   `-------`
 */
export default function DropMarker() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TextIcon code="&#xe085;" style={styles.icon} />
      </View>
      <View style={styles.blueArrow} />
      <View style={styles.whiteArrow} />
      <View style={styles.arrowBorder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderColor: defaultTokens.paletteInkLight,
    borderWidth: 0.5,
    backgroundColor: defaultTokens.paletteWhite,
    padding: 1,
    position: 'absolute',
    start: -12,
    top: -24,
  },
  iconContainer: {
    flex: 1,
    backgroundColor: defaultTokens.paletteBlueNormal,
    borderRadius: 4,
    padding: 3,
    paddingBottom: 1,
  },
  icon: {
    color: defaultTokens.paletteWhite,
    fontSize: 18,
  },
  blueArrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 7,
    borderTopColor: defaultTokens.paletteBlueNormal,
    alignSelf: 'center',
    zIndex: parseInt(defaultTokens.zIndexModal),
    bottom: -11,
    position: 'absolute',
  },
  whiteArrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 6,
    borderTopColor: defaultTokens.paletteWhite,
    alignSelf: 'center',
    position: 'absolute',
    bottom: -12,
    zIndex: parseInt(defaultTokens.zIndexDefault),
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 7,
    borderTopColor: defaultTokens.paletteInkLight,
    alignSelf: 'center',
    position: 'absolute',
    bottom: -14,
    zIndex: 0,
  },
});
