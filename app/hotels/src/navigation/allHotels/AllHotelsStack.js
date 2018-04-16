// @flow

import {
  StackNavigator,
  StackNavigatorOptions,
} from '@kiwicom/mobile-navigation';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';

import AllHotelsNavigationScreen from './AllHotelsNavigationScreen';
import LocationPicker from './LocationPickerScreen';
import GuestsModalScreen from './GuestsModalScreen';

export default StackNavigator(
  {
    AllHotelsMain: {
      screen: withMappedProps(AllHotelsNavigationScreen),
    },
    LocationPicker: {
      screen: LocationPicker,
    },
    GuestsModal: {
      screen: GuestsModalScreen,
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'AllHotelsMain',
    mode: 'modal',
  },
);
