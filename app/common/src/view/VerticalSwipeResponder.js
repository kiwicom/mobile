// @flow

import * as React from 'react';
import { View, PanResponder } from 'react-native';
import type { GestureState } from '../../types/Events';

type SwipeConfig = {|
  velocityThreshold: number,
  directionalOffsetThreshold: number,
|};

type Props = {|
  config?: SwipeConfig,
  style?: Object | Object[],
  children?: React.Node,
  onSwipeUp?: (gestureState?: GestureState) => void,
  onSwipeDown?: (gestureState?: GestureState) => void,
|};

export const swipeDirections = {
  SWIPE_UP: 'SWIPE_UP',
  SWIPE_DOWN: 'SWIPE_DOWN',
  SWIPE_LEFT: 'SWIPE_LEFT',
  SWIPE_RIGHT: 'SWIPE_RIGHT',
};

const swipeConfig = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

function isValidSwipe(
  velocity,
  velocityThreshold,
  directionalOffset,
  directionalOffsetThreshold,
) {
  return (
    Math.abs(velocity) > velocityThreshold &&
    Math.abs(directionalOffset) < directionalOffsetThreshold
  );
}

/**
 * inspired by "react-native-swipe-gestures"
 * but with modified _handleShouldSetPanResponder & _triggerSwipeHandlers functions
 * In effect, onSwipeLeft, onSwipeUp, onSwipeDown & onSwipeRight don't work as in original code
 *
 * FIXME: refactor by throwing away all unnecessary code
 */
class VerticalSwipeResponder extends React.Component<Props> {
  swipeConfig: SwipeConfig;
  _panResponder: any;

  constructor(props: Props) {
    super(props);
    this.swipeConfig = Object.assign(swipeConfig, props.config);
  }

  componentWillReceiveProps(props: Props) {
    this.swipeConfig = Object.assign(swipeConfig, props.config);
  }

  componentWillMount() {
    const responderEnd = this._handlePanResponderEnd.bind(this);
    const shouldSetResponder = this._handleShouldSetPanResponder.bind(this);
    this._panResponder = PanResponder.create({
      //stop JS beautify collapse
      onStartShouldSetPanResponder: shouldSetResponder,
      onMoveShouldSetPanResponder: shouldSetResponder,
      onPanResponderRelease: responderEnd,
      onPanResponderTerminate: responderEnd,
    });
  }

  _handleShouldSetPanResponder(evt, gestureState) {
    return (
      evt.nativeEvent.touches.length === 1 &&
      !this._gestureIsClick(gestureState) &&
      this._isValidVerticalSwipe(gestureState)
    );
  }

  _gestureIsClick(gestureState) {
    return Math.abs(gestureState.dx) < 5 && Math.abs(gestureState.dy) < 5;
  }

  _handlePanResponderEnd(evt, gestureState) {
    const swipeDirection = this._getSwipeDirection(gestureState);
    this._triggerSwipeHandlers(swipeDirection, gestureState);
  }

  _triggerSwipeHandlers(swipeDirection, gestureState) {
    const { onSwipeUp, onSwipeDown } = this.props;
    if (gestureState.dy > 0) {
      onSwipeDown && onSwipeDown(gestureState);
    } else {
      onSwipeUp && onSwipeUp(gestureState);
    }
  }

  _getSwipeDirection(gestureState) {
    const { SWIPE_LEFT, SWIPE_RIGHT, SWIPE_UP, SWIPE_DOWN } = swipeDirections;
    const { dx, dy } = gestureState;
    if (this._isValidHorizontalSwipe(gestureState)) {
      return dx > 0 ? SWIPE_RIGHT : SWIPE_LEFT;
    } else if (this._isValidVerticalSwipe(gestureState)) {
      return dy > 0 ? SWIPE_DOWN : SWIPE_UP;
    }
    return null;
  }

  _isValidHorizontalSwipe(gestureState) {
    const { vx, dy } = gestureState;
    const { velocityThreshold, directionalOffsetThreshold } = this.swipeConfig;
    return isValidSwipe(vx, velocityThreshold, dy, directionalOffsetThreshold);
  }

  _isValidVerticalSwipe(gestureState) {
    const { vy, dx } = gestureState;
    const { velocityThreshold, directionalOffsetThreshold } = this.swipeConfig;
    return isValidSwipe(vy, velocityThreshold, dx, directionalOffsetThreshold);
  }

  render() {
    return <View {...this.props} {...this._panResponder.panHandlers} />;
  }
}

export default VerticalSwipeResponder;
