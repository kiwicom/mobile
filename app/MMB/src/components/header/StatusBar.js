// @flow

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet, Text, Color } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import ColorStrip from './ColorStrip';
import StatusBarIcon from './StatusBarIcon';
import type { StatusBar as StatusBarType } from './__generated__/StatusBar.graphql';

type Props = {|
  +data: StatusBarType,
|};

function StatusBar(props: Props) {
  const id = idx(props, _ => _.data.databaseId);

  return (
    <View style={styleSheet.row}>
      <ColorStrip />
      <View style={[styleSheet.row, styleSheet.container]}>
        <View style={styleSheet.icon}>
          <StatusBarIcon data={props.data} />
        </View>
        <Text style={styleSheet.bid}>
          <Translation passThrough={`#${id || ''}`} />
        </Text>
      </View>
    </View>
  );
}

export default createFragmentContainer(
  StatusBar,
  graphql`
    fragment StatusBar on BookingInterface {
      ...StatusBarIcon
      databaseId
    }
  `,
);

const styleSheet = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  container: {
    backgroundColor: Color.white,
    padding: 10,
    flex: 1,
  },
  icon: {
    flexGrow: 1,
  },
  bid: {
    color: Color.textLight,
  },
});
