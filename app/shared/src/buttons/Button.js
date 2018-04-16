// @flow

import * as React from 'react';
import { View } from 'react-native';
import type { TranslationType } from '@kiwicom/mobile-localization';

import Color from '../Color';
import Touchable from '../Touchable';
import StyleSheet from '../PlatformStyleSheet';
import Icon from '../icons/Icon';
import ButtonText from './ButtonText';

type Props = {|
  title: TranslationType,
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
        <ButtonText
          style={[styles.buttonText, additionalStyles.buttonText]}
          text={props.title}
        />
      </View>
    </View>
  );

  if (props.onPress) {
    return <Touchable onPress={props.onPress}>{buttonView}</Touchable>;
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
      paddingLeft: 0,
      paddingRight: 11,
      borderRadius: 2,
      backgroundColor: Color.brand,
    },
    buttonText: {
      fontWeight: '500',
      color: '#fff',
      fontSize: 14,
      android: {
        lineHeight: 14,
      },
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
