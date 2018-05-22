// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { Button, Color, Icon, StyleSheet } from '@kiwicom/mobile-shared';
import type { TranslationType } from '@kiwicom/mobile-localization';

type Props = {
  title: TranslationType,
  isActive: boolean,
  onPress: () => void,
  icon?: React.Element<typeof Icon>,
};

export default function FilterButton(props: Props) {
  let icon = props.icon;
  const { title, isActive, onPress } = props;
  const buttonStyles = createButtonStyles(isActive, icon);

  if (icon) {
    icon = React.cloneElement(icon, {
      color: isActive ? Color.white : Color.brand,
    });
  }

  return (
    <View style={filterButtonStyles.wrapper}>
      <Button
        title={title}
        onPress={onPress}
        icon={icon}
        styles={buttonStyles}
      />
    </View>
  );
}

const filterButtonStyles = StyleSheet.create({
  wrapper: {
    padding: 3,
    paddingHorizontal: 3,
  },
});

function createButtonStyles(isActive: boolean, icon) {
  return {
    icon: {
      backgroundColor: isActive ? Color.brand : Color.brandLight,
    },
    buttonWrapper: {
      backgroundColor: Color.brand,
    },
    button: {
      backgroundColor: isActive ? Color.brand : Color.brandLight,
      paddingLeft: isActive || !icon ? 10 : 0,
    },
    buttonText: {
      color: isActive ? Color.white : Color.brand,
      paddingTop: Platform.select({
        android: 12,
        ios: 9,
      }),
      paddingBottom: Platform.select({
        android: 8,
        ios: 11,
      }),
    },
  };
}
