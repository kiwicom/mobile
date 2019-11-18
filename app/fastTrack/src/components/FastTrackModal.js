// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  Modal,
  TextButton,
  StyleSheet,
  Device,
  Translation,
  WebView,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';

import type { FastTrackModal_data as AttachmentUrl } from './__generated__/FastTrackModal_data.graphql';

type Props = {|
  +isVisible: boolean,
  +onCloseModal: () => void,
  +data: ?AttachmentUrl,
|};

class FastTrackModal extends React.Component<Props> {
  render() {
    const props = this.props;
    return (
      <Modal isVisible={props.isVisible} onRequestClose={props.onCloseModal} style={styles.modal}>
        {/* $FlowFixMe Errors after moving rn modules from untyped to
         * declarations */}
        <View style={styles.container}>
          <WebView
            source={{
              uri: this.props.data?.url ?? '',
            }}
          />
          {/* $FlowFixMe Errors after moving rn modules from untyped to
           * declarations */}
          <View style={styles.buttonContainer}>
            <TextButton
              onPress={props.onCloseModal}
              type="secondary"
              title={
                <Translation id="mmb.fast_track.banner.close_modal_button.bergamo.bergamo_stopover" />
              }
            />
          </View>
        </View>
      </Modal>
    );
  }
}

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
  buttonContainer: {
    paddingHorizontal: Device.isIPhoneX ? 16 : 8,
    paddingBottom: Device.isIPhoneX ? 32 : 8,
  },
  modal: {
    margin: 0,
    backgroundColor: defaultTokens.paletteWhite,
  },
});
