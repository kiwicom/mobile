// @flow

import * as React from 'react';
import { ScrollView, RefreshControl } from 'react-native';

import type { StylePropType } from '../types/Styles';

type Props = {|
  refreshing: boolean,
  onRefresh: () => void,
  children: React.Node,
  contentContainerStyle?: StylePropType,
|};

export default function RefreshableScrollView(props: Props) {
  return (
    <ScrollView
      contentContainerStyle={props.contentContainerStyle}
      refreshControl={
        <RefreshControl
          refreshing={props.refreshing}
          onRefresh={props.onRefresh}
        />
      }
    >
      {props.children}
    </ScrollView>
  );
}
