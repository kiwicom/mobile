// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  Color,
  Price,
  TextIcon,
  Touchable,
  Text,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

type VariantButtonProps = {|
  +isSelected: boolean,
  +onPress: () => void,
  +title: React.Element<typeof Translation>,
  +iconComponent: React.Element<typeof TextIcon>,
|};

function VariantButton(props: VariantButtonProps) {
  const iconComponent = React.cloneElement(props.iconComponent, {
    style: {
      color: props.isSelected ? Color.textMedium : Color.textLight,
      fontSize: 19,
    },
  });

  return (
    <Touchable
      onPress={props.onPress}
      style={[
        styleSheet.variantButton,
        props.isSelected ? styleSheet.variantButtonSelected : undefined,
      ]}
    >
      <React.Fragment>
        <View style={styleSheet.iconWrapper}>{iconComponent}</View>
        <Text style={props.isSelected ? undefined : styleSheet.textDisabled}>
          {props.title}
        </Text>
        <Price
          amount={-1}
          currency="WIP"
          style={props.isSelected ? undefined : styleSheet.textDisabled}
        />
      </React.Fragment>
    </Touchable>
  );
}

type Props = {|
  +isSelected: boolean,
  +onPress: () => void,
|};

export function VariantButtonNone(props: Props) {
  return (
    <VariantButton
      iconComponent={<TextIcon code=":" />}
      title={<Translation id="mmb.trip_services.insurance.variant.none" />}
      {...props}
    />
  );
}

export function VariantButtonBasic(props: Props) {
  return (
    <VariantButton
      iconComponent={<TextIcon code="'" />}
      title={<Translation id="mmb.trip_services.insurance.variant.basic" />}
      {...props}
    />
  );
}

export function VariantButtonPlus(props: Props) {
  return (
    <VariantButton
      iconComponent={<TextIcon code="'" />}
      title={<Translation id="mmb.trip_services.insurance.variant.plus" />}
      {...props}
    />
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
  textDisabled: {
    color: Color.textLight,
  },
});
