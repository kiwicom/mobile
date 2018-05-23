// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Button,
  ButtonTitle,
  Color,
  Icon,
  StyleSheet,
} from '@kiwicom/mobile-shared';
import type { TranslationType } from '@kiwicom/mobile-localization';

type Props = {|
  title: TranslationType,
  isActive: boolean,
  onPress: () => void,
  icon?: React.Element<typeof Icon>,
|};

export default function FilterButton(props: Props) {
  let icon = props.icon;
  const { title, isActive, onPress } = props;

  if (icon) {
    icon = React.cloneElement(icon, {
      color: isActive ? Color.white : Color.brandDark,
    });
  }

  const styleSheet = StyleSheet.create({
    buttonGroup: {
      backgroundColor: isActive ? Color.brand : Color.brandLight,
      marginRight: 5,
    },
    buttonText: {
      color: isActive ? Color.white : Color.brandDark,
      fontWeight: '500',
      android: {
        paddingTop: 12,
        paddingBottom: 8,
      },
      ios: {
        paddingTop: 9,
        paddingBottom: 11,
      },
    },
    icon: {
      paddingRight: 5,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

  return (
    <Button onPress={onPress} style={styleSheet.buttonGroup}>
      <View style={styleSheet.row}>
        <View style={styleSheet.icon}>{icon}</View>
        <ButtonTitle text={title} style={styleSheet.buttonText} />
      </View>
    </Button>
  );
}
