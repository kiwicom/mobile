// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';

import MenuGroup from './MenuGroup';
import MenuGroupTitle from '../../../components/menu/MenuGroupTitle';

type Props = {|
  title: React.Element<typeof Translation>,
  children: React.Node,
|};

// This is basically a copy of /components/TitledMenuGroup
// But it needs a different type of separator, so it uses ad different MenuGroup to wrap its children
export default function TitledMenuGroup({ title, children }: Props) {
  let newChildren = Array.isArray(children) ? children : [children];

  if (Platform.OS === 'android') {
    // we have to copy every children in order to prepend group title for Android
    newChildren = [<MenuGroupTitle key="android-ftw" title={title} />];
    React.Children.forEach(children, child => newChildren.push(child));
  }

  return (
    <React.Fragment>
      {Platform.OS === 'ios' && <MenuGroupTitle title={title} />}
      <MenuGroup>{newChildren}</MenuGroup>
    </React.Fragment>
  );
}
