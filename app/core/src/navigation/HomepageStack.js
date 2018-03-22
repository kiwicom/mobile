// @flow

import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import { StackNavigator } from 'react-navigation';
import { StackNavigatorOptions } from '@kiwicom/react-native-app-navigation';

import Homepage from '../screens/homepage/Homepage';
import LocationPicker from '../../../hotels/src/allHotels/searchForm/locationPicker/LocationPickerScreen';

const HomeStack = StackNavigator(
  {
    Home: {
      screen: withMappedProps(Homepage),
      navigationOptions: {
        title: 'Welcome',
      },
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

export default StackNavigator(
  {
    Main: {
      screen: HomeStack,
    },
    LocationPicker: {
      screen: withMappedProps(LocationPicker),
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'Main',
    mode: 'modal',
  },
);
