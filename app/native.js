// @flow

import CodePush from 'react-native-code-push';
import { AppRegistry } from 'react-native';
import {
  SingleHotelStandalonePackage,
  NewHotelsStandAlonePackage,
} from '@kiwicom/react-native-app-hotels';
import { FastTrackBanner } from '@kiwicom/react-native-fast-track';

// Hotels
AppRegistry.registerComponent(
  'NewKiwiHotels',
  () => NewHotelsStandAlonePackage,
);
AppRegistry.registerComponent(
  'SingleHotel',
  () => SingleHotelStandalonePackage,
);

// Fast Track
AppRegistry.registerComponent('FastTrackBanner', () => FastTrackBanner);

// This file is only used for native integration and we use CodePush there
CodePush.sync({
  installMode: CodePush.InstallMode.IMMEDIATE,
});
