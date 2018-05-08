// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Color, StyleSheet } from '@kiwicom/mobile-shared';

import MenuItem from './MenuItem';

type Props = {|
  children: $ReadOnlyArray<React.Element<typeof MenuItem>>,
  withoutIcons: boolean,
|};

/**
 * This component wraps <MenuItem/> and adds group title and visual separators.
 * Example:
 *
 * .------------------------------.
 * |                              |
 * |  ICON  Title 1               |
 * |                              |
 * |        ----------------------|
 * |                              |
 * |  ICON  Title 2               |
 * |                              |
 * `------------------------------`
 *
 * Without icons:
 *
 * .------------------------------.
 * |                              |
 * |  Title 1                     |
 * |                              |
 * |  ----------------------------|
 * |                              |
 * |  Title 2                     |
 * |                              |
 * `------------------------------`
 */
export default function MenuGroup(props: Props) {
  let separator = null;

  return props.children.map((child, index) => {
    const wrappedChild = (
      <React.Fragment key={index}>
        {separator}
        <View>{child}</View>
      </React.Fragment>
    );

    separator = (
      <View
        style={[
          styleSheet.separator,
          props.withoutIcons ? styleSheet.separatorWithoutIcons : null,
        ]}
      />
    );
    return wrappedChild;
  });
}

MenuGroup.defaultProps = {
  withoutIcons: true,
};

const styleSheet = StyleSheet.create({
  separator: {
    height: 1,
    width: 45,
    backgroundColor: Color.white,
  },
  separatorWithoutIcons: {
    width: 15,
  },
});
