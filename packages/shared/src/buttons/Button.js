// @flow strict

import * as React from 'react';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Touchable from '../Touchable';
import StyleSheet from '../PlatformStyleSheet';
import type { StylePropType } from '../../index';

type Props = {|
  +children: React.Node,
  +onPress: () => void,
  +style?: StylePropType,
  +disabled?: boolean,
  +type: 'primary' | 'secondary',
|};

/**
 * This is base component for generic button. You can pass anything to the
 * children so you should almost never use this component directly. There
 * are specialized components like 'TextButton' or 'LinkButton' for this.
 */
export default function Button(props: Props) {
  const onPressHandler = props.onPress || (() => {});

  return (
    <Touchable
      disabled={!props.onPress || props.disabled}
      onPress={onPressHandler}
      style={[
        styleSheet.buttonWrapper,
        props.type === 'secondary' ? styleSheet.secondary : styleSheet.primary,
        props.style,
      ]}
      accessibilityComponentType="button"
    >
      {props.children}
    </Touchable>
  );
}

Button.defaultProps = {
  disabled: false,
  type: 'primary',
};

const styleSheet = StyleSheet.create({
  buttonWrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 11,
    height: 44,
    borderRadius: 6,
  },
  primary: {
    backgroundColor: defaultTokens.paletteProductNormal,
  },
  secondary: {
    backgroundColor: defaultTokens.backgroundButtonSecondary,
  },
});
