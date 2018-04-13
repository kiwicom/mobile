// @flow

import * as React from 'react';
import { Animated, PanResponder } from 'react-native';
import type { StylePropType } from '@kiwicom/react-native-app-shared';

import type { GestureState, PanResponderEvent } from '../../types/Events';

type SwipeConfig = {|
  velocityThreshold: number,
  directionalOffsetThreshold: number,
  swipeVerticalThreshold: number,
|};

type Props = {|
  children: React.Node,
  style?: StylePropType,
  onSwipeUp?: (gestureState?: GestureState) => void,
  onSwipeDown?: (gestureState?: GestureState) => void,
|};

export const swipeDirections = {
  SWIPE_UP: 'SWIPE_UP',
  SWIPE_DOWN: 'SWIPE_DOWN',
  SWIPE_LEFT: 'SWIPE_LEFT',
  SWIPE_RIGHT: 'SWIPE_RIGHT',
};

const swipeConfig: SwipeConfig = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 40,
  swipeVerticalThreshold: 10,
};

/**
 * @see https://gist.github.com/teameh/dd055d546a3bd8f85b9516840e3a45f3
 */
export default class VerticalSwipeResponder extends React.Component<Props> {
  swipeConfig: SwipeConfig;
  panResponder: any;

  constructor(props: Props) {
    super(props);

    this.swipeConfig = swipeConfig;
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleShouldSetPanResponder,
      onMoveShouldSetPanResponder: this.handleShouldSetPanResponder,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd,
    });
  }

  handleShouldSetPanResponder = (
    evt: PanResponderEvent,
    gestureState: GestureState,
  ) => {
    return (
      evt.nativeEvent.touches.length === 1 &&
      !this.gestureIsClick(gestureState) &&
      this.isValidVerticalSwipe(gestureState)
    );
  };

  gestureIsClick = (gestureState: GestureState) => {
    return Math.abs(gestureState.dx) < 5 && Math.abs(gestureState.dy) < 5;
  };

  handlePanResponderEnd = (
    evt: PanResponderEvent,
    gestureState: GestureState,
  ) => {
    const { onSwipeUp, onSwipeDown } = this.props;
    const swipeDirection = this.getSwipeDirection(gestureState);

    if (swipeDirection === swipeDirections.SWIPE_DOWN) {
      onSwipeDown && onSwipeDown(gestureState);
    } else {
      onSwipeUp && onSwipeUp(gestureState);
    }
  };

  getSwipeDirection = (gestureState: GestureState) => {
    const { SWIPE_LEFT, SWIPE_RIGHT, SWIPE_UP, SWIPE_DOWN } = swipeDirections;
    const { dx, dy } = gestureState;
    if (this.isValidHorizontalSwipe(gestureState)) {
      return dx > 0 ? SWIPE_RIGHT : SWIPE_LEFT;
    } else if (this.isValidVerticalSwipe(gestureState)) {
      return dy > 0 ? SWIPE_DOWN : SWIPE_UP;
    }
    return null;
  };

  isValidHorizontalSwipe = (gestureState: GestureState) => {
    const { vx, dy } = gestureState;
    const { velocityThreshold, directionalOffsetThreshold } = this.swipeConfig;
    return this.isValidSwipe(
      vx,
      velocityThreshold,
      dy,
      directionalOffsetThreshold,
    );
  };

  isValidVerticalSwipe = (gestureState: GestureState) => {
    const { vy, dx } = gestureState;
    const { velocityThreshold, directionalOffsetThreshold } = this.swipeConfig;
    return this.isValidSwipe(
      vy,
      velocityThreshold,
      dx,
      directionalOffsetThreshold,
    );
  };

  isValidSwipe = (
    velocity: number,
    velocityThreshold: number,
    directionalOffset: number,
    directionalOffsetThreshold: number,
  ) => {
    return (
      Math.abs(velocity) > velocityThreshold &&
      Math.abs(directionalOffset) < directionalOffsetThreshold
    );
  };

  render = () => {
    return <Animated.View {...this.props} {...this.panResponder.panHandlers} />;
  };
}
