// @flow

import * as React from 'react';
import { Animated } from 'react-native';
import { StyleSheet } from 'react-native';
import { VerticalSwipeResponder } from '@kiwicom/react-native-app-shared';

type Props = {|
  children: React.Node,
  openHeight: number,
  closedHeight: number,
|};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
});

export default class BottomSheet extends React.Component<Props> {
  heightDiff: number;
  swipeMovement: typeof Animated.Value;
  height: typeof Animated.AnimatedInterpolation;

  constructor(props: Props) {
    super(props);
    this.heightDiff = props.openHeight - props.closedHeight;
    this.swipeMovement = new Animated.Value(this.heightDiff);
    this.height = this.swipeMovement.interpolate({
      inputRange: [-this.heightDiff, this.heightDiff],
      outputRange: [props.openHeight, props.closedHeight],
      extrapolate: 'clamp',
    });
  }

  onSwipeUp = () => {
    Animated.spring(this.swipeMovement, { toValue: -this.heightDiff }).start();
  };

  onSwipeDown = () => {
    Animated.spring(this.swipeMovement, { toValue: this.heightDiff }).start();
  };

  render = () => {
    const swipeConfig = {
      directionalOffsetThreshold: 40,
    };

    return (
      <VerticalSwipeResponder
        style={[styles.container, { height: this.height }]}
        onSwipeMove={Animated.event([{ dy: this.swipeMovement }])}
        onSwipeUp={this.onSwipeUp}
        onSwipeDown={this.onSwipeDown}
        config={swipeConfig}
      >
        {this.props.children}
      </VerticalSwipeResponder>
    );
  };
}
