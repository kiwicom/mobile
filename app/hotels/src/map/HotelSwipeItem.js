// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NetworkImage, Color, Price } from '@kiwicom/react-native-app-common';
import idx from 'idx';

import type { HotelSwipeItem as HotelSwipeItemData } from './__generated__/HotelSwipeItem.graphql';

type Props = {
  width: number,
  data: HotelSwipeItemData,
  onPress: (hotelId: string) => void,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 3,
    marginRight: 10,
  },
  description: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  hotelName: {
    fontSize: 16,
  },
  metainfo: {
    color: Color.grey.$700,
    opacity: 0.8,
    fontSize: 12,
  },
  price: {
    color: Color.brand,
    fontWeight: 'bold',
    fontSize: 12,
  },
});

const getReview = review => {
  if (review && review.count) {
    const reviewWord = review.count > 1 ? 'reviews' : 'review';
    const delimiter = review.score || review.description ? ' · ' : '';

    return (
      <Text style={styles.metainfo}>
        {review.score} {review.description}
        {delimiter}
        {review.count} {reviewWord}
      </Text>
    );
  }

  return <Text style={styles.metainfo}>No reviews</Text>;
};

export class HotelSwipeItem extends React.Component<Props> {
  handlePress = () => {
    const { data: hotel } = this.props;
    const id = idx(hotel, _ => _.hotel.id);

    if (id) {
      this.props.onPress(id);
    }
  };

  render = () => {
    const { width, data: hotel } = this.props;
    const name = idx(hotel, _ => _.hotel.name);
    const price = idx(hotel, _ => _.price) || {};
    const image = idx(hotel, _ => _.hotel.mainPhoto.thumbnailUrl);
    const review = idx(hotel, _ => _.hotel.review);

    return (
      <TouchableOpacity
        style={[styles.container, { width }]}
        onPress={this.handlePress}
      >
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
            {name}
          </Text>
          {getReview(review)}
          <Text style={styles.price}>
            {price &&
              price.currency &&
              price.amount && (
                <Price currency={price.currency} amount={price.amount} />
              )}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
}

export default createFragmentContainer(
  HotelSwipeItem,
  graphql`
    fragment HotelSwipeItem on HotelAvailability {
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
        rating {
          stars
        }
        review {
          score
          description
          count
        }
      }
    }
  `,
);
