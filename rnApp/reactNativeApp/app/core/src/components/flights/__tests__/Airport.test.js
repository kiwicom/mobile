// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import { AirportWithoutData } from '../Airport';

it('renders without crashing', () => {
  const rendered = renderer
    .create(
      <AirportWithoutData
        data={{
          locationId: 'MCN',
          city: {
            name: 'Mocked City Name',
          },
        }}
      />,
    )
    .toJSON();
  expect(rendered).toMatchSnapshot();
});
