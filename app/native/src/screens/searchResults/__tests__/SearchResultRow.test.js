// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { SearchResultRowWithoutData } from '../SearchResultRow';
import ReactNavigation from './__mocks__/ReactNavigation';

const renderer = new ShallowRenderer();

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
      navigation={ReactNavigation}
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
          null, // simulates random API failure
        ],
        bookingUrl: 'https://www.kiwi.com/en/booking?faked=true',
      }}
      navigation={ReactNavigation}
    />,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
