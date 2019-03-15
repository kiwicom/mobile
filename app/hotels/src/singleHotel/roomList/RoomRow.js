// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Logger } from '@kiwicom/mobile-shared';
import {
  createFragmentContainer,
  graphql,
  commitLocalUpdate,
  type RelayProp,
} from '@kiwicom/mobile-relay';
import {
  type NavigationType,
  withNavigation,
} from '@kiwicom/mobile-navigation';
import { Alert } from '@kiwicom/mobile-localization';

import RoomPicker from '../roomPicker/RoomPicker';
import RoomImage from './RoomImage';
import BeddingInfo from './BeddingInfo';
import RoomRowTitle from './RoomRowTitle';
import RoomBadges from './RoomBadges';
import type { RoomRow_availableRoom as RoomType } from './__generated__/RoomRow_availableRoom.graphql';
import {
  withHotelsContext,
  type HotelsContextState,
} from '../../HotelsContext';

type Props = {|
  +testID?: string,
  +availableRoom: ?RoomType,
  +navigation: NavigationType,
  +getGuestCount: () => number,
  +numberOfRooms: number,
  +relay: RelayProp,
|};

export class RoomRow extends React.Component<Props> {
  isDisabled = () => this.props.numberOfRooms >= this.props.getGuestCount();

  select = () => {
    if (this.isDisabled()) {
      Alert.translatedAlert(null, {
        id: 'single_hotel.alert.cannot_book_more_rooms_than_guests',
      });
      return;
    }
    const {
      id,
      maxPersons,
      type,
      roomId,
      selectedCount,
    } = this.getSelectData();

    if (id && maxPersons) {
      Logger.hotelsDetailRoomSelected(roomId, type);
      commitLocalUpdate(this.props.relay.environment, store => {
        const room = store.get(id);
        if (room != null) {
          room.setValue(selectedCount + 1, 'selectedCount');
        }
      });
    }
  };

  deselect = () => {
    const { id, maxPersons, selectedCount } = this.getSelectData();
    if (id && maxPersons) {
      commitLocalUpdate(this.props.relay.environment, store => {
        const room = store.get(id);
        if (room != null) {
          room.setValue(selectedCount - 1, 'selectedCount');
        }
      });
    }
  };

  getSelectData = () => {
    const id = this.props.availableRoom?.id;
    const maxPersons = this.props.availableRoom?.room?.maxPersons;
    const type = this.props.availableRoom?.room?.description?.title ?? '';
    const roomId = this.props.availableRoom?.room?.id ?? '';
    const selectedCount = this.props.availableRoom?.selectedCount ?? 0;
    return { id, maxPersons, type, roomId, selectedCount };
  };

  openGallery = () => {
    const { availableRoom } = this.props;
    const photosArray = availableRoom?.room?.roomPhotos ?? [];

    const photos = photosArray.map(photo => {
      const highRes = photo?.highResUrl ?? '';
      const lowRes = photo?.lowResUrl ?? highRes; // Fallback to highResUrl since stay22 do not provide lowResUrl
      const key = photo?.id ?? '';
      return {
        key,
        highRes,
        lowRes,
      };
    });

    const roomTitle = availableRoom?.room?.description?.title ?? '';
    this.props.navigation.navigate('GalleryGrid', {
      hotelName: roomTitle,
      images: photos,
    });
    Logger.hotelsGalleryOpened(
      Logger.HotelGalleryType.HOTELS_GALLERY_TYPE_ROOM,
    );
  };

  render() {
    const availableRoom = this.props.availableRoom;
    // New provider currently does not support lowResUrl, fallback to highResUrl in that case
    // ThumbnailUrl provides to low quality
    const photo = availableRoom?.room?.roomPhotos?.[0];
    const thumbnailUrl = photo?.lowResUrl ?? photo?.highResUrl;

    const amount = availableRoom?.minimalCost?.amount ?? null;
    const currency = availableRoom?.minimalCost?.currencyId ?? null;

    const selectableCount = availableRoom?.availableRoomsCount ?? 0;
    const selectedCount = this.props.availableRoom?.selectedCount ?? 0;
    const room = availableRoom?.room;

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
            disabled={this.isDisabled()}
          />
        </View>
      </View>
    );
  }
}

const selectHotelsContext = ({ getGuestCount }: HotelsContextState) => ({
  getGuestCount,
});

export default createFragmentContainer(
  withNavigation(withHotelsContext(selectHotelsContext)(RoomRow)),
  {
    availableRoom: graphql`
      fragment RoomRow_availableRoom on HotelRoomAvailabilityInterface {
        id
        selectedCount
        ...RoomBadges_availableRoom
        minimalCost {
          amount
          currencyId
        }
        availableRoomsCount
        room {
          id
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
  },
);

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
