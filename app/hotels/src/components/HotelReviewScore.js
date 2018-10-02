// @flow strict

import * as React from 'react';
import { AdaptableBadge, StyleSheet } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +score: ?number,
|};

type ColorType = {|
  +backgroundColor: string,
  +color: string,
|};

export default class HotelReviewScore extends React.Component<Props> {
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
  calculateColor = (score: number): ColorType => {
    if (score >= 0 === score < 3) {
      return {
        backgroundColor: defaultTokens.paletteRedLight,
        color: defaultTokens.paletteRedNormal,
      };
    }
    if (score >= 3 === score <= 7) {
      return {
        backgroundColor: defaultTokens.paletteOrangeLight,
        color: defaultTokens.paletteOrangeNormal,
      };
    }
    if (score > 7 === score <= 10) {
      return {
        backgroundColor: defaultTokens.paletteGreenLight,
        color: defaultTokens.paletteGreenNormal,
      };
    }
    return {
      backgroundColor: '',
      color: '',
    };
  };

  render = () => {
    const reviewScore = this.props.score;

    if (reviewScore == null || reviewScore == 0) {
      return null;
    }
    const { backgroundColor, color } = this.calculateColor(reviewScore);
    return (
      <AdaptableBadge
        translation={
          <Translation passThrough={this.formatScore(reviewScore)} />
        }
        style={[
          style.adaptableBadge,
          {
            backgroundColor,
          },
        ]}
        textStyle={[
          style.adaptableBadgeText,
          {
            color,
          },
        ]}
      />
    );
  };
}

const style = StyleSheet.create({
  adaptableBadge: {
    borderRadius: 3,
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
