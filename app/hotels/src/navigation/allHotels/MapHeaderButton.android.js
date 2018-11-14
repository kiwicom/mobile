// @flow strict

import * as React from 'react';
import { HeaderButton } from '@kiwicom/mobile-navigation';
import { TextIcon } from '@kiwicom/mobile-shared';
import {
  Tooltips,
  type TooltipsTranslationType,
} from '@kiwicom/mobile-localization';

type Props = {|
  +onPress: () => void,
  +icon: React.Element<typeof TextIcon>,
  +text: TooltipsTranslationType,
  +testID?: string,
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

  render() {
    return (
      <React.Fragment>
        <HeaderButton.Right
          onPress={this.onPress}
          onLongPress={this.onLongPress}
          testID={this.props.testID}
        >
          {this.props.icon}
        </HeaderButton.Right>
        <Tooltips
          text={this.props.text}
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
}
