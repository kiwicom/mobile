// @flow

import * as React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import type { StylePropType } from '@kiwicom/react-native-app-common';

import Color from './Color';

type Props = {|
  name: string,
  size: number,
  color?: string,
  style?: StylePropType,
|};

const defaults = {
  color: Color.grey.$600,
};

/**
 * Currently only supported package is "MaterialIcons".
 * @see https://material.io/icons/
 */
export default function Icon(props: Props) {
  const newProps = { ...defaults, ...props };
  return <MaterialIcons {...newProps} />;
}
