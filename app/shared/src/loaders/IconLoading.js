// @flow

import * as React from 'react';
import Svg, { Circle as SvgCircle } from 'react-native-svg';
import { Animated } from 'react-native';

import Color from '../Color';

type State = {
  [string]: Animated.Value,
};

export default class Loader extends React.Component<{||}, State> {
  state: State = {
    dot1: new Animated.Value(1),
    dot2: new Animated.Value(1),
    dot3: new Animated.Value(1),
    dot4: new Animated.Value(1),
    dot5: new Animated.Value(1),
    dot6: new Animated.Value(1),
    dot7: new Animated.Value(1),
    dot8: new Animated.Value(1),
    dot9: new Animated.Value(1),
  };

  animate = (dot: Animated.Value, delay: number) => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.loop(
        Animated.sequence([
          Animated.timing(dot, {
            toValue: 0.2,
            duration: 500,
          }),
          Animated.timing(dot, {
            toValue: 1,
            duration: 500,
          }),
        ]),
      ),
    ]).start();
  };

  componentDidMount = () => {
    this.animate(this.state.dot1, 0);
    this.animate(this.state.dot2, 100);
    this.animate(this.state.dot3, 300);
    this.animate(this.state.dot4, 600);
    this.animate(this.state.dot5, 800);
    this.animate(this.state.dot6, 400);
    this.animate(this.state.dot7, 700);
    this.animate(this.state.dot8, 500);
    this.animate(this.state.dot9, 200);
  };

  render = () => {
    const Circle = Animated.createAnimatedComponent(SvgCircle);
    return (
      <Svg viewBox="0 0 105 105" width="20" height="20">
        <Circle
          cx="12.5"
          cy="12.5"
          r="12.5"
          fill={Color.brand}
          fillOpacity={this.state.dot1}
        />
        <Circle
          cx="12.5"
          cy="52.5"
          r="12.5"
          fill={Color.brand}
          fillOpacity={this.state.dot2}
        />
        <Circle
          cx="52.5"
          cy="12.5"
          r="12.5"
          fill={Color.brand}
          fillOpacity={this.state.dot3}
        />
        <Circle
          cx="52.5"
          cy="52.5"
          r="12.5"
          fill={Color.brand}
          fillOpacity={this.state.dot4}
        />
        <Circle
          cx="92.5"
          cy="12.5"
          r="12.5"
          fill={Color.brand}
          fillOpacity={this.state.dot5}
        />
        <Circle
          cx="92.5"
          cy="52.5"
          r="12.5"
          fill={Color.brand}
          fillOpacity={this.state.dot6}
        />
        <Circle
          cx="12.5"
          cy="92.5"
          r="12.5"
          fill={Color.brand}
          fillOpacity={this.state.dot7}
        />
        <Circle
          cx="52.5"
          cy="92.5"
          r="12.5"
          fill={Color.brand}
          fillOpacity={this.state.dot8}
        />
        <Circle
          cx="92.5"
          cy="92.5"
          r="12.5"
          fill={Color.brand}
          fillOpacity={this.state.dot9}
        />
      </Svg>
    );
  };
}
