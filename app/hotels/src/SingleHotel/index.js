// @flow

import HotelDetailScreen from './HotelDetailScreen';
import withFakeData from './withFakeData';

import type { Image } from '../gallery/GalleryGrid';

type ContainerProps = {
  onGoToHotelGallery: (hotelName: string, images: Image[]) => void,
};

export default withFakeData(
  HotelDetailScreen,
  ({ onGoToHotelGallery }: ContainerProps) => {
    return {
      openGallery: (hotelName: string, images: Image[]) =>
        onGoToHotelGallery(hotelName, images),
    };
  },
);
