// @flow

import * as React from 'react';
import { View } from 'react-native';
import idx from 'idx';
import { StyleSheet } from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import {
  type NavigationType,
  withNavigation,
} from '@kiwicom/mobile-navigation';
import isEqual from 'react-fast-compare';

import RoomPicker from '../roomPicker/RoomPicker';
import RoomImage from './RoomImage';
import BeddingInfo from './BeddingInfo';
import RoomRowTitle from './RoomRowTitle';
import RoomBadges from './RoomBadges';
import type { RoomRow_availableRoom } from './__generated__/RoomRow_availableRoom.graphql';

type ContainerProps = {|
  +availableRoom: ?Object,
  +select: (availabilityId: string, maxPersons: number) => void,
  +deselect: (availabilityId: string, maxPersons: number) => void,
  +selected: {
    +[string]: number,
  },
  +disabled: boolean,
  +testID?: string,
|};

type Props = {|
  ...ContainerProps,
  +availableRoom: ?RoomRow_availableRoom,
  +navigation: NavigationType,
|};

export class RoomRow extends React.Component<Props> {
  shouldComponentUpdate = (nextProps: Props) => !isEqual(nextProps, this.props);
  select = () => {
    const { id, maxPersons } = this.getIdAndMaxPersons();
    if (id && maxPersons) {
      this.props.select(id, maxPersons);
    }
  };

  deselect = () => {
    const { id, maxPersons } = this.getIdAndMaxPersons();
    if (id && maxPersons) {
      this.props.deselect(id, maxPersons);
    }
  };

  getIdAndMaxPersons = () => {
    const id = idx(this.props, _ => _.availableRoom.id);
    const maxPersons = idx(this.props, _ => _.availableRoom.room.maxPersons);
    return { id, maxPersons };
  };

  openGallery = () => {
    const { availableRoom } = this.props;
    const photosArray = idx(availableRoom, _ => _.room.roomPhotos) || [];

    const photos = photosArray.map(photo => ({
      key: idx(photo, _ => _.id) || '',
      highRes: idx(photo, _ => _.highResUrl) || '',
      lowRes: idx(photo, _ => _.lowResUrl) || '',
    }));

    const roomTitle = idx(availableRoom, _ => _.room.description.title) || '';
    this.props.navigation.navigate('GalleryGrid', {
      hotelName: roomTitle,
      images: photos,
    });
  };

  render = () => {
    const availableRoom = this.props.availableRoom;
    const thumbnailUrl = idx(
      availableRoom,
      _ => _.room.roomPhotos[0].lowResUrl,
    );
    const amount = idx(availableRoom, _ => _.minimalPrice.amount) || null;
    const currency = idx(availableRoom, _ => _.minimalPrice.currency) || null;
    const selectableCount =
      idx(availableRoom, _ => _.incrementalPrice.length) || 0;
    const id = idx(availableRoom, _ => _.id) || '';
    const selectedCount = idx(this.props.selected, _ => _[id]) || 0;
    const room = idx(availableRoom, _ => _.room);

    return (
      <View style={styles.container}>
        <View>
          <View style={styles.row}>
            <RoomImage
              openGallery={this.openGallery}
              thumbnailUrl={thumbnailUrl}
            />
            <View style={styles.details}>
              <RoomRowTitle room={room} />
              <RoomBadges availableRoom={availableRoom} />
            </View>
          </View>
          <View style={styles.roomDetails}>
            <BeddingInfo room={room} />
          </View>
          <RoomPicker
            price={{ amount, currency }}
            selectedCount={selectedCount}
            selectableCount={selectableCount}
            increment={this.select}
            decrement={this.deselect}
            testID={this.props.testID}
            disabled={this.props.disabled}
          />
        </View>
      </View>
    );
  };
}

export default (createFragmentContainer(
  withNavigation(RoomRow),
  graphql`
    fragment RoomRow_availableRoom on HotelRoomAvailabilityInterface {
      id
      ...RoomBadges_availableRoom
      minimalPrice {
        amount
        currency
      }
      incrementalPrice {
        amount
        currency
      }
      room {
        description {
          title
        }
        ...RoomRowTitle_room
        roomPhotos {
          highResUrl
          lowResUrl
          id
        }
        maxPersons
        ...BeddingInfo_room
      }
    }
  `,
): React.ComponentType<ContainerProps>);

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
  },
  details: {
    flex: 1,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
  },
  roomDetails: {
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
  },
});
