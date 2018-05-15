// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { SimpleCard } from '@kiwicom/mobile-shared';

import { SeparatorFullWidth, SeparatorTrimmed } from '../Separators';

type Props = {|
  children: React.Node,
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
  const children = Array.isArray(props.children)
    ? props.children
    : [props.children];

  const groupChildren = children.map((child, index) => {
    const wrappedChild = (
      <React.Fragment key={index}>
        {separator}
        <View>{child}</View>
      </React.Fragment>
    );

    separator = Platform.select({
      android: <SeparatorFullWidth />,
      ios: <SeparatorTrimmed gapSize={props.withoutIcons ? 15 : 45} />,
    });
    return wrappedChild;
  });

  return <SimpleCard style={{ padding: 0 }}>{groupChildren}</SimpleCard>;
}

MenuGroup.defaultProps = {
  withoutIcons: true,
};
