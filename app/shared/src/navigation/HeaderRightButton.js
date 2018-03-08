// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';

import StyleSheet from '../PlatformStyleSheet';
import TouchableItem from '../TouchableItem';
import Icon from '../Icon';

type Props = {|
  onPress?: () => void,
  pressColorAndroid?: string,
  tintColor?: string,
|};

export default class HeaderRightButton extends React.PureComponent<Props> {
  static defaultProps = {
    pressColorAndroid: 'rgba(0, 0, 0, .32)',
    tintColor: '#fff',
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
        borderless
        useForeground={false}
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
  icon:
    Platform.OS === 'ios'
      ? {
          marginLeft: 22,
          marginRight: 10,
          marginVertical: 12,
        }
      : {
          margin: 16,
        },
});
