// @flow

import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import idx from 'idx';
import { NetworkImage, Button } from '@kiwicom/react-native-app-common';
import ReadMore from 'react-native-read-more-text';

import RoomPicker from '../roomPicker/RoomPicker';
import type { RoomRowContainer_availableRoom } from './__generated__/RoomRowContainer_availableRoom.graphql';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
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
  onGoToPayment: ({
    hotelId: number,
    rooms: Array<{| id: string, count: number |}>,
  }) => void,
|};

export default class RoomRow extends React.Component<Props> {
  doNothing() {}

  handleGoToPayment = () => {
    this.props.onGoToPayment({
      hotelId: 77094, // TODO: real value
      rooms: [
        // TODO: real selected date (waiting for GraphQL update - originalId)
        {
          id: '7709411_91461863_1_1_0',
          count: 1,
        },
        {
          id: '7709404_91461863_0_1_0',
          count: 1,
        },
      ],
    });
  };

  render = () => {
    const availableRoom = this.props.availableRoom;
    const title = idx(availableRoom, _ => _.room.description.title) || 'Room';
    const description = idx(availableRoom, _ => _.room.description.text) || '';
    const thumbnailUrl = idx(
      availableRoom,
      _ => _.room.photos.edges[0].node.thumbnailUrl,
    );
    const price = idx(availableRoom, _ => _.minimalPrice.amount);
    const currency = idx(availableRoom, _ => _.minimalPrice.currency);
    const selectableCount =
      idx(availableRoom, _ => _.incrementalPrice.length) || 0;

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <NetworkImage
            source={{ uri: thumbnailUrl }}
            style={styles.thumbnail}
          />
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
        {price &&
          currency && (
            <RoomPicker
              price={price}
              currency={currency}
              selectedCount={0}
              selectableCount={selectableCount}
              increment={this.doNothing}
              decrement={this.doNothing}
            />
          )}
        <Button
          title="Go To Payment (REMOVE THIS)"
          onPress={this.handleGoToPayment}
        />
      </View>
    );
  };
}
