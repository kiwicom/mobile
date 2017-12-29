// @flow

import * as React from 'react';
import RoomRowContainer from './RoomRowContainer';
import { View, StyleSheet, Text } from 'react-native';

import type { RoomRowContainer_availableRoom } from './__generated__/RoomRowContainer_availableRoom.graphql';

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: '#79818a',
    padding: 15,
    paddingTop: 22,
    paddingBottom: 12,
  },
});

type Props = {|
  availableRooms: RoomRowContainer_availableRoom[],
|};

type State = {||};

export default class RoomList extends React.Component<Props, State> {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.title}>Rooms</Text>
        </View>
        {this.props.availableRooms.map(availableRoom => (
          <RoomRowContainer
            key={availableRoom.id}
            availableRoom={availableRoom}
          />
        ))}
      </View>
    );
  }
}
