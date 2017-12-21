// @flow

import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import HeaderContainer from './header/HeaderContainer';
import LocationContainer from './location/LocationContainer';
import DescriptionContainer from './description/DescriptionContainer';

import type { Image } from '../gallery/GalleryGrid';
import type { singleHotelQueryResponse } from './__generated__/singleHotelQuery.graphql';

const styles = StyleSheet.create({
  underlay: {
    flex: 1,
    backgroundColor: '#edeff2',
  },
});

export type Props = {|
  openGallery: (hotelName: string, images: Image[]) => void,
  hotel: singleHotelQueryResponse,
|};

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
