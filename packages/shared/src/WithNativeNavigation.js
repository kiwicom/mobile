// @flow

import * as React from 'react';
import { GestureController } from '@kiwicom/mobile-shared';

type NavigationState = {|
  +routes: $ReadOnlyArray<{
    +routes?: $ReadOnlyArray<mixed>,
  }>,
|};

type InjectedProps = {|
  onNavigationStateChange: () => void,
  onBackClicked: () => void,
|};

function withNativeNavigation<Props: {}>(
  WrappedComponent: React.ComponentType<Props>,
  moduleName: string,
): React.ComponentType<$Diff<Props, InjectedProps>> {
  return class WithNativeNavigation extends React.Component<*> {
    isEnabled: boolean;
    lastCall: '' | 'disabled' | 'enabled';

    constructor(props) {
      super(props);
      this.isEnabled = true;
      this.lastCall = '';
    }
    onNavigationStateChange = (
      previousState: NavigationState,
      currentState: NavigationState,
    ) => {
      // Native gesture should only be enabled in the very first screen
      // Also, there should not be modal (like first screen + modal)

      const isDisabled =
        currentState.routes.length > 1 ||
        (currentState.routes[0].routes &&
          currentState.routes[0].routes.length > 1);

      if (!isDisabled && this.lastCall !== 'enabled') {
        GestureController.enableGestures(moduleName);
        this.lastCall = 'enabled';
        this.isEnabled = true;
      } else if (this.lastCall !== 'disabled') {
        GestureController.disableGestures(moduleName);
        this.lastCall = 'disabled';
        this.isEnabled = false;
      }
    };

    onBackClicked = () => {
      if (this.isEnabled) {
        GestureController.invokeDefaultBackButton();
        return true;
      }
      return false;
    };

    render() {
      return (
        <WrappedComponent
          onBackClicked={
            GestureController.isNativeGestureModule ? this.onBackClicked : null
          }
          onNavigationStateChange={this.onNavigationStateChange}
          {...this.props}
        />
      );
    }
  };
}

export default withNativeNavigation;
