// @flow

import { getDistanceText } from '../HotelDistance';

const cityCenterRadius = 1.5;

it('Distance should be in the city center', () => {
  expect(getDistanceText(1.3, cityCenterRadius)).toMatchInlineSnapshot(`
<Translation
  id="hotels_search.hotel_distance.in_city_center"
/>
`);
});

it('Distance should be in meters and rounded up to 100', () => {
  expect(getDistanceText(1.81, cityCenterRadius)).toMatchInlineSnapshot(`
<Translation
  id="hotels_search.hotel_distance.meters_from_center"
  values={
    Object {
      "distance": 400,
    }
  }
/>
`);
  expect(getDistanceText(1.89, cityCenterRadius)).toMatchInlineSnapshot(`
<Translation
  id="hotels_search.hotel_distance.meters_from_center"
  values={
    Object {
      "distance": 400,
    }
  }
/>
`);
});

it('Distance should be in km', () => {
  expect(getDistanceText(4.81, cityCenterRadius)).toMatchInlineSnapshot(`
<Translation
  id="hotels_search.hotel_distance.kilo_meters_from_center"
  values={
    Object {
      "distance": "3.3",
    }
  }
/>
`);
});
