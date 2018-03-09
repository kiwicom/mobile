// @flow

import * as React from 'react';
import { HeaderRightButton } from '@kiwicom/react-native-app-shared';
import RNTooltips from 'react-native-tooltips';

type Props = {|
  onPress: () => void,
|};

type State = {|
  isTooltipVisible: boolean,
  tooltipReference: React.Element<*> | null,
|};

export default class MapHeaderButton extends React.Component<Props, State> {
  state = {
    isTooltipVisible: false,
    tooltipReference: null,
  };

  onPress = () => {
    this.onTooltipClose();
    this.props.onPress();
  };

  onLongPress = (tooltipReference: React.Element<*>) => {
    this.setState({
      isTooltipVisible: true,
      tooltipReference,
    });
  };

  onTooltipClose = () => {
    this.setState({ isTooltipVisible: false, tooltipReference: null });
  };

  render = () => [
    <HeaderRightButton
      key="header-right-button"
      onPress={this.onPress}
      onLongPress={this.onLongPress}
    />,
    <RNTooltips
      key="header-right-button-tooltip"
      text="Open map"
      visible={this.state.isTooltipVisible}
      reference={this.state.tooltipReference}
      corner={100}
      tintColor="#505c5e"
      arrow={false}
      textSize={16}
      shadow
      onHide={this.onTooltipClose}
    />,
  ];
}
