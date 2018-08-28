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
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import GalleryButton from '../galleryButton/GalleryButton';
import Rating from './Rating';
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

  renderHeader = () => {
    const { hotel } = this.props;
    const mainPhotoUrl = idx(hotel, _ => _.mainPhoto.highResUrl);
    const photosCount = idx(hotel, _ => _.photos.edges.length) || 0;
    return (
      <Dimensions.Consumer>
        {dimensions => {
          const isAndroidTablet = Platform.select({
            android: Device.isWideLayout(dimensions),
            ios: false,
          });

          return (
            <Touchable onPress={this.openGallery}>
              <View>
                <NetworkImage
                  style={
                    isAndroidTablet ? styles.heightHigher : styles.heightNormal
                  }
                  source={{ uri: mainPhotoUrl }}
                />
                <View
                  style={[
                    styles.nameAndRatingContainer,
                    isAndroidTablet
                      ? styles.nameAndRatingContainerHigher
                      : styles.nameAndRatingContainerNormal,
                  ]}
                >
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
                {photosCount > 0 && (
                  <View
                    style={[
                      styles.galleryButton,
                      isAndroidTablet
                        ? styles.galleryTopExtra
                        : styles.galleryTopNormal,
                    ]}
                  >
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
  nameAndRatingContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  nameAndRatingContainerNormal: {
    height: 150,
    marginTop: -150,
  },
  nameAndRatingContainerHigher: {
    height: 200,
    marginTop: -200,
  },
  heightNormal: {
    height: 150,
  },
  heightHigher: {
    height: 200,
  },
  galleryButton: {
    position: 'absolute',
    end: 10,
  },
  galleryTopNormal: {
    top: 10,
  },
  galleryTopExtra: {
    top: StatusBar.currentHeight + 16,
  },
});
