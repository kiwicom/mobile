// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import {
  AdaptableBadge,
  StyleSheet,
  TextIcon,
  Color,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

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
    backgroundColor: Color.green.transparent.lapalma.$15,
    marginTop: 5,
  },
  badgeText: {
    color: Color.green.lapalma,
    fontSize: 10,
  },
  iconStyle: {
    color: Color.green.lapalma,
    fontSize: 10,
    ios: {
      alignSelf: 'flex-end',
    },
    android: {
      alignSelf: 'center',
    },
    marginEnd: 5,
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
