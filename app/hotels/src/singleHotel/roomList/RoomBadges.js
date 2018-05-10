// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';
import { AdaptableBadge, StyleSheet, TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import type { RoomBadges_availableRoom as RoomBadgesTypes } from './__generated__/RoomBadges_availableRoom.graphql';

type ContainerProps = {|
  availableRoom: ?Object,
|};

type Props = {|
  ...ContainerProps,
  availableRoom: RoomBadgesTypes,
|};

const styles = StyleSheet.create({
  badgeContainer: {
    backgroundColor: 'rgba(49, 161, 30, 0.15)',
    marginTop: 5,
  },
  badgeText: {
    color: 'rgb(49, 161, 30)',
    fontSize: 10,
    fontFamily: 'SFProText-Semibold',
  },
  iconStyle: {
    color: 'rgb(49, 161, 30)',
    fontSize: 10,
    ios: {
      alignSelf: 'flex-end',
    },
    android: {
      alignSelf: 'center',
    },
    marginRight: 5,
  },
});

export const RoomBadges = (props: Props) => {
  const isBreakfastIncluded = idx(
    props.availableRoom,
    _ => _.isBreakfastIncluded,
  );
  const isRefundable = idx(props.availableRoom, _ => _.isRefundable);

  let badges = [];

  if (isBreakfastIncluded) {
    badges.push(
      <AdaptableBadge
        icon={<TextIcon code="&#xe039;" style={styles.iconStyle} />}
        key="breakfast-included-badge"
        translation={
          <Translation id="single_hotel.room_badges.breakfast_included" />
        }
        style={styles.badgeContainer}
        textStyle={styles.badgeText}
      />,
    );
  }

  if (isRefundable) {
    badges.push(
      <AdaptableBadge
        icon={<TextIcon code={"'"} style={styles.iconStyle} />}
        key="free-cancellation-badge"
        translation={
          <Translation id="single_hotel.room_badges.free_cancellation" />
        }
        style={styles.badgeContainer}
        textStyle={styles.badgeText}
      />,
    );
  }

  return badges;
};

export default (createFragmentContainer(
  RoomBadges,
  graphql`
    fragment RoomBadges_availableRoom on HotelRoomAvailability {
      isBreakfastIncluded
      isRefundable
    }
  `,
): React.ComponentType<ContainerProps>);
