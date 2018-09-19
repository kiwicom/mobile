// @flow

import * as React from 'react';
import { Text, StyleSheet } from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { RoomRowTitle_room as RoomRowTitleType } from './__generated__/RoomRowTitle_room.graphql';

type ContainerProps = {|
  room: ?Object,
|};

type Props = {|
  ...ContainerProps,
  room: ?RoomRowTitleType,
|};

export function RoomRowTitle(props: Props) {
  const title = idx(props.room, _ => _.description.title) || '';

  return (
    <Text style={styles.title}>
      <Translation passThrough={`${title} `} />
    </Text>
  );
}

export default (createFragmentContainer(
  RoomRowTitle,
  graphql`
    fragment RoomRowTitle_room on HotelRoom {
      description {
        title
      }
    }
  `,
): React.ComponentType<ContainerProps>);

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: defaultTokens.colorTextAttention,
  },
});
