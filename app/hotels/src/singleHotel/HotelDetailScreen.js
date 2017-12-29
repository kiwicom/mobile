// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { GeneralError, Layout } from '@kiwicom/react-native-app-common';

import HeaderContainer from './header/HeaderContainer';
import LocationContainer from './location/LocationContainer';
import DescriptionContainer from './description/DescriptionContainer';
import type { Image } from '../gallery/GalleryGrid';

export type Props = {|
  openGallery: (hotelName: string, images: Image[]) => void,
  availableHotel: any,
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
      </ScrollView>
    </Layout>
  );
}
