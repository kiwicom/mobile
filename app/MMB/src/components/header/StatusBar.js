// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import ColorStrip from './ColorStrip';
import StatusBarIcon from './StatusBarIcon';
import type { StatusBar as StatusBarType } from './__generated__/StatusBar.graphql';

type Props = {|
  +data: StatusBarType,
|};

function StatusBar(props: Props) {
  const id = props.data?.databaseId ?? '';

  return (
    <View style={styleSheet.row}>
      <ColorStrip />
      <View style={[styleSheet.row, styleSheet.container]}>
        <View style={styleSheet.icon}>
          <StatusBarIcon data={props.data} />
        </View>
        <Text style={styleSheet.bid}>
          <Translation passThrough={`#${id}`} />
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
    backgroundColor: defaultTokens.paletteWhite,
    padding: 10,
    flex: 1,
  },
  icon: {
    flexGrow: 1,
  },
  bid: {
    color: defaultTokens.colorTextSecondary,
  },
});
