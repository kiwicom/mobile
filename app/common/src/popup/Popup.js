// @flow

import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Modal from '../Modal';
import Device from '../Device';

type Props = {|
  children: React.Node,
  isVisible: boolean,
  onClose: () => void,
  doScroll?: boolean,
|};

export default class Popup extends React.Component<Props> {
  onClose = () => this.props.onClose();

  render = () => (
    <Modal
      isVisible={this.props.isVisible}
      style={styles.modal}
      backdropOpacity={0.5}
      onBackdropPress={this.onClose}
    >
      <View style={styles.body}>
        <ScrollView
          contentContainerStyle={styles.content}
          scrollEnabled={this.props.doScroll !== false}
        >
          {this.props.children}
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  body: {
    alignItems: Device.isTablet() ? 'center' : 'stretch',
  },
  content: {
    opacity: 1,
    width: Device.isTablet() ? Device.getLandscapeThreshold() / 2 : 'auto',
    backgroundColor: '#fff',
  },
});
