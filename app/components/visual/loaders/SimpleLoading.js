// @flow

import * as React from 'react';
import { Text } from 'react-native';

export default class SimpleLoading extends React.PureComponent {
  state = {
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
