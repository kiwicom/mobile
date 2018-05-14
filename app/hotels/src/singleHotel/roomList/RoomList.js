// @flow

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { StyleSheet, Text, Color } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import RoomRow from './RoomRow';
import type { RoomList as RoomListType } from './__generated__/RoomList.graphql';
import type { Image as GalleryGridImage } from '../../gallery/GalleryGrid';

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: Color.textLight,
    padding: 15,
    paddingTop: 22,
    paddingBottom: 7,
  },
});

type ContainerProps = {|
  data: any,
  select: (availabilityId: string, maxPersons: number) => void,
  deselect: (availabilityId: string, maxPersons: number) => void,
  selected: {
    [string]: number,
  },
  openGallery: (roomTitle: string, images: GalleryGridImage[]) => void,
|};

type Props = {
  ...ContainerProps,
  data: ?RoomListType,
};

class RoomList extends React.Component<Props> {
  render() {
    const { data, select, deselect, selected, openGallery } = this.props;
    return (
      <View>
        <View>
          <Text style={styles.title}>
            <Translation id="single_hotel.room_list.rooms" />
          </Text>
        </View>
        {data &&
          data.map(availableRoom => (
            <RoomRow
              key={availableRoom.id}
              availableRoom={availableRoom}
              select={select}
              deselect={deselect}
              selected={selected}
              openGallery={openGallery}
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
