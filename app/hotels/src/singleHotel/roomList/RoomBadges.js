// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';
import {
  AdaptableBadge,
  StyleSheet,
  TextIcon,
} from '@kiwicom/react-native-app-shared';

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
  },
  iconStyle: {
    color: 'rgb(49, 161, 30)',
    ios: {
      alignSelf: 'flex-end',
    },
    android: {
      alignSelf: 'center',
    },
    marginRight: 5,
  },
});

const RoomBadges = (props: Props) => {
  const isBreakfastIncluded = idx(
    props.availableRoom,
    _ => _.isBreakfastIncluded,
  );
  const isRefundable = idx(props.availableRoom, _ => _.isRefundable);

  let badges = [];

  if (isBreakfastIncluded) {
    badges.push(
      <AdaptableBadge
        icon={<TextIcon style={styles.iconStyle}>&#xe039;</TextIcon>}
        key="breakfast-included-badge"
        text="Breakfast included"
        style={styles.badgeContainer}
        textStyle={styles.badgeText}
      />,
    );
  }

  if (isRefundable) {
    badges.push(
      <AdaptableBadge
        icon={<TextIcon style={styles.iconStyle}>{"'"}</TextIcon>}
        key="free-cancellation-badge"
        text="Free cancellation"
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
