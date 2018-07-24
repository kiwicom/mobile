// @flow

import * as React from 'react';
import { View } from 'react-native';
import type { OnLayout as OnLayoutType } from '@kiwicom/mobile-shared';

type State = {| height: number |};
type Props = {| +render: State => React.Node |};

export default class OnLayout extends React.Component<Props, State> {
  state = { height: 0 };

  onLayout = (e: OnLayoutType) => {
    this.setState({
      height: e.nativeEvent.layout.height,
    });
  };

  render() {
    return (
      <View onLayout={this.onLayout}>{this.props.render(this.state)}</View>
    );
  }
}
