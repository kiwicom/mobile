// @flow strict

import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import AdaptableLayout from '../view/AdaptableLayout';
import Modal from '../Modal';
import StyleSheet from '../PlatformStyleSheet';
import Device from '../Device';

type Props = {|
  +children: React.Node,
  +isVisible: boolean,
  +onClose: () => void,
  +bottomContent?: React.Node | React.Node[],
|};

export default class Popup extends React.Component<Props> {
  onClose = () => this.props.onClose();

  render = () => {
    const modalChild = (
      <React.Fragment>
        <ScrollView alwaysBounceVertical={false}>
          {this.props.children}
        </ScrollView>
        <View style={Device.isIPhoneX && styles.safeArea}>
          {this.props.bottomContent}
        </View>
      </React.Fragment>
    );

    return (
      <AdaptableLayout
        renderOnWide={
          <Modal
            isVisible={this.props.isVisible}
            style={[styles.modal, styles.modalWide]}
            backdropOpacity={0.5}
            onBackdropPress={this.onClose}
            onRequestClose={this.onClose}
          >
            <View style={[styles.content, styles.wideContentContainer]}>
              {modalChild}
            </View>
          </Modal>
        }
        renderOnNarrow={
          <Modal
            isVisible={this.props.isVisible}
            style={styles.modal}
            backdropOpacity={0.5}
            onBackdropPress={this.onClose}
            onRequestClose={this.onClose}
          >
            <View style={styles.content}>{modalChild}</View>
          </Modal>
        }
      />
    );
  };
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalWide: {
    justifyContent: 'center',
  },
  wideContentContainer: {
    width: '75%',
    alignSelf: 'center',
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,
  },
  content: {
    justifyContent: 'flex-end',
    backgroundColor: defaultTokens.paletteWhite,
    marginTop: 20,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
  },
  safeArea: {
    paddingBottom: 36,
  },
});
