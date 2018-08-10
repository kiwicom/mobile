// @flow

import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import {
  StackNavigator,
  StackNavigatorOptions,
} from '@kiwicom/mobile-navigation';

import Homepage from '../../screens/hotelsStack/Homepage';
import HotelsPackageWrapper from '../../screens/hotelsStack/HotelsPackageWrapper';
import SingleHotelsPackageWrapper from '../../screens/hotelsStack/SingleHotelPackageWrapper';
import NewHotelsPackageWrapper from '../../screens/hotelsStack/NewHotelsPackageWrapper';

export default StackNavigator(
  {
    Home: withMappedProps(Homepage),
    HotelsPackage: withMappedProps(HotelsPackageWrapper),
    SingleHotelPackage: withMappedProps(SingleHotelsPackageWrapper),
    NewHotelsPackage: withMappedProps(NewHotelsPackageWrapper),
  },
  {
    initialRouteName: 'Home',
    ...StackNavigatorOptions,
  },
);
