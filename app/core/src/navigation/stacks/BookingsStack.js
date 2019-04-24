// @flow strict

import {
  StackNavigator,
  StackNavigatorOptions,
} from '@kiwicom/mobile-navigation';
import { FastTrackBanner } from '@kiwicom/react-native-fast-track';

export default StackNavigator(
  {
    Banner: {
      screen: FastTrackBanner,
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'Banner',
  },
);
