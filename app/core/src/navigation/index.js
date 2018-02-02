// @flow

import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import { ReduxContext } from '@kiwicom/react-native-app-redux';
import HotelsStandalonePackage from '@kiwicom/react-native-app-hotels';

import Config from '../../config/application';
import HomepageStack from './HomepageStack';
import UserReducer from '../services/redux/UserReducer';

type Props = {|
  navigation: Object, // FIXME: navigation type is still part of the core package
|};

const Navigation = StackNavigator(
  {
    Homepage: {
      screen: HomepageStack,
    },
    HotelsPackage: {
      screen: class HotelsPackageWrapper extends React.Component<Props> {
        goToHomepage = () => this.props.navigation.goBack();

        render = () => {
          const affiliate = String(Config.affiliate.bookingCom);
          return (
            <HotelsStandalonePackage
              bookingComAffiliate={affiliate}
              language="en"
              currency="EUR" // Only EUR is now fully supported as PriceFilter can't handle anything but EUR
              onBackClicked={this.goToHomepage}
              dataSaverEnabled={false}
            />
          );
        };
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
