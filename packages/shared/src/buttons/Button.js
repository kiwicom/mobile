// @flow strict

import * as React from 'react';

import Color from '../Color';
import Touchable from '../Touchable';
import StyleSheet from '../PlatformStyleSheet';
import type { StylePropType } from '../../index';

type Props = {|
  +children: React.Node,
  +onPress: () => *,
  +style?: StylePropType,
  +disabled?: boolean,
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
      style={[styleSheet.buttonWrapper, props.style]}
      accessibilityComponentType="button"
    >
      {props.children}
    </Touchable>
  );
}

Button.defaultProps = {
  disabled: false,
};

const styleSheet = StyleSheet.create({
  buttonWrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 11,
    borderRadius: 2,
    backgroundColor: Color.brand,
    android: {
      height: 40,
    },
    ios: {
      height: 36,
    },
  },
});
