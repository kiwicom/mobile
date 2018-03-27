// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Touchable,
  NetworkImage,
  StyleSheet,
} from '@kiwicom/react-native-app-shared';

import GalleryButton from '../galleryButton/GalleryButton';

const styles = StyleSheet.create({
  galleryButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  galleryButtonContainer: {
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  thumbnail: {
    width: 60,
    height: 80,
    borderRadius: 2,
  },
});

type Props = {|
  thumbnailUrl: ?string,
  photoCount: number,
  openGallery: () => void,
|};

export default function RoomImage({
  thumbnailUrl,
  photoCount,
  openGallery,
}: Props) {
  return (
    <Touchable onPress={openGallery}>
      <View>
        <NetworkImage source={{ uri: thumbnailUrl }} style={styles.thumbnail} />
        <View style={styles.galleryButton}>
          <GalleryButton
            count={photoCount}
            style={{ container: styles.galleryButtonContainer }}
          />
        </View>
      </View>
    </Touchable>
  );
}
