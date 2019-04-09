// @flow srict

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Translation from '../Translation';
import Text from '../Text';
import Icon from '../icons/Icon';
import Touchable from '../Touchable';
import StyleSheet from '../PlatformStyleSheet';
import type { StylePropType } from '../../types/Styles';

type ButtonProps = {|
  +icon: React.Element<typeof Icon>,
  +touchable: boolean,
  +onPress: () => void,
  +style?: StylePropType,
  +testID?: string,
|};

const Button = ({ icon, touchable, onPress, testID }: ButtonProps) => {
  const inner = (
    <View style={[styles.button, touchable ? null : styles.buttonDisabled]}>
      {icon}
    </View>
  );

  if (touchable) {
    return (
      <Touchable testID={testID} onPress={onPress}>
        {inner}
      </Touchable>
    );
  }

  return inner;
};

type Props = {|
  +onIncrement: () => void,
  +onDecrement: () => void,
  +number: number,
  +showNumber: boolean,
  +numberStyle?: StylePropType,
  +min?: number,
  +max?: number,
  +disableDecrement?: boolean,
  +disableIncrement?: boolean,
  +plusButtonTestID?: string,
|};

export default function IncrementDecrementButtons(props: Props) {
  const disableDecrement = props.number === props.min || props.disableDecrement;
  const disableIncrement = props.number === props.max || props.disableIncrement;

  return (
    <View style={styles.row}>
      <Button
        icon={
          <Icon
            name="minus"
            color={defaultTokens.colorIconSecondary}
            fontSize={14}
          />
        }
        touchable={!disableDecrement}
        onPress={props.onDecrement}
      />
      {props.showNumber && (
        <Text style={props.numberStyle}>
          <Translation passThrough={props.number} />
        </Text>
      )}
      <Button
        icon={
          <Icon
            name="plus"
            color={defaultTokens.colorIconSecondary}
            fontSize={14}
          />
        }
        touchable={!disableIncrement}
        onPress={props.onIncrement}
        testID={props.plusButtonTestID}
      />
    </View>
  );
}

IncrementDecrementButtons.defaultProps = {
  showNumber: false,
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: defaultTokens.paletteCloudNormal,
  },
  buttonDisabled: {
    opacity: parseFloat(defaultTokens.opacityButtonDisabled),
  },
});
