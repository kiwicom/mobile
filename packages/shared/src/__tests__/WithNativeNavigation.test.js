// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import GestureController from '../GestureController';
import WithNativeNavigation from '../WithNativeNavigation';

type Props = {|
  onNavigationStateChange: () => void,
  onBackClicked: () => void,
|};

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

  const sharedInstance = getComponent().getInstance();

  it('calls enable when we init WithNativeNavigation', () => {
    getComponent().getInstance();
    expect(GestureController.enableGestures).toHaveBeenCalledTimes(1);
  });

  it('enables gestures if it was not enabled 1', () => {
    sharedInstance.isEnabled = false;
    sharedInstance.lastCall = 'disabled';
    const onNavigationStateChange = sharedInstance.onNavigationStateChange;

    const callEnable = () => {
      onNavigationStateChange(
        {},
        {
          index: 0,
          routes: [{ index: 0 }],
        },
      );
    };

    callEnable();
    expect(GestureController.enableGestures).toHaveBeenCalledTimes(1);

    callEnable();
    // Still 1 time because we do not call if it was the last call
    expect(GestureController.enableGestures).toHaveBeenCalledTimes(1);
  });

  it('enables gestures if it was not enabled 2', () => {
    sharedInstance.isEnabled = false;
    sharedInstance.lastCall = 'disabled';
    const onNavigationStateChange = sharedInstance.onNavigationStateChange;

    const callEnable = () => {
      onNavigationStateChange(
        {},
        {
          index: 0,
          routes: [{}],
        },
      );
    };

    callEnable();
    expect(GestureController.enableGestures).toHaveBeenCalledTimes(1);

    callEnable();
    // Still 1 time because we do not call if it was the last call
    expect(GestureController.enableGestures).toHaveBeenCalledTimes(1);
  });

  it('disables gestures if it was not disabled 1', () => {
    sharedInstance.isEnabled = true;
    sharedInstance.lastCall = 'enabled';
    const onNavigationStateChange = sharedInstance.onNavigationStateChange;

    const callDisable = () =>
      onNavigationStateChange(
        {},
        {
          index: 1,
          routes: [{ index: 1 }],
        },
      );

    callDisable();
    expect(GestureController.disableGestures).toHaveBeenCalledTimes(1);

    callDisable();
    // Still 1 time because we do not call if it was the last call
    expect(GestureController.disableGestures).toHaveBeenCalledTimes(1);
  });

  it('disables gestures if it was not disabled 2', () => {
    sharedInstance.isEnabled = true;
    sharedInstance.lastCall = 'enabled';
    const onNavigationStateChange = sharedInstance.onNavigationStateChange;

    onNavigationStateChange(
      {},
      {
        index: 0,
        routes: [{ index: 1 }],
      },
    );

    expect(GestureController.disableGestures).toHaveBeenCalledTimes(1);
  });

  it('handles the back button', () => {
    sharedInstance.isEnabled = true;
    sharedInstance.lastCall = 'enabled';

    const onNavigationStateChange = sharedInstance.onNavigationStateChange;
    const onBackClicked = sharedInstance.onBackClicked;

    // Enabled first state
    expect(onBackClicked()).toBe(true);
    expect(GestureController.invokeDefaultBackButton).toHaveBeenCalledTimes(1);

    GestureController.invokeDefaultBackButton.mockClear();

    // Disabled it
    onNavigationStateChange(
      {},
      {
        index: 0,
        routes: [{ index: 1 }],
      },
    );

    expect(onBackClicked()).toBe(false);
    expect(GestureController.invokeDefaultBackButton).toHaveBeenCalledTimes(0);
  });
});
