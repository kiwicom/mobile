// @flow

type NavigationStateParameters = Object;

/**
 * @see https://reactnavigation.org/docs/navigators/navigation-prop
 */
export type Navigation = {
  navigate: (routeName: string, parameters?: NavigationStateParameters) => void,
  state: {
    params: NavigationStateParameters,
  },
  setParams: (newParameters: NavigationStateParameters) => void,
  goBack: () => void,
};
