// @flow

import * as React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

type State = {|
  savedValue: any,
|};

type InjectedProps = {|
  +storageValue: any,
  +saveToStorage: Function,
|};

export default function withStorage<Config: { ... }>(
  WrappedComponent: React.AbstractComponent<Config>,
  storageKey: string,
  initialValue: any,
): React.AbstractComponent<$Diff<Config, InjectedProps>> {
  return class WithStorage extends React.Component<
    $Diff<Config, InjectedProps>,
    State,
  > {
    // $FlowExpectedError: We need to pass on the navigationOptions if any, flow does not know about it, but a react component might have it
    static navigationOptions = WrappedComponent.navigationOptions;

    state = {
      savedValue: initialValue,
    };

    componentDidMount() {
      this.getStoredValue();
    }

    async getStoredValue() {
      const value = await AsyncStorage.getItem(storageKey);
      const parsedValue = value != null ? JSON.parse(value) : initialValue;
      this.setState({ savedValue: parsedValue });
      return parsedValue;
    }

    async saveValue(value: any) {
      await AsyncStorage.setItem(storageKey, JSON.stringify(value));
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          storageValue={this.state.savedValue}
          saveToStorage={this.saveValue}
        />
      );
    }
  };
}
