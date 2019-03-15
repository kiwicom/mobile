// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { Price, StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import SummaryRow from './SummaryRow';

type Props = {|
  +isExpanded: boolean,
  +currency: string,
  +rooms: $ReadOnlyArray<{|
    +id: string,
    +count: number,
    +title: string,
    +nettoPrice: number,
  |}>,
  +extraCharges: $ReadOnlyArray<{|
    +type: string,
    +name: string,
    +amount: number,
  |}>,
|};

export default function ExtraCharges(props: Props) {
  if (!props.isExpanded) {
    return null;
  }
  return (
    <View style={styles.container}>
      {props.rooms.map(room => {
        const title = room.title;
        return (
          <SummaryRow
            key={room.id}
            text={<Translation passThrough={`${room.count}x ${title}`} />}
            price={<Price amount={room.nettoPrice} currency={props.currency} />}
          />
        );
      })}
      {props.extraCharges.map(charge => {
        return (
          <SummaryRow
            key={charge.type}
            text={<Translation passThrough={charge.name} />}
            price={<Price amount={charge.amount} currency={props.currency} />}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 19,
    paddingBottom: 12,
    borderBottomColor: defaultTokens.paletteCloudLight,
    borderBottomWidth: 1,
  },
});
