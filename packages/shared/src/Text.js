// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import ReactNative from 'react-native';

import StyleSheet from './PlatformStyleSheet';
import Color from './Color';
import type { StylePropType } from '../types/Styles';

// basically every component (but never strings - they must be translated)
// the idea is that you should always use component as a children so you'll
// eventually end up with the Translation component
type ChildrenType = React.Element<any>; // FIXME: we cannot accept View in the children because it's not supported on Android

type Props = {|
  +children: ChildrenType | React.ChildrenArray<ChildrenType>,
  +style?: StylePropType,
  +numberOfLines?: number,

  // none - View (Text in this case) is never the target of touch events
  +pointerEvents?: 'none',
|};

/**
 * React Native has the concept of style inheritance, but limited to text
 * subtrees. In this case, the second part will be both bold and red:
 *
 * ```
 * <Text style={{fontWeight: 'bold'}}>
 *   I am bold
 *   <Text style={{color: 'red'}}>and red</Text>
 * </Text>
 * ```
 *
 * It's roughly translated to this (`NSAttributedString` or `SpannableString`):
 *
 * ```
 * "I am bold and red"
 * 0-9: bold
 * 9-17: bold, red
 * ```
 *
 * This style inheritance works for deeply nested 'Text' components as well.
 *
 * Known issues:
 * @see https://github.com/facebook/react-native/issues/10712
 */
export default class Text extends React.Component<Props> {
  static childContextTypes = {
    isNested: PropTypes.bool,
  };

  static contextTypes = {
    isNested: PropTypes.bool,
  };

  getChildContext = () => ({
    isNested: true,
  });

  render = () => {
    let style = this.props.style;

    if (this.context.isNested === undefined) {
      // default styling must be applied only on the root Text component
      // `undefined` style in nested Text components indicates style inheritance
      style = [styleSheet.defaultTextStyle, this.props.style];
    }

    return (
      <ReactNative.Text {...this.props} style={style}>
        {this.props.children}
      </ReactNative.Text>
    );
  };
}

const styleSheet = StyleSheet.create({
  // These values are from the official design. Don't touch it please.
  defaultTextStyle: {
    fontWeight: 'normal',
    color: Color.textDark,
    android: {
      fontSize: 15,
      letterSpacing: 0,
      fontFamily: 'Roboto-Regular',
    },
    ios: {
      fontSize: 14,
      letterSpacing: -0.15,
    },
  },
});
