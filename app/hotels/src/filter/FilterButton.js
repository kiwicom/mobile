// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Button, Color, Icon, StyleSheet } from '@kiwicom/mobile-shared';
import type { TranslationType } from '@kiwicom/mobile-localization';

type Props = {
  title: TranslationType,
  isActive: boolean,
  onPress: () => void,
  icon?: React.Element<typeof Icon>,
};

const styles = StyleSheet.create({
  default: {
    padding: 3,
    paddingHorizontal: 3,
  },
  buttonText: {
    ios: {
      paddingTop: 9,
      paddingBottom: 11,
    },
    android: {
      paddingTop: 12,
      paddingBottom: 8,
    },
  },
});

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
    buttonText: styles.buttonText,
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
