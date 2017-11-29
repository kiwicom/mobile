// @flow

type NavigationStateParameters = Object;

type ExploreStackNavigatorRouteNames = 'Home' | 'SearchResults' | 'WebBooking';
type TripsStackNavigatorRouteNames = 'AllBookings' | 'SingleBooking';
type HotelsStackNavigatorRouteNames =
  | 'AllHotels'
  | 'AllHotelsMap'
  | 'SingleHotel'
  | 'Gallery';
type MainTabNavigatorRouteNames = 'Explore' | 'Trips' | 'Profile';

type RouteNames =
  | ExploreStackNavigatorRouteNames
  | TripsStackNavigatorRouteNames
  | HotelsStackNavigatorRouteNames
  | MainTabNavigatorRouteNames;

/**
 * @see https://reactnavigation.org/docs/navigators/navigation-prop
 */
export type Navigation = {
  navigate: (
    routeName: RouteNames,
    parameters?: NavigationStateParameters,
  ) => void,
  state: {
    params: NavigationStateParameters,
  },
  setParams: (newParameters: NavigationStateParameters) => void,
  goBack: () => void,
};
