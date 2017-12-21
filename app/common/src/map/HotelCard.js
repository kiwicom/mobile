// @flow

import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Color from './../Color';

type Props = {|
  width: number,
  hotel: {|
    name: string,
  |},
|};

const styles = StyleSheet.create({
  description: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  hotelName: {
    fontSize: 18,
  },
  metainfo: {
    color: Color.grey._700,
    opacity: 0.8,
  },
  price: {
    color: Color.brand,
    fontWeight: 'bold',
  },
});

const HotelCard = ({ width, hotel }: Props) => (
  <View style={[{ width }]}>
    <View style={styles.description}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: 'http://q.bstatic.com/images/hotel/square128/117/11753593.jpg',
          }}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text style={styles.hotelName}>{hotel.name}</Text>
        <Text style={styles.metainfo}>8.7 Very Good · 250 reviews</Text>
        <Text style={styles.price}>29 850 CZK</Text>
      </View>
    </View>
  </View>
);

export default HotelCard;
