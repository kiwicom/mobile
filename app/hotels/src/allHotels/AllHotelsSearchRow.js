// @flow

import * as React from 'react';
import idx from 'idx';
import { createFragmentContainer, graphql } from 'react-relay';
import { Image, Text, View } from 'react-native';
import { SimpleCard, Color, Price } from '@kiwicom/react-native-app-common';

import type { AllHotelsSearchRow as AllHotelsSearchRowProps } from './__generated__/AllHotelsSearchRow.graphql';

type Props = {
  onGoToSingleHotel: () => void,
  data: AllHotelsSearchRowProps,
};

function AllHotelsSearchRow(props: Props) {
  const price = {
    ...{
      // default null object
      amount: null,
      currency: null,
    },
    ...idx(props, _ => _.data.price),
  };

  return (
    <SimpleCard
      separator={false}
      onPress={props.onGoToSingleHotel}
      additionalStyles={{ marginBottom: 5, flex: 1, flexDirection: 'row' }}
    >
      <View style={{ paddingHorizontal: 10 }}>
        <Image
          style={{ width: 50, height: 75, borderRadius: 2 }}
          resizeMode="cover"
          source={{
            uri: 'http://aff.bstatic.com/images/hotel/max500/588/58853664.jpg', // TODO (needs GraphQL update)
          }}
        />
      </View>
      <View style={{ flexDirection: 'column' }}>
        <Text style={{ fontWeight: 'bold' }}>TODO (needs GraphQL update)</Text>
        <Text>TODO (needs GraphQL update)</Text>
        <Price
          amount={price.amount}
          currency={price.currency}
          style={{ fontWeight: 'bold', color: Color.brand }}
        />
      </View>
    </SimpleCard>
  );
}

export default createFragmentContainer(
  AllHotelsSearchRow,
  graphql`
    fragment AllHotelsSearchRow on Hotel {
      id
      price {
        amount
        currency
      }
    }
  `,
);
