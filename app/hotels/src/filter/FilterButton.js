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
  +title: TranslationType,
  +isActive: boolean,
  +onPress: () => void,
  +icon?: React.Element<typeof Icon>,
|};

export default function FilterButton(props: Props) {
  let icon = props.icon;
  const { title, isActive, onPress } = props;

  if (icon) {
    icon = React.cloneElement(icon, {
      color: isActive ? Color.white : Color.brandDark,
    });
  }

  return (
    <Button
      onPress={onPress}
      style={[styleSheet.buttonGroup, isActive && styleSheet.activeButtonGroup]}
    >
      <View style={styleSheet.row}>
        <View style={styleSheet.icon}>{icon}</View>
        <ButtonTitle
          text={title}
          style={[
            styleSheet.buttonText,
            isActive && styleSheet.activeButtonText,
          ]}
        />
      </View>
    </Button>
  );
}

const styleSheet = StyleSheet.create({
  activeButtonGroup: {
    backgroundColor: Color.brand,
  },
  buttonGroup: {
    backgroundColor: '#c4e7e4',
    marginEnd: 5,
  },
  activeButtonText: {
    color: Color.white,
  },
  buttonText: {
    color: Color.brandDark,
  },
  icon: {
    paddingEnd: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
