// @flow

import * as React from 'react';
import { TextInput as OriginalTextInput } from 'react-native';

import { textInput as textInputColors } from '../../styles/colors';

export default function TextInput(props: Object) {
  return (
    <OriginalTextInput
      underlineColorAndroid="transparent"
      {...props}
      style={{
        padding: 10,
        backgroundColor: textInputColors.background,
        borderColor: textInputColors.border,
        color: textInputColors.text,
        borderWidth: 1,
        ...props.style,
      }}
    />
  );
}
