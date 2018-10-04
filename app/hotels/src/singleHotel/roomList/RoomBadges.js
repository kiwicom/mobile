// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { AdaptableBadge, StyleSheet, TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { RoomBadges_availableRoom as RoomBadgesTypes } from './__generated__/RoomBadges_availableRoom.graphql';

type ContainerProps = {|
  availableRoom: ?Object,
|};

type Props = {|
  ...ContainerProps,
  availableRoom: RoomBadgesTypes,
|};

export const RoomBadges = (props: Props) => {
  const isBreakfastIncluded = idx(
    props.availableRoom,
    _ => _.isBreakfastIncluded,
  );
  const isRefundable = idx(props.availableRoom, _ => _.isRefundable);

  return (
    <React.Fragment>
      {isBreakfastIncluded && (
        <AdaptableBadge
          icon={<TextIcon code="&#xe02F;" style={styles.iconStyle} />}
          translation={
            <Translation id="single_hotel.room_badges.breakfast_included" />
          }
          style={styles.badgeContainer}
          textStyle={styles.badgeText}
        />
      )}
      {isRefundable && (
        <AdaptableBadge
          icon={<TextIcon code="r" style={styles.iconStyle} />}
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

export default (createFragmentContainer(
  RoomBadges,
  graphql`
    fragment RoomBadges_availableRoom on HotelRoomAvailability {
      isBreakfastIncluded
      isRefundable
    }
  `,
): React.ComponentType<ContainerProps>);

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
    color: defaultTokens.paletteBlueNormal,
    fontSize: 12,
    alignSelf: 'center',
    marginEnd: 5,
  },
});
