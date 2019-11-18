// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  NetworkImage,
  Text,
  Touchable,
  Stars,
  Logger,
  Device,
  Translation,
} from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { withNavigation, type NavigationType } from '@kiwicom/mobile-navigation';

import GalleryButton from '../galleryButton/GalleryButton';
import type { Header_hotel as HotelType } from './__generated__/Header_hotel.graphql';

type Props = {|
  +hotel: ?HotelType,
  +navigation: NavigationType,
|};

export class Header extends React.Component<Props> {
  openGallery = () => {
    const { hotel } = this.props;
    const photosEdges = hotel?.photos?.edges ?? [];

    const images = photosEdges.map(edge => {
      const key = edge?.node?.id ?? '';
      const highRes = edge?.node?.highResUrl ?? '';
      const lowRes = edge?.node?.lowResUrl ?? highRes; // Fallback to highResUrl since stay22 do not provide lowResUrl
      return {
        key,
        lowRes,
        highRes,
      };
    });

    const hotelName = hotel?.name;

    this.props.navigation.navigate('GalleryGrid', {
      hotelName,
      images,
    });
    Logger.hotelsGalleryOpened(Logger.HotelGalleryType.HOTELS_GALLERY_TYPE_HOTEL);
  };

  render() {
    const { hotel } = this.props;
    const mainPhotoUrl = hotel?.mainPhoto?.highResUrl;
    const photosCount = hotel?.photos?.edges?.length ?? 0;

    return (
      <Touchable onPress={this.openGallery} delayPressIn={40} testID="hotel-openGallery">
        <View>
          <NetworkImage style={styles.image} source={{ uri: mainPhotoUrl }} />
          {/* $FlowFixMe Errors after moving rn modules from untyped to
           * declarations */}
          <View style={[styles.nameAndRatingContainer]}>
            {/* $FlowFixMe Errors after moving rn modules from untyped to
             * declarations */}
            <View style={styles.nameAndRating}>
              <Text style={styles.hotelName}>
                <Translation passThrough={hotel?.name} />
              </Text>
              <Text style={styles.rating}>
                <Stars rating={hotel?.rating?.stars ?? 0} />
              </Text>
            </View>
          </View>
          {photosCount > 0 && (
            /* $FlowFixMe Errors after moving rn modules from untyped to
             * declarations */
            <View style={[styles.galleryButton]}>
              <GalleryButton count={photosCount} />
            </View>
          )}
        </View>
      </Touchable>
    );
  }
}

export default createFragmentContainer(withNavigation(Header), {
  hotel: graphql`
    fragment Header_hotel on HotelInterface {
      name
      mainPhoto {
        highResUrl
      }
      rating {
        stars
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
});

const galleryButtonOffset = 32;
const iPhoneXExtraOffset = 24;

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
    color: defaultTokens.colorTextPrimary,
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
    top: Device.isIPhoneX ? galleryButtonOffset + iPhoneXExtraOffset : galleryButtonOffset,
  },
});
