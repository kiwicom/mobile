// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Color, StyleSheet, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import MenuItem from './MenuItem';

type Props = {|
  title: React.Element<typeof Translation>,
  children: $ReadOnlyArray<React.Element<typeof MenuItem>>,
|};

/**
 * This component wraps <MenuItem/> and adds group title and visual separators.
 * Example:
 *
 *
 *   Trip Info
 * .------------------------------.
 * |                              |
 * |  ICON                        |
 * |                              |
 * |        ----------------------|
 * |                              |
 * |  ICON                        |
 * |                              |
 * `------------------------------`
 */
export default function MenuGroup(props: Props) {
  let separator = null;

  return (
    <React.Fragment>
      <View style={styleSheet.titleWrapper}>
        <Text style={styleSheet.title}>{props.title}</Text>
      </View>

      {props.children.map((child, index) => {
        const wrappedChild = (
          <React.Fragment key={index}>
            {separator}
            <View>{child}</View>
          </React.Fragment>
        );
        separator = <View style={styleSheet.separator} />;
        return wrappedChild;
      })}
    </React.Fragment>
  );
}

const styleSheet = StyleSheet.create({
  titleWrapper: {
    paddingTop: 22,
    paddingBottom: 11,
    paddingLeft: 15,
  },
  title: {
    color: Color.textLight,
  },
  separator: {
    height: 1,
    width: 45,
    backgroundColor: Color.white,
  },
});
