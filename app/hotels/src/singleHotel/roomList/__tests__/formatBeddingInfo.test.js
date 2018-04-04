// @flow

import formatBeddingInfo from '../formatBeddingInfo';

it('formats bedding information', () => {
  expect(
    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    formatBeddingInfo({
      type: 'Single Room',
      maxPersons: 1,
      bedding: [
        {
          type: 'Single Bed(s)',
          amount: 1,
        },
      ],
    }),
  ).toMatchSnapshot();
});

it('pluralizes persons', () => {
  expect(
    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    formatBeddingInfo({
      type: 'Double Room',
      maxPersons: 2,
      bedding: [
        {
          type: 'Single Bed(s)',
          amount: 2,
        },
      ],
    }),
  ).toMatchSnapshot();
});

it('provides all bedding options', () => {
  expect(
    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    formatBeddingInfo({
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
    }),
  ).toMatchSnapshot();
});

it("doesn't crash on empty input", () => {
  expect(formatBeddingInfo(null)).toEqual('');
  expect(
    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    formatBeddingInfo({
      type: 'Some Room',
      maxPersons: 2,
      bedding: null,
    }),
  ).toMatchSnapshot();
});
