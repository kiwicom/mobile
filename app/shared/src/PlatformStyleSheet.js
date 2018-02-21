// @flow

import { StyleSheet, Platform } from 'react-native'; // eslint-disable-line no-restricted-imports

import type { StylePropType } from '../index';

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
export default {
  absoluteFill: StyleSheet.absoluteFill,
  absoluteFillObject: StyleSheet.absoluteFillObject,
  flatten: StyleSheet.flatten,

  create(styles: StylePropType): StylePropType {
    const platformStyles = {};
    Object.keys(styles).forEach(name => {
      let { ios, android, ...style } = { ...styles[name] };
      if (ios && Platform.OS === 'ios') {
        style = { ...style, ...ios };
      }
      if (android && Platform.OS === 'android') {
        style = { ...style, ...android };
      }
      platformStyles[name] = style;
    });
    return StyleSheet.create(platformStyles);
  },
};
