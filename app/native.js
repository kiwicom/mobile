// @flow

import CodePush from 'react-native-code-push';
import { AppRegistry, YellowBox } from 'react-native';
import {
  SingleHotelStandalonePackage,
  NewHotelsStandAlonePackage,
} from '@kiwicom/react-native-app-hotels';

// TODO: please check if it's still needed
YellowBox.ignoreWarnings([
  // react-native-share warnings. Should be gone with the version 1.1.3
  'Class GenericShare was not exported. Did you forget to use RCT_EXPORT_MODULE()',
  'Class WhatsAppShare was not exported. Did you forget to use RCT_EXPORT_MODULE()',
  'Class GooglePlusShare was not exported. Did you forget to use RCT_EXPORT_MODULE()',
  'Class InstagramShare was not exported. Did you forget to use RCT_EXPORT_MODULE()',
]);

// Hotels
AppRegistry.registerComponent(
  'NewKiwiHotels',
  () => NewHotelsStandAlonePackage,
);
AppRegistry.registerComponent(
  'SingleHotel',
  () => SingleHotelStandalonePackage,
);

// This file is only used for native integration and we use CodePush there
CodePush.sync();
