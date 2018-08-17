// @flow

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet, Color, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { StatusBarIcon } from './__generated__/StatusBarIcon.graphql';

function StatusIcon({ title, color }) {
  return (
    <View style={styleSheet.row}>
      <View style={[styleSheet.circle, { backgroundColor: color }]} />
      <Text style={{ color }}>
        <Translation passThrough=" " />
        {title}
      </Text>
    </View>
  );
}

function Status({ data }: {| data: StatusBarIcon |}) {
  const code = data.status;
  const isPastBooking = data.isPastBooking;

  switch (code) {
    case 'CLOSED':
      return (
        <StatusIcon
          color={defaultTokens.paletteRedNormal}
          title={<Translation id="mmb.status.closed" />}
        />
      );
    case 'CONFIRMED':
      return (
        <StatusIcon
          color={defaultTokens.paletteGreenNormal}
          title={
            <Translation
              id={
                isPastBooking ? 'mmb.status.travelled' : 'mmb.status.confirmed'
              }
            />
          }
        />
      );
    case 'REFUNDED':
      return (
        <StatusIcon
          color={Color.black} // TODO: Consult designer
          title={<Translation id="mmb.status.refunded" />}
        />
      );
    default:
      return null;
  }
}

export default createFragmentContainer(
  Status,
  graphql`
    fragment StatusBarIcon on BookingInterface {
      status
      isPastBooking
    }
  `,
);

const styleSheet = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
