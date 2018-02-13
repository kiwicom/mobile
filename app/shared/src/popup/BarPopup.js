// @flow

import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import Popup from './Popup';
import Color from '../Color';
import LinkButton from '../buttons/LinkButton';

type Props = {|
  buttonTitle: string,
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
          title="Cancel"
          onPress={this.onClose}
          styles={cancelLinkButtonStyles}
        />
        <LinkButton
          title={this.props.buttonTitle}
          onPress={this.onSave}
          styles={saveLinkButtonStyles}
        />
      </View>
      {this.props.children}
    </Popup>
  );
}

const saveLinkButtonStyles = StyleSheet.create({
  buttonWrapper: {
    paddingRight: 10,
    paddingLeft: 50,
  },
});

const cancelLinkButtonStyles = StyleSheet.create({
  buttonWrapper: {
    paddingRight: 50,
    paddingLeft: 10,
  },
});

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.grey.$100,
  },
});
