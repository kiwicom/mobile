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
import { defaultTokens } from '@kiwicom/mobile-orbit';

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
|};

type Props = {|
  ...ContainerProps,
  +availableRoom: ?RoomRow_availableRoom,
  +navigation: NavigationType,
|};

export class RoomRow extends React.Component<Props> {
  shouldComponentUpdate = (nextProps: Props) => !isEqual(nextProps, this.props);
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
    this.props.navigation.navigate('GalleryGrid', {
      hotelName: roomTitle,
      images: photos,
    });
  };

  render = () => {
    const availableRoom = this.props.availableRoom;
    const thumbnailUrl = idx(
      availableRoom,
      _ => _.room.photos.edges[0].node.lowResUrl,
    );
    const amount = idx(availableRoom, _ => _.minimalPrice.amount) || null;
    const currency = idx(availableRoom, _ => _.minimalPrice.currency) || null;
    const selectableCount =
      idx(availableRoom, _ => _.incrementalPrice.length) || 0;
    const originalId = idx(availableRoom, _ => _.originalId) || '';
    const selectedCount = idx(this.props.selected, _ => _[originalId]) || 0;
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
          />
        </View>
      </View>
    );
  };
}

export default (createFragmentContainer(
  withNavigation(RoomRow),
  graphql`
    fragment RoomRow_availableRoom on HotelRoomAvailability {
      originalId
      ...RoomBadges_availableRoom
      room {
        description {
          title
        }
        ...RoomRowTitle_room
        photos {
          edges {
            node {
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

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: defaultTokens.paletteInkLighter,
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
