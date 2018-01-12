// @flow

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  NativeModules,
  NativeAppEventEmitter,
  Alert,
} from 'react-native';

type State = {
  nativeMessage: string,
};

class NativeModuleApp extends Component<{||}, State> {
  constructor() {
    super();

    this.state = {
      nativeMessage: '',
    };
  }

  componentDidMount = () => {
    NativeAppEventEmitter.addListener('EventReminder', this.eventListener);
  };

  componentWillUnmount = () => {
    NativeAppEventEmitter.removeListener('EventReminder', this.eventListener);
  };

  eventListener = (reminder: string) => {
    Alert.alert('Swift send me this message', reminder);
  };

  onClick = () => {
    NativeModules.MyNativeModuleManager.communicate(
      'One',
      'Two',
      3,
      nativeResponse => {
        this.setState({ nativeMessage: JSON.stringify(nativeResponse) });
      },
    );
  };

  renderNativeMessage = () => {
    const { nativeMessage } = this.state;
    if (nativeMessage) {
      return (
        <Text style={{ color: 'blue' }}>
          Native send this from a callback: {nativeMessage}
        </Text>
      );
    }
    return null;
  };

  render = () => {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
              backgroundColor: 'lightgray',
            }}
          >
            <Text>Native Module Example</Text>
          </View>
        </View>
        <View style={{ flex: 9, paddingTop: 5, justifyContent: 'flex-end' }}>
          <Text>Click to communicate with native code: </Text>
          {this.renderNativeMessage()}
          <TouchableHighlight
            onPress={this.onClick}
            style={{ height: 50, width: '100%', backgroundColor: 'deeppink' }}
          >
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}
            >
              <Text style={{ color: 'cyan' }}>Click me</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  };
}

export default NativeModuleApp;
