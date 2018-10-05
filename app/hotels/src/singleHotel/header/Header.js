// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  NetworkImage,
  Text,
  Touchable,
  Stars,
} from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import GalleryButton from '../galleryButton/GalleryButton';
import type { Header_hotel } from './__generated__/Header_hotel.graphql';

type ContainerProps = {|
  +hotel: any,
|};

export type Props = {
  ...ContainerProps,
  +hotel: ?Header_hotel,
  +navigation: NavigationType,
};

export class Header extends React.Component<Props> {
  openGallery = () => {
    const { hotel } = this.props;
    const photosEdges = idx(hotel, _ => _.photos.edges) || [];
    const images = photosEdges.map(edge => ({
      key: idx(edge, _ => _.node.id) || '',
      lowRes: idx(edge, _ => _.node.lowResUrl) || '',
      highRes: idx(edge, _ => _.node.highResUrl) || '',
    }));
    const hotelName = idx(hotel, _ => _.name);

    this.props.navigation.navigate('GalleryGrid', {
      hotelName,
      images,
    });
  };

  render = () => {
    const { hotel } = this.props;
    const mainPhotoUrl = idx(hotel, _ => _.mainPhoto.highResUrl);
    const photosCount = idx(hotel, _ => _.photos.edges.length) || 0;

    return (
      <Touchable onPress={this.openGallery} delayPressIn={40}>
        <View>
          <NetworkImage style={styles.image} source={{ uri: mainPhotoUrl }} />
          <View style={[styles.nameAndRatingContainer]}>
            <View style={styles.nameAndRating}>
              <Text style={styles.hotelName}>
                <Translation passThrough={idx(hotel, _ => _.name)} />
              </Text>
              <Text style={styles.rating}>
                <Stars rating={idx(hotel, _ => _.rating.stars) || 0} />
              </Text>
            </View>
          </View>
          {photosCount > 0 && (
            <View style={[styles.galleryButton]}>
              <GalleryButton count={photosCount} />
            </View>
          )}
        </View>
      </Touchable>
    );
  };
}

export default (createFragmentContainer(
  withNavigation(Header),
  graphql`
    fragment Header_hotel on Hotel {
      name
      mainPhoto {
        highResUrl
      }
      rating {
        stars
        categoryName
      }
      photos {
        edges {
          node {
            id
            lowResUrl
            highResUrl
          }
        }
      }
    }
  `,
): React.ComponentType<ContainerProps>);

const styles = StyleSheet.create({
  nameAndRating: {
    marginStart: 15,
    marginEnd: 15,
    marginBottom: 10,
  },
  hotelName: {
    backgroundColor: defaultTokens.paletteWhite,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '800',
    letterSpacing: -0.45,
    color: defaultTokens.colorTextAttention,
  },
  rating: {
    backgroundColor: defaultTokens.paletteWhite,
    fontSize: 12,
    color: defaultTokens.colorTextSecondary,
  },
  nameAndRatingContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: defaultTokens.paletteWhite,
    paddingVertical: 16,
  },
  image: {
    height: 180,
  },
  galleryButton: {
    position: 'absolute',
    start: 12,
    top: 32,
  },
});
