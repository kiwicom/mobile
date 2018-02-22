// @flow

import * as React from 'react';

import Text from '../Text';
import StyleSheet from '../PlatformStyleSheet';

type Props = {|
  children: React.Node,
|};

export default function LargeText({ children }: Props): React.Node {
  return <Text style={style.largeText}>{children}</Text>;
}

const style = StyleSheet.create({
  largeText: {
    fontSize: 20,
  },
});
