// @flow
import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import HeaderContainer from './Header/HeaderContainer';

import type { Image } from '../gallery/GalleryGrid';
import LocationContainer from './Location/LocationContainer';
import DescriptionContainer from './Description/DescriptionContainer';
import type { SingleHotelQueryResponse } from './__generated__/SingleHotelQuery.graphql';

const styles = StyleSheet.create({
  underlay: {
    flex: 1,
    backgroundColor: '#edeff2',
  },
});

export type Props = {
  openGallery: (hotelName: string, images: Image[]) => void,
  hotel: SingleHotelQueryResponse,
};

export default function HotelDetailScreen({ openGallery, hotel }: Props) {
  return (
    <View style={styles.underlay}>
      <ScrollView>
        <HeaderContainer openGallery={openGallery} hotel={hotel} />
        <LocationContainer hotel={hotel} />
        <DescriptionContainer hotel={hotel} />
      </ScrollView>
    </View>
  );
}
