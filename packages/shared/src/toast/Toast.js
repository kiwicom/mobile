// @flow strict

import * as React from 'react';
import { Animated, View } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import {
  FlingGestureHandler,
  Directions,
  State as GestureState,
} from 'react-native-gesture-handler';

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

type HandlerChangeEvent = {
  +nativeEvent: {
    +state: number,
    ...
  },
  ...
};

export default class Toast extends React.Component<Props, State> {
  translateY = new Animated.Value(-250);
  state = {
    isVisible: false,
  };

  timeout: ?TimeoutID;
  static defaultProps = {
    duration: 3000,
  };

  show = () => {
    this.setState({ isVisible: true }, () => {
      Animated.timing(this.translateY, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        this.timeout = setTimeout(this.hide, this.props.duration);
      });
    });
  };

  hide = () => {
    Animated.timing(this.translateY, {
      toValue: -250,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      this.setState({ isVisible: false }, () => {
        if (this.props.onHide != null) {
          this.props.onHide();
        }
        if (this.timeout != null) {
          clearTimeout(this.timeout);
          this.timeout = null;
        }
      });
    });
  };

  onHandlerStateChange = ({ nativeEvent }: HandlerChangeEvent) => {
    if (nativeEvent.state === GestureState.ACTIVE) {
      this.hide();
    }
  };

  render() {
    if (this.state.isVisible === false) {
      return null;
    }

    return (
      <FlingGestureHandler
        onHandlerStateChange={this.onHandlerStateChange}
        direction={Directions.UP}
      >
        <View style={[styles.toast, this.props.style]} testID="toast">
          <Animated.View
            style={{
              transform: [{ translateY: this.translateY }],
            }}
          >
            <AdaptableBadge
              type="info"
              style={styles.badge}
              translation={this.props.text}
            />
          </Animated.View>
        </View>
      </FlingGestureHandler>
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
