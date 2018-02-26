// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  BottomSheet as CommonBottomSheet,
  Device,
  AdaptableLayout,
} from '@kiwicom/react-native-app-shared';

import { openHeight, closedHeight } from '../bottomSheetDimensions';

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
        renderOnWide={
          <View
            style={{
              width: Device.getWideDeviceThreshold(),
              alignSelf: 'center',
            }}
          >
            {content}
          </View>
        }
        renderOnNarrow={
          <View style={{ width: '100%', alignSelf: 'center' }}>{content}</View>
        }
      />
    );
  };
}
