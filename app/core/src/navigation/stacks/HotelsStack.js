// @flow

import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import {
  StackNavigator,
  StackNavigatorOptions,
} from '@kiwicom/mobile-navigation';

import Homepage from '../../screens/hotelsStack/Homepage';
import SingleHotelsPackageWrapper from '../../screens/hotelsStack/SingleHotelPackageWrapper';
import NewHotelsPackageWrapper from '../../screens/hotelsStack/NewHotelsPackageWrapper';

const Stack = StackNavigator(
  {
    Home: withMappedProps(Homepage),
    SingleHotelPackage: withMappedProps(SingleHotelsPackageWrapper),
    NewHotelsPackage: withMappedProps(NewHotelsPackageWrapper),
  },
  {
    initialRouteName: 'Home',
    mode: 'modal',
    ...StackNavigatorOptions,
    defaultNavigationOptions: {
      ...StackNavigatorOptions.defaultNavigationOptions,
      gesturesEnabled: false,
    },
  },
);

Stack.navigationOptions = ({ navigation }) => ({
  tabBarVisible: navigation.state.index === 0,
});

export default Stack;
