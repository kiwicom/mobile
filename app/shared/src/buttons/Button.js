// @flow

import * as React from 'react';
import { View, Text } from 'react-native';

import Color from '../Color';
import TouchableItem from '../TouchableItem';
import StyleSheet from '../PlatformStyleSheet';
import Icon from '../Icon';

type Props = {|
  title: string,
  onPress?: Function,
  styles?: {|
    buttonWrapper?: Object,
    button?: Object,
    buttonText?: Object,
    icon?: Object,
  |},

  // deprecated (will be replaced by ButtonGroup component, see IncrementDecrementButtons implementation)
  icon?: React.Element<typeof Icon>,
|};

export default function Button(props: Props) {
  const styles = createStyles(props.icon);
  const additionalStyles = props.styles || {};

  const buttonView = (
    <View style={[styles.buttonWrapper, additionalStyles.buttonWrapper]}>
      {props.icon && (
        <View style={[styles.icon, additionalStyles.icon]}>{props.icon}</View>
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

function createStyles(iconAvailable) {
  const defaultStyles: Object = {
    buttonWrapper: {
      flexDirection: 'row',
      borderRadius: 2,
      android: {
        height: 40,
      },
      ios: {
        height: 36,
      },
    },
    button: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 11,
      paddingLeft: 0,
      borderRadius: 2,
      backgroundColor: Color.brand,
    },
    buttonText: {
      fontWeight: '500',
      color: '#fff',
      fontSize: 14,
    },
    icon: {
      justifyContent: 'center',
      padding: 5,
      paddingLeft: 7,
      borderTopLeftRadius: 2,
      borderBottomLeftRadius: 2,
      backgroundColor: Color.brand,
    },
  };
  if (iconAvailable) {
    defaultStyles.button.borderTopLeftRadius = 0;
    defaultStyles.button.borderBottomLeftRadius = 0;
  }
  return StyleSheet.create(defaultStyles);
}
