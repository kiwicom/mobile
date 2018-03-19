// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/react-native-app-playground';

import Text from '../Text';

const DEEP_RENDER = true;

it('renders with the default properties for iOS', () => {
  PlaygroundRenderer.render(<Text>normal text</Text>, DEEP_RENDER);
});

it('renders with additional style properties', () => {
  PlaygroundRenderer.render(
    <Text style={{ fontWeight: 'bold' }}>bold text</Text>,
    DEEP_RENDER,
  );
});

it('supports nested styles', () => {
  PlaygroundRenderer.render(
    <Text style={{ fontWeight: 'bold' }}>
      bold text <Text style={{ color: 'red' }}>and bold-red text</Text>
    </Text>,
    DEEP_RENDER,
  );
});

it('supports multiple nested strings', () => {
  PlaygroundRenderer.render(
    <Text
      style={{
        // this style is going to be inherited so every child text
        // should have this style property as well
        color: 'red',
      }}
    >
      <Text>red normal text </Text>
      <Text>and red normal text</Text>
    </Text>,
    DEEP_RENDER,
  );
});

it('works with nullable child', () => {
  // this happens when for example API returns null and we are trying
  // to render it inside of string
  PlaygroundRenderer.render(
    <Text>
      {'default'} {null} {'default'} {undefined} {'default'}
    </Text>,
    DEEP_RENDER,
  );
});

it('works applies the styles recursively', () => {
  const Fence = ({ children }) => children;
  PlaygroundRenderer.render(
    <Text style={{ fontWeight: 'bold' }}>
      <Fence>
        <Text style={{ color: 'red' }}>bold and red text</Text>
      </Fence>
    </Text>,
    DEEP_RENDER,
  );
});

it('works even with the distant Text nodes', () => {
  const Fence = () => <Text>bold default text</Text>;

  PlaygroundRenderer.render(
    <Text style={{ fontWeight: 'bold' }}>
      <Fence />
    </Text>,
    DEEP_RENDER,
  );
});
