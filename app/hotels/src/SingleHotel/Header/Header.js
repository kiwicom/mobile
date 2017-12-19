// @flow
import * as React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { StretchedImage } from '@kiwicom/react-native-app-common';
import idx from 'idx';
import GalleryButton from '../GalleryButton/GalleryButton';
import gradient from './black-to-alpha-vertical.png';
import formatRating from './formatRating';

import type { Image as GalleryGridImage } from '../../gallery/GalleryGrid';
import type { HeaderContainer_hotel } from './__generated__/HeaderContainer_hotel.graphql';

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
    const { hotel, openGallery } = this.props;
    const photosEdges = idx(hotel, _ => _.photos.edges) || [];
    const images = photosEdges.map(edge => ({
      key: idx(edge, _ => _.node.id) || '',
      lowRes: idx(edge, _ => _.node.lowResUrl) || '',
      highRes: idx(edge, _ => _.node.highResUrl) || '',
    }));

    if (typeof hotel.name === 'string') {
      openGallery(hotel.name, images);
    }
  };

  render = () => {
    const { hotel } = this.props;
    const mainPhotoUrl = idx(hotel, _ => _.mainPhoto.highResUrl);
    const photosCount = idx(hotel, _ => _.photos.edges.length);
    return (
      <View>
        <Image
          style={styles.picture}
          source={mainPhotoUrl ? { uri: mainPhotoUrl } : null}
        />
        <View style={styles.nameAndRatingContainer}>
          <StretchedImage source={gradient} />
          <View style={styles.nameAndRating}>
            <Text style={styles.hotelName}>{hotel.name}</Text>
            <Text style={styles.rating}>
              {formatRating(
                idx(hotel, _ => _.rating.stars),
                idx(hotel, _ => _.review.score),
                idx(hotel, _ => _.review.description),
              )}
            </Text>
          </View>
        </View>
        {photosCount && (
          <View style={styles.galleryButton}>
            <GalleryButton onClick={this.openGallery} count={photosCount} />
          </View>
        )}
      </View>
    );
  };
}
