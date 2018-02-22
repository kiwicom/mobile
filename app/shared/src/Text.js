// @flow

import * as React from 'react';
import ReactNative from 'react-native';

import StyleSheet from './PlatformStyleSheet';
import type { StylePropType } from '../types/Styles';

type Props = {|
  children: React.Node,
  style?: StylePropType,
  numberOfLines?: number,
|};

/**
 * This is wrapper around native `Text` component. It adds default text styles
 * and supports native style inheritance.
 */
export default function Text(props: Props) {
  const childrenWithInheritedStyles = React.Children.map(
    props.children,
    child => {
      if (React.isValidElement(child)) {
        const childStyles = child.props ? child.props.style : {};
        return React.cloneElement(child, {
          style: StyleSheet.flatten([props.style, childStyles]),
        });
      }

      return child;
    },
  );

  // Note - this won't work correctly because it doesn't work with style inheritance (see tests):
  // See: https://facebook.github.io/react-native/docs/text.html#limited-style-inheritance
  //
  // return (
  //   <ReactNative.Text {...props} style={[styles.default, props.style]}>
  //     {props.children}
  //   </ReactNative.Text>
  // );
  return (
    <ReactNative.Text {...props} style={[styles.nativeText, props.style]}>
      {childrenWithInheritedStyles}
    </ReactNative.Text>
  );
}

const styles = StyleSheet.create({
  // These values are from the official design. Don't touch it please.
  nativeText: {
    fontWeight: 'normal',
    color: '#30363d',
    android: {
      fontSize: 15,
      lineHeight: 21,
    },
    ios: {
      fontSize: 14,
      lineHeight: 20,
    },
  },
});
