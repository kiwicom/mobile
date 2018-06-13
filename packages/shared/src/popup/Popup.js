// @flow

import * as React from 'react';
import { View, ScrollView } from 'react-native';

import AdaptableLayout from '../view/AdaptableLayout';
import Color from '../Color';
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
        {this.props.children}
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
        <AdaptableLayout.Consumer
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
    backgroundColor: Color.white,
    alignSelf: 'center',
    width: '100%',
  },
  wideContentContainer: {
    width: '75%',
  },
  content: {
    opacity: 1,
  },
});
