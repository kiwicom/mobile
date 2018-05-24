// @flow

import * as React from 'react';
import { View } from 'react-native';
import { SimpleCard, StyleSheet } from '@kiwicom/mobile-shared';

import { SeparatorFullWidth } from '../../../components/Separators';

type Props = {|
  children: React.Node,
|};

/**
 * This component wraps <MenuItem/> and adds group title and visual separators.
 * It is basically a copy of /components/MenuGroup, but it has a margin on both sides of the separator
 * Example:
 *
 * .------------------------------.
 * |                              |
 * |  Title 1                     |
 * |                              |
 * |  --------------------------  |
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

    separator = (
      <View style={styles.separator}>
        <SeparatorFullWidth />
      </View>
    );
    return wrappedChild;
  });

  return <SimpleCard style={styles.card}>{groupChildren}</SimpleCard>;
}

const styles = StyleSheet.create({
  card: {
    padding: 0,
  },
  separator: {
    ios: {
      paddingHorizontal: 15,
    },
  },
});
