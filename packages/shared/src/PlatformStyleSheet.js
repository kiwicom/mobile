// @flow

import { StyleSheet, Platform } from 'react-native'; // eslint-disable-line no-restricted-imports

import type { StyleObjectType, PlatformStyleObjectType } from '../types/Styles';

/**
 * This StyleSheet allows to define platform differences easily:
 *
 * const styles = StyleSheet.create({
 *   container: {
 *     flexDirection: 'row',
 *     ios: {
 *       padding: 10,
 *     },
 *     android: {
 *       padding: 20,
 *     },
 *   }
 * })
 */
const PlaformStyleSheet = {
  absoluteFill: StyleSheet.absoluteFill,

  absoluteFillObject: {
    position: 'absolute',
    start: 0,
    end: 0,
    top: 0,
    bottom: 0,
  },

  hairlineWidth: StyleSheet.hairlineWidth,

  flatten: StyleSheet.flatten,

  create(styles: PlatformStyleObjectType) {
    const platformStyles: StyleObjectType = {};
    Object.keys(styles).forEach(name => {
      let { ios, android, ...style } = { ...styles[name] };
      if (ios && Platform.OS === 'ios') {
        /* $FlowFixMe Errors after moving rn modules from untyped to
         * declarations */
        style = { ...style, ...ios };
      }
      if (android && Platform.OS === 'android') {
        /* $FlowFixMe Errors after moving rn modules from untyped to
         * declarations */
        style = { ...style, ...android };
      }
      platformStyles[name] = style;
    });
    return StyleSheet.create(platformStyles);
  },
};

export default PlaformStyleSheet;
