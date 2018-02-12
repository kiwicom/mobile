// @flow

import * as React from 'react';
import Svg, { Circle as SvgCircle } from 'react-native-svg';
import { Animated } from 'react-native';

import Color from '../Color';

type State = {|
  dot: Animated.Value,
|};

function Circle({ cx, cy, fillOpacity }) {
  const Circle = Animated.createAnimatedComponent(SvgCircle);
  return (
    <Circle
      cx={cx}
      cy={cy}
      r="12.5"
      fill={Color.brand}
      fillOpacity={fillOpacity}
    />
  );
}

export default class Loader extends React.Component<{||}, State> {
  state: State = {
    dot: new Animated.Value(1),
  };

  componentDidMount = () => {
    const dot = this.state.dot;
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
    ).start();
  };

  render = () => {
    return (
      <Svg viewBox="0 0 105 105" width="20" height="20">
        <Circle cx="12.5" cy="12.5" fillOpacity={this.state.dot} />
        <Circle cx="12.5" cy="52.5" fillOpacity={this.state.dot} />
        <Circle cx="52.5" cy="12.5" fillOpacity={this.state.dot} />
        <Circle cx="52.5" cy="52.5" fillOpacity={this.state.dot} />
        <Circle cx="92.5" cy="12.5" fillOpacity={this.state.dot} />
        <Circle cx="92.5" cy="52.5" fillOpacity={this.state.dot} />
        <Circle cx="12.5" cy="92.5" fillOpacity={this.state.dot} />
        <Circle cx="52.5" cy="92.5" fillOpacity={this.state.dot} />
        <Circle cx="92.5" cy="92.5" fillOpacity={this.state.dot} />
      </Svg>
    );
  };
}
