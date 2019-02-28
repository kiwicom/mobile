// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { SafeAreaView } from 'react-navigation';

import OfflineImage from './offline.png';
import StyleSheet from '../PlatformStyleSheet';
import Image from '../image/StretchedImage';
import Text from '../Text';
import TextButton from '../buttons/TextButton';
import CloseButton from '../buttons/CloseButton';

type Props = {|
  +onTryAgain: () => void,
  +onClose?: () => void,
|};

export default function OfflineScreen(props: Props) {
  return (
    <SafeAreaView style={styles.flexItem}>
      <View style={styles.container}>
        <View style={styles.flexItem} />
        <View style={styles.flexItem}>
          <Text style={styles.title}>
            <Translation id="shared.offline_screen.offline_title" />
          </Text>
          <Text style={styles.text}>
            <Translation id="shared_offline_screen.offline_text" />
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={OfflineImage} />
        </View>
        <View style={styles.buttonContainer}>
          {props.onClose != null && (
            <View style={styles.closeButton}>
              <CloseButton onPress={props.onClose} />
            </View>
          )}
          <TextButton
            title={<Translation id="shared_offline_screen.try_again" />}
            onPress={props.onTryAgain}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flexItem: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageContainer: {
    height: 163,
    width: '100%',
    marginBottom: 40,
    paddingHorizontal: 22,
  },
  title: {
    fontWeight: '500',
    color: defaultTokens.colorTextAttention,
    textAlign: 'center',
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
