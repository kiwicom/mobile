// @flow

import { AppRegistry, YellowBox } from 'react-native';
import { AncillaryFactory } from '@kiwicom/react-native-ancillary-factory';

// TODO: please check if it's still needed
YellowBox.ignoreWarnings([
  'Class GenericShare was not exported. Did you forget to use RCT_EXPORT_MODULE()',
  'Class WhatsAppShare was not exported. Did you forget to use RCT_EXPORT_MODULE()',
  'Class GooglePlusShare was not exported. Did you forget to use RCT_EXPORT_MODULE()',
  'Class InstagramShare was not exported. Did you forget to use RCT_EXPORT_MODULE()',
]);

// Ancillaries
AppRegistry.registerComponent('AncillaryFactory', () => AncillaryFactory);
