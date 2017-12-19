// @flow

import * as React from 'react';
import idx from 'idx';
import { createFragmentContainer, graphql } from 'react-relay';
import { Text, View } from 'react-native';
import {
  SimpleCard,
  Color,
  Price,
  NetworkImage,
} from '@kiwicom/react-native-app-common';

import type { AllHotelsSearchRow as AllHotelsSearchRowProps } from './__generated__/AllHotelsSearchRow.graphql';

type Props = {
  openSingleHotel: (id: string) => void,
  data: AllHotelsSearchRowProps,
};

class AllHotelsSearchRow extends React.Component<Props> {
  onGoToSingleHotel = () => {
    this.props.openSingleHotel(this.props.data.id);
  };

  render() {
    const { data } = this.props;
    const price = {
      ...{
        // default null object
        amount: null,
        currency: null,
      },
      ...data.price,
    };
    const thumbnailUrl = idx(data, _ => _.mainPhoto.thumbnailUrl);

    return (
      <SimpleCard
        separator={false}
        onPress={this.onGoToSingleHotel}
        additionalStyles={{ marginTop: 5, flex: 1, flexDirection: 'row' }}
      >
        <View style={{ paddingHorizontal: 10 }}>
          <NetworkImage
            style={{ width: 50, height: 75, borderRadius: 2 }}
            resizeMode="cover"
            source={{ uri: thumbnailUrl }}
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
