// @flow strict

import * as React from 'react';
import { View, WebView } from 'react-native';
import { Modal, TextButton, StyleSheet, Device } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

type Props = {|
  +documentUrl: string,
  +isVisible: boolean,
  +onCloseModal: () => void,
|};

const FastTrackModal = (props: Props) => (
  <Modal
    isVisible={props.isVisible}
    onRequestClose={props.onCloseModal}
    style={styles.modal}
  >
    <View style={styles.container}>
      <WebView
        source={{
          uri: props.documentUrl,
        }}
        style={styles.webView}
      />
      <View style={styles.buttonContainer}>
        <TextButton
          onPress={props.onCloseModal}
          type="secondary"
          title={<Translation passThrough="Close modal" />}
        />
      </View>
    </View>
  </Modal>
);

export default FastTrackModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Device.isIPhoneX ? 32 : 24,
  },
  webView: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    paddingHorizontal: Device.isIPhoneX ? 16 : 8,
    paddingBottom: Device.isIPhoneX ? 32 : 8,
  },
  modal: {
    margin: 0,
    backgroundColor: 'white',
  },
});
