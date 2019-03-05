// @flow strict

import * as React from 'react';
import { View, Text } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';

const NoAncillary = () => (
  <View>
    <Text>
      <Translation passThrough="No ancillary view found for the provided parameters." />
    </Text>
  </View>
);

export default NoAncillary;
