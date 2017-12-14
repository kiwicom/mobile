// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Image, Text, View } from 'react-native';
import { SimpleCard, Color, Price } from '@kiwicom/react-native-app-common';

import type { AllHotelsSearchRow as AllHotelsSearchRowProps } from './__generated__/AllHotelsSearchRow.graphql';

type Props = {
  onGoToSingleHotel: () => void,
  data: AllHotelsSearchRowProps,
};

function AllHotelsSearchRow({ onGoToSingleHotel, data }: Props) {
  const price = {
    ...{
      // default null object
      amount: null,
      currency: null,
    },
    ...data.price,
  };

  return (
    <SimpleCard
      separator={false}
      onPress={onGoToSingleHotel}
      additionalStyles={{ marginBottom: 5, flex: 1, flexDirection: 'row' }}
    >
      <View style={{ paddingHorizontal: 10 }}>
        <Image
          style={{ width: 50, height: 75, borderRadius: 2 }}
          resizeMode="cover"
          source={{ uri: data.mainPhoto && data.mainPhoto.thumbnailUrl }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold' }}>{data.name}</Text>
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
      name
      price {
        amount
        currency
      }
      mainPhoto {
        thumbnailUrl
      }
    }
  `,
);
