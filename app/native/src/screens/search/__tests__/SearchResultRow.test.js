// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { SearchResultRowWithoutData } from '../SearchResultRow';

const renderer = new ShallowRenderer();

const navigation = {
  navigate: (screen: string, parameters?: Object) => {}, // eslint-disable-line no-unused-vars
  state: { params: {} },
};

it('renders without legs', () => {
  renderer.render(
    <SearchResultRowWithoutData
      node={{
        duration: null,
        price: null,
        departure: null,
        arrival: null,
        legs: null,
        bookingUrl: null,
      }}
      navigation={navigation}
    />,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('renders with partial legs', () => {
  renderer.render(
    <SearchResultRowWithoutData
      node={{
        duration: 60, // minutes
        price: {},
        departure: {
          localTime: '2017-11-19T09:00:00',
        },
        arrival: {
          localTime: '2017-11-19T12:00:00',
        },
        legs: [
          {
            id: '1',
            airline: {},
          },
          null, // simulates API failure
        ],
        bookingUrl:
          'https://www.kiwi.com/en/booking?passengers=1-0-0&price=27&token=TjFsU9KOyjpEDqm5dNSrO1ZjuRMVMgZrERrSppD325T6P8%2BP9w468E%2B3gYirNKm0xjFEaQ8brFkJXYHcFnHHQCLzHIOgXdSALYw%2B1E9gBHy4iROEATMv%2BVOrhnavl9TJOQ6nUMKttD9Kp%2BnYVHS%2Bg%2BH3eDwpD2tmBv6kMs4%2FvZ2T%2BaiEPwDOanzNDV9ssOBFTS5LrsxAgTuj91xEFd0RVNXVmGBeOjHfa9FMBnTq%2FMKRaTNBd0qsaAQ2H8Zv7zYi%2FqhMUowidxu%2BJOXCGEIm0ER6bCkglC4mea830Cu%2F9r4p%2BWUmQP1cLzJL65sPae20ZzBxroK27yQ6sH9djwQu7lq%2BmuBvhOTxNSRwE9VNJhEr6%2B3%2FjBnOiP7RRKMBlSxIF7EXsDzqY6qRtySPDRCFvSlBTtSuK8zOAO0g%2FQzq%2ByOoH0scl0yUJnVcsKyx0HsOnUQHaW4CoqZZxZrAItSVZNOvB8VuloUzWIa4Tq5wM9mBFwFbyfYIAm27%2Ba2rznXqHXyQSdefryqbhFqzBqqArueqlyZU0Y40EJe%2Fiz96yxg%3D',
      }}
      navigation={navigation}
    />,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
