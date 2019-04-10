// @flow strict

import * as React from 'react';

import type { Navigation } from '../types/Navigation';

type SetParams = $PropertyType<Navigation, 'setParams'>;

/**
 * React-navigation, useEffect and eslint-rule react-hooks/exhaustive-deps does not work well together.
 * react-hooks/exhaustive-deps ensures that you add all props that should be watched.
 * When calling props.navigation.setParams in a useEffect hook, props.navigation.state.params changes, causing
 * the component to go into endless re-render.
 * This custom hook is a workaround for this, ensuring that you watch all values passed to set params, but not react-navigation itself.
 */
export default function useSetNavigationParams<T: {}>(
  setParams: SetParams,
  config: T,
) {
  React.useEffect(() => {
    setParams(config);
  }, Object.values(config)); // eslint-disable-line react-hooks/exhaustive-deps
}
