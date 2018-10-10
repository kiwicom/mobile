// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import idx from 'idx';
import { StyleSheet, Text, Price } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import { withInsuranceContext } from '../InsuranceOverviewSceneContext';

type InsuranceType = 'NONE' | 'TRAVEL_BASIC' | 'TRAVEL_PLUS';

type Change = {|
  +databaseId: ?number,
  +from: ?InsuranceType,
  +to: ?InsuranceType,
|};

type InsurancePrice = {|
  +insuranceType: InsuranceType,
  +price: {|
    +amount: number,
    +currency: string,
  |} | null,
|};

type Props = {|
  +insuranceType: InsuranceType,
  +insurancePrices: InsurancePrice[],
  +changes: Change[],
|};

export function InsuranceRow(props: Props) {
  let translationId = '';
  switch (props.insuranceType) {
    case 'TRAVEL_PLUS': {
      translationId = 'mmb.trip_services.insurance.variant.plus.quantity';
      break;
    }
    case 'TRAVEL_BASIC': {
      translationId = 'mmb.trip_services.insurance.variant.basic.quantity';
      break;
    }
    case 'NONE':
    default: {
      translationId = 'mmb.trip_services.insurance.variant.none.quantity';
      break;
    }
  }

  const { changes, insurancePrices } = props;

  const insuranceQuantity = changes.filter(
    change => change.to === props.insuranceType && change.from !== change.to,
  ).length;

  if (insuranceQuantity === 0) {
    return null;
  }

  let currency = '';
  const amount = changes
    .filter(
      change => change.to === props.insuranceType && change.from !== change.to,
    )
    .map(change => {
      const priceFrom = idx(
        insurancePrices.find(
          insurancePrice => insurancePrice.insuranceType === change.from,
        ),
        _ => _.price,
      );
      const priceTo = idx(
        insurancePrices.find(
          insurancePrice => insurancePrice.insuranceType === change.to,
        ),
        _ => _.price,
      );
      if (priceFrom && priceTo && priceFrom.currency === priceTo.currency) {
        currency = priceFrom.currency;
        return priceTo.amount - priceFrom.amount;
      } else if (priceFrom && priceTo === null) {
        currency = priceFrom.currency;
        return -priceFrom.amount;
      } else if (priceFrom === null && priceTo) {
        currency = priceTo.currency;
        return priceTo.amount;
      }
      return 0;
    })
    .reduce((curr, acc) => curr + acc, 0);

  return (
    <View style={styleSheet.row}>
      <View style={styleSheet.item}>
        <Text style={styleSheet.text}>
          <Translation
            id={translationId}
            values={{ quantity: insuranceQuantity }}
          />
        </Text>
      </View>
      <Price price={{ amount, currency }} style={styleSheet.price} />
    </View>
  );
}

export default withInsuranceContext(state => ({
  changes: state.changes,
  insurancePrices: state.insurancePrices,
}))(InsuranceRow);

const styleSheet = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  item: {
    flexGrow: 1,
  },
  text: {
    color: defaultTokens.colorTextSecondary,
  },
  price: {
    color: defaultTokens.paletteWhite,
  },
});
