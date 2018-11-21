// @flow

import RootComponent from '../RootComponent';

it('calculates number of guests correctly with undefined roomsConfig', () => {
  // $FlowExpectedError: Intentionally testing with bad input
  const Component = new RootComponent({});
  expect(Component.getGuestCount()).toBe(0);
});

it('calculates number of guests correctly', () => {
  // $FlowExpectedError: Passing only props needed for test to run
  const Component = new RootComponent({
    roomsConfiguration: [
      { adultsCount: 2, children: [] },
      { adultsCount: 1 },
      { adultsCount: 1, children: [{ age: 0 }, { age: 2 }, { age: 17 }] },
    ],
  });

  expect(Component.getGuestCount()).toBe(7);
});
