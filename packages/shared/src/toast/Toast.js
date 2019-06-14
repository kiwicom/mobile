// @flow strict

import * as React from 'react';
import { Animated, View } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { TranslationType } from '../../types/Translation';
import AdaptableBadge from '../AdaptableBadge';
import StyleSheet from '../PlatformStyleSheet';
import type { StylePropType } from '../../types/Styles';

type Props = {|
  +text: TranslationType,
  +duration: number,
  +style?: StylePropType,
  +onHide?: () => void,
|};

type State = {|
  +isVisible: boolean,
|};

export default class Toast extends React.Component<Props, State> {
  opacityValue = new Animated.Value(0);
  state = {
    isVisible: false,
  };

  static defaultProps = {
    duration: 3000,
  };

  show = () => {
    this.setState({ isVisible: true }, () => {
      Animated.timing(this.opacityValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          this.hide();
        }, this.props.duration);
      });
    });
  };

  hide = () => {
    Animated.timing(this.opacityValue, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      this.setState({ isVisible: false }, () => {
        if (this.props.onHide != null) {
          this.props.onHide();
        }
      });
    });
  };

  render() {
    if (this.state.isVisible === false) {
      return null;
    }
    return (
      <View style={[styles.toast, this.props.style]} testID="toast">
        <Animated.View style={{ opacity: this.opacityValue }}>
          <AdaptableBadge
            type="info"
            style={styles.badge}
            translation={this.props.text}
          />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    top: 0,
    start: 0,
    display: 'flex',
    zIndex: parseInt(defaultTokens.zIndexOnTheTop, 10),
  },
  badge: {
    borderTopStartRadius: 0,
    borderTopEndRadius: 0,
  },
});
