// @flow

import {
  StackNavigator,
  StackNavigatorOptions,
} from '@kiwicom/mobile-navigation';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';

import MMBScreen from './MMBScreen';
import MMBListScreen from './MMBListScreen';

export default StackNavigator(
  {
    MMBList: {
      screen: withMappedProps(MMBListScreen),
    },
    MMB: {
      screen: MMBScreen,
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'MMBList',
  },
);
