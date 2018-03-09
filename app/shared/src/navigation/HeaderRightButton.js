// @flow

import * as React from 'react';
import { View } from 'react-native';

import StyleSheet from '../PlatformStyleSheet';
import TouchableItem from '../TouchableItem';
import Icon from '../Icon';

type Props = {|
  onPress?: () => void,
  pressColorAndroid?: string,
  tintColor?: string,
  onLongPress?: (React.Element<*>) => void,
|};

type State = {|
  reference: React.Element<*> | null,
|};

export default class HeaderRightButton extends React.PureComponent<
  Props,
  State,
> {
  state = {
    reference: null,
  };
  static defaultProps = {
    pressColorAndroid: 'rgba(0, 0, 0, .32)',
    tintColor: '#fff',
  };

  refHandler = (reference: any) => {
    this.setState({ reference });
  };

  onLongPress = () => {
    if (this.state.reference !== null && this.props.onLongPress !== undefined) {
      this.props.onLongPress(this.state.reference);
    }
  };

  render = () => {
    const { onPress, pressColorAndroid, tintColor } = this.props;

    return (
      <TouchableItem
        accessibilityComponentType="button"
        accessibilityTraits="button"
        delayPressIn={0}
        onPress={onPress}
        pressColor={pressColorAndroid}
        style={styles.container}
        borderlessRipple={true}
        onLongPress={this.onLongPress}
        ref={this.refHandler}
      >
        <View style={styles.container}>
          <Icon style={styles.icon} name="map" size={24} color={tintColor} />
        </View>
      </TouchableItem>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  icon: {
    ios: {
      marginLeft: 22,
      marginRight: 10,
      marginVertical: 12,
    },
    android: {
      margin: 16,
    },
  },
});
