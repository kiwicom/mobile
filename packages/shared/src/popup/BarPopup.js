// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Translation,
  type TranslationType,
} from '@kiwicom/mobile-localization';

import Popup from './Popup';
import StyleSheet from '../PlatformStyleSheet';
import LinkButton from '../buttons/LinkButton';

type Props = {|
  +buttonTitle: TranslationType,
  +children: React.Node,
  +isVisible: boolean,
  +onClose: Function,
  +onSave: Function,
|};

/**
 * Simple popup with small bar at the top with cancel and [custom title] button.
 */
export default class BarPopup extends React.Component<Props> {
  onClose = () => this.props.onClose();

  onSave = () => {
    this.props.onSave();
    this.onClose();
  };

  render() {
    return (
      <Popup isVisible={this.props.isVisible} onClose={this.onClose}>
        <View style={styleSheet.bar}>
          <View style={styleSheet.leftButton}>
            <LinkButton
              title={<Translation id="shared.bar_popup.cancel" />}
              onPress={this.onClose}
            />
          </View>

          <View style={styleSheet.rightButton}>
            <LinkButton title={this.props.buttonTitle} onPress={this.onSave} />
          </View>
        </View>
        <View style={styleSheet.children}>{this.props.children}</View>
      </Popup>
    );
  }
}

const styleSheet = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  children: {
    padding: 10,
  },
  leftButton: {
    flexShrink: 1,
  },
  rightButton: {
    flexShrink: 1,
  },
});
