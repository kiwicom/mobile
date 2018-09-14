// @flow

import { AppRegistry } from 'react-native';
import {
  SingleHotelStandalonePackage,
  HotelsStandalonePackage,
  NewHotelsStandAlonePackage,
} from '@kiwicom/react-native-app-hotels';

// Hotels
AppRegistry.registerComponent('KiwiHotels', () => HotelsStandalonePackage);
AppRegistry.registerComponent(
  'NewKiwiHotels',
  () => NewHotelsStandAlonePackage,
);
AppRegistry.registerComponent(
  'SingleHotel',
  () => SingleHotelStandalonePackage,
);

// ManageMyBookings
