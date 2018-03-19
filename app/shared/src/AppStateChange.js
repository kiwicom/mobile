// @flow

import * as React from 'react';
import { AppState } from 'react-native';

type Props = {|
  render: () => React.Node,
  states: string[],
  onStateChange: string => void,
|};

export default class AppStateChange extends React.Component<Props> {
  componentDidMount = () => {
    AppState.addEventListener('change', this.handleAppStateChange);
  };

  componentWillUnmount = () => {
    AppState.removeEventListener('change', this.handleAppStateChange);
  };

  handleAppStateChange = (state: string) => {
    if (this.props.states.includes(state)) {
      this.props.onStateChange(state);
    }
  };

  render = () => this.props.render();
}
