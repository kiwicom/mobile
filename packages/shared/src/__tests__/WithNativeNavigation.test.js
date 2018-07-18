// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import { GestureController } from '@kiwicom/mobile-shared';

import WithNativeNavigation from '../WithNativeNavigation';

type Props = {
  onNavigationStateChange: () => void,
  onBackClicked: () => void,
};

describe('WithNativeNavigation', () => {
  const WrappedComponent = class TestComponent extends React.Component<Props> {
    render() {
      return null;
    }
  };

  const TestKey = 'test-key';
  const getComponent = () => {
    const Component = WithNativeNavigation(WrappedComponent, TestKey);
    return renderer.create(<Component />);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('enables gestures if it was not enabled', () => {
    const onNavigationStateChange = getComponent().getInstance()
      .onNavigationStateChange;

    const callEnable = () =>
      onNavigationStateChange(
        {},
        {
          routes: [
            {
              routes: [],
            },
          ],
        },
      );

    callEnable();
    expect(GestureController.enableGestures).toHaveBeenCalledTimes(1);

    callEnable();
    // Still 1 time because we do not call if it was the last call
    expect(GestureController.enableGestures).toHaveBeenCalledTimes(1);
  });

  it('disables gestures if it was not enabled 1', () => {
    const onNavigationStateChange = getComponent().getInstance()
      .onNavigationStateChange;

    const callDisable = () =>
      onNavigationStateChange(
        {},
        {
          routes: [
            {
              routes: [{ index: 0 }, { index: 1 }],
            },
          ],
        },
      );

    callDisable();
    expect(GestureController.disableGestures).toHaveBeenCalledTimes(1);

    callDisable();
    // Still 1 time because we do not call if it was the last call
    expect(GestureController.disableGestures).toHaveBeenCalledTimes(1);
  });

  it('disables gestures if it was not enabled 2', () => {
    const onNavigationStateChange = getComponent().getInstance()
      .onNavigationStateChange;

    onNavigationStateChange(
      {},
      {
        routes: [
          {
            routes: [],
          },
          {
            routes: [],
          },
        ],
      },
    );
    expect(GestureController.disableGestures).toHaveBeenCalledTimes(1);
  });

  it('handles the back button', () => {
    const instance = getComponent().getInstance();
    const onNavigationStateChange = instance.onNavigationStateChange;
    const onBackClicked = instance.onBackClicked;

    // Enabled first state
    expect(onBackClicked()).toBe(true);
    expect(GestureController.invokeDefaultBackButton).toHaveBeenCalledTimes(1);

    GestureController.invokeDefaultBackButton.mockClear();

    // Disabled it
    onNavigationStateChange(
      {},
      {
        routes: [
          {
            routes: [{ index: 0 }, { index: 1 }],
          },
        ],
      },
    );
    expect(onBackClicked()).toBe(false);
    expect(GestureController.invokeDefaultBackButton).toHaveBeenCalledTimes(0);
  });
});
