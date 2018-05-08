// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Color,
  TextIcon,
  StyleSheet,
  Text,
  Touchable,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

type Props = {|
  title: React.Element<typeof Translation>,
  onPress: () => void,
  icon?: React.Element<typeof TextIcon>,
  description?: React.Element<typeof Translation>,
|};

/**
 * With optional description:
 *
 * .------------------------------.
 * |                              |
 * |  IC    Bold Title            |
 * |  ON    Optional description  |
 * |                              |
 * `------------------------------`
 *
 * Without description (icon is optional as well):
 *
 * .------------------------------.
 * |                              |
 * |  ICON  Bold Title            |
 * |                              |
 * `------------------------------`
 */
export default function MenuItem(props: Props) {
  return (
    <Touchable
      onPress={props.onPress}
      style={[
        styleSheet.wrapper,
        props.description ? styleSheet.wrapperWithDescription : null,
      ]}
    >
      <React.Fragment>
        {props.icon && <View style={styleSheet.icon}>{props.icon}</View>}

        <View style={styleSheet.contentRow}>
          <Text style={styleSheet.title}>{props.title}</Text>
          {props.description && (
            <Text style={styleSheet.description}>{props.description}</Text>
          )}
        </View>
      </React.Fragment>
    </Touchable>
  );
}

const styleSheet = StyleSheet.create({
  wrapper: {
    backgroundColor: Color.white,
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  wrapperWithDescription: {
    paddingVertical: 13,
  },
  icon: {
    paddingRight: 15,
    justifyContent: 'center',
  },
  contentRow: {},
  title: {
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: Color.textLight,
  },
});
