// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import { RenderSearchResults } from '../RenderSearchResults';

const defaultProps = (
  stats: Object = { maxPrice: 100, minPrice: 50 },
  show = 'list',
) => ({
  show,
  setCurrentSearchStats: jest.fn(),
  data: {
    allAvailableBookingComHotels: {
      stats,
    },
  },
});

jest.mock('../../map/allHotels/MapScreen');
jest.mock('../AllHotelsSearchList');

it('it initiales correctly when it should show list', () => {
  // $FlowExpectedError: Passing only props needed for this test
  const wrapper = renderer.create(<RenderSearchResults {...defaultProps()} />);
  expect(wrapper.root.findByProps({ testID: 'list-wrapper' }).props.style)
    .toMatchInlineSnapshot(`
    Object {
      "bottom": 0,
      "end": 0,
      "position": "absolute",
      "start": 0,
      "top": undefined,
      "transform": Array [
        Object {
          "translateY": 0,
        },
      ],
    }
  `);
  expect(wrapper.root.findByProps({ testID: 'map-wrapper' }).props.style)
    .toMatchInlineSnapshot(`
    Object {
      "bottom": 0,
      "end": 0,
      "position": "absolute",
      "start": 0,
      "top": undefined,
      "transform": Array [
        Object {
          "translateY": 1334,
        },
      ],
    }
  `);
});

it('it initiales correctly when it should show map', () => {
  const wrapper = renderer.create(
    // $FlowExpectedError: Passing only props needed for this test
    <RenderSearchResults {...defaultProps({}, 'map')} />,
  );
  expect(wrapper.root.findByProps({ testID: 'list-wrapper' }).props.style)
    .toMatchInlineSnapshot(`
    Object {
      "bottom": 0,
      "end": 0,
      "position": "absolute",
      "start": 0,
      "top": undefined,
      "transform": Array [
        Object {
          "translateY": -100,
        },
      ],
    }
  `);
  expect(wrapper.root.findByProps({ testID: 'map-wrapper' }).props.style)
    .toMatchInlineSnapshot(`
    Object {
      "bottom": 0,
      "end": 0,
      "position": "absolute",
      "start": 0,
      "top": undefined,
      "transform": Array [
        Object {
          "translateY": 0,
        },
      ],
    }
  `);
});
