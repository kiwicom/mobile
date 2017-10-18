// @flow

import * as React from 'react';
import { View } from 'react-native';

type Props = {
  children: React.Node,
};

/**
 * Renders 'children' in the middle of the parent container. It's centered
 * horizontally and vertically if possible...
 */
export default function CenteredView({ children }: Props) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </View>
  );
}
