// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { AdaptableBadge, StyleSheet, Icon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { RoomBadges_availableRoom as RoomBadgesTypes } from './__generated__/RoomBadges_availableRoom.graphql';

type Props = {|
  +availableRoom: ?RoomBadgesTypes,
|};

export const RoomBadges = (props: Props) => {
  const isBreakfastIncluded = props.availableRoom?.isBreakfastIncluded;
  const isRefundable = props.availableRoom?.isRefundable;

  return (
    <React.Fragment>
      {isBreakfastIncluded && (
        <AdaptableBadge
          icon={
            <Icon
              name="coffee"
              color={defaultTokens.paletteBlueNormal}
              style={styles.iconStyle}
            />
          }
          translation={
            <Translation id="single_hotel.room_badges.breakfast_included" />
          }
          style={styles.badgeContainer}
          textStyle={styles.badgeText}
        />
      )}
      {isRefundable && (
        <AdaptableBadge
          icon={
            <Icon
              name="information-circle"
              color={defaultTokens.paletteBlueNormal}
              style={styles.iconStyle}
            />
          }
          translation={
            <Translation id="single_hotel.room_badges.free_cancellation" />
          }
          style={styles.badgeContainer}
          textStyle={styles.badgeText}
        />
      )}
    </React.Fragment>
  );
};

export default createFragmentContainer(RoomBadges, {
  availableRoom: graphql`
    fragment RoomBadges_availableRoom on HotelRoomAvailabilityInterface {
      isBreakfastIncluded
      isRefundable
    }
  `,
});

const styles = StyleSheet.create({
  badgeContainer: {
    backgroundColor: defaultTokens.paletteBlueLight,
    marginTop: 5,
  },
  badgeText: {
    color: defaultTokens.paletteBlueNormal,
    fontSize: 12,
  },
  iconStyle: {
    fontSize: 12,
    width: 12,
    height: 12,
    lineHeight: 12,
    alignSelf: 'center',
    marginEnd: 5,
  },
});
