// @flow

type NavigationStateParameters = Object;

type CoreStackNavigatorRouteNames = 'Homepage' | 'HotelsPackage';
type HomepageStackNavigatorRouteNames = 'Home';

type RouteNames =
  | CoreStackNavigatorRouteNames
  | HomepageStackNavigatorRouteNames;

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
