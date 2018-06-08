// @flow

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet, Color, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

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
    case 'CANCELLED':
      return (
        <StatusIcon
          color={Color.red.normal}
          title={<Translation id="mmb.status.cancelled" />}
        />
      );
    case 'CLOSED':
      return (
        <StatusIcon
          color={Color.red.normal}
          title={<Translation id="mmb.status.closed" />}
        />
      );
    case 'CONFIRMED':
      return (
        <StatusIcon
          color={Color.green.normal}
          title={
            <Translation
              id={
                isPastBooking ? 'mmb.status.travelled' : 'mmb.status.confirmed'
              }
            />
          }
        />
      );
    case 'DELETED':
      return (
        <StatusIcon
          color={Color.red.normal}
          title={<Translation id="mmb.status.deleted" />}
        />
      );
    case 'EXPIRED':
      return (
        <StatusIcon
          color={Color.red.normal}
          title={<Translation id="mmb.status.expired" />}
        />
      );
    case 'NEW':
      return (
        <StatusIcon
          color={Color.blue.normal}
          title={<Translation id="mmb.status.new" />}
        />
      );
    case 'PENDING':
      return (
        <StatusIcon
          color={Color.orange.normal}
          title={<Translation id="mmb.status.pending" />}
        />
      );
    case 'REFUNDED':
      return (
        <StatusIcon
          color={Color.black}
          title={<Translation id="mmb.status.refused" />}
        />
      );
    default:
      return (
        <StatusIcon
          color={Color.grey.$500}
          title={<Translation id="mmb.status.unknown" />}
        />
      );
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
