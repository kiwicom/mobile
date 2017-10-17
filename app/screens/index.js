// @flow

import { StackNavigator } from 'react-navigation';

import Booking from './booking/Booking';
import Homepage from './homepage/Homepage';
import Search from './search/Search';

export default StackNavigator(
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
  },
);
