/* @flow */

import * as React from 'react';
import { GestureController } from '@kiwicom/mobile-shared';

type NavigationState = {|
  index: number,
|};

type InjectedProps = {|
  onNavigationStateChange: () => void,
  onBackClicked?: () => void,
|};

function withNativeNavigation<Props: {}>(
  WrappedComponent: React.ComponentType<Props>,
  moduleName: string,
): React.ComponentType<$Diff<Props, InjectedProps>> {
  return class WithNativeNavigation extends React.Component<*> {
    currentIndex: number;

    constructor(props) {
      super(props);
      this.currentIndex = 0;
    }
    onNavigationStateChange = (
      previousState: NavigationState,
      currentState: NavigationState,
    ) => {
      if (currentState.index === 0) {
        GestureController.enableGestures(moduleName);
        this.currentIndex = 0;
      } else if (currentState.index > 0) {
        GestureController.disableGestures(moduleName);
        this.currentIndex = currentState.index;
      }
    };

    onBackClicked = () => {
      if (this.currentIndex === 0) {
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
