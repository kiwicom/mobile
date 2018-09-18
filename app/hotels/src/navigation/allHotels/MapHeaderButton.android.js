// @flow strict

import * as React from 'react';
import { HeaderButton } from '@kiwicom/mobile-navigation';
import { TextIcon } from '@kiwicom/mobile-shared';
import RNTooltips from 'react-native-tooltips';

type Props = {|
  +onPress: () => void,
  +icon: React.Element<typeof TextIcon>,
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

  render = () => (
    <React.Fragment>
      <HeaderButton.Right onPress={this.onPress} onLongPress={this.onLongPress}>
        {this.props.icon}
      </HeaderButton.Right>
      <RNTooltips
        text="Open map"
        visible={this.state.isTooltipVisible}
        reference={this.state.buttonReference}
        corner={100}
        tintColor="#505c5e"
        arrow={false}
        textSize={16}
        shadow={true}
        onHide={this.onTooltipClose}
      />
    </React.Fragment>
  );
}
