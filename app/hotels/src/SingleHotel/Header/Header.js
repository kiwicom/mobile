// @flow
import * as React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import GalleryButton from '../GalleryButton/GalleryButton';
import { StretchedImage } from '@kiwicom/react-native-app-common';
import gradient from './black-to-alpha-vertical.png';

import type { HeaderContainer_hotel } from './HeaderContainer';
import type { Image as GalleryGridImage } from '../../gallery/GalleryGrid';

const height = 150;

const styles = StyleSheet.create({
  picture: {
    height: height,
  },
  galleryButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  nameAndRatingContainer: {
    height: height,
    marginTop: -height,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  nameAndRating: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
  },
  hotelName: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 18,
    letterSpacing: -0.45,
    color: '#ffffff',
  },
  rating: {
    backgroundColor: 'transparent',
    fontSize: 12,
    color: '#ffffff',
  },
});

export type Props = {
  hotel: HeaderContainer_hotel,
  openGallery: (hotelName: string, images: GalleryGridImage[]) => void,
};

export default class Header extends React.Component<Props> {
  openGallery = () => {
    const { hotel: { name, pictures }, openGallery } = this.props;
    const images = pictures.map(({ lowRes, highRes }, key) => ({
      key: key.toString(),
      lowRes,
      highRes,
    }));

    openGallery(name, images);
  };

  render = () => {
    const { hotel } = this.props;
    return (
      <View>
        <Image style={styles.picture} source={{ uri: hotel.photoUrl }} />
        <View style={styles.nameAndRatingContainer}>
          <StretchedImage source={gradient} />
          <View style={styles.nameAndRating}>
            <Text style={styles.hotelName}>{hotel.name}</Text>
            <Text style={styles.rating}>
              {`${'★'.repeat(hotel.stars)} - ${hotel.rating.score} ${
                hotel.rating.description
              }`}
            </Text>
          </View>
        </View>
        <View style={styles.galleryButton}>
          <GalleryButton
            onClick={this.openGallery}
            count={hotel.pictures.length}
          />
        </View>
      </View>
    );
  };
}
