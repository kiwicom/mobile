// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';
import { Translation } from '@kiwicom/mobile-localization';

import Text from '../Text';

const DEEP_RENDER = true;

it('renders with the default properties for iOS', () => {
  PlaygroundRenderer.render(
    <Text>
      <Translation passThrough="normal text" />
    </Text>,
    DEEP_RENDER,
  );
});

it('renders with additional style properties', () => {
  PlaygroundRenderer.render(
    <Text style={{ fontWeight: 'bold' }}>
      <Translation passThrough="bold text" />
    </Text>,
    DEEP_RENDER,
  );
});

it('supports nested styles', () => {
  // WARNING: nested texts are deprecated - see https://github.com/facebook/react-native/issues/10775#issuecomment-370573892

  PlaygroundRenderer.render(
    <Text style={{ fontWeight: 'bold' }}>
      <Translation passThrough="bold text " />
      <Text style={{ color: 'red' }}>
        <Translation passThrough="and bold-red text" />
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
        <Translation passThrough="red normal text " />
      </Text>
      <Text>
        <Translation passThrough="and red normal text" />
      </Text>
    </Text>,
    DEEP_RENDER,
  );
});

it('applies the styles recursively', () => {
  const Fence = ({ children }: {| children: React.Node |}) => children;
  PlaygroundRenderer.render(
    <Text style={{ fontWeight: 'bold' }}>
      <Fence>
        <Text style={{ color: 'red' }}>
          <Translation passThrough="bold and red text" />
        </Text>
      </Fence>
    </Text>,
    DEEP_RENDER,
  );
});

it('works even with the distant Text nodes', () => {
  const Fence = () => (
    <Text>
      <Translation passThrough="bold default text" />
    </Text>
  );

  PlaygroundRenderer.render(
    <Text style={{ fontWeight: 'bold' }}>
      <Fence />
    </Text>,
    DEEP_RENDER,
  );
});
