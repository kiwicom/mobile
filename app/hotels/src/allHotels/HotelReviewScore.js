// @flow

import * as React from 'react';
import idx from 'idx';
import { createFragmentContainer, graphql } from 'react-relay';
import { View, StyleSheet } from 'react-native';
import { Color, AdaptableBadge } from '@kiwicom/react-native-app-shared';

import type { HotelReviewScore_hotel } from './__generated__/HotelReviewScore_hotel.graphql';

type Props = {|
  hotel: HotelReviewScore_hotel,
|};

const style = StyleSheet.create({
  wrapper: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
});

export class HotelReviewScore extends React.Component<Props> {
  /**
   * One decimal point with trailing zero.
   */
  formatScore = (score: number): string =>
    parseFloat(Math.round(score * 10) / 10).toFixed(1);

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
      return Color.red.$500;
    }
    if (score >= 3 === score <= 7) {
      return Color.orange.$500;
    }
    if (score > 7 === score <= 10) {
      return Color.green.$500;
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
          color={this.calculateColor(reviewScore)}
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
