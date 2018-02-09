// @flow

import * as React from 'react';
import { Icon } from '@kiwicom/react-native-app-shared';
import { View, Text, StyleSheet } from 'react-native';
import defaultsDeep from 'lodash/defaultsDeep';

import Color from '../Color';
import TouchableItem from '../TouchableItem';

export type Props = {
  title: string,
  onPress?: Function,
  // $FlowFixMeProps
  styles?: {|
    buttonWrapper?: Object,
    button?: Object,
    buttonText?: Object,
    icon?: Object,
  |},
  icon?: Object,
};

export default function Button(props: Props) {
  const styles = createStyles(props.icon);
  const additionalStyles = props.styles || {};

  const buttonView = (
    <View style={[styles.buttonWrapper, additionalStyles.buttonWrapper]}>
      {props.icon && (
        <View style={[styles.icon, additionalStyles.icon]}>
          <Icon {...defaultsDeep(props.icon, defaultIconProps)} />
        </View>
      )}
      <View style={[styles.button, additionalStyles.button]}>
        <Text style={[styles.buttonText, additionalStyles.buttonText]}>
          {props.title}
        </Text>
      </View>
    </View>
  );

  if (props.onPress) {
    return (
      <TouchableItem onPress={props.onPress} activeOpacity={0.6}>
        {buttonView}
      </TouchableItem>
    );
  } else {
    return buttonView;
  }
}

const defaultIconProps = {
  size: 20,
};

function createStyles(iconAvailable) {
  const defaultStyles: Object = {
    buttonWrapper: {
      flexDirection: 'row',
    },
    button: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 2,
      backgroundColor: Color.brand,
    },
    buttonText: {
      fontWeight: 'bold',
      color: '#fff',
      fontSize: 15,
    },
    icon: {
      backgroundColor: Color.brand,
      justifyContent: 'center',
      padding: 5,
      borderTopLeftRadius: 2,
      borderBottomLeftRadius: 2,
    },
  };
  if (iconAvailable) {
    defaultStyles.button.borderTopLeftRadius = 0;
    defaultStyles.button.borderBottomLeftRadius = 0;
  }
  return StyleSheet.create(defaultStyles);
}
