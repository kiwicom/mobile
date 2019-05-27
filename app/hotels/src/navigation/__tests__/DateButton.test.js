// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-shared';
import { create } from 'react-test-renderer';

import DateButton from '../DateButton';

it('renders', () => {
  expect(
    create(
      <DateButton>
        <Translation passThrough="lol" />
      </DateButton>,
    ),
  ).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "backgroundColor": "#e8edf1",
          "borderRadius": 2,
          "marginBottom": 10,
          "padding": 10,
        }
      }
    >
      <Text
        style={
          Array [
            Object {
              "color": "#171b1e",
              "fontFamily": "CircularPro-Book",
              "fontSize": 14,
              "fontWeight": "normal",
              "letterSpacing": -0.15,
            },
            Object {
              "color": "#252A31",
              "fontSize": 12,
            },
          ]
        }
      >
        <Text>
          lol
        </Text>
      </Text>
    </View>
  `);
});
