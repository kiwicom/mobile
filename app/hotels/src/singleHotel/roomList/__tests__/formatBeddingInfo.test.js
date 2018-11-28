// @flow

import { BeddingInfo } from '../BeddingInfo';

it('formats bedding information', () => {
  // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
  const Component = new BeddingInfo({
    room: {
      type: 'Single Room',
      maxPersons: 1,
      bedding: [
        {
          type: 'Single Bed(s)',
          amount: 1,
        },
      ],
    },
  });
  expect(Component.formatBeddingInfo()).toMatchSnapshot();
});

it('pluralizes persons', () => {
  // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
  const Component = new BeddingInfo({
    room: {
      type: 'Double Room',
      maxPersons: 2,
      bedding: [
        {
          type: 'Single Bed(s)',
          amount: 2,
        },
      ],
    },
  });
  expect(Component.formatBeddingInfo()).toMatchSnapshot();
});

it('provides all bedding options', () => {
  // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
  const Component = new BeddingInfo({
    room: {
      type: 'Double or Twin Room',
      maxPersons: 2,
      bedding: [
        {
          type: 'Single Bed(s)',
          amount: 2,
        },
        {
          type: 'Twin Bed(s)',
          amount: 1,
        },
      ],
    },
  });
  expect(Component.formatBeddingInfo()).toMatchSnapshot();
});

it("doesn't crash on empty input", () => {
  expect(new BeddingInfo({ room: null }).formatBeddingInfo()).toMatchSnapshot();
  expect(
    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    new BeddingInfo({
      room: {
        type: 'Some Room',
        maxPersons: 2,
        bedding: null,
      },
    }).formatBeddingInfo(),
  ).toMatchSnapshot();
});
