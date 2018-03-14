// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Text, TextIcon, StyleSheet } from '@kiwicom/react-native-app-shared';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';

import type { RoomRowTitle_room as RoomRowTitleType } from './__generated__/RoomRowTitle_room.graphql';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 14,
    color: '#30363d',
  },
  icon: {
    fontSize: 13,
    color: '#79818a',
    ios: {
      alignSelf: 'flex-end',
    },
    android: {
      alignSelf: 'center',
    },
  },
  sizeText: {
    fontSize: 14,
    color: '#79818a',
  },
  supText: {
    fontSize: 8,
    color: '#79818a',
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
  const title = idx(props.room, _ => _.description.title);
  const roomSize = idx(props.room, _ => _.roomSize);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title} </Text>
      <TextIcon style={styles.icon}>&#xe0a6;</TextIcon>
      <Text style={styles.sizeText}> {roomSize}m</Text>
      <Text style={styles.supText}>2</Text>
    </View>
  );
}

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
