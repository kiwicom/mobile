// @flow

type NavigationStateParameters = Object;

// FIXME: this is related to the packages and not navigation
type CoreStackNavigatorRouteNames = 'Homepage' | 'HotelsPackage';
type HotelsStackNavigatorNames =
  | 'AllHotelsMap'
  | 'GalleryGrid'
  | 'GalleryStripe'
  | 'Payment'
  | 'SingleHotel'
  | 'SingleHotelMap';
type HomepageStackNavigatorRouteNames = 'Home';

type RouteNames =
  | CoreStackNavigatorRouteNames
  | HotelsStackNavigatorNames
  | HomepageStackNavigatorRouteNames;

/**
 * @see https://reactnavigation.org/docs/navigators/navigation-prop
 */
export type Navigation = {
  navigate: ({
    routeName: RouteNames,
    key: string, // should be unique
    params?: NavigationStateParameters,
  }) => void,
  state: {
    params: NavigationStateParameters,
  },
  setParams: (newParameters: NavigationStateParameters) => void,
  goBack: () => void,
};
