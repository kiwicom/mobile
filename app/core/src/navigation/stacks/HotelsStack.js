// @flow

import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import {
  StackNavigator,
  StackNavigatorOptions,
} from '@kiwicom/mobile-navigation';

import Homepage from '../../screens/hotelsStack/Homepage';
import HotelsPackageWrapper from '../../screens/hotelsStack/HotelsPackageWrapper';
import SingleHotelsPackageWrapper from '../../screens/hotelsStack/SingleHotelPackageWrapper';

export default StackNavigator(
  {
    Home: withMappedProps(Homepage),
    HotelsPackage: withMappedProps(HotelsPackageWrapper),
    SingleHotelPackage: withMappedProps(SingleHotelsPackageWrapper),
  },
  {
    initialRouteName: 'Home',
    ...StackNavigatorOptions,
  },
);
