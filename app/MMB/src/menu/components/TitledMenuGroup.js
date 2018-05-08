// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Color, StyleSheet, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import MenuItem from './MenuItem';
import MenuGroup from './MenuGroup';

type Props = {|
  title: React.Element<typeof Translation>,
  children: $ReadOnlyArray<React.Element<typeof MenuItem>>,
|};

/**
 * This component wraps <MenuItem/> and adds group title and visual separators.
 * Example:
 *
 *
 *   Trip Info Separator
 * .------------------------------.
 * |                              |
 * |  ICON  Title 1               |
 * |                              |
 * |        ----------------------|
 * |                              |
 * |  ICON  Title 2               |
 * |                              |
 * `------------------------------`
 */
export default function TitledMenuGroup(props: Props) {
  return (
    <React.Fragment>
      <View style={styleSheet.titleWrapper}>
        <Text style={styleSheet.title}>{props.title}</Text>
      </View>

      <MenuGroup withoutIcons={false}>{props.children}</MenuGroup>
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
});
