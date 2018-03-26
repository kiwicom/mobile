// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/react-native-app-playground';
import { DummyTranslation } from '@kiwicom/react-native-app-translations';

import Text from '../Text';

const DEEP_RENDER = true;

it('renders with the default properties for iOS', () => {
  PlaygroundRenderer.render(
    <Text>
      <DummyTranslation id="normal text" />
    </Text>,
    DEEP_RENDER,
  );
});

it('renders with additional style properties', () => {
  PlaygroundRenderer.render(
    <Text style={{ fontWeight: 'bold' }}>
      <DummyTranslation id="bold text" />
    </Text>,
    DEEP_RENDER,
  );
});

it('supports nested styles', () => {
  // WARNING: nested texts are deprecated - see https://github.com/facebook/react-native/issues/10775#issuecomment-370573892

  PlaygroundRenderer.render(
    <Text style={{ fontWeight: 'bold' }}>
      <DummyTranslation id="bold text " />
      <Text style={{ color: 'red' }}>
        <DummyTranslation id="and bold-red text" />
      </Text>
    </Text>,
    DEEP_RENDER,
  );
});

it('supports multiple nested strings', () => {
  // WARNING: nested texts are deprecated - see https://github.com/facebook/react-native/issues/10775#issuecomment-370573892

  PlaygroundRenderer.render(
    <Text
      style={{
        // this style is going to be inherited so every child text
        // should have this style property as well
        color: 'red',
      }}
    >
      <Text>
        <DummyTranslation id="red normal text " />
      </Text>
      <Text>
        <DummyTranslation id="and red normal text" />
      </Text>
    </Text>,
    DEEP_RENDER,
  );
});

it('works applies the styles recursively', () => {
  const Fence = ({ children }: {| children: React.Node |}) => children;
  PlaygroundRenderer.render(
    <Text style={{ fontWeight: 'bold' }}>
      <Fence>
        <Text style={{ color: 'red' }}>
          <DummyTranslation id="bold and red text" />
        </Text>
      </Fence>
    </Text>,
    DEEP_RENDER,
  );
});

it('works even with the distant Text nodes', () => {
  const Fence = () => (
    <Text>
      <DummyTranslation id="bold default text" />
    </Text>
  );

  PlaygroundRenderer.render(
    <Text style={{ fontWeight: 'bold' }}>
      <Fence />
    </Text>,
    DEEP_RENDER,
  );
});
