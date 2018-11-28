// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { Translation } from '@kiwicom/mobile-localization';

import HotelReviewScore from '../../components/HotelReviewScore';
import type { HotelReview as HotelReviewType } from './__generated__/HotelReview.graphql';

type Props = {|
  +data: HotelReviewType,
|};

const ratingLabels = {
  '6': <Translation id="single_hotel.hotel_review.rating.6" />,
  '7': <Translation id="single_hotel.hotel_review.rating.7" />,
  '8': <Translation id="single_hotel.hotel_review.rating.8" />,
  '9': <Translation id="single_hotel.hotel_review.rating.9" />,
};

const RenderLabel = ({ score }: {| +score: ?number |}) => {
  if (score == null) {
    return null;
  }
  if (Math.floor(score) < 6) {
    // TODO: Should we have something here?
    return null;
  }
  const key = `${Math.floor(score)}`;
  return <Text style={styles.label}>{ratingLabels[key]}</Text>;
};

const HotelReview = (props: Props) => {
  const reviews = props.data.review?.count;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.badgeWrapper}>
          <HotelReviewScore score={props.data.review?.score} />
        </View>
        <View>
          <RenderLabel score={props.data.review?.score} />
          {reviews != null && (
            <Text style={styles.score}>
              <Translation
                id="single_hotel.hotel_review.reviews"
                values={{ count: reviews }}
              />
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultTokens.paletteWhite,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: defaultTokens.paletteInkLighter,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: defaultTokens.paletteInkLighter,
  },
  row: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  label: {
    fontWeight: '500',
  },
  score: {
    color: defaultTokens.colorTextSecondary,
    fontSize: 12,
  },
  badgeWrapper: {
    marginEnd: 12,
  },
});

export default createFragmentContainer(
  HotelReview,
  graphql`
    fragment HotelReview on HotelInterface {
      review {
        score
        count
      }
    }
  `,
);
