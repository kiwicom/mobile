// @flow

/* eslint-disable react-native/no-unused-styles */
// We need to deactivate this rule for now, doing this -> const styleSheet = isNew ? newStyles : styles;
// Will confuse the linter, but all styles are being used

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

import HotelsContext from '../HotelsContext';

type PropsWithContext = {|
  ...Props,
  isNew: boolean,
|};

const FilterButton = (props: PropsWithContext) => {
  let icon = props.icon;
  const { title, isActive, onPress, isNew } = props;
  const styleSheet = isNew ? newStyles : styles;
  const iconColor = isNew ? Color.ink.normal : Color.brandDark;
  const iconColorActive = isNew ? Color.inputBackground : Color.white;

  if (icon) {
    icon = React.cloneElement(icon, {
      color: isActive ? iconColorActive : iconColor,
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
};

type Props = {|
  +title: TranslationType,
  +isActive: boolean,
  +onPress: () => void,
  +icon?: React.Element<typeof Icon>,
|};

export default function FilterButtonWithContext(props: Props) {
  return (
    <HotelsContext.Consumer>
      {({ isNew }) => <FilterButton {...props} isNew={isNew} />}
    </HotelsContext.Consumer>
  );
}

const styles = StyleSheet.create({
  activeButtonGroup: {
    backgroundColor: Color.brand,
  },
  buttonGroup: {
    backgroundColor: Color.blue.jaggedIce,
    marginEnd: 5,
    ios: {
      height: 36,
      borderRadius: 2,
    },
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

/**
 * Used for new design
 */
const newStyles = StyleSheet.create({
  activeButtonGroup: {
    backgroundColor: Color.ink.normal,
  },
  buttonGroup: {
    backgroundColor: Color.backgroundBody,
    marginEnd: 5,
    borderColor: Color.inputBackground,
    borderWidth: StyleSheet.hairlineWidth,
    ios: {
      height: 36,
      borderRadius: 2,
    },
  },
  activeButtonText: {
    color: Color.inputBackground,
  },
  buttonText: {
    color: Color.ink.normal,
  },
  icon: {
    paddingEnd: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
