// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, TextIcon, Touchable, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Price from './Price';

type PriceType = {|
  +amount: ?number,
  +currency: ?string,
|};

type Props = {|
  +isSelected: boolean,
  +onPress: () => void,
  +price: ?PriceType,
  +iconComponent: React.Element<typeof TextIcon>,
  +title: React.Element<typeof Translation>,
|};

export default function VariantButton(props: Props) {
  const colorTextDisabled = props.isSelected
    ? undefined
    : styleSheet.textDisabled;
  return (
    <Touchable
      onPress={props.onPress}
      style={[
        styleSheet.variantButton,
        props.isSelected ? styleSheet.variantButtonSelected : undefined,
      ]}
      disabled={props.price === undefined}
    >
      <React.Fragment>
        <View style={styleSheet.iconWrapper}>{props.iconComponent}</View>
        <View style={styleSheet.titleWrapper}>
          <Text style={[styleSheet.text, colorTextDisabled]}>
            {props.title}
          </Text>
        </View>
        <Price
          isSelected={props.isSelected}
          textDisabled={styleSheet.textDisabled}
          price={props.price}
        />
      </React.Fragment>
    </Touchable>
  );
}

const styleSheet = StyleSheet.create({
  variantButton: {
    flex: 1,
    margin: 1,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
    alignItems: 'center',
  },
  variantButtonSelected: {
    backgroundColor: defaultTokens.paletteWhite,
  },
  iconWrapper: {
    paddingVertical: 1,
  },
  titleWrapper: {
    paddingVertical: 4,
  },
  text: {
    color: defaultTokens.paletteInkNormal,
    fontSize: 15,
  },
  textDisabled: {
    color: defaultTokens.colorTextSecondary,
  },
});
