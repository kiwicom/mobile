// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Button,
  Text,
  StyleSheet,
  Icon,
  type TranslationType,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +title: React.Element<(any) => TranslationType> | TranslationType,
  +isActive: boolean,
  +onPress: () => void,
  +icon?: React.Element<typeof Icon>,
|};

const FilterButton = ({ title, isActive, onPress, icon }: Props) => {
  const filterIcon =
    icon == null
      ? null
      : React.cloneElement(icon, {
          size: 'small',
          color: isActive
            ? defaultTokens.paletteCloudNormal
            : defaultTokens.colorIconPrimary,
        });

  return (
    <Button
      onPress={onPress}
      style={[styleSheet.buttonGroup, isActive && styleSheet.activeButtonGroup]}
    >
      <View style={styleSheet.row}>
        <View style={styleSheet.icon}>{filterIcon}</View>
        <Text
          style={[
            styleSheet.buttonText,
            isActive && styleSheet.activeButtonText,
          ]}
        >
          {title}
        </Text>
        {isActive && (
          <View style={styleSheet.closeWrapper} testID="closeWrapper">
            <Icon
              name="close"
              size="small"
              color={defaultTokens.paletteWhite}
            />
          </View>
        )}
      </View>
    </Button>
  );
};

const styleSheet = StyleSheet.create({
  activeButtonGroup: {
    backgroundColor: defaultTokens.backgroundButtonInfo,
  },
  buttonGroup: {
    backgroundColor: defaultTokens.paletteCloudNormal,
    marginEnd: 8,
    height: 32,
    borderRadius: parseInt(defaultTokens.borderRadiusSmall, 10),
    paddingHorizontal: 10,
  },
  activeButtonText: {
    color: defaultTokens.paletteWhite,
  },
  buttonText: {
    color: defaultTokens.colorTextPrimary,
    fontSize: parseInt(defaultTokens.fontSizeTextSmall, 10),
    lineHeight: 17,
  },
  icon: {
    paddingEnd: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeWrapper: {
    backgroundColor: defaultTokens.backgroundButtonInfoActive,
    width: 32,
    height: 32,
    borderTopEndRadius: parseInt(defaultTokens.borderRadiusSmall, 10),
    borderBottomEndRadius: parseInt(defaultTokens.borderRadiusSmall, 10),
    marginEnd: -10,
    marginStart: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FilterButton;
