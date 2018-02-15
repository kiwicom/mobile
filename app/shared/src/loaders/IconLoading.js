// @flow

import * as React from 'react';
import { ActivityIndicator } from 'react-native';

import Color from '../Color';

export default function IconLoading() {
  return <ActivityIndicator color={Color.brand} />;
}
