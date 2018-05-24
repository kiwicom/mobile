// @flow

import * as React from 'react';
import { ActivityIndicator } from 'react-native';

import Color from '../Color';

type Props = {|
  size: 'large' | 'small',
|};

function IconLoading(props: Props) {
  return <ActivityIndicator size={props.size} color={Color.brand} />;
}

IconLoading.defaultProps = {
  size: 'small',
};

export default IconLoading;
