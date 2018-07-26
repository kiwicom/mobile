// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Touchable,
  NetworkImage,
  StyleSheet,
  Color,
} from '@kiwicom/mobile-shared';

import GalleryButton from '../galleryButton/GalleryButton';

type Props = {|
  +thumbnailUrl: ?string,
  +photoCount: number,
  +openGallery: () => void,
|};

export default function RoomImage({
  thumbnailUrl,
  photoCount,
  openGallery,
}: Props) {
  return (
    <Touchable onPress={openGallery} disabled={thumbnailUrl == null}>
      <View>
        <NetworkImage source={{ uri: thumbnailUrl }} style={styles.thumbnail} />
        <View style={styles.galleryButton}>
          <GalleryButton
            count={photoCount}
            style={{
              container: styles.galleryButtonContainer,
              icon: styles.icon,
              text: styles.text,
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
    backgroundColor: Color.transparent.black.$30,
    borderRadius: 0,
    paddingVertical: 4,
  },
  thumbnail: {
    width: 60,
    height: 80,
    borderRadius: 2,
  },
  icon: {
    height: 10,
    width: 10,
  },
  text: {
    fontSize: 10,
  },
});
