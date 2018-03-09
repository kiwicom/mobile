// @flow

import * as React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import type { StylePropType } from '@kiwicom/react-native-app-shared';

import Color from '../Color';

type Props = {|
  name: string,
  size: number,
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
  color: Color.grey.$600,
};

export default Icon;
