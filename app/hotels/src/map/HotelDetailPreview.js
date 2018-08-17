// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, NetworkImage, Price, Text } from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { HotelDetailPreview_availability } from './__generated__/HotelDetailPreview_availability.graphql';

type ContainerProps = {|
  +availability: $FlowFixMeProps,
|};

type Props = {|
  ...ContainerProps,
  +availability: ?HotelDetailPreview_availability,
|};

const getReview = review => {
  if (review && review.count) {
    const reviewScore = review.score || 0;
    const reviewDescription = review.description || '';
    const reviewCount = review.count || 0;

    const delimiter =
      Number.isFinite(review.score) || review.description ? ' · ' : '';

    return (
      <Text style={styles.metainfo}>
        <Translation passThrough={`${reviewScore} ${reviewDescription}`} />
        <Translation passThrough={delimiter} />
        <Translation
          id="hotels.map.multiple_reviews"
          values={{ numberOfReviews: reviewCount }}
        />
      </Text>
    );
  }

  return (
    <Text style={styles.metainfo}>
      <Translation id="hotels.map.no_reviews" />
    </Text>
  );
};

export class HotelDetailPreview extends React.Component<Props> {
  render = () => {
    const { availability } = this.props;
    const name = idx(availability, _ => _.hotel.name);
    const price = idx(availability, _ => _.price) || {};
    const image = idx(availability, _ => _.hotel.mainPhoto.thumbnailUrl);
    const review = idx(availability, _ => _.hotel.review);

    return (
      <View style={styles.container}>
        <View>
          <NetworkImage
            style={styles.image}
            source={{
              uri: image,
            }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.hotelName} numberOfLines={1}>
            <Translation passThrough={name} />
          </Text>
          {getReview(review)}
          {price &&
            price.currency &&
            price.amount && (
              <Text style={styles.price}>
                <Price currency={price.currency} amount={price.amount} />
              </Text>
            )}
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 3,
    marginEnd: 10,
  },
  description: {
    flex: 1,
    justifyContent: 'space-between',
  },
  hotelName: {
    fontSize: 16,
    color: defaultTokens.colorTextAttention,
    android: {
      lineHeight: 17,
    },
  },
  metainfo: {
    color: defaultTokens.colorTextSecondary,
    fontSize: 12,
    android: {
      lineHeight: 13,
    },
  },
  price: {
    color: defaultTokens.paletteProductNormal,
    fontWeight: 'bold',
    fontSize: 12,
    android: {
      lineHeight: 13,
    },
  },
});

export default (createFragmentContainer(
  HotelDetailPreview,
  graphql`
    fragment HotelDetailPreview_availability on HotelAvailability {
      price {
        amount
        currency
      }
      hotel {
        id
        name
        mainPhoto {
          thumbnailUrl
        }
        review {
          score
          description
          count
        }
      }
    }
  `,
): React.ComponentType<ContainerProps>);
