// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Translation,
  type TranslationType,
} from '@kiwicom/react-native-app-localization';

import Popup from './Popup';
import Color from '../Color';
import StyleSheet from '../PlatformStyleSheet';
import LinkButton from '../buttons/LinkButton';

type Props = {|
  buttonTitle: TranslationType,
  children: React.Node,
  isVisible: boolean,
  onClose: Function,
  onSave: Function,
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

  render = () => (
    <Popup isVisible={this.props.isVisible} onClose={this.onClose}>
      <View style={styles.bar}>
        <LinkButton
          title={<Translation id="shared.bar_popup.cancel" />}
          onPress={this.onClose}
        />
        <LinkButton title={this.props.buttonTitle} onPress={this.onSave} />
      </View>
      <View style={styles.children}>{this.props.children}</View>
    </Popup>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.grey.$100,
    paddingHorizontal: 4,
  },
  children: {
    padding: 10,
  },
});
