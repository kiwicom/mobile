// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Touchable } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import StyleSheet from '../PlatformStyleSheet';
import Color from '../Color';
import Icon from '../icons/Icon';

type Props = {|
  children: React.Node,
|};

type State = {|
  dismissed: boolean,
|};

export default class PartialFailure extends React.Component<Props, State> {
  state = {
    dismissed: false,
  };

  toggle = () => {
    this.setState(({ dismissed }) => ({
      dismissed: !dismissed,
    }));
  };

  render() {
    const { children } = this.props;

    if (this.state.dismissed === true) {
      return (
        <React.Fragment>
          {children}
          <Touchable
            style={style.dismissed}
            accessibilityLabel="Show warning"
            onPress={this.toggle}
          >
            <Icon name="warning" size={20} />
          </Touchable>,
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {children}
          <View style={style.container}>
            <View style={style.message}>
              <Translation id="partial_failure.error" />
            </View>
            <Touchable accessibilityLabel="Hide warning" onPress={this.toggle}>
              <Icon name="close" size={20} />
            </Touchable>
          </View>
        </React.Fragment>
      );
    }
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Color.red.light,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  message: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dismissed: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: Color.red.light,
    padding: 5,
    borderTopLeftRadius: 5,
  },
});
