// @flow

import * as React from 'react';
import { HeaderButton } from '@kiwicom/mobile-navigation';
import { Color, Icon } from '@kiwicom/mobile-shared';
import RNTooltips from 'react-native-tooltips';

type Props = {|
  +onPress: () => void,
  +iconColor: string,
|};

type State = {|
  isTooltipVisible: boolean,
  buttonReference: React.ElementRef<*> | null,
|};

export default class MapHeaderButton extends React.Component<Props, State> {
  static defaultProps = {
    iconColor: Color.brand,
  };

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
        <Icon name="map" size={24} color={this.props.iconColor} />
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
