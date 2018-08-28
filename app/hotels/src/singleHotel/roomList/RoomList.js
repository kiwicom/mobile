// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { StyleSheet, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import isEqual from 'react-fast-compare';

import RoomRow from './RoomRow';
import type { RoomList as RoomListType } from './__generated__/RoomList.graphql';

type ContainerProps = {|
  +data: any,
  +select: (availabilityId: string, maxPersons: number) => void,
  +deselect: (availabilityId: string, maxPersons: number) => void,
  +selected: {
    [string]: number,
  },
|};

type Props = {|
  ...ContainerProps,
  +data: ?RoomListType,
|};

class RoomList extends React.Component<Props> {
  shouldComponentUpdate = (nextProps: Props) => !isEqual(nextProps, this.props);

  render = () => {
    const { select, deselect, selected } = this.props;
    const data = this.props.data || [];

    return (
      <React.Fragment>
        <Text style={styles.title}>
          <Translation id="single_hotel.room_list.rooms" />
        </Text>
        {data.map(availableRoom => (
          <RoomRow
            key={availableRoom.id}
            availableRoom={availableRoom}
            select={select}
            deselect={deselect}
            selected={selected}
          />
        ))}
      </React.Fragment>
    );
  };
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: defaultTokens.colorTextSecondary,
    padding: 15,
    paddingTop: 22,
    paddingBottom: 7,
  },
});

export default (createFragmentContainer(
  RoomList,
  graphql`
    fragment RoomList on HotelRoomAvailability @relay(plural: true) {
      id
      ...RoomRow_availableRoom
    }
  `,
): React.ComponentType<ContainerProps>);
