// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Button, Color, Icon } from '@kiwicom/react-native-app-shared';

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
  icon?: React.Element<typeof Icon>,
};

export default function FilterButton(props: Props) {
  const { title, isActive, icon, onPress } = props;
  const buttonStyles = {
    buttonWrapper: {
      backgroundColor: Color.brand,
    },
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
