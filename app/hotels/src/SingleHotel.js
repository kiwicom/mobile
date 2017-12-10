// @flow

import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@kiwicom/react-native-app-common';

import type { Image } from './gallery/GalleryGrid';

type Props = {
  onGoToHotelGallery: (hotelName: string, images: Image[]) => void,
};

// TODO: this will be fetched from the GraphQL API
const images = [
  {
    key: '1',
    lowRes: 'http://aff.bstatic.com/images/hotel/max500/588/58853664.jpg',
    highRes: 'http://aff.bstatic.com/images/hotel/max500/588/58853664.jpg',
  },
  {
    key: '2',
    lowRes: 'http://aff.bstatic.com/images/hotel/max500/588/58853664.jpg',
    highRes: 'http://aff.bstatic.com/images/hotel/max500/588/58853664.jpg',
  },
  {
    key: '3',
    lowRes: 'http://aff.bstatic.com/images/hotel/max500/588/58853664.jpg',
    highRes: 'http://aff.bstatic.com/images/hotel/max500/588/58853664.jpg',
  },
  {
    key: '4',
    lowRes: 'http://aff.bstatic.com/images/hotel/max500/588/58853664.jpg',
    highRes: 'http://aff.bstatic.com/images/hotel/max500/588/58853664.jpg',
  },
  {
    key: '5',
    lowRes: 'http://aff.bstatic.com/images/hotel/max500/588/58853664.jpg',
    highRes: 'http://aff.bstatic.com/images/hotel/max500/588/58853664.jpg',
  },
];

export default class AllHotels extends React.Component<Props> {
  handleGoToHotelGallery = () =>
    this.props.onGoToHotelGallery('Hotel Hilton', images);

  render = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is SingleHotel component</Text>
      <Button
        title="Single hotel gallery"
        onPress={this.handleGoToHotelGallery}
      />
    </View>
  );
}
