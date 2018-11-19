// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import OfflineImage from './offline.png';
import StyleSheet from '../PlatformStyleSheet';
import Image from '../image/StretchedImage';
import Text from '../Text';
import TextButton from '../buttons/TextButton';
import CloseButton from '../buttons/CloseButton';

type Props = {|
  +onTryAgain: () => void,
  +onClose: () => void,
|};

export default function OfflineScreen(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Translation id="shared.offline_screen.offline_title" />
      </Text>
      <Text style={styles.text}>
        <Translation id="shared_offline_screen.offline_text" />
      </Text>
      <View style={styles.imageContainer}>
        <Image source={OfflineImage} />
      </View>
      <View style={styles.buttonContainer}>
        <CloseButton onPress={props.onClose} style={styles.closeButton} />
        <TextButton
          title={<Translation id="shared_offline_screen.try_again" />}
          onPress={props.onTryAgain}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageContainer: {
    height: 163,
    width: '100%',
  },
  title: {
    fontWeight: '500',
    color: defaultTokens.colorTextAttention,
  },
  text: {
    color: defaultTokens.colorTextSecondary,
    textAlign: 'center',
    marginHorizontal: 32,
    marginTop: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-between',
  },
  closeButton: {
    marginEnd: 8,
  },
});
