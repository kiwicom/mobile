// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Button, ButtonTitle, Icon, StyleSheet } from '@kiwicom/mobile-shared';
import type { TranslationType } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +title: TranslationType,
  +isActive: boolean,
  +onPress: () => void,
  +icon?: React.Element<typeof Icon>,
|};

const FilterButton = ({ title, isActive, onPress, icon }: Props) => {
  const iconColor = defaultTokens.colorIconPrimary;
  const iconColorActive = defaultTokens.paletteCloudNormal;

  const filterIcon =
    icon == null
      ? null
      : React.cloneElement(icon, {
          color: isActive ? iconColorActive : iconColor,
        });

  return (
    <Button
      onPress={onPress}
      style={[styleSheet.buttonGroup, isActive && styleSheet.activeButtonGroup]}
    >
      <View style={styleSheet.row}>
        <View style={styleSheet.icon}>{filterIcon}</View>
        <ButtonTitle
          text={title}
          style={[
            styleSheet.buttonText,
            isActive && styleSheet.activeButtonText,
          ]}
        />
      </View>
    </Button>
  );
};

const styleSheet = StyleSheet.create({
  activeButtonGroup: {
    backgroundColor: defaultTokens.paletteInkNormal,
  },
  buttonGroup: {
    backgroundColor: defaultTokens.backgroundBody,
    marginEnd: 5,
    borderColor: defaultTokens.borderColorCard,
    borderWidth: StyleSheet.hairlineWidth,
    ios: {
      height: 36,
      borderRadius: 2,
    },
  },
  activeButtonText: {
    color: defaultTokens.paletteCloudNormal,
  },
  buttonText: {
    color: defaultTokens.colorTextPrimary,
  },
  icon: {
    paddingEnd: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default FilterButton;
