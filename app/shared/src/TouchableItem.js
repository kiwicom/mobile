// @flow

import * as React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

import { type StylePropType } from '../types/Styles';

type Props = {
  // not exact: additional props allowed for TouchableOpacity and TouchableNativeFeedback
  children: React.Node,
  borderless?: boolean,
  pressColor?: string,
  style?: StylePropType,
  useForeground?: boolean,
};

const ANDROID_VERSION_LOLLIPOP = 21;

/**
 * TouchableItem renders a touchable that looks native on both iOS and Android.
 *
 * It provides an abstraction on top of TouchableNativeFeedback and
 * TouchableOpacity.
 *
 * On iOS you can pass the props of TouchableOpacity, on Android pass the props
 * of TouchableNativeFeedback.
 *
 * Note: this is basically copy-paste from React Navigation
 *
 * @see https://github.com/react-navigation/react-navigation/blob/cf36f22e68fe4a7f475d714590f665dfc29e3e25/src/views/TouchableItem.js
 */
export default class TouchableItem extends React.Component<Props> {
  static defaultProps = {
    borderless: false,
    pressColor: 'rgba(0, 0, 0, .32)',
  };

  render = () => {
    /*
     * TouchableNativeFeedback.Ripple causes a crash on old Android versions,
     * therefore only enable it on Android Lollipop and above.
     *
     * All touchables on Android should have the ripple effect according to
     * platform design guidelines.
     * We need to pass the background prop to specify a borderless ripple effect.
     */
    if (
      Platform.OS === 'android' &&
      Platform.Version >= ANDROID_VERSION_LOLLIPOP
    ) {
      const { style, useForeground, ...rest } = this.props;
      const useForegroundProp =
        useForeground != null
          ? useForeground
          : TouchableNativeFeedback.canUseNativeForeground();
      return (
        <TouchableNativeFeedback
          useForeground={useForegroundProp}
          {...rest}
          style={null}
          background={TouchableNativeFeedback.Ripple(
            this.props.pressColor,
            this.props.borderless,
          )}
        >
          <View style={style}>{React.Children.only(this.props.children)}</View>
        </TouchableNativeFeedback>
      );
    }

    // React.Children.only is only necessary for TouchableNativeFeedback
    // but since we are building for both platforms it is here as well
    // to discover this mistake as soon as possible
    return (
      <TouchableOpacity {...this.props}>
        {React.Children.only(this.props.children)}
      </TouchableOpacity>
    );
  };
}
