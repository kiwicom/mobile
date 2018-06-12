// @flow

import * as React from 'react';
import { View } from 'react-native';

import StyleSheet from '../PlatformStyleSheet';
import Device from '../Device';
import Layout from './Layout';

type Props = {|
  +children: React.Node,
|};

/**
 * This is base Layout component with default width. It can expand up to
 * portrait mode width. This means that the content is centered in
 * landscape mode.
 */
export default function LayoutSingleColumn(props: Props) {
  const innerStyle = {
    maxWidth: Device.getWideDeviceThreshold(),
  };

  return (
    <Layout>
      <View style={styleSheet.wrapper}>
        <View style={innerStyle}>{props.children}</View>
      </View>
    </Layout>
  );
}

const styleSheet = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
