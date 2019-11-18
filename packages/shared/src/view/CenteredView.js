// @flow

import * as React from 'react';
import { View } from 'react-native';

import StyleSheet from '../PlatformStyleSheet';

type Props = {|
  +children: React.Node,
|};

/**
 * Renders 'children' in the middle of the parent container. It's centered
 * horizontally and vertically if possible...
 */
export default function CenteredView({ children }: Props) {
  return (
    <View style={styleSheet.view}>
      <View>{children}</View>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
