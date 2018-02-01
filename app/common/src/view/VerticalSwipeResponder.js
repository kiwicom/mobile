// @flow

import * as React from 'react';
import { Animated, PanResponder } from 'react-native';
import type { StylePropType } from '@kiwicom/react-native-app-common';

import type { GestureState, PanResponderEvent } from '../../types/Events';

type SwipeConfig = {|
  velocityThreshold: number,
  directionalOffsetThreshold: number,
  swipeVerticalThreshold: number,
|};

type SwipeConfigProp = {|
  velocityThreshold?: number,
  directionalOffsetThreshold?: number,
  swipeVerticalThreshold?: number,
|};

type Props = {|
  config?: SwipeConfigProp,
  style?: StylePropType,
  children?: React.Node,
  onSwipeMove?: (gestureState?: GestureState) => void,
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
  directionalOffsetThreshold: 80,
  swipeVerticalThreshold: 10,
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

export default class VerticalSwipeResponder extends React.Component<Props> {
  swipeConfig: SwipeConfig;
  panResponder: any;

  constructor(props: Props) {
    super(props);
    this.swipeConfig = Object.assign(swipeConfig, props.config);
  }

  componentWillReceiveProps = (props: Props) => {
    this.swipeConfig = Object.assign(swipeConfig, props.config);
  };

  componentWillMount = () => {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleShouldSetPanResponder,
      onMoveShouldSetPanResponder: this.handleShouldSetPanResponder,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd,
    });
  };

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

  handlePanResponderMove = (
    e: PanResponderEvent,
    gestureState: GestureState,
  ) => {
    const { onSwipeMove } = this.props;
    const { swipeVerticalThreshold } = this.swipeConfig;

    if (Math.abs(gestureState.dy) > swipeVerticalThreshold) {
      onSwipeMove && onSwipeMove(gestureState);
    }
  };

  handlePanResponderEnd = (
    evt: PanResponderEvent,
    gestureState: GestureState,
  ) => {
    const swipeDirection = this.getSwipeDirection(gestureState);
    this.triggerSwipeHandlers(swipeDirection, gestureState);
  };

  triggerSwipeHandlers = (
    swipeDirection: string | null,
    gestureState: GestureState,
  ) => {
    const { onSwipeUp, onSwipeDown } = this.props;
    if (gestureState.dy > 0) {
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
    return isValidSwipe(vx, velocityThreshold, dy, directionalOffsetThreshold);
  };

  isValidVerticalSwipe = (gestureState: GestureState) => {
    const { vy, dx } = gestureState;
    const { velocityThreshold, directionalOffsetThreshold } = this.swipeConfig;
    return isValidSwipe(vy, velocityThreshold, dx, directionalOffsetThreshold);
  };

  render = () => {
    return <Animated.View {...this.props} {...this.panResponder.panHandlers} />;
  };
}
