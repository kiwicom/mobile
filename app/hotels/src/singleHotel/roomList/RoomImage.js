// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Touchable, NetworkImage, StyleSheet } from '@kiwicom/mobile-shared';

import GalleryButton from '../galleryButton/GalleryButton';

type Props = {|
  +thumbnailUrl: ?string,
  +openGallery: () => void,
|};

export default function RoomImage({ thumbnailUrl, openGallery }: Props) {
  return (
    <Touchable
      onPress={openGallery}
      disabled={thumbnailUrl == null}
      delayPressIn={40}
    >
      <View>
        <NetworkImage source={{ uri: thumbnailUrl }} style={styles.thumbnail} />
        <View style={styles.galleryButton}>
          <GalleryButton
            count={null}
            style={{
              container: styles.galleryButtonContainer,
              icon: styles.icon,
            }}
          />
        </View>
      </View>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  galleryButton: {
    position: 'absolute',
    bottom: 0,
    end: 0,
    start: 0,
  },
  galleryButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
  },
  thumbnail: {
    width: 60,
    height: 80,
    borderRadius: 3,
  },
  icon: {
    fontSize: 16,
  },
});
