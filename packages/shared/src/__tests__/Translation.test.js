// @flow strict

import { replaceValues } from '@kiwicom/mobile-localization';

import Translation from '../Translation';

it('replaces parameter', () => {
  expect(
    replaceValues('Your flight __number__ departs now.', {
      number: 42,
    }),
  ).toBe('Your flight 42 departs now.');
});

it('replaces parameters', () => {
  expect(
    replaceValues(
      'Your flight __1_number__ departs from __2_airport__ gate __3_gate__.',
      {
        number: 42,
        airport: 'PRG',
        gate: 'C2',
      },
    ),
  ).toBe('Your flight 42 departs from PRG gate C2.');
});

it('works without parameters', () => {
  expect(replaceValues('Your flight departs now.')).toBe(
    'Your flight departs now.',
  );
});

it('works without value to replace', () => {
  expect(replaceValues('Your flight __number__ departs now.')).toBe(
    'Your flight ? departs now.',
  );
  expect(replaceValues('Your flight __number__ departs now.', {})).toBe(
    'Your flight ? departs now.',
  );
});

it('works with pass through translations', () => {
  const Component = Translation({
    passThrough: 'This text should be returned as is.',
  });
  expect(Component).toMatchSnapshot();
});

it('works with optional pass through parameter', () => {
  const Component = Translation({
    passThrough: undefined,
  });
  expect(Component).toMatchSnapshot();
});

it('works with pass through translations and text transformations', () => {
  const Component = Translation({
    passThrough: 'This text should be returned in uppercase.',
    textTransform: 'uppercase',
  });
  expect(Component).toMatchSnapshot();
});
