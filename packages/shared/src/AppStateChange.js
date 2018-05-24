// @flow strict

import * as React from 'react';
import { AppState } from 'react-native';

type AppStateTypes =
  | 'active' // the app is running in the foreground
  | 'background' // the app is running in the background
  // this is a state that occurs when transitioning between
  // foreground & background, and during periods of inactivity such as
  // entering the Multitasking view or in the event of an incoming call
  | 'inactive';

type Props = {|
  children: React.Fragment,
  states: $ReadOnlyArray<AppStateTypes>,
  onStateChange: string => void,
|};

/**
 * This is declarative wrapper around RN `AppState`. It allows you to
 * subscribe to the application state changes and call necessary methods:
 *
 * ```
 * <AppStateChange
 *   states={['active']}
 *   onStateChange={this.validateCheckinDate}
 * >
 *   <View> ... </View>
 * </AppStateChange>
 * ```
 */
export default class AppStateChange extends React.Component<Props> {
  componentDidMount = () => {
    AppState.addEventListener('change', this.handleAppStateChange);
  };

  componentWillUnmount = () => {
    AppState.removeEventListener('change', this.handleAppStateChange);
  };

  handleAppStateChange = (state: AppStateTypes) => {
    if (this.props.states.includes(state)) {
      this.props.onStateChange(state);
    }
  };

  render = () => this.props.children;
}
