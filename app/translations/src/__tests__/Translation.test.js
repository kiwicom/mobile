// @flow

import { NativeModules } from 'react-native';

import Translation from '../Translation';

let Component;
beforeEach(() => {
  Component = new Translation({
    // $FlowExpectedError: we are not using real key for testing purposes
    id: 'test.key',
  });
});

it('should call NativeModules.RNTranslationManager.translate with the key parameter', () => {
  Component.render();
  expect(NativeModules.RNTranslationManager.translate).toBeCalledWith(
    'test.key',
  );
});

it('replaces parameter', () => {
  expect(
    Component.replaceValues('Your flight __number__ departs now.', {
      number: 42,
    }),
  ).toBe('Your flight 42 departs now.');
});

it('replaces parameters', () => {
  expect(
    Component.replaceValues(
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
  expect(Component.replaceValues('Your flight departs now.')).toBe(
    'Your flight departs now.',
  );
});

it('works without value to replace', () => {
  expect(Component.replaceValues('Your flight __number__ departs now.')).toBe(
    'Your flight ? departs now.',
  );
  expect(
    Component.replaceValues('Your flight __number__ departs now.', {}),
  ).toBe('Your flight ? departs now.');
});
