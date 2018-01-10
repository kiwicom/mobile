// @flow

import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import brandImage from './bookingLogo.png';

type Props = {||};

const styles = StyleSheet.create({
  brandLabel: {
    height: 71,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class BrandLabel extends React.Component<Props> {
  render = () => {
    return (
      <View style={styles.brandLabel}>
        <Image source={brandImage} />
      </View>
    );
  };
}

export default BrandLabel;
