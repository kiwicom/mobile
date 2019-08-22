// @flow strict

import * as React from 'react';
import { View, Platform } from 'react-native';
import { Translation } from '@kiwicom/mobile-shared';

export default function TodoScreen() {
  const navigationInfo = Platform.select({
    ios: 'Please swipe to navigate back',
    android: 'Please use android back button to navigate back',
  });
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Translation passThrough="This screen is under development" />
      <Translation passThrough={navigationInfo} />
    </View>
  );
}
