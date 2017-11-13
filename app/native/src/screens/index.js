// @flow

import * as React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';

import { configureStore } from '../services/redux/Store';
import SingleBooking from './bookings/SingleBooking';
import AllBookings from './bookings/AllBookings';
import Homepage from './homepage/Homepage';
import Profile from './profile/Profile';
import Search from './search/Search';
import Color from '../styles/Color';
import TabBarIcon from '../components/navigation/TabBarIcon';

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
        tabBarIcon: function TabBarIconWrapper(props) {
          return <TabBarIcon type="Explore" {...props} />;
        },
      },
    },
    Trips: {
      screen: TravelStackNavigator,
      navigationOptions: {
        tabBarIcon: function TabBarIconWrapper(props) {
          return <TabBarIcon type="Trips" {...props} />;
        },
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: function TabBarIconWrapper(props) {
          return <TabBarIcon type="Profile" {...props} />;
        },
      },
    },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: Color.brand,
      showLabel: false,
    },
  },
);

const { persistor, store } = configureStore();

export default class Application extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MainTabNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
