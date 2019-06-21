// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import { RenderSearchResults } from '../RenderSearchResults';
import SearchResultsContext from '../../navigation/allHotels/SearchResultsContext';

const defaultProps = (stats: Object = { maxPrice: 100, minPrice: 50 }) => ({
  setCurrentSearchStats: jest.fn(),
  data: {
    allAvailableBookingComHotels: {
      stats,
    },
  },
});

jest.mock('../../map/allHotels/MapScreen');
jest.mock('../AllHotelsSearchList');

it('initialises correctly when it should show list', () => {
  const wrapper = renderer.create(
    <SearchResultsContext.Provider show="list">
      {/* $FlowExpectedError: Passing only props needed for this test */}
      <RenderSearchResults {...defaultProps()} />
    </SearchResultsContext.Provider>,
  );
  expect(wrapper.root.findByProps({ testID: 'list-wrapper' }).props.style)
    .toMatchInlineSnapshot(`
    Array [
      Object {
        "bottom": 0,
        "end": 0,
        "position": "absolute",
        "start": 0,
        "top": 56,
      },
      Object {
        "opacity": 1,
        "transform": Array [
          Object {
            "translateY": 0,
          },
        ],
      },
    ]
  `);
  expect(wrapper.root.findByProps({ testID: 'map-wrapper' }).props.style)
    .toMatchInlineSnapshot(`
        Array [
          Object {
            "bottom": 0,
            "end": 0,
            "position": "absolute",
            "start": 0,
            "top": 56,
          },
          Object {
            "transform": Array [
              Object {
                "translateY": 1334,
              },
            ],
          },
        ]
    `);
});

it('initialises correctly when it should show map', () => {
  const wrapper = renderer.create(
    <SearchResultsContext.Provider show="map">
      {/* $FlowExpectedError: Passing only props needed for this test */}
      <RenderSearchResults {...defaultProps()} />,
    </SearchResultsContext.Provider>,
  );
  expect(wrapper.root.findByProps({ testID: 'list-wrapper' }).props.style)
    .toMatchInlineSnapshot(`
    Array [
      Object {
        "bottom": 0,
        "end": 0,
        "position": "absolute",
        "start": 0,
        "top": 56,
      },
      Object {
        "opacity": 1,
        "transform": Array [
          Object {
            "translateY": -100,
          },
        ],
      },
    ]
  `);
  expect(wrapper.root.findByProps({ testID: 'map-wrapper' }).props.style)
    .toMatchInlineSnapshot(`
        Array [
          Object {
            "bottom": 0,
            "end": 0,
            "position": "absolute",
            "start": 0,
            "top": 56,
          },
          Object {
            "transform": Array [
              Object {
                "translateY": 0,
              },
            ],
          },
        ]
    `);
});
