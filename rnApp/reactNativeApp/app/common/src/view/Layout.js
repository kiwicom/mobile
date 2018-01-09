// @flow

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Device } from '@kiwicom/react-native-app-common';

type Props = {|
  children: React.Node,
|};

/**
 * This is base Layout component with default width. It can expand up to
 * portrait mode width. This means that the content is centered in
 * landscape mode.
 */
export default function Layout({ children }: Props) {
  const defaultStyle = StyleSheet.create({
    outerWrapper: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    innerWrapper: {
      flex: 1,
      maxWidth: Math.max(Device.getLandscapeThreshold(), 750), // do it only for big devices (not mobile)
    },
  });

  return (
    <View style={defaultStyle.outerWrapper}>
      <View style={defaultStyle.innerWrapper}>{children}</View>
    </View>
  );
}
