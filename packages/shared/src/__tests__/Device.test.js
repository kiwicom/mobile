// @flow

import Device from '../Device';

it('is able to emit dimension changes', () => {
  const sink = [];
  Device.subscribeToDimensionChanges(newDimensions => {
    sink.push(newDimensions);
  });

  expect(sink).toEqual([]);
  Device.emitDimensionChanges(1, 2);
  expect(sink).toEqual([
    {
      height: 1,
      width: 2,
    },
  ]);
  Device.emitDimensionChanges(3, 4);
  expect(sink).toEqual([
    {
      height: 1,
      width: 2,
    },
    {
      height: 3,
      width: 4,
    },
  ]);
});

it('is possible to unsubscribe', () => {
  const sink = [];
  const unsubscribe = Device.subscribeToDimensionChanges(newDimensions => {
    sink.push(newDimensions);
  });

  expect(sink).toEqual([]);
  Device.emitDimensionChanges(1, 2);
  expect(sink).toEqual([
    {
      height: 1,
      width: 2,
    },
  ]);
  unsubscribe();
  Device.emitDimensionChanges(3, 4);
  expect(sink).toEqual([
    {
      height: 1,
      width: 2,
    },
  ]);
});
