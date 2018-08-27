// @flow strict

import * as React from 'react';
import renderer from 'react-test-renderer';
import { translate } from '@kiwicom/rnmodules';

import Translation from '../Translation';
import { replaceValues } from '../TranslationHelpers';

const CancellableTranslation = require('../CancellableTranslation');

let Component;
beforeEach(() => {
  Component = new Translation({
    // $FlowExpectedError: we are not using real key for testing purposes
    id: 'test.key',
  });
});

const getComponent = (id: string = 'test.key') => {
  // $FlowExpectedError: we are not using real key for testing purposes
  return renderer.create(<Translation id={id} />);
};

it('should call getTranslationAsync with the key parameter', () => {
  getComponent();
  expect(translate).toBeCalledWith('mobile.test.key');
});

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
  const Component = new Translation({
    passThrough: 'This text should be returned as is.',
  });
  expect(Component.render()).toMatchSnapshot();
});

it('works with optional pass through parameter', () => {
  const Component = new Translation({
    passThrough: undefined,
  });
  expect(Component.render()).toMatchSnapshot();
});

it('works with pass through translations and text transformations', () => {
  const Component = new Translation({
    passThrough: 'This text should be returned in uppercase.',
    textTransform: 'uppercase',
  });
  expect(Component.render()).toMatchSnapshot();
});

it('does not call set state if promise is rejected', async () => {
  let originalFunction = CancellableTranslation.cancellableTranslation;
  // $FlowExpectedError: Intentionally overwriting function to test outcome
  CancellableTranslation.cancellableTranslation = jest.fn(() => ({
    promise: new Promise((resolve, reject) => {
      reject();
    }),
  }));

  jest.spyOn(Component, 'setState');
  await Component.setTranslatedString();

  expect(Component.setState).not.toHaveBeenCalled();
  // $FlowExpectedError: Intentionally resetting function
  CancellableTranslation.cancellableTranslation = originalFunction;
});

it('asks for new translation if id changes', () => {
  jest.spyOn(Component, 'setTranslatedString');
  Component.componentDidUpdate({ id: 'new.id' });

  expect(Component.setTranslatedString).toHaveBeenCalled();
});

it('does not ask for new translation if id does not change', () => {
  jest.spyOn(Component, 'setTranslatedString');
  Component.componentDidUpdate({ id: 'test.key' });

  expect(Component.setTranslatedString).not.toHaveBeenCalled();
});
