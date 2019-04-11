// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Text, Translation } from '@kiwicom/mobile-shared';

const NoAncillary = () => (
  <View>
    <Text>
      <Translation passThrough="No ancillary view found for the provided parameters." />
    </Text>
  </View>
);

export default NoAncillary;
