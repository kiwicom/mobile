// @flow

import * as React from 'react';
import { Text, TextIcon, StyleSheet, Color } from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import type { RoomRowTitle_room as RoomRowTitleType } from './__generated__/RoomRowTitle_room.graphql';

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: Color.textDark,
  },
  icon: {
    fontSize: 10,
    color: Color.textLight,
  },
  sizeText: {
    fontSize: 12,
    color: Color.textLight,
  },
});

type ContainerProps = {|
  room: ?Object,
|};

type Props = {|
  ...ContainerProps,
  room: ?RoomRowTitleType,
|};

export function RoomRowTitle(props: Props) {
  const title = idx(props.room, _ => _.description.title) || '';
  const roomSize = idx(props.room, _ => _.roomSize);

  return (
    <Text>
      <Text style={styles.title}>
        <Translation passThrough={`${title} `} />
      </Text>
      <RoomSize roomSize={roomSize} />
    </Text>
  );
}

const RoomSize = ({ roomSize }: { roomSize: ?number }) => {
  if (roomSize == null) {
    return null;
  }

  return (
    <Text>
      <TextIcon code="&#xe02e;" style={styles.icon} />
      <Text style={styles.sizeText}>
        {/* \u00A0 is &nbsp; */}
        <Translation passThrough={`\u00A0${roomSize}m²`} />
      </Text>
    </Text>
  );
};

export default (createFragmentContainer(
  RoomRowTitle,
  graphql`
    fragment RoomRowTitle_room on HotelRoom {
      roomSize
      description {
        title
      }
    }
  `,
): React.ComponentType<ContainerProps>);
