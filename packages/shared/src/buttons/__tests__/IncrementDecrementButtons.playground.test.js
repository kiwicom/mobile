// @flow

import * as React from 'react';
import { View } from 'react-native';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import IncrementDecrementButtons from '../IncrementDecrementButtons';

it('renders', () => {
  const onIncrement = jest.fn();
  const onDecrement = jest.fn();
  PlaygroundRenderer.render(
    <IncrementDecrementButtons
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      number={2}
      min={1}
      max={3}
    />,
    false,
    'IncrementDecrementButtons',
  );
});

it('shows number', () => {
  const onIncrement = jest.fn();
  const onDecrement = jest.fn();
  PlaygroundRenderer.render(
    <View style={{ backgroundColor: 'white', padding: 10 }}>
      <IncrementDecrementButtons
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        number={2}
        showNumber={true}
        min={1}
        max={3}
        numberStyle={{ padding: 10 }}
      />
    </View>,
    false,
    'IncrementDecrementButtons',
  );
});

it('render disabled', () => {
  const onIncrement = jest.fn();
  const onDecrement = jest.fn();
  PlaygroundRenderer.render(
    <View style={{ backgroundColor: 'white', padding: 10 }}>
      <IncrementDecrementButtons
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        number={2}
        showNumber={true}
        min={1}
        max={2}
        numberStyle={{ padding: 10 }}
      />
    </View>,
    false,
    'IncrementDecrementButtons',
  );
});
