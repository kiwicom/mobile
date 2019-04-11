// @flow strict

import * as React from 'react';
import { View, WebView } from 'react-native';
<<<<<<< HEAD
import {
  Modal,
  TextButton,
  StyleSheet,
  Device,
  Translation,
} from '@kiwicom/mobile-shared';
=======
import { Modal, TextButton, StyleSheet, Device } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
>>>>>>> 350efaa7c78b6628bcd3fb8b52a8dade66dcb0d2
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';

import type { FastTrackModal_data } from './__generated__/FastTrackModal_data';

type Props = {|
  +documentUrl: string,
  +isVisible: boolean,
  +onCloseModal: () => void,
  +data: FastTrackModal_data,
|};

<<<<<<< HEAD
class FastTrackModal extends React.Component<Props> {
  render() {
    const props = this.props;
    return (
      <Modal
        isVisible={props.isVisible}
        onRequestClose={props.onCloseModal}
        style={styles.modal}
      >
        <View style={styles.container}>
          <WebView
            source={{
              uri: this.props.data.url,
            }}
            style={styles.webView}
          />
          <View style={styles.buttonContainer}>
            <TextButton
              onPress={props.onCloseModal}
              type="secondary"
              title={
                <Translation id="fast_track.banner.modal.close_modal_button" />
              }
            />
          </View>
        </View>
      </Modal>
    );
  }
}
=======
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
          title={
            <Translation id="fast_track.banner.modal.close_modal_button" />
          }
        />
      </View>
    </View>
  </Modal>
);
>>>>>>> 350efaa7c78b6628bcd3fb8b52a8dade66dcb0d2

export default createFragmentContainer(FastTrackModal, {
  data: graphql`
    fragment FastTrackModal_data on AncillaryDocument {
      url
    }
  `,
});

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
    backgroundColor: defaultTokens.paletteWhite,
  },
});
