/* @flow */

import * as React from 'react';
import { GestureController } from '@kiwicom/mobile-shared';
import { type NavigatorType } from '@kiwicom/mobile-navigation';

type NavigationState = {|
  index: number,
|};

type InjectedProps = {|
  onNavigationStateChange: () => void,
  onBackClicked: () => void,
  onNavigator: (ref: React.ElementRef<*>) => void,
|};

function withNativeNavigation<Props: {}>(
  WrappedComponent: React.ComponentType<Props>,
  moduleName: string,
): React.ComponentType<$Diff<Props, InjectedProps>> {
  return class WithNativeNavigation extends React.Component<*> {
    currentIndex: number;
    navigator: NavigatorType;

    constructor(props) {
      super(props);
      this.currentIndex = 0;
    }

    nestings = function nestings(nav) {
      const nestedNav =
        nav.routes && nav.index !== undefined && nav.routes[nav.index];
      if (!nestedNav) {
        return nav.params && nav.params.isModal;
      }
      return nestings(nestedNav);
    };

    onNavigationStateChange = (
      previousState: NavigationState,
      currentState: NavigationState,
    ) => {
      const nav = this.navigator.state.nav;

      if (this.nestings(nav)) {
        GestureController.disableGestures(moduleName);
      } else if (currentState.index === 0) {
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

    onNavigator = navigator => {
      this.navigator = navigator;
    };

    render() {
      return (
        <WrappedComponent
          onBackClicked={
            GestureController.isNativeGestureModule ? this.onBackClicked : null
          }
          onNavigator={this.onNavigator}
          onNavigationStateChange={this.onNavigationStateChange}
          {...this.props}
        />
      );
    }
  };
}

export default withNativeNavigation;
