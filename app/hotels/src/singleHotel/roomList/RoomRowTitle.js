// @flow

import * as React from 'react';
import { Text, StyleSheet, Translation } from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { RoomRowTitle_room as RoomRowTitleType } from './__generated__/RoomRowTitle_room.graphql';

type Props = {|
  room: ?RoomRowTitleType,
|};

export function RoomRowTitle(props: Props) {
  const title = props.room?.name ?? '';

  return (
    <Text style={styles.title}>
      <Translation passThrough={`${title} `} />
    </Text>
  );
}

export default createFragmentContainer(RoomRowTitle, {
  room: graphql`
    fragment RoomRowTitle_room on HotelRoomAvailabilityInterface {
      name
    }
  `,
});

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: defaultTokens.colorTextPrimary,
  },
});
