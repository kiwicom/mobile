// @flow

import * as React from 'react';
import { Text, StyleSheet } from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { RoomRowTitle_room as RoomRowTitleType } from './__generated__/RoomRowTitle_room.graphql';

type Props = {|
  room: ?RoomRowTitleType,
|};

export function RoomRowTitle(props: Props) {
  const title = props.room?.description?.title ?? '';

  return (
    <Text style={styles.title}>
      <Translation passThrough={`${title} `} />
    </Text>
  );
}

export default createFragmentContainer(
  RoomRowTitle,
  graphql`
    fragment RoomRowTitle_room on HotelRoomInterface {
      description {
        title
      }
    }
  `,
);

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: defaultTokens.colorTextAttention,
  },
});
