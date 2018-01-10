// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { GeneralError, Layout } from '@kiwicom/react-native-app-common';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';

import Header from './header/Header';
import Location from './location/Location';
import Description from './description/Description';
import RoomList from './roomList/RoomList';
import type { Image } from '../gallery/GalleryGrid';
import type { HotelDetailScreen_availableHotel } from './__generated__/HotelDetailScreen_availableHotel.graphql';
import BookNow from './bookNow/BookNow';
import BrandLabel from './brandLabel/BrandLabel';

type Props = {|
  openGallery: (hotelName: string, images: Image[]) => void,
  availableHotel: HotelDetailScreen_availableHotel,
  onGoToPayment: ({
    hotelId: number,
    rooms: Array<{| id: string, count: number |}>,
  }) => void,
|};

type State = {|
  selected: {
    [string]: number, // originalId: count
  },
|};

export class HotelDetailScreen extends React.Component<Props, State> {
  state = {
    selected: {},
  };

  incrementSelectedCount = (availabilityOriginalId: string, amount: number) => {
    this.setState(state => {
      const previousCount =
        idx(state, _ => _.selected[availabilityOriginalId]) || 0;

      return {
        ...state,
        selected: {
          ...state.selected,
          [availabilityOriginalId]: previousCount + amount,
        },
      };
    });
  };

  selectRoom = (availabilityOriginalId: string) => {
    this.incrementSelectedCount(availabilityOriginalId, 1);
  };

  deselectRoom = (availabilityOriginalId: string) => {
    this.incrementSelectedCount(availabilityOriginalId, -1);
  };

  render() {
    const { openGallery, availableHotel, onGoToPayment } = this.props;
    const { selected } = this.state;
    if (!availableHotel) {
      return <GeneralError errorMessage="Hotel not found" />;
    }
    return (
      <Layout>
        <ScrollView>
          <Header openGallery={openGallery} hotel={availableHotel.hotel} />
          <Location hotel={availableHotel.hotel} />
          <Description hotel={availableHotel.hotel} />
          <RoomList
            data={availableHotel.availableRooms}
            select={this.selectRoom}
            deselect={this.deselectRoom}
            selected={selected}
          />
          <BrandLabel />
        </ScrollView>
        <BookNow
          onGoToPayment={onGoToPayment}
          selected={selected}
          availableRooms={availableHotel.availableRooms}
          hotel={availableHotel.hotel}
        />
      </Layout>
    );
  }
}

export default createFragmentContainer(
  HotelDetailScreen,
  graphql`
    fragment HotelDetailScreen_availableHotel on HotelAvailability {
      hotel {
        ...Header_hotel
        ...Location_hotel
        ...Description_hotel
        ...BookNow_hotel
      }
      availableRooms {
        ...RoomList
        ...BookNow_availableRooms
      }
    }
  `,
);
