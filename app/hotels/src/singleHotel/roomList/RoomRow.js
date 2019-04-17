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
import { HotelsContext, type HotelsContextState } from '../../HotelsContext';

type Props = {|
  +testID?: string,
  +availableRoom: ?RoomType,
  +navigation: NavigationType,
  +numberOfRooms: number,
  +relay: RelayProp,
|};

export function RoomRow(props: Props) {
  const { getGuestCount }: HotelsContextState = React.useContext(HotelsContext);

  const availableRoom = props.availableRoom;
  const isDisabled = props.numberOfRooms >= getGuestCount();
  const id = availableRoom?.id;
  const maxPersons = availableRoom?.room?.maxPersons;
  const type = availableRoom?.room?.description?.title ?? '';
  const roomId = availableRoom?.room?.id ?? '';
  const selectedCount = availableRoom?.selectedCount ?? 0;

  function select() {
    if (isDisabled) {
      Alert.translatedAlert(null, {
        id: 'single_hotel.alert.cannot_book_more_rooms_than_guests',
      });
      return;
    }

    if (id && maxPersons) {
      Logger.hotelsDetailRoomSelected(roomId, type);
      commitLocalUpdate(props.relay.environment, store => {
        const room = store.get(id);
        if (room != null) {
          room.setValue(selectedCount + 1, 'selectedCount');
        }
      });
    }
  }

  function deselect() {
    if (id && maxPersons) {
      commitLocalUpdate(props.relay.environment, store => {
        const room = store.get(id);
        if (room != null) {
          room.setValue(selectedCount - 1, 'selectedCount');
        }
      });
    }
  }

  function openGallery() {
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
    props.navigation.navigate('GalleryGrid', {
      hotelName: roomTitle,
      images: photos,
    });
    Logger.hotelsGalleryOpened(
      Logger.HotelGalleryType.HOTELS_GALLERY_TYPE_ROOM,
    );
  }

  // New provider currently does not support lowResUrl, fallback to highResUrl in that case
  // ThumbnailUrl provides to low quality
  const photo = availableRoom?.room?.roomPhotos?.[0];
  const thumbnailUrl = photo?.lowResUrl ?? photo?.highResUrl;
  const amount = availableRoom?.minimalCost?.amount ?? null;
  const currency = availableRoom?.minimalCost?.currencyId ?? null;
  const selectableCount = availableRoom?.availableRoomsCount ?? 0;
  const room = availableRoom?.room;

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.row}>
          <RoomImage openGallery={openGallery} thumbnailUrl={thumbnailUrl} />
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
          increment={select}
          decrement={deselect}
          testID={props.testID}
          disabled={isDisabled}
        />
      </View>
    </View>
  );
}

export default createFragmentContainer(withNavigation(RoomRow), {
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
});

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
