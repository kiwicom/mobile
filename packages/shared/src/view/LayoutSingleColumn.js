// @flow

import * as React from 'react';
import { View } from 'react-native';

import StyleSheet from '../PlatformStyleSheet';
import Device from '../Device';
import Layout, { type BarStyle } from './Layout';

type Props = {|
  +children: React.Node,
  +testID?: string,
  +barStyle?: BarStyle,
|};

/**
 * This is base Layout component with default width. It can expand up to
 * portrait mode width. This means that the content is centered in
 * landscape mode.
 */
export default function LayoutSingleColumn(props: Props) {
  const innerStyle = {
    width: '100%',
    maxWidth: Device.DEVICE_THRESHOLD,
  };

  return (
    <Layout barStyle={props.barStyle}>
      {/* $FlowFixMe Errors after moving rn modules from untyped to
       * declarations */}
      <View style={styleSheet.wrapper}>
        <View style={innerStyle} testID={props.testID}>
          {props.children}
        </View>
      </View>
    </Layout>
  );
}

LayoutSingleColumn.defaultProps = {
  barStyle: 'default',
};

const styleSheet = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
