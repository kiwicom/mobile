// @flow

import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import StyleSheet from '../PlatformStyleSheet';
import Color from '../Color';
import Icon from '../Icon';

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
        <TouchableOpacity
          key="dismissed"
          style={style.dismissed}
          accessibilityLabel="Show warning"
          onPress={this.toggle}
        >
          <Icon name="warning" size={20} />
        </TouchableOpacity>,
      ];
    } else {
      return [
        children,
        <View key="warning" style={style.container}>
          <View style={style.message}>
            <Text>
              Some parts of the page may be missing due to partial server error.
            </Text>
          </View>
          <TouchableOpacity
            accessibilityLabel="Hide warning"
            onPress={this.toggle}
          >
            <Icon name="close" size={20} />
          </TouchableOpacity>
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
