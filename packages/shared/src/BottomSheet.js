// @flow strict

import * as React from 'react';
import { LayoutAnimation } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import StyleSheet from './PlatformStyleSheet';
import VerticalSwipeResponder from './view/VerticalSwipeResponder';
import Color from './Color';

type Props = {|
  +children: React.Node,
  +openHeight: number,
  +closedHeight: number,
|};

type State = {|
  height: number,
|};

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultTokens.paletteWhite,
    overflow: 'hidden',
    borderRadius: 6,
    android: {
      borderTopRightRadius: 3,
      borderTopLeftRadius: 3,
      marginTop: 1,
      marginStart: 1,
      marginEnd: 1,
      elevation: 1,
    },
    ios: {
      shadowColor: Color.dark.$10,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
  },
});
