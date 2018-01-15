// @flow

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import SampleView from './SampleView/SampleView';

class NativeModuleApp extends Component<{||}> {
  render = () => {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 90,
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
            <Text>Native UI View Example</Text>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <View>
            <Text>This is react native </Text>
            <Text>But behold, below renders pure native view</Text>
          </View>
          <SampleView text="Wow, this lable is in native code" />
        </View>
      </View>
    );
  };
}

export default NativeModuleApp;
