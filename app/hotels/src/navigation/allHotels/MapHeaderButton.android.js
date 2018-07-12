// @flow

import * as React from 'react';
import { HeaderButton, Color, Icon } from '@kiwicom/mobile-shared';
import RNTooltips from 'react-native-tooltips';

type Props = {|
  +onPress: () => void,
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
        <Icon name="map" size={24} color={Color.brand} />
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
