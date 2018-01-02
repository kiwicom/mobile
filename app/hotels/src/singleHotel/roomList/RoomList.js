// @flow

import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';

import RoomRowContainer from './RoomRowContainer';
import type { RoomList as RoomListType } from './__generated__/RoomList.graphql';

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
  data: RoomListType,
  onGoToPayment: ({
    hotelId: number,
    rooms: Array<{| id: string, count: number |}>,
  }) => void,
|};

class RoomList extends React.Component<Props> {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.title}>Rooms</Text>
        </View>
        {this.props.data.map(availableRoom => (
          <RoomRowContainer
            key={availableRoom.id}
            availableRoom={availableRoom}
            onGoToPayment={this.props.onGoToPayment}
          />
        ))}
      </View>
    );
  }
}

export default createFragmentContainer(
  RoomList,
  graphql`
    fragment RoomList on HotelRoomAvailability @relay(plural: true) {
      id
      ...RoomRowContainer_availableRoom
    }
  `,
);
