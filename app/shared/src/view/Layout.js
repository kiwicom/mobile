// @flow

import * as React from 'react';
import { View, StatusBar } from 'react-native';

import StyleSheet from '../PlatformStyleSheet';
import Device from '../Device';

type Props = {|
  children: React.Node,
|};

const createStyles = () => {
  const styles: Object = {
    outerWrapper: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    innerWrapper: {
      flex: 1,
    },
  };

  if (Device.isWideLayout()) {
    styles.innerWrapper.maxWidth = Device.getWideDeviceThreshold();
  }
  return StyleSheet.create(styles);
};

/**
 * This is base Layout component with default width. It can expand up to
 * portrait mode width. This means that the content is centered in
 * landscape mode.
 */
export default function Layout({ children }: Props) {
  const defaultStyle = createStyles();
  return (
    <View style={defaultStyle.outerWrapper}>
      <StatusBar
        animated={true}
        translucent={true}
        backgroundColor="rgba(0, 0, 0, 0.3)"
      />
      <View style={defaultStyle.innerWrapper}>{children}</View>
    </View>
  );
}
