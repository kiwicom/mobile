// @flow

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@kiwicom/react-native-app-common';

import Modal from '../Modal';

type Props = {|
  children: React.Node,
  isVisible: boolean,
  onClose: () => void,
  onSave: () => void,
|};

export const POPUP_PADDING = 20;

export default class Popup extends React.Component<Props> {
  onClose = () => this.props.onClose();

  onSave = () => {
    this.props.onSave();
    this.onClose();
  };

  render = () => (
    <Modal
      isVisible={this.props.isVisible}
      style={styles.modal}
      backdropOpacity={0.5}
      onBackdropPress={this.onClose}
    >
      <View style={styles.content}>
        {this.props.children}
        <Button
          title="Save"
          styles={{ button: styles.button }}
          onPress={this.onSave}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    backgroundColor: '#fff',
    opacity: 1,
    padding: POPUP_PADDING,
  },
  button: {
    marginTop: 20,
  },
});
