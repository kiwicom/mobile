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
  scrollView: ?React$ElementRef<ScrollView>;

  constructor() {
    super();

    this.scrollView = null;
  }

  onClose = () => this.props.onClose();

  scrollToEnd = () => {
    if (this.scrollView) {
      this.scrollView.scrollToEnd({ animated: true });
    }
  };

  saveRef = (ref: React$ElementRef<ScrollView>): void =>
    (this.scrollView = ref);

  render = () => {
    const modalChild = (
      <ScrollView
        contentContainerStyle={styles.content}
        alwaysBounceVertical={false}
        ref={this.saveRef}
        onContentSizeChange={this.scrollToEnd}
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
    maxHeight: '95%',
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
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
