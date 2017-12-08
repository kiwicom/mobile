// @flow
import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import HeaderContainer from './Header/HeaderContainer';

import type { Image } from '../gallery/GalleryGrid';
import LocationContainer from './Location/LocationContainer';
import DescriptionContainer from './Description/DescriptionContainer';

const styles = StyleSheet.create({
  underlay: {
    flex: 1,
    backgroundColor: '#edeff2',
  },
});

export type Props = {
  openGallery: (hotelName: string, images: Image[]) => void,
};

export default function HotelDetailScreen({ openGallery }: Props) {
  return (
    <View style={styles.underlay}>
      <ScrollView>
        <HeaderContainer openGallery={openGallery} />
        <LocationContainer />
        <DescriptionContainer />
      </ScrollView>
    </View>
  );
}
