// @flow

import * as React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import {
  StyleSheet,
  NetworkImage,
  StretchedImage,
  Text,
  Touchable,
  AdaptableLayout,
  Device,
  BlackToAlpha as gradient,
  Dimensions,
} from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import GalleryButton from '../galleryButton/GalleryButton';
import Rating from './Rating';
import type { Image as GalleryGridImage } from '../../gallery/GalleryGrid';
import type { Header_hotel } from './__generated__/Header_hotel.graphql';

const generateDynamicStyles = dim => {
  const height = Platform.select({
    android: Device.isWideLayout(dim) ? 150 : 200,
    ios: 150,
  });
  return {
    nameAndRatingContainer: {
      height: height,
      marginTop: -height,
      alignItems: 'flex-end',
      flexDirection: 'row',
    },
    picture: {
      height: height,
    },
    galleryButton: {
      position: 'absolute',
      end: 10,
      top: Platform.select({
        android: Device.isWideLayout(dim) ? 10 : StatusBar.currentHeight + 16,
        ios: 10,
      }),
    },
  };
};

type ContainerProps = {|
  +openGallery: (hotelName: string, images: GalleryGridImage[]) => void,
  +hotel: any,
|};

export type Props = {
  ...ContainerProps,
  +hotel: ?Header_hotel,
};

export class Header extends React.Component<Props> {
  openGallery = () => {
    const { hotel, openGallery } = this.props;
    const photosEdges = idx(hotel, _ => _.photos.edges) || [];
    const images = photosEdges.map(edge => ({
      key: idx(edge, _ => _.node.id) || '',
      lowRes: idx(edge, _ => _.node.lowResUrl) || '',
      highRes: idx(edge, _ => _.node.highResUrl) || '',
    }));
    const hotelName = idx(hotel, _ => _.name);

    if (typeof hotelName === 'string') {
      openGallery(hotelName, images);
    }
  };

  renderHeader = () => {
    const { hotel } = this.props;
    const mainPhotoUrl = idx(hotel, _ => _.mainPhoto.highResUrl);
    const photosCount = idx(hotel, _ => _.photos.edges.length);
    return (
      <Dimensions.Consumer>
        {dimensions => {
          const dynamicStyles = generateDynamicStyles(dimensions);

          return (
            <Touchable onPress={this.openGallery}>
              <View>
                <NetworkImage
                  style={dynamicStyles.picture}
                  source={{ uri: mainPhotoUrl }}
                />
                <View style={dynamicStyles.nameAndRatingContainer}>
                  <StretchedImage source={gradient} />
                  <View style={styles.nameAndRating}>
                    <Text style={styles.hotelName}>
                      <Translation passThrough={idx(hotel, _ => _.name)} />
                    </Text>
                    <Text style={styles.rating}>
                      <Rating
                        stars={idx(hotel, _ => _.rating.stars)}
                        score={idx(hotel, _ => _.review.score)}
                        description={idx(hotel, _ => _.review.description)}
                      />
                    </Text>
                  </View>
                </View>
                {photosCount && (
                  <View style={dynamicStyles.galleryButton}>
                    <GalleryButton count={photosCount} />
                  </View>
                )}
              </View>
            </Touchable>
          );
        }}
      </Dimensions.Consumer>
    );
  };

  render = () => {
    const header = this.renderHeader();
    return (
      <AdaptableLayout
        renderOnNarrow={header}
        renderOnWide={<View style={styles.tabletContainer}>{header}</View>}
      />
    );
  };
}

export default (createFragmentContainer(
  Header,
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
      review {
        score
        description
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
    backgroundColor: 'transparent',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '600',
    letterSpacing: -0.45,
    color: defaultTokens.paletteWhite,
  },
  rating: {
    backgroundColor: 'transparent',
    fontSize: 12,
    color: defaultTokens.paletteWhite,
  },
  tabletContainer: {
    android: {
      paddingHorizontal: 8,
    },
  },
});
