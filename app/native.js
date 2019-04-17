// @flow

import CodePush from 'react-native-code-push';
import { AppRegistry } from 'react-native';
import {
  SingleHotelStandalonePackage,
  NewHotelsStandAlonePackage,
} from '@kiwicom/react-native-app-hotels';
import { AncillaryFactory } from '@kiwicom/react-native-ancillary-factory';

// Hotels
AppRegistry.registerComponent(
  'NewKiwiHotels',
  () => NewHotelsStandAlonePackage,
);
AppRegistry.registerComponent(
  'SingleHotel',
  () => SingleHotelStandalonePackage,
);

// AncillaryFactory
AppRegistry.registerComponent('AncillaryFactory', () => AncillaryFactory);

// This file is only used for native integration and we use CodePush there
CodePush.sync({
  installMode: CodePush.InstallMode.IMMEDIATE,
});
