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
|};

const FilterButton = ({ title, isActive, onPress }: Props) => {
  return (
    <Button
      onPress={onPress}
      style={[styleSheet.buttonGroup, isActive && styleSheet.activeButtonGroup]}
    >
      <View style={styleSheet.row}>
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
