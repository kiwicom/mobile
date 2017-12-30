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
|};

function HotelDetailScreen({ openGallery, availableHotel }: Props) {
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
        <RoomList data={availableHotel.availableRooms} />
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
