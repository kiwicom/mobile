// @flow

import * as React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import defaultsDeep from 'lodash/defaultsDeep';

import Color from '../Color';

type Props = {|
  title: string,
  onPress?: Function,
  styles?: {
    button?: Object,
    buttonText?: Object,
    icon?: Object,
  },
  icon?: Object,
|};

export default function Button(props: Props) {
  const buttonView = (
    <View style={defaultStyles.buttonWrapper}>
      {props.icon && (
        <View style={[defaultStyles.icon, props.styles && props.styles.icon]}>
          <MaterialIcons {...defaultsDeep({}, props.icon, defaultIconProps)} />
        </View>
      )}
      <View
        style={[
          defaultStyles.button,
          props.icon && defaultStyles.iconButton,
          props.styles && props.styles.button,
        ]}
      >
        <Text
          style={[
            defaultStyles.buttonText,
            props.styles && props.styles.buttonText,
          ]}
        >
          {props.title}
        </Text>
      </View>
    </View>
  );

  if (props.onPress) {
    return (
      <TouchableOpacity onPress={props.onPress} activeOpacity={0.6}>
        {buttonView}
      </TouchableOpacity>
    );
  } else {
    return buttonView;
  }
}

const defaultIconProps = {
  size: 20,
  color: '#fff',
};

const defaultStyles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 2,
    backgroundColor: Color.brand,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  iconButton: {
    paddingLeft: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  icon: {
    backgroundColor: Color.brand,
    justifyContent: 'center',
    padding: 5,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
});
