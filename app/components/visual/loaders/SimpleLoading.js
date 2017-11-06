// @flow

import * as React from 'react';
import { Text } from 'react-native';

type State = {
  dots: string,
};

export default class SimpleLoading extends React.Component<*, State> {
  timerID: number;

  state: State = {
    dots: '',
  };

  componentDidMount = () => {
    this.timerID = setInterval(() => this.tick(), 100);
  };

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  };

  tick = () => {
    const moreDots = this.state.dots + '.';
    this.setState({
      dots: moreDots.length > 3 ? '' : moreDots,
    });
  };

  render = () => <Text>Loading{this.state.dots}</Text>;
}
