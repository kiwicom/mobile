// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  BottomSheet as CommonBottomSheet,
  Device,
  AdaptableLayout,
  StyleSheet,
} from '@kiwicom/mobile-shared';

import { openHeight, closedHeight } from '../bottomSheetDimensions';

const styles = StyleSheet.create({
  wideContainer: {
    width: Device.getWideDeviceThreshold(),
    alignSelf: 'center',
  },
  narrowContainer: {
    width: '100%',
    alignSelf: 'center',
  },
});

type Props = {|
  children: React.Node,
|};

export default class BottomSheet extends React.Component<Props> {
  render = () => {
    const content = (
      <CommonBottomSheet openHeight={openHeight} closedHeight={closedHeight}>
        {this.props.children}
      </CommonBottomSheet>
    );

    return (
      <AdaptableLayout
        renderOnWide={<View style={styles.wideContainer}>{content}</View>}
        renderOnNarrow={<View style={styles.narrowContainer}>{content}</View>}
      />
    );
  };
}
