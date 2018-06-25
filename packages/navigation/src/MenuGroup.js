// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';

import { SeparatorFullWidth, SeparatorTrimmed } from './Separators';

type Props = {|
  +children: React.Node,
  +customSeparator?: React.Node,
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
  const children = Array.isArray(props.children)
    ? props.children
    : [props.children];

  return children.map((child, index) => {
    const wrappedChild = (
      <React.Fragment key={index}>
        {separator}
        <View>{child}</View>
      </React.Fragment>
    );

    separator =
      props.customSeparator ||
      Platform.select({
        android: <SeparatorFullWidth />,
        ios: <SeparatorTrimmed gapSizeStart={45} />,
      });
    return wrappedChild;
  });
}
