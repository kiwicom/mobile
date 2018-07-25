// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import { TextIcon, Color, StyleSheet } from '@kiwicom/mobile-shared';
import { HeaderButton } from '@kiwicom/mobile-navigation';

export default function ShareButton({ onPress }: {| +onPress: () => void |}) {
  return (
    <HeaderButton.Right onPress={onPress}>
      {Platform.select({
        ios: <TextIcon code="&#xe083;" style={styles.icon} />,
        android: <TextIcon code="&#xe068;" style={styles.icon} />,
      })}
    </HeaderButton.Right>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 21,
    color: Color.brand,
    alignSelf: 'flex-start',
  },
});
