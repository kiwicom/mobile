// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color, Text, Price } from '@kiwicom/mobile-shared';
import { SeparatorFullWidth } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';

import { withInsuranceContext } from '../InsuranceOverviewSceneContext';
import InsuranceRow from './InsuranceRow';

type Props = {|
  +amount: number,
  +currency: string,
|};

function OrderSummary(props: Props) {
  return (
    <View style={styleSheet.wrapper}>
      <InsuranceRow insuranceType="TRAVEL_PLUS" />
      <InsuranceRow insuranceType="TRAVEL_BASIC" />
      <InsuranceRow insuranceType="NONE" />

      <SeparatorFullWidth color={Color.textLight} />

      <View style={styleSheet.row}>
        <View style={styleSheet.item}>
          <Text style={styleSheet.text}>
            <Translation id="mmb.trip_services.order.total" />
          </Text>
        </View>
        <Price
          amount={props.amount}
          currency={props.currency}
          style={styleSheet.price}
        />
      </View>
    </View>
  );
}

export default withInsuranceContext(state => ({
  amount: state.amount,
  currency: state.currency,
}))(OrderSummary);

const styleSheet = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: Color.ink.normal,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  item: {
    flexGrow: 1,
  },
  text: {
    color: Color.textLight,
  },
  price: {
    color: Color.white,
  },
});
