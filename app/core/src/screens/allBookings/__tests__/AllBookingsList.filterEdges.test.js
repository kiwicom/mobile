// @flow

import { filterEdges } from '../AllBookingsList';

// This is our pivot: dates after and equal to this date are considered "future"
// $FlowExpectedError: Flow is not happy about this magic, but it's OK
Date.now = jest.fn().mockReturnValue(new Date(3));

const dataset = [
  { node: { arrival: { localTime: new Date(1) }, assets: null }, cursor: 'x' },
  { node: { arrival: { localTime: new Date(2) }, assets: null }, cursor: 'x' },
  { node: { arrival: { localTime: new Date(3) }, assets: null }, cursor: 'x' }, // future
  { node: { arrival: { localTime: new Date(4) }, assets: null }, cursor: 'x' }, // future
  { node: { arrival: { localTime: new Date(5) }, assets: null }, cursor: 'x' }, // future
];

it('filters future/current and past trips based on arrival', () => {
  expect(filterEdges(dataset)).toMatchSnapshot();
});
