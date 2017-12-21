// @flow

import * as React from 'react';
import idx from 'idx';
import { createFragmentContainer, graphql } from 'react-relay';
import { Text, View, StyleSheet } from 'react-native';
import {
  SimpleCard,
  Color,
  Price,
  NetworkImage,
  Stars,
} from '@kiwicom/react-native-app-common';

import type { AllHotelsSearchRow as AllHotelsSearchRowProps } from './__generated__/AllHotelsSearchRow.graphql';

type Props = {|
  openSingleHotel: (id: string) => void,
  data: AllHotelsSearchRowProps,
|};

const style = StyleSheet.create({
  imageWrapper: {
    paddingHorizontal: 10,
  },
  image: {
    width: 50,
    height: 75,
    borderRadius: 2,
  },
  hotelWrapper: {
    flexGrow: 1,
  },
  hotelTitle: {
    fontWeight: 'bold',
  },
  hotelRating: {
    fontSize: 12,
    color: Color.grey.$600,
  },
  hotelPrice: {
    fontWeight: 'bold',
    color: Color.brand,
  },
});

class AllHotelsSearchRow extends React.Component<Props> {
  onGoToSingleHotel = () => {
    this.props.openSingleHotel(this.props.data.id);
  };

  render = () => {
    const { data } = this.props;
    const price = {
      ...{
        // default null object
        amount: null,
        currency: null,
      },
      ...data.price,
    };
    const thumbnailUrl = idx(data, _ => _.hotel.mainPhoto.thumbnailUrl);
    const hotelName = idx(data, _ => _.hotel.name);

    return (
      <SimpleCard
        separator={false}
        onPress={this.onGoToSingleHotel}
        additionalStyles={{ marginTop: 5, flex: 1, flexDirection: 'row' }}
      >
        <View style={style.imageWrapper}>
          <NetworkImage
            style={style.image}
            resizeMode="cover"
            source={{ uri: thumbnailUrl }}
          />
        </View>
        <View style={style.hotelWrapper}>
          <Text>
            <Text style={style.hotelTitle}>{hotelName}</Text>{' '}
            <Text style={style.hotelRating}>
              <Stars rating={data.rating && data.rating.stars} />
            </Text>
          </Text>
          <Price
            amount={price.amount}
            currency={price.currency}
            style={style.hotelPrice}
          />
        </View>
      </SimpleCard>
    );
  };
}

export default createFragmentContainer(
  AllHotelsSearchRow,
  graphql`
    fragment AllHotelsSearchRow on HotelAvailability {
      id
      price {
        amount
        currency
      }
      hotel {
        name
        mainPhoto {
          thumbnailUrl
        }
        rating {
          stars
        }
      }
    }
  `,
);
