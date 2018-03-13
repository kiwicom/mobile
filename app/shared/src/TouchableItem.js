// @flow

import * as React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import type { AccessibilityProps } from '@kiwicom/react-native-app-accessibility';

import { type StylePropType } from '../types/Styles';

type Props = {|
  children: React.Node,
  onPress: () => void,
  style?: StylePropType,
  onLongPress?: () => void,
  delayPressIn?: number,
  // Should the ripple render outside of the view bounds?
  borderlessRipple?: boolean,
  rippleColor?: string,
  ...AccessibilityProps,
|};

/**
 * TouchableItem renders a touchable that looks native on both iOS and Android.
 * It provides an abstraction on top of TouchableNativeFeedback and
 * TouchableOpacity. On iOS you can pass the props of TouchableOpacity, on
 * Android pass the props of TouchableNativeFeedback.
 */
export default class TouchableItem extends React.Component<Props> {
  static defaultProps = {
    borderlessRipple: false,
    rippleColor: 'rgba(0, 0, 0, .32)',
  };

  /**
   * TouchableNativeFeedback.Ripple causes a crash on old Android versions,
   * therefore only enable it on Android Lollipop and above.
   */
  supportsRippleEffect = () => {
    return Platform.OS === 'android' && Platform.Version >= 21;
  };

  render = () => {
    // React.Children.only is only necessary for TouchableNativeFeedback
    // but since we are building for both platforms it is here as well
    // to discover this mistake as soon as possible
    const children = React.Children.only(this.props.children);

    // All touchables on Android should have the ripple effect according to
    // platform design guidelines.
    if (this.supportsRippleEffect()) {
      const { style, ...rest } = this.props;
      let useForeground = TouchableNativeFeedback.canUseNativeForeground();
      if (this.props.borderlessRipple) {
        useForeground = false;
      }

      return (
        <TouchableNativeFeedback
          {...rest}
          style={null}
          useForeground={useForeground}
          background={TouchableNativeFeedback.Ripple(
            this.props.rippleColor,
            this.props.borderlessRipple,
          )}
        >
          <View style={style}>{children}</View>
        </TouchableNativeFeedback>
      );
    }

    return (
      <TouchableOpacity activeOpacity={0.5} {...this.props}>
        {children}
      </TouchableOpacity>
    );
  };
}
