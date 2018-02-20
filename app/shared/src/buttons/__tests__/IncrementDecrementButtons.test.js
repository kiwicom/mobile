// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import IncrementDecrementButtons from '../IncrementDecrementButtons';
import TouchableItem from '../../TouchableItem';

const renderButtons = (
  onIncrement: Function,
  onDecrement: Function,
  number: number,
) => {
  return renderer.create(
    <IncrementDecrementButtons
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      number={number}
      min={1}
      max={3}
    />,
  );
};

describe('IncrementDecrementButtons', () => {
  it('should increment', () => {
    const onIncrement = jest.fn();
    const onDecrement = jest.fn();
    const testRenderer = renderButtons(onIncrement, onDecrement, 2);
    const testInstance = testRenderer.root;

    testInstance.findAllByType(TouchableItem)[1].props.onPress();

    expect(onIncrement).toBeCalled();
    expect(onDecrement).not.toBeCalled();
  });

  it('should decrement', () => {
    const onIncrement = jest.fn();
    const onDecrement = jest.fn();
    const testRenderer = renderButtons(onIncrement, onDecrement, 2);
    const testInstance = testRenderer.root;

    testInstance.findAllByType(TouchableItem)[0].props.onPress();

    expect(onDecrement).toBeCalled();
    expect(onIncrement).not.toBeCalled();
  });

  it('should not decrement under min', () => {
    const onIncrement = jest.fn();
    const onDecrement = jest.fn();
    const testRenderer = renderButtons(onIncrement, onDecrement, 1);
    const testInstance = testRenderer.root;

    // find a single descendant test instance with the provided type
    // if there is not exactly one test instance with the provided type, it will throw an error
    expect(testInstance.findByType(TouchableItem).props.onPress).toBe(
      onIncrement,
    );
  });

  it('should not increment over max', () => {
    const onIncrement = jest.fn();
    const onDecrement = jest.fn();
    const testRenderer = renderButtons(onIncrement, onDecrement, 3);
    const testInstance = testRenderer.root;

    // find a single descendant test instance with the provided type
    // if there is not exactly one test instance with the provided type, it will throw an error
    expect(testInstance.findByType(TouchableItem).props.onPress).toBe(
      onDecrement,
    );
  });
});
