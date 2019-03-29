// @flow

import * as React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

type State = {|
  savedValue: any,
|};

export default function withStorage(
  WrappedComponent: React.ElementType,
  storageKey: string,
  initialValue: any,
) {
  return class WithStorage extends React.Component<{}, State> {
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
