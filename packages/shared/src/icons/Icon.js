// @flow strict

import * as React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import type { StylePropType } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +name: string,
  +size: number,
  color?: string,
  style?: StylePropType,
|};

/**
 * Currently only supported package is "MaterialIcons".
 * @see https://material.io/icons/
 */
function Icon(props: Props) {
  return <MaterialIcons {...props} />;
}

Icon.defaultProps = {
  color: defaultTokens.colorIconSecondary,
};

export default Icon;
