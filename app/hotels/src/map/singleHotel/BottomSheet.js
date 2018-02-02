// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Dimensions } from 'react-native';
import {
  BottomSheet as CommonBottomSheet,
  Device,
  type OnDimensionsChange,
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
      screenWidth: Dimensions.get('screen').width,
    };
  }

  componentDidMount = () => {
    Dimensions.addEventListener('change', this.onDimensionsChanged);
  };

  componentWillUnmount = () => {
    Dimensions.removeEventListener('change', this.onDimensionsChanged);
  };

  onDimensionsChanged = ({ screen: { width } }: OnDimensionsChange) => {
    this.setState({ screenWidth: width });
  };

  getWidth = () => getWidth(this.state.screenWidth, this.isTablet);

  render = () => {
    const { children } = this.props;

    return (
      <View style={{ width: this.getWidth() }}>
        <CommonBottomSheet openHeight={openHeight} closedHeight={closedHeight}>
          {children}
        </CommonBottomSheet>
      </View>
    );
  };
}
