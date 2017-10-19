// @flow

import * as React from 'react';
import { Text } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Booking from './booking/Booking';
import Homepage from './homepage/Homepage';
import Profile from './profile/Profile';
import Search from './search/Search';

const TravelStackNavigator = StackNavigator(
  {
    Booking: { screen: Booking },
    Home: { screen: Homepage },
    SearchResults: { screen: Search },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#01bba5',
      },
      headerTitleStyle: {
        color: '#fff',
      },
      headerTintColor: '#fff',
    },
    cardStyle: {
      backgroundColor: '#eee',
    },
  },
);

export default TabNavigator({
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
});
