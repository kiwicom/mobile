// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Modal, Text, TextButton, StyleSheet } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +isVisible: boolean,
  +onOpenModal: () => void,
  +onCloseModal: () => void,
|};

const FastTrackModal = (props: Props) => (
  <Modal
    isVisible={props.isVisible}
    onRequestClose={props.onCloseModal}
    style={style.modal}
  >
    <View>
      <Text style={style.title}>
        <Translation passThrough="This is modal content." />
      </Text>
      <TextButton
        onPress={props.onCloseModal}
        type="secondary"
        title={<Translation passThrough="Close modal" />}
      />
    </View>
  </Modal>
);

export default FastTrackModal;

const style = StyleSheet.create({
  title: {
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: defaultTokens.colorTextPrimary,
  },
  modal: {
    margin: 0,
  },
});
