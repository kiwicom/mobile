// @flow

import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';

import RoomRow from './RoomRow';
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

type ContainerProps = {|
  data: any,
  select: (availabilityId: string) => void,
  deselect: (availabilityId: string) => void,
  selected: {
    [string]: number,
  },
|};

type Props = {
  ...ContainerProps,
  data: ?RoomListType,
};

class RoomList extends React.Component<Props> {
  render() {
    const { data, select, deselect, selected } = this.props;
    return (
      <View>
        <View>
          <Text style={styles.title}>Rooms</Text>
        </View>
        {data &&
          data.map(availableRoom => (
            <RoomRow
              key={availableRoom.id}
              availableRoom={availableRoom}
              select={select}
              deselect={deselect}
              selected={selected}
            />
          ))}
      </View>
    );
  }
}

export default (createFragmentContainer(
  RoomList,
  graphql`
    fragment RoomList on HotelRoomAvailability @relay(plural: true) {
      id
      ...RoomRow_availableRoom
    }
  `,
): React.ComponentType<ContainerProps>);
