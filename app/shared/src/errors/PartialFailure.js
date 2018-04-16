// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Touchable } from '@kiwicom/react-native-app-shared';
import { Translation } from '@kiwicom/react-native-app-localization';

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
    const { dismissed } = this.state;
    const style = createStyle();

    if (dismissed) {
      return [
        children,
        <Touchable
          key="dismissed"
          style={style.dismissed}
          accessibilityLabel="Show warning"
          onPress={this.toggle}
        >
          <Icon name="warning" size={20} />
        </Touchable>,
      ];
    } else {
      return [
        children,
        <View key="warning" style={style.container}>
          <View style={style.message}>
            <Translation id="partial_failure.error" />
          </View>
          <Touchable accessibilityLabel="Hide warning" onPress={this.toggle}>
            <Icon name="close" size={20} />
          </Touchable>
        </View>,
      ];
    }
  }
}

function createStyle() {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: Color.red.$100,
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
      backgroundColor: Color.red.$100,
      padding: 5,
      borderTopLeftRadius: 5,
    },
  });
}
