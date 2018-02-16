// @flow

import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import { ReduxContext } from '@kiwicom/react-native-app-redux';

import HomepageStack from './HomepageStack';
import UserReducer from '../services/redux/UserReducer';
import HotelsPackageWrapper from '../screens/HotelsPackageWrapper';

const Navigation = StackNavigator(
  {
    Homepage: {
      screen: HomepageStack,
    },
    HotelsPackage: {
      screen: HotelsPackageWrapper,
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
