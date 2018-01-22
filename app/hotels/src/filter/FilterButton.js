// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Button, Color } from '@kiwicom/react-native-app-common';

const styles = {
  default: {
    padding: 3,
    paddingHorizontal: 3,
  },
};

type Props = {
  title: string,
  isActive: boolean,
  onPress: () => void,
  icon?: {|
    name: string,
    color?: string,
  |},
};

export default function FilterButton(props: Props) {
  const { title, isActive, icon, onPress } = props;
  const buttonStyles = {
    button: {
      backgroundColor: isActive ? Color.grey.$800 : Color.brand,
      paddingLeft: isActive || !icon ? 10 : 0,
    },
    icon: {
      backgroundColor: isActive ? Color.grey.$700 : Color.brand,
    },
  };
  return (
    <View style={styles.default}>
      <Button
        title={title}
        onPress={onPress}
        icon={icon}
        styles={buttonStyles}
      />
    </View>
  );
}
