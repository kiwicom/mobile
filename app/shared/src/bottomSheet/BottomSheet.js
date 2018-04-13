// @flow

import * as React from 'react';
import { LayoutAnimation } from '@kiwicom/react-native-app-shared';

import StyleSheet from '../PlatformStyleSheet';
import VerticalSwipeResponder from '../view/VerticalSwipeResponder';

type Props = {|
  children: React.Node,
  openHeight: number,
  closedHeight: number,
|};

type State = {|
  height: number,
|};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    overflow: 'hidden',
    android: {
      borderTopRightRadius: 3,
      borderTopLeftRadius: 3,
      marginTop: 1,
      marginLeft: 1,
      marginRight: 1,
      elevation: 1,
    },
  },
});

export default class BottomSheet extends React.Component<Props, State> {
  state = {
    height: this.props.closedHeight,
  };

  animate = (value: number) => {
    LayoutAnimation.linear();
    this.setState({
      height: value,
    });
  };

  onSwipeUp = () => {
    this.animate(this.props.openHeight);
  };

  onSwipeDown = () => {
    this.animate(this.props.closedHeight);
  };

  render = () => {
    return (
      <VerticalSwipeResponder
        style={[styles.container, { height: this.state.height }]}
        onSwipeUp={this.onSwipeUp}
        onSwipeDown={this.onSwipeDown}
      >
        {this.props.children}
      </VerticalSwipeResponder>
    );
  };
}
