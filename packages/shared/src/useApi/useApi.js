// @flow strict

import * as React from 'react';

type ApiFactoryOptions<S> = {|
  +state: S,
  +setState: ((S => S) | S) => void,
|};

type ApiFactory<T, S> = (ApiFactoryOptions<S>) => T;

/**
 * This custom hook is used to separate advanced state logic from components.
 * This way it will be easier to test it isolated
 * Inspiration taken from https://medium.com/free-code-camp/why-you-should-choose-usestate-instead-of-usereducer-ffc80057f815
 * @param {*} apiFactory
 * @param {*} initialState
 * 
 * Usage example: 
 * const counterApiFactory = ({ state, setState }) => {
  const increment = () => {
    setState(prevState => {
      if (prevState.frozen) {
        return prevState;
      }
      return {
        ...prevState,
        count: prevState.count + 1
      };
    });
  };

  const setFrozen = frozen => {
    setState(prevState => ({
      ...prevState,
      frozen
    }));
  };

  const count = state.count;
  const frozen = state.frozen;

  return {
    increment,
    setFrozen,
    count,
    frozen
  };
};

const StateCounter = props => {
  const counterApi = useApi(counterApiFactory, {
    count: 0,
    frozen: false
  });

  useEffect(() => {
    counterApi.increment();
    counterApi.setFrozen(true);
    counterApi.increment();
  }, []);

  return <Text>{counterApi.count}</Text>;
};
 */
export default function useApi<T, S>(
  apiFactory: ApiFactory<T, S>,
  initialState: S,
): T {
  const [state, setState] = React.useState(initialState);

  return React.useMemo(() => {
    return apiFactory({ state, setState });
  }, [apiFactory, state, setState]);
}
