// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import ReactNative from 'react-native';

import StyleSheet from './PlatformStyleSheet';
import type { StylePropType } from '../types/Styles';

type Props = {|
  children: React.Node,
  style?: StylePropType,
  numberOfLines?: number,
|};

type State = {|
  nativeText: StylePropType,
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
 * Known issues:
 * @see https://github.com/facebook/react-native/issues/10712
 */
export default class Text extends React.Component<Props, State> {
  state = {
    nativeText: styles.nativeText,
  };

  componentDidMount = () => {
    this.setNativeStyles(this.props.style);
  };

  componentWillReceiveProps = (nextProps: Props) => {
    this.setNativeStyles(nextProps.style);
  };

  getChildContext = () => ({
    defaultTextStyles: this.state.nativeText,
  });

  setNativeStyles = (style: StylePropType) => {
    if (this.context.defaultTextStyles === undefined) {
      // only the styles of the first Text component in the subtree are merged
      // with the default values
      this.setState(prevState => ({
        nativeText: StyleSheet.flatten([prevState.nativeText, style]),
      }));
    } else {
      // other Text component deeper in the subtree works only with the style
      // properties (they are being merged with context - see below)
      this.setState({
        nativeText: style,
      });
    }
  };

  render = () => (
    <ReactNative.Text
      {...this.props}
      style={[this.context.defaultTextStyles, this.state.nativeText]}
    >
      {this.props.children}
    </ReactNative.Text>
  );
}

Text.childContextTypes = {
  defaultTextStyles: PropTypes.any,
};

Text.contextTypes = {
  defaultTextStyles: PropTypes.any,
};

const styles = StyleSheet.create({
  // These values are from the official design. Don't touch it please.
  nativeText: {
    fontWeight: 'normal',
    color: '#30363d',
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
