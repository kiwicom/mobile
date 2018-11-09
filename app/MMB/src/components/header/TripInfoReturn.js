// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { Text, StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import ColorStrip from './ColorStrip';
import TripCities from './TripCities';
import TripTimes from './TripTimes';
import type { TripInfoReturn as TripInfoReturnType } from './__generated__/TripInfoReturn.graphql';

type Props = {|
  +data: TripInfoReturnType,
|};

function TripInfoReturn({ data }: Props) {
  const outbound = data?.outbound;
  const inbound = data?.inbound;

  return (
    <View style={styleSheet.row}>
      <ColorStrip />
      <View style={styleSheet.content}>
        <TripCities data={outbound} type="RETURN" />

        <Text style={styleSheet.title}>
          <Translation id="mmb.trip_info.return.departure" />
        </Text>
        <TripTimes data={outbound} />

        <Text style={styleSheet.title}>
          <Translation id="mmb.trip_info.return.return" />
        </Text>
        <TripTimes data={inbound} />
      </View>
    </View>
  );
}

export default createFragmentContainer(
  TripInfoReturn,
  graphql`
    fragment TripInfoReturn on BookingReturn {
      outbound {
        ...TripCities
        ...TripTimes
      }
      inbound {
        ...TripTimes
      }
    }
  `,
);

const styleSheet = StyleSheet.create({
  title: {
    color: defaultTokens.colorTextSecondary,
    marginTop: 11,
    marginBottom: 2,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 10,
  },
});
