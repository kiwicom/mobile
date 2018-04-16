// @flow

import * as React from 'react';
import { View, Image } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';

import brandImage from './bookingLogo.png';

const styles = StyleSheet.create({
  wrapper: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 15,
  },
});

class BrandLabel extends React.Component<{||}> {
  render = () => {
    return (
      <View style={styles.wrapper}>
        <Image style={styles.image} resizeMode="contain" source={brandImage} />
      </View>
    );
  };
}

export default BrandLabel;
