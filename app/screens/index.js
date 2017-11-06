// @flow

import * as React from 'react';
import { Text, Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import Store from '../src/redux/Store';
import SingleBooking from './bookings/SingleBooking';
import AllBookings from './bookings/AllBookings';
import Homepage from './homepage/Homepage';
import Profile from './profile/Profile';
import Search from './search/Search';
import Color from '../styles/Color';

const stackNavigatorOptions = {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#fff',
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      color: Color.grey._900,
    },
    headerTintColor: Color.grey._900,
  },
  cardStyle: {
    backgroundColor: '#fff',
  },
  headerMode: 'screen',
};

const ExploreStackNavigator = StackNavigator(
  {
    Home: {
      screen: Homepage,
      navigationOptions: {
        header: null,
      },
    },
    SearchResults: { screen: Search },
  },
  {
    ...stackNavigatorOptions,
    initialRouteName: 'Home',
  },
);

const TravelStackNavigator = StackNavigator(
  {
    AllBookings: {
      screen: AllBookings,
      navigationOptions: {
        header: null,
      },
    },
    SingleBooking: { screen: SingleBooking },
  },
  {
    ...stackNavigatorOptions,
    initialRouteName: 'AllBookings',
  },
);

const MainTabNavigator = TabNavigator(
  {
    Explore: {
      screen: ExploreStackNavigator,
      navigationOptions: {
        title: 'Explore',
        tabBarIcon: function Icon() {
          return <Text>E</Text>;
        },
      },
    },
    Trips: {
      screen: TravelStackNavigator,
      navigationOptions: {
        title: 'Trips',
        tabBarIcon: function Icon() {
          return <Text>T</Text>;
        },
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Profile',
        tabBarIcon: function Icon() {
          return <Text>P</Text>;
        },
      },
    },
  },
  {
    tabBarOptions: {
      ...Platform.select({
        ios: {
          activeTintColor: Color.brand,
        },
        android: {
          style: {
            backgroundColor: Color.brand,
          },
          activeTintColor: '#fff',
          inactiveTintColor: Color.grey._100,
          indicatorStyle: {
            backgroundColor: Color.grey._100,
          },
        },
      }),
    },
  },
);

export default class Application extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={Store}>
        <MainTabNavigator />
      </Provider>
    );
  }
}
