// @flow

import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Modal from '../Modal';
import Device from '../Device';

type Props = {|
  children: React.Node,
  isVisible: boolean,
  onClose: () => void,
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
      <View style={styles.contentContainer}>
        <ScrollView
          contentContainerStyle={styles.content}
          alwaysBounceVertical={false}
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
  contentContainer: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: Device.isTablet()
      ? Device.getLandscapeThreshold() / 2
      : Device.getLandscapeThreshold(),
  },
  content: {
    opacity: 1,
  },
});
