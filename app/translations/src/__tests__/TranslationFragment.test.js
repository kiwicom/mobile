// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import testRenderer from 'react-test-renderer';

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
  const int = 1;
  expect(
    testRenderer.create(
      <TranslationFragment>
        {int === 0 && <DummyTranslation id="I should not render" />}
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
