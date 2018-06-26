// @flow

import * as React from 'react';
import { View } from 'react-native';
import idx from 'idx';
import {
  SimpleCard,
  StyleSheet,
  AdaptableLayout,
} from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';

import RoomPicker from '../roomPicker/RoomPicker';
import RoomImage from './RoomImage';
import BeddingInfo from './BeddingInfo';
import RoomRowTitle from './RoomRowTitle';
import RoomDescription from './RoomDescription';
import RoomBadges from './RoomBadges';
import type { RoomRow_availableRoom } from './__generated__/RoomRow_availableRoom.graphql';
import type { Image as GalleryGridImage } from '../../gallery/GalleryGrid';

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
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
  widePadding: {
    paddingHorizontal: 5,
  },
});

type ContainerProps = {|
  availableRoom: ?Object,
  select: (availabilityId: string, maxPersons: number) => void,
  deselect: (availabilityId: string, maxPersons: number) => void,
  selected: {
    [string]: number,
  },
  openGallery: (roomTitle: string, images: GalleryGridImage[]) => void,
|};

type Props = {
  ...ContainerProps,
  availableRoom: ?RoomRow_availableRoom,
};

export class RoomRow extends React.Component<Props> {
  select = () => {
    const { originalId, maxPersons } = this.getOriginalIdAndMaxPersons();
    if (originalId && maxPersons) {
      this.props.select(originalId, maxPersons);
    }
  };

  deselect = () => {
    const { originalId, maxPersons } = this.getOriginalIdAndMaxPersons();
    if (originalId && maxPersons) {
      this.props.deselect(originalId, maxPersons);
    }
  };

  getOriginalIdAndMaxPersons = () => {
    const originalId = idx(this.props, _ => _.availableRoom.originalId);
    const maxPersons = idx(this.props, _ => _.availableRoom.room.maxPersons);
    return { originalId, maxPersons };
  };

  openGallery = () => {
    const { availableRoom } = this.props;
    const photoEdges = idx(availableRoom, _ => _.room.photos.edges) || [];
    const photos = photoEdges.map(photo => ({
      key: idx(photo, _ => _.node.id) || '',
      highRes: idx(photo, _ => _.node.highResUrl) || '',
      lowRes: idx(photo, _ => _.node.lowResUrl) || '',
    }));

    const roomTitle = idx(availableRoom, _ => _.room.description.title) || '';
    this.props.openGallery(roomTitle, photos);
  };

  renderRow = (isWide: boolean) => {
    const availableRoom = this.props.availableRoom;
    const thumbnailUrl = idx(
      availableRoom,
      _ => _.room.photos.edges[0].node.thumbnailUrl,
    );
    const photoCount = idx(availableRoom, _ => _.room.photos.edges.length) || 0;
    const price = idx(availableRoom, _ => _.minimalPrice.amount) || null;
    const currency = idx(availableRoom, _ => _.minimalPrice.currency) || null;
    const selectableCount =
      idx(availableRoom, _ => _.incrementalPrice.length) || 0;
    const originalId = idx(availableRoom, _ => _.originalId) || '';
    const selectedCount = idx(this.props.selected, _ => _[originalId]) || 0;
    const room = idx(availableRoom, _ => _.room);
    return (
      <SimpleCard style={styles.card}>
        <View style={isWide ? styles.widePadding : null}>
          <View style={styles.row}>
            <RoomImage
              openGallery={this.openGallery}
              thumbnailUrl={thumbnailUrl}
              photoCount={photoCount}
            />
            <View style={styles.details}>
              <RoomRowTitle room={room} />
              <RoomBadges availableRoom={availableRoom} />
            </View>
          </View>
          <View style={styles.roomDetails}>
            <BeddingInfo room={room} />
            <RoomDescription room={room} />
          </View>
          <RoomPicker
            price={price}
            currency={currency}
            selectedCount={selectedCount}
            selectableCount={selectableCount}
            increment={this.select}
            decrement={this.deselect}
          />
        </View>
      </SimpleCard>
    );
  };

  render = () => (
    <AdaptableLayout
      renderOnNarrow={this.renderRow(false)}
      renderOnWide={this.renderRow(true)}
    />
  );
}

export default (createFragmentContainer(
  RoomRow,
  graphql`
    fragment RoomRow_availableRoom on HotelRoomAvailability {
      originalId
      ...RoomBadges_availableRoom
      room {
        description {
          title
        }
        ...RoomRowTitle_room
        ...RoomDescription_room
        photos {
          edges {
            node {
              thumbnailUrl
              highResUrl
              lowResUrl
              id
            }
          }
        }
        maxPersons
        ...BeddingInfo_room
      }
      minimalPrice {
        amount
        currency
      }
      incrementalPrice {
        amount
        currency
      }
    }
  `,
): React.ComponentType<ContainerProps>);
