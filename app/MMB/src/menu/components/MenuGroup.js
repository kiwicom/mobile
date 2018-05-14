// @flow

import * as React from 'react';
import { View } from 'react-native';
import { SimpleCard } from '@kiwicom/mobile-shared';

import MenuGroupSeparator from './MenuGroupSeparator';

type Props = {|
  children: $ReadOnlyArray<React.Element<any>>,
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

  const groupChildren = props.children.map((child, index) => {
    const wrappedChild = (
      <React.Fragment key={index}>
        {separator}
        <View>{child}</View>
      </React.Fragment>
    );

    separator = <MenuGroupSeparator withoutIcons={props.withoutIcons} />;
    return wrappedChild;
  });

  return <SimpleCard style={{ padding: 0 }}>{groupChildren}</SimpleCard>;
}

MenuGroup.defaultProps = {
  withoutIcons: true,
};
