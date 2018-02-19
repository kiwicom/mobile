// @flow

import * as React from 'react';
import idx from 'idx';
import { createFragmentContainer, graphql } from 'react-relay';
import { View } from 'react-native';
import { AdaptableBadge, StyleSheet } from '@kiwicom/react-native-app-shared';

import type { HotelReviewScore_hotel } from './__generated__/HotelReviewScore_hotel.graphql';

type Props = {|
  hotel: HotelReviewScore_hotel,
|};

const style = StyleSheet.create({
  wrapper: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  adaptableBadge: {
    android: {
      paddingHorizontal: 8,
    },
    ios: {
      paddingHorizontal: 10,
    },
  },
  adaptableBadgeText: {
    android: {
      fontWeight: 'bold',
    },
    ios: {
      fontWeight: '600',
    },
  },
});

export class HotelReviewScore extends React.Component<Props> {
  /**
   * One decimal point with trailing zero.
   */
  formatScore = (score: number): string =>
    parseFloat(Math.round(score * 10) / 10)
      .toFixed(1)
      .replace('.', ',');

  /**
   * Score interval is <0;10> and color ranges are:
   *
   * <0;3)  - red
   * <3;7>  - orange
   * (7;10> - green
   *
   * It doesn't assign color in case of review score out of range.
   * In this case, default color of the badge (grey) is used.
   */
  calculateColor = (score: number): ?string => {
    if (score >= 0 === score < 3) {
      return '#d0021b';
    }
    if (score >= 3 === score <= 7) {
      return '#eb9d08';
    }
    if (score > 7 === score <= 10) {
      return '#31a11e';
    }
  };

  render = () => {
    const reviewScore = idx(this.props, _ => _.hotel.review.score) || null;
    if (reviewScore === null) {
      return null;
    }

    return (
      <View style={style.wrapper}>
        <AdaptableBadge
          text={this.formatScore(reviewScore)}
          style={[
            style.adaptableBadge,
            {
              backgroundColor: this.calculateColor(reviewScore),
            },
          ]}
          textStyle={style.adaptableBadgeText}
        />
      </View>
    );
  };
}

export default createFragmentContainer(
  HotelReviewScore,
  graphql`
    fragment HotelReviewScore_hotel on Hotel {
      review {
        score
      }
    }
  `,
);
