// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  Button,
  ButtonTitle,
  StyleSheet,
  TextIcon,
} from '@kiwicom/mobile-shared';
import type { TranslationType } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +title: TranslationType,
  +isActive: boolean,
  +onPress: () => void,
  +icon?: React.Element<typeof TextIcon>,
|};

const FilterButton = ({ title, isActive, onPress, icon }: Props) => {
  const filterIcon =
    icon == null
      ? null
      : React.cloneElement(icon, {
          style: [
            styleSheet.filterIcon,
            isActive && styleSheet.filterIconActive,
          ],
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
    backgroundColor: defaultTokens.paletteCloudLight,
    marginEnd: 8,
    borderColor: defaultTokens.paletteInkLighter,
    borderWidth: StyleSheet.hairlineWidth,
    height: 30,
    borderRadius: 2,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  activeButtonText: {
    color: defaultTokens.paletteCloudNormal,
  },
  buttonText: {
    color: defaultTokens.colorTextPrimary,
    fontSize: 12,
    lineHeight: 15,
  },
  icon: {
    paddingEnd: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterIcon: {
    fontSize: 18,
    color: defaultTokens.colorIconPrimary,
  },
  filterIconActive: {
    color: defaultTokens.paletteCloudNormal,
  },
});

export default FilterButton;
