// @flow strict

import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import AdaptableLayout from '../view/AdaptableLayout';
import Modal from '../Modal';
import StyleSheet from '../PlatformStyleSheet';

type Props = {|
  +children: React.Node,
  +isVisible: boolean,
  +onClose: () => void,
|};

export default class Popup extends React.Component<Props> {
  onClose = () => this.props.onClose();

  render = () => {
    const modalChild = (
      <ScrollView
        contentContainerStyle={styles.content}
        alwaysBounceVertical={false}
      >
        <SafeAreaView style={styles.safeArea}>
          {this.props.children}
        </SafeAreaView>
      </ScrollView>
    );

    return (
      <Modal
        isVisible={this.props.isVisible}
        style={styles.modal}
        backdropOpacity={0.5}
        onBackdropPress={this.onClose}
        onRequestClose={this.onClose}
      >
        <AdaptableLayout
          renderOnWide={
            <View
              style={[styles.contentContainer, styles.wideContentContainer]}
            >
              {modalChild}
            </View>
          }
          renderOnNarrow={
            <View style={styles.contentContainer}>{modalChild}</View>
          }
        />
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
    backgroundColor: defaultTokens.paletteWhite,
    alignSelf: 'center',
    width: '100%',
    maxHeight: '75%',
  },
  wideContentContainer: {
    width: '75%',
  },
  content: {
    opacity: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
