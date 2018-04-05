// @flow

import { AppRegistry } from 'react-native';

import HotelsStandalonePackage from './src/appRegistry/HotelsStandalonePackage';
import SingleHotelStandalonePackage from './src/appRegistry/SingleHotelStandalonePackage';

AppRegistry.registerComponent('KiwiHotels', () => HotelsStandalonePackage);
AppRegistry.registerComponent(
  'SingleHotel',
  () => SingleHotelStandalonePackage,
);

export { SingleHotelStandalonePackage, HotelsStandalonePackage };
