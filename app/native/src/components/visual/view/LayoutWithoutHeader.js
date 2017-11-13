// @flow

import * as React from 'react';
import { StatusBar, Platform } from 'react-native';

import Layout from './Layout';

type Props = {
  children: React.Node,
};

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : StatusBar.currentHeight;

export default function LayoutWithoutHeader({ children }: Props) {
  return <Layout style={{ paddingTop: STATUSBAR_HEIGHT }}>{children}</Layout>;
}
