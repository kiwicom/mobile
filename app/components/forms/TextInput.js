// @flow

import * as React from 'react';
import { TextInput as OriginalTextInput, View } from 'react-native';

export const colours = {
  text: 'black',
  background: 'transparent',
};

export default function TextInput(props: Object) {
  return (
    <View
      style={{
        height: 40,
        backgroundColor: '#ededed',
        padding: 10,
        marginBottom: 5,
      }}
    >
      <OriginalTextInput
        underlineColorAndroid="transparent"
        {...props}
        style={{
          flex: 1,
          color: colours.text,
          backgroundColor: colours.background,
          fontSize: 15,
        }}
      />
    </View>
  );
}
