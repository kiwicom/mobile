// @flow

import { StackNavigator } from 'react-navigation';

import Homepage from './homepage/Homepage';
import Search from './search/Search';

export default StackNavigator(
  {
    Home: { screen: Homepage },
    SearchResults: { screen: Search },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#01bba5',
      },
      headerTitleStyle: {
        color: '#fff',
      },
      headerTintColor: '#fff', // what is this?
    },
  },
);
