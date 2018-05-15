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
      <Text style={{ color }}>{title}</Text>
    </View>
  );
}

function Status({ data }: {| data: StatusBarIcon |}) {
  const code = data.status;

  switch (code) {
    case 'CANCELLED':
      return (
        <StatusIcon
          color={Color.red.$500}
          title={<Translation passThrough={code} />} // FIXME: translation
        />
      );
    case 'CLOSED':
      return (
        <StatusIcon
          color={Color.red.$500}
          title={<Translation passThrough={code} />} // FIXME: translation
        />
      );
    case 'CONFIRMED':
      return (
        <StatusIcon
          color={Color.green.$500}
          title={<Translation passThrough={code} />} // FIXME: translation
        />
      );
    case 'DELETED':
      return (
        <StatusIcon
          color={Color.red.$500}
          title={<Translation passThrough={code} />} // FIXME: translation
        />
      );
    case 'EXPIRED':
      return (
        <StatusIcon
          color={Color.red.$500}
          title={<Translation passThrough={code} />} // FIXME: translation
        />
      );
    case 'NEW':
      return (
        <StatusIcon
          color={Color.blue.$500}
          title={<Translation passThrough={code} />} // FIXME: translation
        />
      );
    case 'PENDING':
      return (
        <StatusIcon
          color={Color.orange.$500}
          title={<Translation passThrough={code} />} // FIXME: translation
        />
      );
    case 'REFUNDED':
      return (
        <StatusIcon
          color={Color.black}
          title={<Translation passThrough={code} />} // FIXME: translation
        />
      );
    default:
      return (
        <StatusIcon
          color={Color.grey.$500}
          title={<Translation passThrough={'Unknown'} />} // FIXME: translation
        />
      );
  }
}

export default createFragmentContainer(
  Status,
  graphql`
    fragment StatusBarIcon on Booking {
      status
    }
  `,
);

const styleSheet = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
