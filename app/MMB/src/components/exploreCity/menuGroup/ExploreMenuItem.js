// @flow strict

import * as React from 'react';
import { View, Platform } from 'react-native';
import {
  TextIcon,
  StyleSheet,
  Color,
  Icon,
  Touchable,
} from '@kiwicom/mobile-shared';
import type { TranslationType } from '@kiwicom/mobile-localization';

type Props = {|
  +icon: React.Element<typeof TextIcon>,
  +onPress: () => void,
  +title: TranslationType,
|};

export default function ExploreMenuItem(props: Props) {
  const icon = React.cloneElement(props.icon, {
    style: [props.icon.props.style, styles.icon],
  });
  return (
    <Touchable style={[styles.row, styles.button]} onPress={props.onPress}>
      <React.Fragment>
        <View style={[styles.row, styles.leftContent]}>
          {icon}
          {props.title}
        </View>
        <View style={styles.rightArrow}>
          {Platform.select({
            ios: <Icon name="chevron-right" size={26} color={Color.brand} />,
            android: null,
          })}
        </View>
      </React.Fragment>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  button: {
    padding: 14,
    justifyContent: 'space-between',
  },
  rightArrow: {
    alignSelf: 'flex-end',
  },
  leftContent: {
    alignItems: 'center',
  },
  icon: {
    marginEnd: 16,
    color: Color.textLight,
    fontSize: 18,
  },
});
