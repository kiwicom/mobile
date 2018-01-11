// @flow

import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import { ReduxContext } from '@kiwicom/react-native-app-redux';
import HotelsStandalonePackage from '@kiwicom/react-native-app-hotels';

import Config from '../../config/application';
import HomepageStack from './HomepageStack';
import UserReducer from '../services/redux/UserReducer';

const Navigation = StackNavigator(
  {
    Homepage: {
      screen: HomepageStack,
    },
    HotelsPackage: {
      screen: function HotelsPackageWrapper() {
        const affiliate = String(Config.affiliate.bookingCom);
        return (
          <HotelsStandalonePackage
            bookingComAffiliate={affiliate}
            language="en"
            currency="EUR"
          />
        );
      },
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
