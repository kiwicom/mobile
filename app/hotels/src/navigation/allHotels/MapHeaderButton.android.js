// @flow strict

import * as React from 'react';
import { HeaderButton } from '@kiwicom/mobile-navigation';
import { Icon, Text, StyleSheet } from '@kiwicom/mobile-shared';
import { type TranslationType } from '@kiwicom/mobile-localization';
import { Tooltip } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +onPress: () => void,
  +icon: React.Element<typeof Icon>,
  +text: TranslationType,
  +testID?: string,
|};

type State = {|
  isTooltipVisible: boolean,
|};

export default class MapHeaderButton extends React.Component<Props, State> {
  state = {
    isTooltipVisible: false,
  };

  onPress = () => {
    this.onTooltipClose();
    this.props.onPress();
  };

  onLongPress = () => {
    this.setState(
      {
        isTooltipVisible: true,
      },
      () => {
        setTimeout(this.onTooltipClose, 3000);
      },
    );
  };

  onTooltipClose = () => {
    this.setState({
      isTooltipVisible: false,
    });
  };

  render() {
    return (
      <Tooltip
        /* $FlowExpectedError: Flow type is to strict, no error with text component though */
        text={<Text style={styles.tooltipText}>{this.props.text}</Text>}
        isActive={this.state.isTooltipVisible}
      >
        <HeaderButton.Right
          onPress={this.onPress}
          onLongPress={this.onLongPress}
          testID={this.props.testID}
        >
          {this.props.icon}
        </HeaderButton.Right>
      </Tooltip>
    );
  }
}

const styles = StyleSheet.create({
  tooltipText: {
    color: defaultTokens.paletteWhite,
  },
});
