// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { Layout } from '@kiwicom/react-native-app-common';

import HeaderContainer from './header/HeaderContainer';
import LocationContainer from './location/LocationContainer';
import DescriptionContainer from './description/DescriptionContainer';

import type { Image } from '../gallery/GalleryGrid';
import type { singleHotelQueryResponse } from './__generated__/singleHotelQuery.graphql';

export type Props = {|
  openGallery: (hotelName: string, images: Image[]) => void,
  hotel: singleHotelQueryResponse,
|};

export default function HotelDetailScreen({ openGallery, hotel }: Props) {
  return (
    <Layout>
      <ScrollView>
        <HeaderContainer openGallery={openGallery} hotel={hotel} />
        <LocationContainer hotel={hotel} />
        <DescriptionContainer hotel={hotel} />
      </ScrollView>
    </Layout>
  );
}
