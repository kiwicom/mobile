// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import { SimpleCard, StyleSheet, Translation } from '@kiwicom/mobile-shared';

import MenuGroup from './MenuGroup';
import MenuGroupTitle from './MenuGroupTitle';

type Props = {|
  +title: React.Element<typeof Translation>,
  +children: React.Node,
  +customSeparator?: React.Node,
|};

/**
 * This component wraps <MenuItem/> and adds group title and visual separators.
 * Example:
 *
 *
 *   iOS Title
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
 *
 * .------------------------------.
 * |  Android Title               |
 * |------------------------------|
 * |                              |
 * |  ICON  Title 1               |
 * |                              |
 * |------------------------------|
 * |                              |
 * |  ICON  Title 2               |
 * |                              |
 * `------------------------------`
 */
export default function TitledMenuGroup(props: Props) {
  const { title, children, customSeparator } = props;
  let newChildren = Array.isArray(children) ? children : [children];

  if (Platform.OS === 'android') {
    // we have to copy every children in order to prepend group title for Android
    newChildren = [<MenuGroupTitle key="android-ftw" title={title} />];
    React.Children.forEach(children, child => newChildren.push(child));
  }

  return (
    <React.Fragment>
      {Platform.OS === 'ios' && <MenuGroupTitle title={title} />}
      <SimpleCard style={styles.card}>
        <MenuGroup customSeparator={customSeparator}>{newChildren}</MenuGroup>
      </SimpleCard>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 0,
    android: {
      marginTop: 11,
    },
  },
});
