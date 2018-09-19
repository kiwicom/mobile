// @flow srict

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Text from '../Text';
import TextIcon from '../icons/TextIcon';
import Touchable from '../Touchable';
import StyleSheet from '../PlatformStyleSheet';
import type { StylePropType } from '../../types/Styles';

type ButtonProps = {|
  +icon: React.Element<typeof TextIcon>,
  +touchable: boolean,
  +onPress: () => void,
  +style?: StylePropType,
|};

const Button = ({ icon, touchable, onPress }: ButtonProps) => {
  const inner = (
    <View style={[styles.button, touchable ? null : styles.buttonDisabled]}>
      {icon}
    </View>
  );

  if (touchable) {
    return <Touchable onPress={onPress}>{inner}</Touchable>;
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
|};

export default function IncrementDecrementButtons(props: Props) {
  const disableDecrement = props.number === props.min;
  const disableIncrement = props.number === props.max;

  return (
    <View style={styles.row}>
      <Button
        icon={<TextIcon code="&#xe118;" orbit={true} style={styles.icon} />}
        touchable={!disableDecrement}
        onPress={props.onDecrement}
      />
      {props.showNumber && (
        <Text style={props.numberStyle}>
          <Translation passThrough={props.number} />
        </Text>
      )}
      <Button
        icon={<TextIcon code="&#xe122;" orbit={true} style={styles.icon} />}
        touchable={!disableIncrement}
        onPress={props.onIncrement}
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
  icon: {
    color: defaultTokens.colorIconSecondary,
    fontSize: 14,
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
