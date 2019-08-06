// @flow

import * as React from 'react';

import GestureController from './GestureController';

type NavigationState = {|
  +index: number,
  +routes: $ReadOnlyArray<{|
    +index?: number,
  |}>,
|};

type InjectedProps = {|
  onNavigationStateChange: ?(previousState: NavigationState, currentState: NavigationState) => void,
  onBackClicked: ?() => void,
|};

function withNativeNavigation<Props: { ... }>(
  WrappedComponent: React.AbstractComponent<Props>,
  moduleName: string,
): React.AbstractComponent<$Diff<Props, InjectedProps>> {
  return class WithNativeNavigation extends React.Component<Props> {
    isEnabled: boolean;
    lastCall: '' | 'disabled' | 'enabled';

    constructor(props) {
      super(props);
      // First time we open the app, it should be enabled
      this.isEnabled = true;
      this.lastCall = 'enabled';
      GestureController.enableGestures(moduleName);
    }

    onNavigationStateChange = (previousState: NavigationState, currentState: NavigationState) => {
      // Native gesture should only be enabled in the very first screen
      // We also check the nested index in case there is a modal opened
      this.isEnabled = currentState.index === 0 && !currentState.routes[0].index;

      if (this.isEnabled && this.lastCall !== 'enabled') {
        GestureController.enableGestures(moduleName);
        this.lastCall = 'enabled';
        this.isEnabled = true;
      } else if (!this.isEnabled && this.lastCall !== 'disabled') {
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
          onBackClicked={GestureController.isNativeGestureModule ? this.onBackClicked : null}
          onNavigationStateChange={this.onNavigationStateChange}
          {...this.props}
        />
      );
    }
  };
}

export default withNativeNavigation;
