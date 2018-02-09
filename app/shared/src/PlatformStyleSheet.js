// @flow

import { StyleSheet, Platform } from 'react-native';

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
  create(styles: Object): { [name: string]: number } {
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
