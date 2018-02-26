// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Dimensions } from 'react-native';
import {
  BottomSheet as CommonBottomSheet,
  Device,
} from '@kiwicom/react-native-app-shared';

import { getWidth, openHeight, closedHeight } from '../bottomSheetDimensions';

type Props = {|
  children: React.Node,
|};

type State = {|
  screenWidth: number,
|};

export default class BottomSheet extends React.Component<Props, State> {
  isTablet: boolean;

  constructor(props: Props) {
    super(props);
    this.isTablet = Device.isTablet();

    this.state = {
      screenWidth: Device.getDimensions().width,
    };
  }

  componentDidMount = () => {
    Dimensions.addEventListener('change', this.onDimensionsChanged);
  };

  componentWillUnmount = () => {
    Dimensions.removeEventListener('change', this.onDimensionsChanged);
  };

  onDimensionsChanged = () => {
    const { width } = Device.getDimensions();
    this.setState({ screenWidth: width });
  };

  getWidth = () => getWidth(Device.getDimensions().width, Device.isTablet());

  render = () => {
    const { children } = this.props;

    return (
      <View style={{ width: this.getWidth(), alignSelf: 'center' }}>
        <CommonBottomSheet openHeight={openHeight} closedHeight={closedHeight}>
          {children}
        </CommonBottomSheet>
      </View>
    );
  };
}
