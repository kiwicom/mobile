// @flow

import CodePush from 'react-native-code-push';
import { AppRegistry, YellowBox } from 'react-native';
import {
  SingleHotelStandalonePackage,
  NewHotelsStandAlonePackage,
} from '@kiwicom/react-native-app-hotels';
import { AncillaryFactory } from '@kiwicom/react-native-ancillary-factory';

// TODO: please check if it's still needed
YellowBox.ignoreWarnings([
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

// AncillaryFactory
AppRegistry.registerComponent('AncillaryFactory', () => AncillaryFactory);

// This file is only used for native integration and we use CodePush there
CodePush.sync({
  installMode: CodePush.InstallMode.IMMEDIATE,
});
