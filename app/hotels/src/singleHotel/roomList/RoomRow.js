// @flow
import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import idx from 'idx';
import { NetworkImage } from '@kiwicom/react-native-app-common';
import ReadMore from 'react-native-read-more-text';

import type { RoomRowContainer_availableRoom } from './__generated__/RoomRowContainer_availableRoom.graphql';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  thumbnail: {
    width: 60,
    height: 80,
    borderRadius: 2,
  },
  details: {
    flex: 1,
    paddingHorizontal: 15,
    alignSelf: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '800',
    color: '#30363d',
  },
  delimiter: {
    height: 1,
    backgroundColor: '#edeff2',
    marginVertical: 6,
  },
  description: {
    fontSize: 12,
    color: '#30363d',
  },
});

type Props = {|
  availableRoom: RoomRowContainer_availableRoom,
|};

export default class RoomRow extends React.Component<Props> {
  render() {
    const availableRoom = this.props.availableRoom;
    const title = idx(availableRoom, _ => _.room.description.title) || 'Room';
    const description = idx(availableRoom, _ => _.room.description.text) || '';
    const thumbnailUrl = idx(
      availableRoom,
      _ => _.room.photos.edges[0].node.thumbnailUrl,
    );
    return (
      <View style={styles.container}>
        <NetworkImage source={{ uri: thumbnailUrl }} style={styles.thumbnail} />
        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
          {description && (
            <View>
              <View style={styles.delimiter} />
              <ReadMore numberOfLines={2}>
                <Text style={styles.description}>{description}</Text>
              </ReadMore>
            </View>
          )}
        </View>
      </View>
    );
  }
}
