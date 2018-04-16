// @flow

import * as React from 'react';
import { HeaderRightButton } from '@kiwicom/mobile-shared';
import RNTooltips from 'react-native-tooltips';

type Props = {|
  onPress: () => void,
|};

type State = {|
  isTooltipVisible: boolean,
  buttonReference: React.ElementRef<*> | null,
|};

export default class MapHeaderButton extends React.Component<Props, State> {
  state = {
    isTooltipVisible: false,
    buttonReference: null,
  };

  onPress = () => {
    this.onTooltipClose();
    this.props.onPress();
  };

  onLongPress = (buttonReference: React.ElementRef<*>) => {
    this.setState({
      isTooltipVisible: true,
      buttonReference,
    });
  };

  onTooltipClose = () => {
    this.setState({
      isTooltipVisible: false,
      buttonReference: null,
    });
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
      reference={this.state.buttonReference}
      corner={100}
      tintColor="#505c5e"
      arrow={false}
      textSize={16}
      shadow={true}
      onHide={this.onTooltipClose}
    />,
  ];
}
