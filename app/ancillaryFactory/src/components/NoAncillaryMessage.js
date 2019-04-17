// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-shared';

const NoAncillary = () => (
  <View>
    <Translation passThrough="No ancillary view found for the provided parameters." />
  </View>
);

export default NoAncillary;
