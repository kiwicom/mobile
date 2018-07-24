// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  Color,
  TextIcon,
  Touchable,
  Text,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

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
  const textIcon = React.cloneElement(props.iconComponent, {
    style: [styleSheet.iconStyle, colorTextDisabled],
  });
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
        <View style={styleSheet.iconWrapper}>{textIcon}</View>
        <Text style={colorTextDisabled}>{props.title}</Text>
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
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  variantButtonSelected: {
    backgroundColor: Color.white,
  },
  iconWrapper: {
    marginBottom: 7,
  },
  iconStyle: {
    color: Color.textMedium,
    fontSize: 19,
  },
  textDisabled: {
    color: Color.textLight,
  },
});
