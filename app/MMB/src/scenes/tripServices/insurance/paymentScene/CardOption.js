// @flow

import * as React from 'react';
import { View, TouchableWithoutFeedback, Image } from 'react-native';
import { type TranslationType } from '@kiwicom/mobile-localization';
import { TextIcon, StyleSheet, Text } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +isActive: boolean,
  +onPress: () => void,
  +cardOption: TranslationType,
  +leftIcon: React.Element<typeof TextIcon | typeof Image>,
|};

export default function CardOption(props: Props) {
  const leftIconStyle =
    props.leftIcon.type.displayName === 'Image'
      ? styles.leftImageStyle
      : styles.leftIconStyle;

  const leftIcon = React.cloneElement(props.leftIcon, { style: leftIconStyle });

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View
        style={[
          styles.cardWrapper,
          styles.row,
          props.isActive && styles.cardActive,
        ]}
      >
        <View style={styles.row}>
          <View style={styles.leftIconContainer}>{leftIcon}</View>
          <Text style={styles.cardOption}>{props.cardOption}</Text>
        </View>

        {props.isActive && (
          <TextIcon code="&#xe01e;" style={styles.checkedIcon} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    borderRadius: 6,
    borderColor: defaultTokens.paletteCloudNormal,
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    android: {
      elevation: 1,
      height: 38,
    },
    ios: {
      height: 37,
    },
    justifyContent: 'space-between',
  },
  cardActive: {
    borderColor: defaultTokens.paletteProductNormal,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardOption: {
    fontWeight: '600',
  },
  checkedIcon: {
    color: defaultTokens.paletteProductNormal,
  },
  leftIconContainer: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 5,
  },
  leftIconStyle: {
    fontSize: 10,
    color: defaultTokens.paletteInkNormal,
  },
  leftImageStyle: {
    width: 30,
    flex: 1,
  },
});
