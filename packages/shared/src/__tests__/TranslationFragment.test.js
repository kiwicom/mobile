// @flow strict

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import testRenderer from 'react-test-renderer';

import Text from '../Text';
import Translation from '../Translation';
import TranslationFragment from '../TranslationFragment';

const renderer = new ShallowRenderer();

it('passes all props down to the children', () => {
  expect(
    renderer.render(
      <TranslationFragment textTransform="uppercase">
        <Translation passThrough={1} />
        <Translation passThrough={2} />
      </TranslationFragment>,
    ),
  ).toMatchSnapshot();
});

it('works without additional props', () => {
  expect(
    renderer.render(
      <TranslationFragment>
        <Translation passThrough={1} />
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
        {false && <Translation passThrough="I should NOT render" />}
        <Translation passThrough="I should render" />
      </TranslationFragment>,
    ),
  ).toMatchSnapshot();
});

it('works with string as child', () => {
  expect(
    testRenderer.create(
      <TranslationFragment>
        this is a string
        <Translation passThrough="I should render" />
      </TranslationFragment>,
    ),
  ).toMatchSnapshot();
});

it('works with nested fragments', () => {
  expect(
    testRenderer.create(
      <TranslationFragment textTransform="lowercase">
        <Translation passThrough="level AAA.1" />
        <TranslationFragment>
          {/* these translations (vv) are going to be lowercased as well */}
          <Translation passThrough="level BBB.1" />
          <Translation passThrough="level BBB.2" />
        </TranslationFragment>
        <Translation passThrough="level AAA.2" />
      </TranslationFragment>,
    ),
  ).toMatchSnapshot();
});

it('overwrites the previous textTransform property', () => {
  expect(
    testRenderer.create(
      <TranslationFragment textTransform="lowercase">
        <TranslationFragment textTransform="uppercase">
          <Translation passThrough="this should be uppercased" />
        </TranslationFragment>
      </TranslationFragment>,
    ),
  ).toMatchSnapshot();
});

it('transforms only translations friendly components', () => {
  expect(
    testRenderer.create(
      <TranslationFragment textTransform="uppercase">
        <Translation passThrough="this is going to be uppercased" />
        {/* $FlowExpectedError: string is not allowed in the Text but I want to test it */}
        <Text>this is going to stay lowercased</Text>
      </TranslationFragment>,
    ),
  ).toMatchSnapshot();
});
