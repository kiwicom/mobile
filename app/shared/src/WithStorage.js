// @flow

import * as React from 'react';
import { AsyncStorage } from 'react-native';

type State = {|
  savedValue: any,
|};

export default function withStorage(
  WrappedComponent: React.ElementType,
  storageKey: string,
  initialValue: any,
) {
  return class WithStorage extends React.Component<{}, State> {
    state = {
      savedValue: initialValue,
    };

    // $FlowExpectedError: We need to pass on the navigationOptions if any, flow does not know about it, but a react component might have it
    static navigationOptions = WrappedComponent.navigationOptions;

    componentDidMount = () => {
      this.getStoredValue();
    };

    async getStoredValue() {
      const value = (await AsyncStorage.getItem(storageKey)) || initialValue;
      const parsedValue = JSON.parse(value);
      this.setState({ savedValue: parsedValue });
      return parsedValue;
    }

    async saveValue(value: any) {
      await AsyncStorage.setItem(storageKey, JSON.stringify(value));
    }

    render = () => (
      <WrappedComponent
        {...this.props}
        storageValue={this.state.savedValue}
        saveToStorage={this.saveValue}
      />
    );
  };
}
