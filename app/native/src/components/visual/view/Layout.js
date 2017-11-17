// @flow

import * as React from 'react';
import { View } from 'react-native';

type Props = {|
  children: React.Node,
  style?: Object,
|};

/**
 * This is base Layout component with default padding.
 */
export default function Layout({ children, style }: Props) {
  return (
    <View
      style={[
        {
          padding: 15,
          paddingBottom: 0,
          flex: 1,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
