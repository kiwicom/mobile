// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { GeneralError, Layout } from '@kiwicom/react-native-app-common';
import { createFragmentContainer, graphql } from 'react-relay';

import HeaderContainer from './header/HeaderContainer';
import LocationContainer from './location/LocationContainer';
import DescriptionContainer from './description/DescriptionContainer';
import RoomList from './roomList/RoomList';
import type { Image } from '../gallery/GalleryGrid';
import type { HotelDetailScreen_availableHotel } from './__generated__/HotelDetailScreen_availableHotel.graphql';

export type Props = {|
  openGallery: (hotelName: string, images: Image[]) => void,
  availableHotel: HotelDetailScreen_availableHotel,
  onGoToPayment: ({
    hotelId: number,
    rooms: Array<{| id: string, count: number |}>,
  }) => void,
|};

function HotelDetailScreen({
  openGallery,
  availableHotel,
  onGoToPayment,
}: Props) {
  if (!availableHotel) {
    return <GeneralError errorMessage="Hotel not found" />;
  }
  return (
    <Layout>
      <ScrollView>
        <HeaderContainer
          openGallery={openGallery}
          hotel={availableHotel.hotel}
        />
        <LocationContainer hotel={availableHotel.hotel} />
        <DescriptionContainer hotel={availableHotel.hotel} />
        <RoomList
          data={availableHotel.availableRooms}
          onGoToPayment={onGoToPayment}
        />
      </ScrollView>
    </Layout>
  );
}

export default createFragmentContainer(
  HotelDetailScreen,
  graphql`
    fragment HotelDetailScreen_availableHotel on HotelAvailability {
      hotel {
        ...HeaderContainer_hotel
        ...LocationContainer_hotel
        ...DescriptionContainer_hotel
      }
      availableRooms {
        ...RoomList
      }
    }
  `,
);
