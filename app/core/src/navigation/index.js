// @flow

import * as React from 'react';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import { ReduxContext } from '@kiwicom/mobile-redux';
import { StackNavigator } from '@kiwicom/mobile-navigation';

import HomepageStack from './HomepageStack';
import UserReducer from '../services/redux/UserReducer';
import HotelsPackageWrapper from '../screens/HotelsPackageWrapper';
import SingleHotelsPackageWrapper from '../screens/SingleHotelPackageWrapper';

const Navigation = StackNavigator(
  {
    Homepage: {
      screen: HomepageStack,
    },
    HotelsPackage: {
      screen: withMappedProps(HotelsPackageWrapper),
    },
    SingleHotelPackage: {
      screen: withMappedProps(SingleHotelsPackageWrapper),
    },
  },
  {
    initialRouteName: 'Homepage',
    navigationOptions: {
      header: null,
    },
  },
);

export default class Application extends React.Component<{||}> {
  render = () => {
    const hotelsReducers = {
      user: UserReducer,
    };

    return (
      <ReduxContext reducers={hotelsReducers}>
        <Navigation />
      </ReduxContext>
    );
  };
}
