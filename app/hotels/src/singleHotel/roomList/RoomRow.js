// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
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
import type { RoomRow_availableRoom } from './__generated__/RoomRow_availableRoom.graphql';
import {
  withHotelDetailScreenContext,
  type HotelDetailScreenState,
} from '../HotelDetailScreenContext';
import {
  withHotelsContext,
  type HotelsContextState,
} from '../../HotelsContext';

type ContainerProps = {|
  +availableRoom: ?Object,
  +testID?: string,
|};

type Props = {|
  ...ContainerProps,
  +availableRoom: ?RoomRow_availableRoom,
  +navigation: NavigationType,
  +select: (availabilityId: string, maxPersons: number) => void,
  +deselect: (availabilityId: string, maxPersons: number) => void,
  +selected: {
    +[string]: number,
  },
  +numberOfRooms: number,
  +getGuestCount: () => number,
|};

export class RoomRow extends React.Component<Props> {
  isDisabled = () => this.props.getGuestCount() <= this.props.numberOfRooms;

  select = () => {
    if (this.isDisabled()) {
      Alert.translatedAlert(null, {
        id: 'single_hotel.alert.cannot_book_more_rooms_than_guests',
      });
    } else {
      const { id, maxPersons } = this.getIdAndMaxPersons();
      if (id && maxPersons) {
        this.props.select(id, maxPersons);
      }
    }
  };

  deselect = () => {
    const { id, maxPersons } = this.getIdAndMaxPersons();
    if (id && maxPersons) {
      this.props.deselect(id, maxPersons);
    }
  };

  getIdAndMaxPersons = () => {
    const id = this.props.availableRoom?.id;
    const maxPersons = this.props.availableRoom?.room?.maxPersons;
    return { id, maxPersons };
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
  };

  render() {
    const availableRoom = this.props.availableRoom;
    // New provider currently does not support lowResUrl, fallback to highResUrl in that case
    // ThumbnailUrl provides to low quality
    const photo = availableRoom?.room?.roomPhotos?.[0];
    const thumbnailUrl = photo?.lowResUrl ?? photo?.highResUrl;

    const amount = availableRoom?.minimalPrice?.amount ?? null;
    const currency = availableRoom?.minimalPrice?.currency ?? null;
    const selectableCount = availableRoom?.incrementalPrice?.length ?? 0;
    const id = availableRoom?.id ?? '';
    const selectedCount = this.props.selected[id] ?? 0;
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

const select = ({
  selected,
  numberOfRooms,
  actions: { selectRoom, deselectRoom },
}: HotelDetailScreenState) => ({
  select: selectRoom,
  deselect: deselectRoom,
  selected,
  numberOfRooms,
});

const selectHotelsContext = ({ getGuestCount }: HotelsContextState) => ({
  getGuestCount,
});

export default (createFragmentContainer(
  withNavigation(
    withHotelDetailScreenContext(select)(
      withHotelsContext(selectHotelsContext)(RoomRow),
    ),
  ),
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
