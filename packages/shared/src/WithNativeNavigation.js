/* @flow */

import * as React from 'react';
import { GestureController } from '@kiwicom/mobile-shared';

type NavigationState = {|
  index: number,
|};

type InjectedProps = {|
  onNavigationStateChange: () => void,
  onBackClicked: () => void,
|};

function withNativeNavigation<Props: {}>(
  WrappedComponent: React.ComponentType<Props>,
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
        GestureController.enableGestures('KiwiHotels');
        this.currentIndex = 0;
      } else if (currentState.index > 0) {
        GestureController.disableGestures('KiwiHotels');
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
          onBackClicked={this.onBackClicked}
          onNavigationStateChange={this.onNavigationStateChange}
          {...this.props}
        />
      );
    }
  };
}

export default withNativeNavigation;
