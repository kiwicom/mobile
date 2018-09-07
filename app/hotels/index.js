// @flow

import { AppRegistry } from 'react-native';

import HotelsStandalonePackage from './src/appRegistry/HotelsStandalonePackage';
import SingleHotelStandalonePackage from './src/appRegistry/SingleHotelStandalonePackage';
import NewHotelsStandAlonePackage from './src/appRegistry/NewHotelsStandalonePackage';

AppRegistry.registerComponent('KiwiHotels', () => HotelsStandalonePackage);
AppRegistry.registerComponent(
  'NewKiwiHotels',
  () => NewHotelsStandAlonePackage,
);
AppRegistry.registerComponent(
  'SingleHotel',
  () => SingleHotelStandalonePackage,
);

export {
  SingleHotelStandalonePackage,
  HotelsStandalonePackage,
  NewHotelsStandAlonePackage,
};
