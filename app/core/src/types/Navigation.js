// @flow

type NavigationStateParameters = Object;

type HomepageStackNavigatorRouteNames = 'Home';
type HotelsStackNavigatorRouteNames =
  | 'AllHotels'
  | 'AllHotelsMap'
  | 'GalleryGrid'
  | 'GalleryStripe'
  | 'Payment'
  | 'SingleHotel';

type RouteNames =
  | HomepageStackNavigatorRouteNames
  | HotelsStackNavigatorRouteNames;

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
