// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  NetworkImage,
  Price,
  Text,
  Stars,
} from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { HotelDetailPreview_availability } from './__generated__/HotelDetailPreview_availability.graphql';
import { HotelDetailConsumer } from './HotelDetailPreviewContext';
import HotelReviewScore from '../../components/HotelReviewScore';

type Props = {|
  +availability: ?HotelDetailPreview_availability,
|};

export const HotelDetailPreview = ({ availability }: Props) => {
  const name = idx(availability, _ => _.hotel.name);
  const price = idx(availability, _ => _.price) || {};
  const image = idx(availability, _ => _.hotel.mainPhoto.thumbnailUrl);

  return (
    <HotelDetailConsumer>
      {({ containerWidth }) => (
        <View style={[styles.container, { width: containerWidth }]}>
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
            <View style={styles.row}>
              <Stars
                rating={idx(availability, _ => _.hotel.rating.stars)}
                style={styles.stars}
              />
              <HotelReviewScore hotel={idx(availability, _ => _.hotel)} />
            </View>
            {price &&
              price.currency != null &&
              price.amount != null && (
                <Text style={styles.price}>
                  <Price currency={price.currency} amount={price.amount} />
                </Text>
              )}
          </View>
        </View>
      )}
    </HotelDetailConsumer>
  );
};

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
    fontWeight: '500',
  },
  price: {
    color: defaultTokens.paletteProductNormal,
    fontWeight: 'bold',
    fontSize: 12,
    android: {
      lineHeight: 13,
    },
  },
  stars: {
    color: defaultTokens.paletteInkLight,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default createFragmentContainer(
  HotelDetailPreview,
  graphql`
    fragment HotelDetailPreview_availability on HotelAvailability {
      price {
        amount
        currency
      }
      hotel {
        ...HotelReviewScore_hotel
        id
        name
        mainPhoto {
          thumbnailUrl
        }
        rating {
          stars
        }
      }
    }
  `,
);
