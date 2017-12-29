// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { GeneralError, Layout } from '@kiwicom/react-native-app-common';

import HeaderContainer from './header/HeaderContainer';
import LocationContainer from './location/LocationContainer';
import DescriptionContainer from './description/DescriptionContainer';
import RoomList from './roomList/RoomList';
import type { Image } from '../gallery/GalleryGrid';

export type Props = {|
  openGallery: (hotelName: string, images: Image[]) => void,
  availableHotel: ?Object,
|};

export default function HotelDetailScreen({
  openGallery,
  availableHotel,
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
        <RoomList availableRooms={availableHotel.availableRooms} />
      </ScrollView>
    </Layout>
  );
}
