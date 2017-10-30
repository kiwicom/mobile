// @flow

import * as React from 'react';
import { Text, Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import Store from '../src/redux/Store';
import Booking from './booking/Booking';
import Homepage from './homepage/Homepage';
import Profile from './profile/Profile';
import Search from './search/Search';
import { caption, neutral100, white, font } from '../styles/colors';

const TravelStackNavigator = StackNavigator(
  {
    Booking: { screen: Booking },
    Home: {
      screen: Homepage,
    },
    SearchResults: { screen: Search },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: white,
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        color: font,
      },
      headerTintColor: font,
    },
    cardStyle: {
      backgroundColor: white,
    },
  },
);

const MainTabNavigator = TabNavigator(
  {
    Travel: {
      screen: TravelStackNavigator,
      navigationOptions: {
        title: 'Travel',
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
          activeTintColor: caption,
        },
        android: {
          style: {
            backgroundColor: caption,
          },
          activeTintColor: white,
          inactiveTintColor: neutral100,
          indicatorStyle: {
            backgroundColor: neutral100,
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
