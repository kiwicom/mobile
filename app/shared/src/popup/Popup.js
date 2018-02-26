// @flow

import * as React from 'react';
import { View, ScrollView } from 'react-native';

import Modal from '../Modal';
import Device from '../Device';
import StyleSheet from '../PlatformStyleSheet';

type Props = {|
  children: React.Node,
  isVisible: boolean,
  onClose: () => void,
|};

export default class Popup extends React.Component<Props> {
  onClose = () => this.props.onClose();

  render = () => {
    const width = Device.isTablet()
      ? Device.getLandscapeThreshold() / 2
      : Device.getLandscapeThreshold();
    return (
      <Modal
        isVisible={this.props.isVisible}
        style={styles.modal}
        backdropOpacity={0.5}
        onBackdropPress={this.onClose}
      >
        <View style={[styles.contentContainer, { width }]}>
          <ScrollView
            contentContainerStyle={styles.content}
            alwaysBounceVertical={false}
          >
            {this.props.children}
          </ScrollView>
        </View>
      </Modal>
    );
  };
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  contentContainer: {
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  content: {
    opacity: 1,
  },
});
