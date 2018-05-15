// @flow

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import StatusBarIcon from './StatusBarIcon';
import type { StatusBar as StatusBarType } from './__generated__/StatusBar.graphql';

type Props = {|
  data: StatusBarType,
|};

function StatusBar(props: Props) {
  const id = idx(props, _ => _.data.databaseId);

  return (
    <View style={styleSheet.row}>
      <StatusBarIcon data={props.data} />
      <Translation passThrough={`#${id || ''}`} />
    </View>
  );
}

export default createFragmentContainer(
  StatusBar,
  graphql`
    fragment StatusBar on Booking {
      ...StatusBarIcon
      databaseId
    }
  `,
);

const styleSheet = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
