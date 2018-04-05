// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import testRenderer from 'react-test-renderer';
import { Text } from '@kiwicom/react-native-app-shared';

import TranslationFragment from '../TranslationFragment';
import DummyTranslation from '../DummyTranslation';

const renderer = new ShallowRenderer();

it('passes all props down to the children', () => {
  expect(
    renderer.render(
      <TranslationFragment textTransform="uppercase">
        <DummyTranslation id={1} />
        <DummyTranslation id={2} />
      </TranslationFragment>,
    ),
  ).toMatchSnapshot();
});

it('works without additional props', () => {
  expect(
    renderer.render(
      <TranslationFragment>
        <DummyTranslation id={1} />
      </TranslationFragment>,
    ),
  ).toMatchSnapshot();
});

it('throws error for undefined children', () => {
  expect(() =>
    // $FlowExpectedError: Flow doesn't allow empty children either
    renderer.render(<TranslationFragment />),
  ).toThrowErrorMatchingSnapshot();
});

it('works with conditionals', () => {
  expect(
    testRenderer.create(
      <TranslationFragment>
        {false && <DummyTranslation id="I should NOT render" />}
        <DummyTranslation id="I should render" />
      </TranslationFragment>,
    ),
  ).toMatchSnapshot();
});

it('works with string as child', () => {
  expect(
    testRenderer.create(
      <TranslationFragment>
        this is a string
        <DummyTranslation id="I should render" />
      </TranslationFragment>,
    ),
  ).toMatchSnapshot();
});

it('works with nested fragments', () => {
  expect(
    testRenderer.create(
      <TranslationFragment textTransform="lowercase">
        <DummyTranslation id="level AAA.1" />
        <TranslationFragment>
          {/* these translations (vv) are going to be lowercased as well */}
          <DummyTranslation id="level BBB.1" />
          <DummyTranslation id="level BBB.2" />
        </TranslationFragment>
        <DummyTranslation id="level AAA.2" />
      </TranslationFragment>,
    ),
  ).toMatchSnapshot();
});

it('overwrites the previous textTransform property', () => {
  expect(
    testRenderer.create(
      <TranslationFragment textTransform="lowercase">
        <TranslationFragment textTransform="uppercase">
          <DummyTranslation id="this should be uppercased" />
        </TranslationFragment>
      </TranslationFragment>,
    ),
  ).toMatchSnapshot();
});

it('transforms only translations friendly components', () => {
  expect(
    testRenderer.create(
      <TranslationFragment textTransform="uppercase">
        <DummyTranslation id="this is going to be uppercased" />
        {/* $FlowExpectedError: string is not allowed in the Text but I want to test it */}
        <Text>this is going to stay lowercased</Text>
      </TranslationFragment>,
    ),
  ).toMatchSnapshot();
});
